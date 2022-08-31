using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;

namespace WebApi.Models {

    public class PosEntry {
        
        [Key]
        public int PosEntryId { get; set; }

        [Required]
        public int PositionId { get; set; }

        [Required]
        public string Title { get; set; } = string.Empty;

        [Required]
        public int EmployeeId { get; set; }

        [Required]
        public DateTime BeginDate { get; set; }

        public DateTime? EndDate { get; set; }
    }
}