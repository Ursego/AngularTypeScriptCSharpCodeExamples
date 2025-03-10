using Tyler.Ias.DataChangeSubscriptions.Admin.Domain;
using Tyler.Ias.DataChangeSubscriptions.Admin.Services.Contracts;
using Tyler.Ias.ServiceClients;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.WcfClient
{
    public class DataChgSubTblServiceClient : ServiceClientBase<IDataChgSubTblService>, IDataChgSubTblService
    {
        public DataChgSubTblDto[] GetDataChgSubTblList(int subId)
        {
            return Channel.GetDataChgSubTblList(subId);
        }

        public DataChgSubTblDto GetDataChgSubTbl(int tblId)
        {
            return Channel.GetDataChgSubTbl(tblId);
        }

        public DataChgSubTblDto SaveDataChgSubTbl(DataChgSubTblDto tbl, int userId)
        {
            return Channel.SaveDataChgSubTbl(tbl, userId);
        }

        public void DeleteDataChgSubTbl(int tblId, int userId)
        {
            Channel.DeleteDataChgSubTbl(tblId, userId);
        }
    }
}