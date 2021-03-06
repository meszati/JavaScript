using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace XY57LW_HFT_2021221.Models
{
    [Table("measurements")]
    public class Measurement
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        public double BMI { get; set; }

        [Required]
        public int Pushup { get; set; }

        [Required]
        public int Situp { get; set; }

        public int Jump { get; set; }

        public double Bodyfat { get; set; }

        [NotMapped]
        [JsonIgnore]
        public virtual Student Student { get; set; }

        public override string ToString()
        {
            return "BMI: " + this.BMI + " |Pushup: " + this.Pushup + " |Situp: " + this.Situp + " |Jump: " + this.Jump + " |Bodyfat: " + this.Bodyfat;
        }
    }
}
