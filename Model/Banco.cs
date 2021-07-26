using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Evaluacion4_PAA2021_JesusCruz.Model
{
    [Table("banco")]
    public class Banco
    {
        public int Id { get; set; }
        public int Numero { get; set; }
        public ICollection<Celda> Celdas { get; set; }
    }
}