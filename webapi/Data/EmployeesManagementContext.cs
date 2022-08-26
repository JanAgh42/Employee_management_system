using Microsoft.EntityFrameworkCore;
using WebApi.Models;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;

namespace WebApi.Data {
    public class EmployeesManagementContext : DbContext {

        public DbSet<Employee> Employees { get; set; } = null!;
        public DbSet<Position> Positions { get; set; } = null!;

        public EmployeesManagementContext(DbContextOptions<EmployeesManagementContext> options) : base(options) { }

        public async Task<List<Employee>> ReturnEmployees(bool Past) {
            return await Employees.Where(Employee => Employee.Past == Past).ToListAsync();
        }

        public async Task<List<Position>> ReturnPositions() {
            return await Positions.ToListAsync();
        }

        public async Task<List<Employee>> AddNewEmployee(Employee employee) {
            Employees.Add(employee);
            await this.SaveChangesAsync();

            return await ReturnEmployees(false);
        }

        public async Task<List<Employee>> DeleteEmployee(Employee employee) {
            bool past = employee.Past;

            Employees.Remove(employee);
            await this.SaveChangesAsync();

            return await ReturnEmployees(past);
        }

        public async Task<List<Employee>> EditEmployee(Employee editedEmpl) {
            var OldEmpl = await Employees.FindAsync(editedEmpl.Id);

            if(OldEmpl == null){
                return null;
            }
            OldEmpl.FirstName = editedEmpl.FirstName;
            OldEmpl.LastName = editedEmpl.LastName;
            OldEmpl.Past = editedEmpl.Past;
            
            await this.SaveChangesAsync();

            return await ReturnEmployees(false);
        }
    }
}