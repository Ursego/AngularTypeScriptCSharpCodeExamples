using Tyler.Ias.DataChangeSubscriptions.Admin.Domain;
using Tyler.Ias.DataChangeSubscriptions.Admin.Services.Contracts;
using Tyler.Ias.DataChangeSubscriptions.Admin.WcfClient;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.Services
{
    public class DataChgSubColService : IDataChgSubColService
    {
        private readonly DataChgSubColServiceClient _svcClient = new DataChgSubColServiceClient();

        public DataChgSubColDto[] GetDataChgSubColList(int tblId)
        {
            return _svcClient.GetDataChgSubColList(tblId);
        }

        public DataChgSubColDto[] SaveDataChgSubColBulk(int tblId, DataChgSubColDto[] dataChgSubColArray, int userId)
        {
            return _svcClient.SaveDataChgSubColBulk(tblId, dataChgSubColArray, userId);
        }
    }
}
