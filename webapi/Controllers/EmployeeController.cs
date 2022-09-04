using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using WebApi.Models;
using Microsoft.AspNetCore.Cors;
using WebApi.Data;

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
        public async Task<IActionResult> PostEmployee(Employee employee) {
            return Ok(await _context.AddNewEmployee(employee));
        }

        [HttpPost("/positions")]
        public async Task<IActionResult> PostPosition(Position position) {
            return Ok(await _context.AddNewPosition(position));
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> DeleteEmployee(int Id) {
            var employee = await _context.Employees.FindAsync(Id);

            if(employee == null){
                return BadRequest($"Employee with ID: {Id} not found.");
            }
            return Ok(await _context.DeleteEmployee(employee));
        }

        [HttpDelete("/positions/{Id}")]
        public async Task<IActionResult> DeletePosition(int Id) {
            var position = await _context.Positions.FindAsync(Id);

            if(position == null){
                return BadRequest($"Position with ID: {Id} not found.");
            }
            return Ok(await _context.DeletePosition(position));
        }

        [HttpPut]
        public async Task<IActionResult> EditEmployee(Employee EditedEmpl) {
            var emplList = await _context.EditEmployee(EditedEmpl);

            if(emplList == null){
                return BadRequest($"Employee with ID: {EditedEmpl.Id} not found.");
            }
            return Ok(emplList);
        }
    }
}