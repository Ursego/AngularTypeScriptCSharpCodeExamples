using System.ServiceModel;
using Tyler.Ias.DataChangeSubscriptions.Admin.Domain;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.Services.Contracts
{
    [ServiceContract]
    public interface IDataChgSubColService
    {
        [OperationContract]
        DataChgSubColDto[] GetDataChgSubColList(int tblId);

        [OperationContract]
        DataChgSubColDto[] SaveDataChgSubColBulk(int tblId, DataChgSubColDto[] dataChgSubColArray, int userId);
    }
}
