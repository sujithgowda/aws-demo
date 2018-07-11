using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Olb.Api.Controllers
{
    [Route("api/[controller]")]
    public class AccountsController : Controller
    {
        public IConfiguration configuration;

        public AccountsController(IConfiguration _configuration)
        {
            configuration = _configuration;
        }
       
        // GET: api/<controller>
        [HttpGet]
        public object Get()
        {
            //HttpContext.Response.Cookies.Append("DemoCookie", "DummyValue");
            //return new string[] { "Account1", "Account2", "Account3" };
            return configuration.GetSection("MockAccounts").GetChildren().ToArray().Select(c => c.Value).ToArray();
        }

       

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
