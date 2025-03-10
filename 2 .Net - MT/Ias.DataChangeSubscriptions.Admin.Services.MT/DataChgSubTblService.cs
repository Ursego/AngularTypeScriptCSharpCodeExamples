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
    public class DataChgSubTblService : IDataChgSubTblService
    {
        private readonly IArgonDbProviderFactory _providerFactory = new ArgonDbProviderFactory();

        private DataChgSubTblDto[] ExecProc(string proc, List<DbCommandParameter> procParams)
        {
            procParams.Add(new DbCommandParameter("o_cur1", DbCommandParameterType.RefCursor, ParameterDirection.Output));
            var ret = new List<DataChgSubTblDto>();
            using (var reader = _providerFactory.GetIasDbProvider().ExecuteProcReturnReader($"data_chg_sub_store.{proc}", procParams))
            {
                while (reader.Read())
                {
                    var tbl = new DataChgSubTblDto
                    {
                        DataChgSubTblId = reader.GetInt32("data_chg_sub_table_id").Value,
                        DataChgSubId = reader.GetInt32("data_chg_sub_id").Value,
                        TblName = reader.GetString("table_name"),
                        ApiPropertyName = reader.GetString("api_property_name") ?? string.Empty,
                        Who = reader.GetString("who"),
                        Wen = reader.GetDateTime("wen").Value,
                        ColsCount = (proc == "get_data_chg_sub_tbl_list") ? reader.GetInt32("cols_count").Value : (int?)null,
                    };

                    ret.Add(tbl);
                }
            }
            return ret.ToArray();
        }

        public DataChgSubTblDto[] GetDataChgSubTblList(int subId)
        {
            var procParams = new List<DbCommandParameter>
            {
                new DbCommandParameter("i_sub_id", DbCommandParameterType.Number, subId, ParameterDirection.Input)
            };
            return ExecProc("get_data_chg_sub_tbl_list", procParams);
        }

        public DataChgSubTblDto GetDataChgSubTbl(int tblId)
        {
            var procParams = new List<DbCommandParameter>
            {
                new DbCommandParameter("i_tbl_id", DbCommandParameterType.Number, tblId, ParameterDirection.Input)
            };
            return ExecProc("get_data_chg_sub_tbl", procParams)[0];
        }

        public DataChgSubTblDto SaveDataChgSubTbl(DataChgSubTblDto tbl, int userId)
        {
            if (tbl == null) throw new ArgumentNullException("tbl");
            var procParams = new List<DbCommandParameter>
            {
                new DbCommandParameter("i_tbl_id", DbCommandParameterType.Number, tbl.DataChgSubTblId, ParameterDirection.Input),
                new DbCommandParameter("i_sub_id", DbCommandParameterType.Number, tbl.DataChgSubId, ParameterDirection.Input),
                new DbCommandParameter("i_tbl_name", DbCommandParameterType.String, tbl.TblName, ParameterDirection.Input),
                new DbCommandParameter("i_api_property_name", DbCommandParameterType.String, tbl.ApiPropertyName, ParameterDirection.Input),
                new DbCommandParameter("i_user_id", DbCommandParameterType.Number, userId, ParameterDirection.Input)
            };
            return ExecProc("save_data_chg_sub_tbl", procParams)[0];
        }

        public void DeleteDataChgSubTbl(int tblId, int userId)
        {
            var proc = "data_chg_sub_store.delete_data_chg_sub_tbl";
            var procParams = new List<DbCommandParameter>
            {
                new DbCommandParameter("i_tbl_id", DbCommandParameterType.Number, tblId, ParameterDirection.Input),
                new DbCommandParameter("i_user_id", DbCommandParameterType.Number, userId, ParameterDirection.Input)
            };
            _providerFactory.GetIasDbProvider().ExecuteProc(proc, procParams);
        }
    }
}