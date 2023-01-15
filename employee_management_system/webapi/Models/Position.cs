using System.ComponentModel.DataAnnotations;

namespace WebApi.Models {
    public class Position {

        [Key]
        public int PositionId { get; set; }

        [Required]
        public string Title { get; set; } = string.Empty;
    }
}