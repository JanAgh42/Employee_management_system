using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace WebApi.Models {
    public class Employee {

        [Key]
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        public string LastName { get; set; } = string.Empty;
        public string? Address { get; set; } 

        [Required]
        public decimal Salary { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public DateTime WorkingSince { get; set; }

        [Required]
        public List<PosEntry> PosEntries { get; set; } = null!;

        [Required]
        public bool Past { get; set; }
    }
}