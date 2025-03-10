using System.ServiceModel;
using Tyler.Ias.DataChangeSubscriptions.Admin.Domain;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.Services.Contracts
{
    [ServiceContract]
    public interface IDataChgSubTblService
    {
        [OperationContract]
        DataChgSubTblDto[] GetDataChgSubTblList(int subId);

        [OperationContract]
        DataChgSubTblDto GetDataChgSubTbl(int tblId);

        [OperationContract]
        DataChgSubTblDto SaveDataChgSubTbl(DataChgSubTblDto tbl, int userId);

        [OperationContract]
        void DeleteDataChgSubTbl(int tblId, int userId);
    }
}