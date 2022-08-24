using Microsoft.EntityFrameworkCore;
using WebApi.Models;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApi.Data {
    public class EmployeesManagementContext : DbContext {

        public DbSet<Employee> Employees { get; set; }

        public EmployeesManagementContext(DbContextOptions<EmployeesManagementContext> options) : base(options) { }

        public Task<List<Employee>> ReturnAllEmployees() {
            return Employees.ToListAsync();
        }
    }
}