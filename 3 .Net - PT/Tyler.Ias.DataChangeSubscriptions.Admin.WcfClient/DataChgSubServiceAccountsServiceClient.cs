using Ias.DataChangeSubscriptions.Admin.Domain;
using Tyler.Ias.DataChangeSubscriptions.Admin.Services.Contracts;
using Tyler.Ias.ServiceClients;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.WcfClient
{
    public class DataChgSubServiceAccountsServiceClient : ServiceClientBase<IDataChgSubServiceAccountsService>, IDataChgSubServiceAccountsService
    {
        public DataChgSubServiceAccountDto[] GetDataChgSubServiceAccountList()
        {
            return Channel.GetDataChgSubServiceAccountList();
        }
    }
}
