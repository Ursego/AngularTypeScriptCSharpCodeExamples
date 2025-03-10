using System;
using System.Web.Http;
using WebApi.Attributes;
using Tyler.Ias.WebApi.Infrastructure;
using Tyler.Ias.DataChangeSubscriptions.Admin.Services.Contracts;
using Tyler.Ias.Business.Modules.Constants;
using Tyler.Ias.WebApi.Infrastructure.Filters;
using Tyler.Ias.DataChangeSubscriptions.Admin.Domain;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.WebApi
{
    [SessionAuthorize(MODULES_ENUM.AdminEventModel)]
    [RoutePrefix("api/admin/data-change-subscriptions")]
    [CamelCase]
    public class DataChgSubController : BaseApiController
    {
        private readonly IDataChgSubService _svc;

        public DataChgSubController(IDataChgSubService svc)
        {
            _svc = svc ?? throw new ArgumentNullException(nameof(svc));
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult GetDataChgSubList()
        {
            var ret = _svc.GetDataChgSubList();
            return Ok(ret);
        }

        [HttpGet]
        [Route("{subId}")]
        public IHttpActionResult GetDataChgSub(int subId)
        {
            var ret = _svc.GetDataChgSub(subId);
            return Ok(ret);
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult AddDataChgSub(DataChgSubDto dataChgSub)
        {
            var ret = _svc.SaveDataChgSub(dataChgSub, IasPrincipal.IasIdentity.UserId);
            return Ok(ret);
        }

        [HttpPut]
        [Route("{subId}")]
        public IHttpActionResult UpdateDataChgSub(int subId, DataChgSubDto dataChgSub)
        {
            dataChgSub.DataChgSubId = subId;
            var ret = _svc.SaveDataChgSub(dataChgSub, IasPrincipal.IasIdentity.UserId);
            return Ok(ret);
        }
    }
}
