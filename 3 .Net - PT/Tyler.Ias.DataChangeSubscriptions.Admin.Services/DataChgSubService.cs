using Tyler.Ias.DataChangeSubscriptions.Admin.Domain;
using Tyler.Ias.DataChangeSubscriptions.Admin.Services.Contracts;
using Tyler.Ias.DataChangeSubscriptions.Admin.WcfClient;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.Services
{
    public class DataChgSubService : IDataChgSubService
    {
        private readonly DataChgSubServiceClient _svcClient = new DataChgSubServiceClient();

        public DataChgSubDto[] GetDataChgSubList()
        {
            return _svcClient.GetDataChgSubList();
        }

        public DataChgSubDto GetDataChgSub(int subId)
        {
            return _svcClient.GetDataChgSub(subId);
        }

        public DataChgSubDto SaveDataChgSub(DataChgSubDto dataChgSub, int userId)
        {
            return _svcClient.SaveDataChgSub(dataChgSub, userId);
        }
    }
}
