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
    [RoutePrefix("api/admin/data-change-subscriptions/{subId}/tables")]
    [CamelCase]
    public class DataChgSubTblController : BaseApiController
    {
        private readonly IDataChgSubTblService _svc;

        public DataChgSubTblController(IDataChgSubTblService svc)
        {
            _svc = svc;
        }

        [Route("")]
        public IHttpActionResult GetDataChgSubTblList(int subId)
        {
            var ret = _svc.GetDataChgSubTblList(subId);
            return Ok(ret);
        }

        [Route("{tblId}")]
        public IHttpActionResult GetDataChgSubTbl(int tblId)
        {
            var ret = _svc.GetDataChgSubTbl(tblId);
            return Ok(ret);
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult AddDataChgSubTbl(DataChgSubTblDto tbl)
        {
            var ret = _svc.SaveDataChgSubTbl(tbl, IasPrincipal.IasIdentity.UserId);
            return Ok(ret);
        }

        [HttpPut]
        [Route("{tblId}")]
        public IHttpActionResult UpdateDataChgSubTbl(DataChgSubTblDto tbl)
        {
            var ret = _svc.SaveDataChgSubTbl(tbl, IasPrincipal.IasIdentity.UserId);
            return Ok(ret);
        }

        [HttpDelete]
        [Route("{tblId}")]
        public IHttpActionResult DeleteDataChgSubTbl(int tblId)
        {
            _svc.DeleteDataChgSubTbl(tblId, IasPrincipal.IasIdentity.UserId);
            return Ok();
        }
    }
}
