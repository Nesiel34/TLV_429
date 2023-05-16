using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("corsapp")]
    public class EmailController : ControllerBase
    {
        [HttpPost]
        public IActionResult postEmail([FromBody] JObject data)
        {
            DateTime dateTime = DateTime.Now;
            try
            {
                string email = data["email"].ToObject<string>();
                string result = email + " received at:" + dateTime.ToString("dd/MM/yyyy HH:mm:ss");
                return Ok(JsonConvert.SerializeObject(result));

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
