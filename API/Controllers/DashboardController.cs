using CrudApi.BL;
using Microsoft.AspNetCore.Mvc;

namespace CrudApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DashboardController : ControllerBase
    {
        DashboardBL dashboardBL;

        [Route("getCount")]
        [HttpGet]
        public IActionResult GetCount()
        {
            dashboardBL = new DashboardBL();
            return Ok(dashboardBL.GetCount());
        }
    }
}
