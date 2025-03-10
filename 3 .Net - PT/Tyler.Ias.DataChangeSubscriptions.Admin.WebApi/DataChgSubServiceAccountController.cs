using System;
using System.Web.Http;
using Tyler.Ias.Business.Modules.Constants;
using Tyler.Ias.DataChangeSubscriptions.Admin.Services.Contracts;
using Tyler.Ias.WebApi.Infrastructure;
using Tyler.Ias.WebApi.Infrastructure.Filters;
using WebApi.Attributes;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.WebApi
{
    [SessionAuthorize(MODULES_ENUM.AdminEventModel)]
    [RoutePrefix("api/admin/data-change-subscription-service-accounts")]
    [CamelCase]
    public class DataChgSubServiceAccountController : BaseApiController
    {
        private readonly IDataChgSubServiceAccountsService _dataChgSubServiceAccountsService;

        public DataChgSubServiceAccountController(IDataChgSubServiceAccountsService dataChgSubServiceAccountsService)
        {
            _dataChgSubServiceAccountsService = dataChgSubServiceAccountsService ?? throw new ArgumentNullException(nameof(dataChgSubServiceAccountsService));
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult GetDataChgSubServiceAccountList()
        {
            var ret = _dataChgSubServiceAccountsService.GetDataChgSubServiceAccountList();
            return Ok(ret);
        }
    }
}
