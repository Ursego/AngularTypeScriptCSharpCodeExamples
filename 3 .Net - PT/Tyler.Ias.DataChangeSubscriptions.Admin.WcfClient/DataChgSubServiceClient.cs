using Tyler.Ias.DataChangeSubscriptions.Admin.Domain;
using Tyler.Ias.DataChangeSubscriptions.Admin.Services.Contracts;
using Tyler.Ias.ServiceClients;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.WcfClient
{
    public class DataChgSubServiceClient : ServiceClientBase<IDataChgSubService>, IDataChgSubService
    {
        public DataChgSubDto[] GetDataChgSubList()
        {
            return Channel.GetDataChgSubList();
        }

        public DataChgSubDto GetDataChgSub(int subId)
        {
            return Channel.GetDataChgSub(subId);
        }

        public DataChgSubDto SaveDataChgSub(DataChgSubDto dataChgSub, int userId)
        {
            return Channel.SaveDataChgSub(dataChgSub, userId);
        }
    }
}
