using Ias.DataChangeSubscriptions.Admin.Domain;
using System.Collections.Generic;
using System.Data.Common;
using System.Data;
using Tyler.Argon.Data;
using Tyler.Ias.DataChangeSubscriptions.Admin.Domain;
using Tyler.Ias.DataChangeSubscriptions.Admin.Services.Contracts;
using Tyler.Ias.Argon.Data;
using System.ServiceModel;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.Services.MT
{
    [ServiceBehavior(InstanceContextMode = InstanceContextMode.PerCall)]
    public class DataChgSubServiceAccountsService : IDataChgSubServiceAccountsService
    {
        private readonly IArgonDbProviderFactory _providerFactory = new ArgonDbProviderFactory();

        public DataChgSubServiceAccountDto[] GetDataChgSubServiceAccountList()
        {
            var proc = "data_chg_sub_store.get_data_chg_sub_svc_acct_list";
            var procParams = new List<DbCommandParameter>();
            var ret = new List<DataChgSubServiceAccountDto>();

            procParams.Add(new DbCommandParameter("o_cur1", DbCommandParameterType.RefCursor, ParameterDirection.Output));

            using (var reader = _providerFactory.GetIasDbProvider().ExecuteProcReturnReader(proc, procParams))
            {
                while (reader.Read())
                {
                    var sub = new DataChgSubServiceAccountDto
                    {
                        UserId = reader.GetInt32("user_id").Value,
                        UserName = reader.GetString("username"),
                        FirstName = reader.GetString("firstname"),
                        LastName = reader.GetString("lastname")
                    };

                    ret.Add(sub);
                }
            }

            return ret.ToArray();
        }
    }
}
