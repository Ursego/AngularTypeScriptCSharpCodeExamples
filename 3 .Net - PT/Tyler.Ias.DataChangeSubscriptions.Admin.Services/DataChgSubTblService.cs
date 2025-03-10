using Tyler.Ias.DataChangeSubscriptions.Admin.Domain;
using Tyler.Ias.DataChangeSubscriptions.Admin.Services.Contracts;
using Tyler.Ias.DataChangeSubscriptions.Admin.WcfClient;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.Services
{
    public class DataChgSubTblService : IDataChgSubTblService
    {
        private readonly DataChgSubTblServiceClient _svcClient = new DataChgSubTblServiceClient();

        public DataChgSubTblDto[] GetDataChgSubTblList(int subId)
        {
            return _svcClient.GetDataChgSubTblList(subId);
        }

        public DataChgSubTblDto GetDataChgSubTbl(int tblId)
        {
            return _svcClient.GetDataChgSubTbl(tblId);
        }

        public DataChgSubTblDto SaveDataChgSubTbl(DataChgSubTblDto tbl, int userId)
        {
            return _svcClient.SaveDataChgSubTbl(tbl, userId);
        }
        public void DeleteDataChgSubTbl(int tblId, int userId)
        {
            _svcClient.DeleteDataChgSubTbl(tblId, userId);
        }
    }
}