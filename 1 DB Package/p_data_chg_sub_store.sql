CREATE OR REPLACE PACKAGE data_chg_sub_store -- Rel 9.8 11/07/2024 MZuskin
AS
  -- SUBSCRIPTION:
  PROCEDURE get_data_chg_sub_list (o_cur1 OUT SYS_REFCURSOR);
  PROCEDURE get_data_chg_sub (i_sub_id IN data_chg_subs.data_chg_sub_id%TYPE, o_cur1 OUT SYS_REFCURSOR);
  PROCEDURE get_data_chg_sub_details (i_sub_id IN  data_chg_subs.data_chg_sub_id%TYPE,
                                      o_cur1   OUT SYS_REFCURSOR,
                                      o_cur2   OUT SYS_REFCURSOR,
                                      o_cur3   OUT SYS_REFCURSOR);
  PROCEDURE get_data_chg_sub_svc_acct_list (o_cur1 OUT SYS_REFCURSOR);
  PROCEDURE save_data_chg_sub (i_data_chg_sub_id   IN  data_chg_subs.data_chg_sub_id%TYPE,
                               i_data_chg_sub_name IN  data_chg_subs.data_chg_sub_name%TYPE,
                               i_data_chg_sub_desc IN  data_chg_subs.data_chg_sub_desc%TYPE,
                               i_user_id           IN  data_chg_subs.user_id%TYPE,
                               i_who_user_id       IN  NUMBER,
                               i_active_flg        IN  data_chg_subs.active_flg%TYPE,
                               o_cur1              OUT SYS_REFCURSOR);
  -- SUBSCRIPTION TABLE:
  PROCEDURE get_data_chg_sub_tbl_list (i_sub_id IN data_chg_sub_tables.data_chg_sub_id%TYPE, o_cur1 OUT SYS_REFCURSOR);
  PROCEDURE get_data_chg_sub_tbl (i_tbl_id IN data_chg_sub_tables.data_chg_sub_table_id%TYPE, o_cur1 OUT SYS_REFCURSOR);
  PROCEDURE save_data_chg_sub_tbl (i_tbl_id            IN  data_chg_sub_tables.data_chg_sub_table_id%TYPE,
                                   i_sub_id            IN  data_chg_sub_tables.data_chg_sub_id%TYPE,
                                   i_tbl_name          IN  data_chg_sub_tables.table_name%TYPE,
                                   i_api_property_name IN  data_chg_sub_tables.api_property_name%TYPE,
                                   i_user_id           IN  net_user.user_id%TYPE,
                                   o_cur1              OUT SYS_REFCURSOR);
  PROCEDURE delete_data_chg_sub_tbl (i_tbl_id IN data_chg_sub_tables.data_chg_sub_table_id%TYPE, i_user_id IN net_user.user_id%TYPE);
  -- SUBSCRIPTION COLUMN:
  PROCEDURE get_data_chg_sub_col_list (i_tbl_id IN data_chg_sub_cols.data_chg_sub_table_id%TYPE, o_cur1 OUT SYS_REFCURSOR);
  PROCEDURE get_data_chg_sub_col (i_tbl_id   IN  data_chg_sub_cols.data_chg_sub_table_id%TYPE,
                                  i_col_name IN  data_chg_sub_cols.column_name%TYPE,
                                  o_cur1     OUT SYS_REFCURSOR);
  PROCEDURE save_data_chg_sub_cols (i_tbl_id IN data_chg_sub_cols.data_chg_sub_table_id%TYPE, i_data_json IN VARCHAR2, i_user_id IN NUMBER, o_cur1 OUT SYS_REFCURSOR);
  PROCEDURE delete_data_chg_sub_cols (i_tbl_id IN data_chg_sub_cols.data_chg_sub_table_id%TYPE, i_col_names_csv IN VARCHAR2, i_user_id IN NUMBER, o_cur1 OUT SYS_REFCURSOR);
END data_chg_sub_store;
/
