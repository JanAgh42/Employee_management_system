using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.Models;
using Microsoft.AspNetCore.Cors;
using WebApi.Data;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Controllers {

    [ApiController]
    [Route("[controller]")]
    [EnableCors("VueApp")]
    public class EmployeeController : ControllerBase {

        private readonly EmployeesManagementContext _context;

		public EmployeeController(EmployeesManagementContext context){
			_context = context;
		}

        [HttpGet]
        public async Task<IActionResult> GetEmployees() {
            return Ok(await _context.ReturnAllEmployees());
        }

        [HttpPost]
        public async Task<IActionResult> Post(Employee employee) {
            return Ok(await _context.AddNewEmployee(employee));
        }

        [HttpDelete]
        public void Delete(int Id) {

        }
    }
}