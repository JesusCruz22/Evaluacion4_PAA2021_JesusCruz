using System.ComponentModel.DataAnnotations.Schema;

namespace Evaluacion4_PAA2021_JesusCruz.Model
{
    [Table("celda")]
    public class Celda
    {
        public int Id { get; set; }
        public int Numero { get; set; }
        public int BancoId { get; set; }
        public double Temperatura { get; set; }
        public double Voltaje { get; set; }
        public double Nivel { get; set; }
        public double Flujo { get; set; }
        public Banco Banco { get; set; }
    }
}