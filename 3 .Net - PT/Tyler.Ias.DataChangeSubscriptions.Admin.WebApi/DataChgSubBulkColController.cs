using System.Web.Http;
using Tyler.Ias.Business.Modules.Constants;
using Tyler.Ias.DataChangeSubscriptions.Admin.Domain;
using Tyler.Ias.DataChangeSubscriptions.Admin.Services.Contracts;
using Tyler.Ias.WebApi.Infrastructure;
using Tyler.Ias.WebApi.Infrastructure.Filters;
using WebApi.Attributes;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.WebApi
{
    [SessionAuthorize(MODULES_ENUM.AdminEventModel)]
    [RoutePrefix("api/admin/data-change-subscriptions/{subId}/tables/{tblId}/bulk/columns")]
    [CamelCase]
    public class DataChgSubBulkColController : BaseApiController
    {
        private readonly IDataChgSubColService _svc;

        public DataChgSubBulkColController(IDataChgSubColService svc)
        {
            _svc = svc;
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult AddDataChgSubColBulk(int subId, int tblId, DataChgSubColDto[] dataChgSubColArray)
        {
            var ret = _svc.SaveDataChgSubColBulk(tblId, dataChgSubColArray, IasPrincipal.IasIdentity.UserId);
            return Ok(ret);
        }
    }
}
