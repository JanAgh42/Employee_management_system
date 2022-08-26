using System.ComponentModel.DataAnnotations;

namespace WebApi.Models {
    public class Position {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; } = string.Empty;
    }
}