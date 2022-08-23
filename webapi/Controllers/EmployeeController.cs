using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.Models;
using Microsoft.AspNetCore.Cors;

namespace WebApi.Controllers {

    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase {

        private readonly ILogger<EmployeeController> _logger;

        private List<Employee> emps = new() {
                new Employee {
                    Id = 1,
                    FirstName = "Jan",
                    LastName = "Agh",
                    Past = false
                },
                new Employee {
                    Id = 2,
                    FirstName = "Aaron",
                    LastName = "Agh",
                    Past = true
                },
                new Employee {
                    Id = 3,
                    FirstName = "Ingrid",
                    LastName = "Agh",
                    Past = true
                },
                new Employee {
                    Id = 4,
                    FirstName = "Mark",
                    LastName = "Bartalos",
                    Past = false
                },
            };

		public EmployeeController(ILogger<EmployeeController> logger){
			_logger = logger;
		}

        [EnableCors("VueApp")]
        [HttpGet]
        public async Task<ActionResult<List<Employee>>> Get() {
            return Ok(this.emps);
        }

        [HttpPost]
        public void Post() {

        }
    }
}