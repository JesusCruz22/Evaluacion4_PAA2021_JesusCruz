using System.ComponentModel.DataAnnotations.Schema;

namespace Evaluacion4_PAA2021_JesusCruz.Model
{
    [Table("limite")]
    public class Limite
    {
        public int Id { get; set; }
        public double TemperaturaMinima { get; set; }
        public double TemperaturaMaxima { get; set; }
        public double VoltajeMinimo { get; set; }
        public double VoltajeMaximo { get; set; }
        public double NivelMinimo { get; set; }
        public double NivelMaximo { get; set; }
        public double FlujoMinimo { get; set; }
        public double FlujoMaximo { get; set; }
    }
}