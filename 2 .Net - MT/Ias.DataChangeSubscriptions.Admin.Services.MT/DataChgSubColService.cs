using System;
using System.Collections.Generic;
using System.Data;
using System.ServiceModel;
using Tyler.Argon.Data;
using Tyler.Ias.Argon.Data;
using Tyler.Ias.DataChangeSubscriptions.Admin.Domain;
using Tyler.Ias.DataChangeSubscriptions.Admin.Services.Contracts;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.Services.MT
{
    [ServiceBehavior(InstanceContextMode = InstanceContextMode.PerCall)]
    public class DataChgSubColService : IDataChgSubColService
    {
        private readonly IArgonDbProviderFactory _providerFactory = new ArgonDbProviderFactory();

        public DataChgSubColDto[] GetDataChgSubColList(int tblId)
        {
            var proc = "data_chg_sub_store.get_data_chg_sub_col_list";
            var procParams = new List<DbCommandParameter>();
            var ret = new List<DataChgSubColDto>();

            procParams.Add(new DbCommandParameter("i_tbl_id", DbCommandParameterType.Number, tblId, ParameterDirection.Input));
            procParams.Add(new DbCommandParameter("o_cur1", DbCommandParameterType.RefCursor, ParameterDirection.Output));

            using (var reader = _providerFactory.GetIasDbProvider().ExecuteProcReturnReader(proc, procParams))
            {
                while (reader.Read())
                {
                    var tbl = new DataChgSubColDto
                    {
                        DataChgSubTblId = reader.GetInt32("data_chg_sub_table_id").Value,
                        ColName = reader.GetString("column_name"),
                        ApiPropertyName = reader.GetString("api_property_name"),
                        MonitorChangeFlag = (reader.GetString("monitor_change_flag") == "Y"),
                        Who = reader.GetString("who"),
                        Wen = reader.GetDateTime("wen").Value
                    };

                    ret.Add(tbl);
                }
            }

            return ret.ToArray();
        }

        public DataChgSubColDto[] SaveDataChgSubColBulk(int tblId, DataChgSubColDto[] dataChgSubColArray, int userId)
        {
            var ret = new List<DataChgSubColDto>();

            foreach (var dataChgSubCol in dataChgSubColArray)
            {
                var col = SaveDataChgSubCol(tblId, dataChgSubCol, userId);
                ret.Add(col);
            }

            return ret.ToArray();
        }

        private DataChgSubColDto SaveDataChgSubCol(int tblId, DataChgSubColDto dataChgSubCol, int userId)
        {
            var proc = "data_chg_sub_store.save_data_chg_sub_col";
            var procParams = new List<DbCommandParameter>();
            var ret = new DataChgSubColDto();

            procParams.Add(new DbCommandParameter("i_tbl_id", DbCommandParameterType.Number, tblId, ParameterDirection.Input));
            procParams.Add(new DbCommandParameter("i_col_name", DbCommandParameterType.String, dataChgSubCol.ColName, ParameterDirection.Input));
            procParams.Add(new DbCommandParameter("i_api_property_name", DbCommandParameterType.String, dataChgSubCol.ApiPropertyName, ParameterDirection.Input));
            procParams.Add(new DbCommandParameter("i_monitor_change_flag", DbCommandParameterType.String, dataChgSubCol.MonitorChangeFlag ? "Y" : "N", ParameterDirection.Input));
            procParams.Add(new DbCommandParameter("i_who_user_id", DbCommandParameterType.Number, userId, ParameterDirection.Input));
            procParams.Add(new DbCommandParameter("o_cur1", DbCommandParameterType.RefCursor, ParameterDirection.Output));

            using (var reader = _providerFactory.GetIasDbProvider().ExecuteProcReturnReader(proc, procParams))
            {
                while (reader.Read())
                {
                    ret = new DataChgSubColDto
                    {
                        DataChgSubTblId = reader.GetInt32("data_chg_sub_table_id").Value,
                        ColName = reader.GetString("column_name"),
                        ApiPropertyName = reader.GetString("api_property_name"),
                        MonitorChangeFlag = (reader.GetString("monitor_change_flag") == "Y"),
                        Who = reader.GetString("who"),
                        Wen = reader.GetDateTime("wen").Value
                    };
                }
            }

            return ret;
        }
    }
}
