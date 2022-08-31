using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace WebApi.Models {
    public class Position {

        [Key]
        public int PositionId { get; set; }

        [Required]
        public string Title { get; set; } = string.Empty;
    }
}