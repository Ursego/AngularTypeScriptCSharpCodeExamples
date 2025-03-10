using Tyler.Ias.DataChangeSubscriptions.Admin.Domain;
using Tyler.Ias.DataChangeSubscriptions.Admin.Services.Contracts;
using Tyler.Ias.ServiceClients;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.WcfClient
{
    public class DataChgSubColServiceClient : ServiceClientBase<IDataChgSubColService>, IDataChgSubColService
    {
        public DataChgSubColDto[] GetDataChgSubColList(int tblId)
        {
            return Channel.GetDataChgSubColList(tblId);
        }

        public DataChgSubColDto[] SaveDataChgSubColBulk(int tblId, DataChgSubColDto[] dataChgSubColArray, int userId)
        {
            return Channel.SaveDataChgSubColBulk(tblId, dataChgSubColArray, userId);
        }
    }
}