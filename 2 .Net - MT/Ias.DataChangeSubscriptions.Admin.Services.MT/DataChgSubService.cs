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
    public class DataChgSubService : IDataChgSubService
    {
        private readonly IArgonDbProviderFactory _providerFactory = new ArgonDbProviderFactory();

        public DataChgSubDto[] GetDataChgSubList()
        {
            var proc = "data_chg_sub_store.get_data_chg_sub_list";
            var procParams = new List<DbCommandParameter>();
            var ret = new List<DataChgSubDto>();

            procParams.Add(new DbCommandParameter("o_cur1", DbCommandParameterType.RefCursor, ParameterDirection.Output));

            using (var reader = _providerFactory.GetIasDbProvider().ExecuteProcReturnReader(proc, procParams))
            {
                while (reader.Read())
                {
                    var sub = new DataChgSubDto
                    {
                        DataChgSubId = reader.GetInt32("data_chg_sub_id").Value,
                        DataChgSubName = reader.GetString("data_chg_sub_name"),
                        DataChgSubDesc = reader.GetString("data_chg_sub_desc"),
                        UserId = reader.GetInt32("user_id").Value,
                        UserName = reader.GetString("username"),
                        UserFullName = reader.GetString("user_full_name"),
                        Who = reader.GetString("who"),
                        Wen = reader.GetDateTime("wen").Value,
                        ActiveFlg = reader.GetBool("active_flg").Value
                    };

                    ret.Add(sub);
                }
            }

            return ret.ToArray();
        }

        public DataChgSubDto GetDataChgSub(int subId)
        {
            var proc = "data_chg_sub_store.get_data_chg_sub";
            var procParams = new List<DbCommandParameter>();
            var ret = new DataChgSubDto();

            procParams.Add(new DbCommandParameter("i_sub_id", DbCommandParameterType.Number, subId, ParameterDirection.Input));
            procParams.Add(new DbCommandParameter("o_cur1", DbCommandParameterType.RefCursor, ParameterDirection.Output));

            using (var reader = _providerFactory.GetIasDbProvider().ExecuteProcReturnReader(proc, procParams))
            {
                while (reader.Read())
                {
                    ret.DataChgSubId = reader.GetInt32("data_chg_sub_id").Value;
                    ret.DataChgSubName = reader.GetString("data_chg_sub_name");
                    ret.DataChgSubDesc = reader.GetString("data_chg_sub_desc");
                    ret.UserId = reader.GetInt32("user_id").Value;
                    ret.UserName = reader.GetString("username");
                    ret.UserFullName = reader.GetString("user_full_name");
                    ret.Who = reader.GetString("who");
                    ret.Wen = reader.GetDateTime("wen").Value;
                    ret.ActiveFlg = reader.GetBool("active_flg").Value;
                }
            }

            return ret;
        }

        public DataChgSubDto SaveDataChgSub(DataChgSubDto dataChgSub, int userId)
        {
            if (dataChgSub == null) throw new ArgumentNullException("dataChgSub");

            var proc = "data_chg_sub_store.save_data_chg_sub";
            var procParams = new List<DbCommandParameter>();
            var ret = new DataChgSubDto();

            procParams.Add(new DbCommandParameter("i_data_chg_sub_id", DbCommandParameterType.Number, dataChgSub.DataChgSubId, ParameterDirection.Input));
            procParams.Add(new DbCommandParameter("i_data_chg_sub_name", DbCommandParameterType.String, dataChgSub.DataChgSubName, ParameterDirection.Input));
            procParams.Add(new DbCommandParameter("i_data_chg_sub_desc", DbCommandParameterType.String, dataChgSub.DataChgSubDesc, ParameterDirection.Input));
            procParams.Add(new DbCommandParameter("i_user_id", DbCommandParameterType.Number, dataChgSub.UserId, ParameterDirection.Input));
            procParams.Add(new DbCommandParameter("i_who_user_id", DbCommandParameterType.Number, userId, ParameterDirection.Input));
            procParams.Add(new DbCommandParameter("i_active_flg", DbCommandParameterType.String, dataChgSub.ActiveFlg ? "Y" : "N", ParameterDirection.Input));
            procParams.Add(new DbCommandParameter("o_cur1", DbCommandParameterType.RefCursor, ParameterDirection.Output));

            using (var reader = _providerFactory.GetIasDbProvider().ExecuteProcReturnReader(proc, procParams))
            {
                while (reader.Read())
                {
                    ret.DataChgSubId = reader.GetInt32("data_chg_sub_id").Value;
                    ret.DataChgSubName = reader.GetString("data_chg_sub_name");
                    ret.DataChgSubDesc = reader.GetString("data_chg_sub_desc");
                    ret.UserId = reader.GetInt32("user_id").Value;
                    ret.UserName = reader.GetString("username");
                    ret.UserFullName = reader.GetString("user_full_name");
                    ret.Who = reader.GetString("who");
                    ret.Wen = reader.GetDateTime("wen").Value;
                    ret.ActiveFlg = reader.GetBool("active_flg").Value;
                }
            }

            return ret;
        }
    }
}