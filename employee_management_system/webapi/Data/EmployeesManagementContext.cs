using Microsoft.EntityFrameworkCore;
using WebApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System;

namespace WebApi.Data {
    public class EmployeesManagementContext : DbContext {

        public DbSet<Employee> Employees { get; set; } = null!;
        public DbSet<Position> Positions { get; set; } = null!;
        public DbSet<PosEntry> PosEntries { get; set; } = null!;

        public EmployeesManagementContext(DbContextOptions<EmployeesManagementContext> options) : base(options) { }

        public async Task<List<Employee>> ReturnEmployees(bool Past) {

            var emps = await Employees.Where(Employee => Employee.Past == Past).ToListAsync();

            foreach(Employee emp in emps){
                emp.PosEntries = await PosEntries.Where(Entry => Entry.EmployeeId == emp.Id).ToListAsync();
            }
            return emps;
        }

        public Task<List<Position>> ReturnPositions() {
            return Positions.ToListAsync();
        }

        public async Task<List<Employee>> AddNewEmployee(Employee employee) {
            DateTime compare = DateTime.Now.Date;

            employee.DateOfBirth = employee.DateOfBirth.Date.AddHours(12);
            employee.WorkingSince = employee.WorkingSince.Date.AddHours(12);

            if(DateTime.Compare(compare, employee.DateOfBirth) <= 0 || DateTime.Compare(compare, employee.WorkingSince) > 0){
                return null;
            }

            Employees.Add(employee);
            await this.SaveChangesAsync();

            return await ReturnEmployees(false);
        }

        public async Task<List<Position>> AddNewPosition(Position position) {
            Positions.Add(position);
            await this.SaveChangesAsync();

            return await ReturnPositions();
        }

        public async Task<List<Employee>> DeleteEmployee(Employee employee) {
            bool past = employee.Past;
            
            foreach(PosEntry entry in PosEntries) {
                if(entry.EmployeeId == employee.Id){
                    PosEntries.Remove(entry);
                }
            }
            Employees.Remove(employee);
            await this.SaveChangesAsync();

            return await ReturnEmployees(past);
        }

        public async Task<List<Position>> DeletePosition(Position position) {
            Positions.Remove(position);
            await this.SaveChangesAsync();

            return await ReturnPositions();
        }

        public async Task<List<Employee>> EditEmployee(Employee editedEmpl) {
            var OldEmpl = await Employees.FindAsync(editedEmpl.Id);

            DateTime compare = DateTime.Now.Date;  //UTCNow
            editedEmpl.DateOfBirth = editedEmpl.DateOfBirth.Date.AddHours(12);
            editedEmpl.WorkingSince = editedEmpl.WorkingSince.Date.AddHours(12);

            if(OldEmpl == null || DateTime.Compare(compare, editedEmpl.DateOfBirth) <= 0 ||
            DateTime.Compare(OldEmpl.WorkingSince.Date, editedEmpl.WorkingSince) > 0){
                return null;
            }

            OldEmpl.FirstName = editedEmpl.FirstName;
            OldEmpl.LastName = editedEmpl.LastName;
            OldEmpl.Address = editedEmpl.Address;
            OldEmpl.DateOfBirth = editedEmpl.DateOfBirth;
            OldEmpl.WorkingSince = editedEmpl.WorkingSince;
            OldEmpl.Salary = editedEmpl.Salary;
            OldEmpl.PosEntries = editedEmpl.PosEntries;
            OldEmpl.Past = editedEmpl.Past;
            
            await this.SaveChangesAsync();

            return await ReturnEmployees(false);
        }
    }
}