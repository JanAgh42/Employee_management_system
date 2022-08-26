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

        [HttpGet("/current")]
        public async Task<IActionResult> GetCurrentEmployees() {
            return Ok(await _context.ReturnEmployees(false));
        }

        [HttpGet("/past")]
        public async Task<IActionResult> GetPastEmployees() {
            return Ok(await _context.ReturnEmployees(true));
        }

        [HttpGet("/positions")]
        public async Task<IActionResult> GetPositions() {
            return Ok(await _context.ReturnPositions());
        }

        [HttpPost]
        public async Task<IActionResult> Post(Employee employee) {
            return Ok(await _context.AddNewEmployee(employee));
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> DeleteEmployee(int Id) {
            var employee = await _context.Employees.FindAsync(Id);

            if(employee == null){
                return BadRequest($"Employee with ID: {Id} not found.");
            }
            return Ok(await _context.DeleteEmployee(employee));
        }

        [HttpPut]
        public async Task<IActionResult> EditEmployee(Employee EditedEmpl) {
            var emplList = await _context.EditEmployee(EditedEmpl);

            if(emplList == null){
                return BadRequest("Employee was not found.");
            }
            return Ok(emplList);
        }
    }
}