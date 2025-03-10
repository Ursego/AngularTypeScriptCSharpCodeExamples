using System;
using System.Web.Http;
using WebApi.Attributes;
using Tyler.Ias.WebApi.Infrastructure;
using Tyler.Ias.DataChangeSubscriptions.Admin.Services.Contracts;
using Tyler.Ias.Business.Modules.Constants;
using Tyler.Ias.WebApi.Infrastructure.Filters;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.WebApi
{
    [SessionAuthorize(MODULES_ENUM.AdminEventModel)]
    [RoutePrefix("api/admin/data-change-subscriptions/{subId}/tables/{tblId}/columns")]
    [CamelCase]
    public class DataChgSubColController : BaseApiController
    {
        private readonly IDataChgSubColService _svc;

        public DataChgSubColController(IDataChgSubColService svc)
        {
            _svc = svc ?? throw new ArgumentNullException(nameof(svc));
        }

        [Route("")]
        public IHttpActionResult GetDataChgSubColList(int subId, int tblId)
        {
            var ret = _svc.GetDataChgSubColList(tblId);
            return Ok(ret);
        }
    }
}
