CREATE OR REPLACE PACKAGE BODY data_chg_sub_store -- Rel 9.8 11/07/2024 MZuskin
AS
  -- SUBSCRIPTION:
  
  PROCEDURE get_data_chg_sub_list (o_cur1 OUT SYS_REFCURSOR) AS
  BEGIN
    OPEN o_cur1 FOR
      SELECT s.data_chg_sub_id,
             s.data_chg_sub_name,
             s.data_chg_sub_desc,
             s.user_id,
             u.username,
             u.firstname ||' '|| u.lastname AS user_full_name,
             s.who,
             s.wen,
             s.active_flg
        FROM data_chg_subs s
        LEFT JOIN net_user u
          ON u.user_id = s.user_id
       ORDER BY s.data_chg_sub_name;
  END get_data_chg_sub_list;

  PROCEDURE get_data_chg_sub (i_sub_id IN data_chg_subs.data_chg_sub_id%TYPE, o_cur1 OUT SYS_REFCURSOR) AS
  BEGIN
    OPEN o_cur1 FOR
      SELECT s.data_chg_sub_id,
             s.data_chg_sub_name,
             s.data_chg_sub_desc,
             s.user_id,
             u.username,
             u.firstname ||' '|| u.lastname AS user_full_name,
             s.who,
             s.wen,
             s.active_flg
        FROM data_chg_subs s
        LEFT JOIN net_user u
          ON u.user_id = s.user_id
       WHERE s.data_chg_sub_id = i_sub_id;
  END get_data_chg_sub;
  
  PROCEDURE get_data_chg_sub_details (i_sub_id IN  data_chg_subs.data_chg_sub_id%TYPE,
                                      o_cur1   OUT SYS_REFCURSOR,
                                      o_cur2   OUT SYS_REFCURSOR,
                                      o_cur3   OUT SYS_REFCURSOR) AS
  BEGIN
    OPEN o_cur1 FOR
      SELECT s.data_chg_sub_id,
             s.data_chg_sub_name,
             s.data_chg_sub_desc,
             s.user_id,
             s.active_flg
        FROM data_chg_subs s
       WHERE s.data_chg_sub_id = i_sub_id;
    
    OPEN o_cur2 FOR
      SELECT t.data_chg_sub_table_id,
             t.data_chg_sub_id,
             t.table_name,
             t.api_property_name
        FROM data_chg_sub_tables t
       WHERE t.data_chg_sub_id = i_sub_id
       ORDER BY t.data_chg_sub_table_id;

    OPEN o_cur3 FOR
      SELECT c.data_chg_sub_table_id,
             c.column_name,
             c.api_property_name,
             c.monitor_change_flag
        FROM data_chg_sub_cols c
        JOIN data_chg_sub_tables t
          ON t.data_chg_sub_table_id = c.data_chg_sub_table_id
       WHERE t.data_chg_sub_id = i_sub_id
       ORDER BY c.data_chg_sub_table_id, c.column_name;
  END get_data_chg_sub_details;
  
  PROCEDURE get_data_chg_sub_svc_acct_list (o_cur1 OUT SYS_REFCURSOR) AS
  BEGIN
    OPEN o_cur1 FOR
      SELECT user_id,
             username,
             firstname,
             lastname
        FROM net_user
       WHERE NVL(is_service_account, 'N') = 'Y';
  END get_data_chg_sub_svc_acct_list;

  PROCEDURE save_data_chg_sub (i_data_chg_sub_id   IN  data_chg_subs.data_chg_sub_id%TYPE,
                               i_data_chg_sub_name IN  data_chg_subs.data_chg_sub_name%TYPE,
                               i_data_chg_sub_desc IN  data_chg_subs.data_chg_sub_desc%TYPE,
                               i_user_id           IN  data_chg_subs.user_id%TYPE,
                               i_who_user_id       IN  NUMBER,
                               i_active_flg        IN  data_chg_subs.active_flg%TYPE,
                               o_cur1              OUT SYS_REFCURSOR)
  AS
    v_exists          NUMBER;
    v_active_flg      data_chg_subs.active_flg%TYPE;
    v_data_chg_sub_id data_chg_subs.data_chg_sub_id%TYPE;
    
    CURSOR cur_data_chg_subs(p_data_chg_sub_id data_chg_subs.data_chg_sub_id%TYPE)
    IS
    SELECT COUNT(1), active_flg
      FROM data_chg_subs
     WHERE data_chg_sub_id = p_data_chg_sub_id
     GROUP BY active_flg;
    
    CURSOR cur_data_chg_sub_tables(p_data_chg_sub_id data_chg_subs.data_chg_sub_id%TYPE)
    IS
    SELECT t.table_name
      FROM data_chg_subs s
      JOIN data_chg_sub_tables t
        ON t.data_chg_sub_id = s.data_chg_sub_id
      JOIN data_chg_sub_cols c
        ON c.data_chg_sub_table_id = t.data_chg_sub_table_id
       AND NVL(c.monitor_change_flag, 'N') = 'Y'
     WHERE s.data_chg_sub_id = p_data_chg_sub_id;
    
  BEGIN
    iasw_helper.set_user_by_id(i_who_user_id);

    v_data_chg_sub_id := i_data_chg_sub_id;

    OPEN cur_data_chg_subs(v_data_chg_sub_id);
    FETCH cur_data_chg_subs INTO v_exists, v_active_flg;
    CLOSE cur_data_chg_subs;
    
    v_exists := NVL(v_exists, 0);

    IF v_exists > 0 THEN
      UPDATE data_chg_subs
         SET data_chg_sub_desc = i_data_chg_sub_desc,
             user_id = i_user_id,
             active_flg = i_active_flg
       WHERE data_chg_sub_id = v_data_chg_sub_id;

      IF NVL(v_active_flg, 'N') != NVL(i_active_flg, 'N') THEN
        FOR c_data_chg_sub_table IN cur_data_chg_sub_tables(v_data_chg_sub_id) LOOP
          IF NVL(i_active_flg, 'N') = 'Y' THEN
            event_model.em_data_chg_monitor_save(c_data_chg_sub_table.table_name, 'Y', 'Y', 'Y');
          ELSE
            event_model.em_data_chg_monitor_delete(c_data_chg_sub_table.table_name);
          END IF;
        END LOOP;
      END IF;
    ELSE
      v_data_chg_sub_id := data_chg_sub_seq.nextval;

      INSERT INTO data_chg_subs(
             data_chg_sub_id,
             data_chg_sub_name,
             data_chg_sub_desc,
             user_id,
             active_flg)
      VALUES(v_data_chg_sub_id,
             i_data_chg_sub_name,
             i_data_chg_sub_desc,
             i_user_id,
             i_active_flg);
    END IF;

    get_data_chg_sub(v_data_chg_sub_id, o_cur1);
  END save_data_chg_sub;
  
  -- SUBSCRIPTION TABLE:
  
  PROCEDURE get_data_chg_sub_tbl_list (i_sub_id IN data_chg_sub_tables.data_chg_sub_id%TYPE, o_cur1 OUT SYS_REFCURSOR) AS
  BEGIN
    OPEN o_cur1 FOR
      SELECT data_chg_sub_table_id,
             data_chg_sub_id,
             table_name,
             api_property_name,
             who,
             wen,
             (SELECT COUNT(*) FROM data_chg_sub_cols c WHERE c.data_chg_sub_table_id = t.data_chg_sub_table_id) AS cols_count
        FROM data_chg_sub_tables t
       WHERE data_chg_sub_id = i_sub_id
       ORDER BY table_name;
  END get_data_chg_sub_tbl_list;
  
  PROCEDURE get_data_chg_sub_tbl (i_tbl_id IN data_chg_sub_tables.data_chg_sub_table_id%TYPE, o_cur1 OUT SYS_REFCURSOR) AS
  BEGIN
    OPEN o_cur1 FOR
      SELECT data_chg_sub_table_id,
             data_chg_sub_id,
             table_name,
             api_property_name,
             who,
             wen
        FROM data_chg_sub_tables t
       WHERE data_chg_sub_table_id = i_tbl_id;
  END get_data_chg_sub_tbl;
  
  PROCEDURE save_data_chg_sub_tbl (i_tbl_id            IN  data_chg_sub_tables.data_chg_sub_table_id%TYPE,
                                   i_sub_id            IN  data_chg_sub_tables.data_chg_sub_id%TYPE,
                                   i_tbl_name          IN  data_chg_sub_tables.table_name%TYPE,
                                   i_api_property_name IN  data_chg_sub_tables.api_property_name%TYPE,
                                   i_user_id           IN  net_user.user_id%TYPE,
                                   o_cur1              OUT SYS_REFCURSOR)
  AS
    v_exists CHAR(1) := 'N';
    v_tbl_id data_chg_sub_tables.data_chg_sub_table_id%TYPE;
  BEGIN
    iasw_helper.set_user_by_id(i_user_id);
    
    IF i_tbl_id > 0 THEN
       SELECT CASE WHEN EXISTS (SELECT 'x' FROM data_chg_sub_tables WHERE data_chg_sub_table_id = i_tbl_id) THEN 'Y' ELSE 'N' END INTO v_exists FROM dual;
    END IF;
    
    IF v_exists = 'Y' THEN
      UPDATE data_chg_sub_tables
         SET table_name        = i_tbl_name,
             api_property_name = i_api_property_name
       WHERE data_chg_sub_table_id = i_tbl_id;
      v_tbl_id := i_tbl_id;
    ELSE
      INSERT INTO data_chg_sub_tables (
        data_chg_sub_id,
        table_name,
        api_property_name
      ) VALUES (
        i_sub_id,
        i_tbl_name,
        i_api_property_name
      )
      RETURNING data_chg_sub_table_id INTO v_tbl_id;
    END IF;
    get_data_chg_sub_tbl(v_tbl_id, o_cur1);
  END save_data_chg_sub_tbl;
  
  PROCEDURE delete_data_chg_sub_tbl (i_tbl_id IN data_chg_sub_tables.data_chg_sub_table_id%TYPE, i_user_id IN net_user.user_id%TYPE) AS
    v_table_name data_chg_sub_tables.table_name%TYPE;
  BEGIN
    iasw_helper.set_user_by_id(i_user_id);
    DELETE data_chg_sub_tables WHERE data_chg_sub_table_id = i_tbl_id RETURNING table_name INTO v_table_name;
    IF SQL%ROWCOUNT = 0 THEN
      raise_application_error(-20001, message_store.get_localized_message('RECORD_NOT_DELETED', NULL, NULL, gvar.userlocale,
                                                                          'TABLE_NAME', 'DATA_CHG_SUB_TABLES'));
    END IF;
    event_model.em_data_chg_monitor_delete(v_table_name);
  END delete_data_chg_sub_tbl;
  
  -- SUBSCRIPTION COLUMN:
  
  PROCEDURE get_data_chg_sub_col_list (i_tbl_id IN data_chg_sub_cols.data_chg_sub_table_id%TYPE, o_cur1 OUT SYS_REFCURSOR) AS
  BEGIN
    OPEN o_cur1 FOR
      SELECT data_chg_sub_table_id,
             column_name,
             api_property_name,
             monitor_change_flag,
             who,
             wen
        FROM data_chg_sub_cols
       WHERE data_chg_sub_table_id = i_tbl_id
       ORDER BY column_name;
  END get_data_chg_sub_col_list;
  
  PROCEDURE get_data_chg_sub_col (i_tbl_id   IN  data_chg_sub_cols.data_chg_sub_table_id%TYPE,
                                  i_col_name IN  data_chg_sub_cols.column_name%TYPE,
                                  o_cur1     OUT SYS_REFCURSOR)
  AS
  BEGIN
    OPEN o_cur1 FOR
      SELECT data_chg_sub_table_id,
             column_name,
             api_property_name,
             monitor_change_flag,
             who,
             wen
        FROM data_chg_sub_cols
       WHERE data_chg_sub_table_id = i_tbl_id
         AND column_name = i_col_name
       ORDER BY column_name;
  END get_data_chg_sub_col;
  
  PROCEDURE save_data_chg_sub_cols (i_tbl_id IN data_chg_sub_cols.data_chg_sub_table_id%TYPE, i_data_json IN VARCHAR2, i_user_id IN NUMBER, o_cur1 OUT SYS_REFCURSOR)
  AS
    v_monitored_col_exists CHAR(1);
    v_table_name           data_chg_sub_tables.table_name%TYPE;
    
    CURSOR cur IS
      SELECT col_name                                                     AS col_name,
             api_property_name                                            AS api_property_name,
             CASE WHEN monitor_change_flag = 'true' THEN 'Y' ELSE 'N' END AS monitor_change_flag
        FROM JSON_TABLE(i_data_json, '$[*]' COLUMNS (col_name            PATH '$.ColName',
                                                     api_property_name   PATH '$.ApiPropertyName',
                                                     monitor_change_flag PATH '$.MonitorChangeFlag'));
  BEGIN
    iasw_helper.set_user_by_id(i_user_id);

    FOR rec IN cur LOOP
      MERGE INTO data_chg_sub_cols db_table
      USING (SELECT rec.col_name            AS col_name,
                    rec.api_property_name   AS api_property_name,
                    rec.monitor_change_flag AS monitor_change_flag
             FROM dual) new_data
      ON (db_table.data_chg_sub_table_id = i_tbl_id AND db_table.column_name = new_data.col_name)
      WHEN MATCHED THEN
        UPDATE SET db_table.api_property_name   = new_data.api_property_name,
                   db_table.monitor_change_flag = new_data.monitor_change_flag
      WHEN NOT MATCHED THEN
        INSERT (data_chg_sub_table_id, column_name, api_property_name, monitor_change_flag)
        VALUES (i_tbl_id, new_data.col_name, new_data.api_property_name, new_data.monitor_change_flag);
    END LOOP;
    
    SELECT table_name INTO v_table_name FROM data_chg_sub_tables WHERE data_chg_sub_table_id = i_tbl_id;
    
    SELECT CASE WHEN EXISTS (SELECT 'x' FROM data_chg_sub_cols WHERE data_chg_sub_table_id = i_tbl_id AND monitor_change_flag = 'Y') THEN 'Y' ELSE 'N' END
      INTO v_monitored_col_exists
      FROM dual;
    
    IF v_monitored_col_exists = 'Y' THEN
      event_model.em_data_chg_monitor_save(v_table_name, 'Y', 'Y', 'Y');
    ELSE
      event_model.em_data_chg_monitor_delete(v_table_name);
    END IF;
    
    get_data_chg_sub_col_list(i_tbl_id, o_cur1);
  EXCEPTION
    WHEN OTHERS THEN
      IF cur%ISOPEN THEN CLOSE cur; END IF;
      RAISE;
  END save_data_chg_sub_cols;

  PROCEDURE delete_data_chg_sub_cols (i_tbl_id IN data_chg_sub_cols.data_chg_sub_table_id%TYPE, i_col_names_csv IN VARCHAR2, i_user_id IN NUMBER, o_cur1 OUT SYS_REFCURSOR) AS
    v_table_name data_chg_sub_tables.table_name%TYPE;
  BEGIN
    iasw_helper.set_user_by_id(i_user_id);
    
    DELETE FROM data_chg_sub_cols
     WHERE data_chg_sub_table_id = i_tbl_id
       AND INSTR(',' || i_col_names_csv || ',', ',' || column_name || ',') > 0;
    
    IF SQL%ROWCOUNT = 0 THEN
      raise_application_error(-20001, message_store.get_localized_message('RECORD_NOT_DELETED', NULL, NULL, gvar.userlocale, 'TABLE_NAME', 'DATA_CHG_SUB_COLS'));
    END IF;
    
    SELECT table_name INTO v_table_name FROM data_chg_sub_tables WHERE data_chg_sub_table_id = i_tbl_id;
    event_model.em_data_chg_monitor_delete(v_table_name);
    
    get_data_chg_sub_col_list(i_tbl_id, o_cur1);
  END delete_data_chg_sub_cols;
END data_chg_sub_store;
/
