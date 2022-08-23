using System.ComponentModel.DataAnnotations;

namespace WebApi.Models {
    public class Employee {
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        public string LastName { get; set; } = string.Empty;
        //public string? Address { get; set; } 
        //public decimal Salary { get; set; }
        //public DateTime DateOfBirth { get; set; }

        [Required]
        public bool Past { get; set; }
    }
}