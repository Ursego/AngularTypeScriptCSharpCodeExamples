using Ias.DataChangeSubscriptions.Admin.Domain;
using System.ServiceModel;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.Services.Contracts
{
    [ServiceContract]
    public interface IDataChgSubServiceAccountsService
    {
        [OperationContract]
        DataChgSubServiceAccountDto[] GetDataChgSubServiceAccountList();
    }
}
