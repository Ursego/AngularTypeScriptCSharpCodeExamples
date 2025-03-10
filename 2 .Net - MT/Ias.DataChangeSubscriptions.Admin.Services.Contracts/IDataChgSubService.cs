using System.ServiceModel;
using Tyler.Ias.DataChangeSubscriptions.Admin.Domain;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.Services.Contracts
{
    [ServiceContract]
    public interface IDataChgSubService
    {
        [OperationContract]
        DataChgSubDto[] GetDataChgSubList();

        [OperationContract]
        DataChgSubDto GetDataChgSub(int subId);

        [OperationContract]
        DataChgSubDto SaveDataChgSub(DataChgSubDto dataChgSub, int userId);
    }
}
