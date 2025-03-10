using Ias.DataChangeSubscriptions.Admin.Domain;
using Tyler.Ias.DataChangeSubscriptions.Admin.Services.Contracts;
using Tyler.Ias.DataChangeSubscriptions.Admin.WcfClient;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.Services
{
    public class DataChgSubServiceAccountsService : IDataChgSubServiceAccountsService
    {
        private readonly DataChgSubServiceAccountsServiceClient _dataChgSubServiceAccountsServiceClient = new DataChgSubServiceAccountsServiceClient();

        public DataChgSubServiceAccountDto[] GetDataChgSubServiceAccountList()
        {
            return _dataChgSubServiceAccountsServiceClient.GetDataChgSubServiceAccountList();
        }
    }
}
