using System.Linq;
using System.Text.Json;
using Evaluacion4_PAA2021_JesusCruz.Model;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace Evaluacion4_PAA2021_JesusCruz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class LimiteController : ControllerBase
    {
        [HttpGet("GetLimite")]
        public Limite GetLimite()
        {
            using Database db = Database.GetInstance();
            return db.Limites.FirstOrDefault();
        }
        
        [HttpPost("SetLimite")]
        public void SetLimite([FromBody] JsonElement jsonElement)
        {
            var jsonElementSerialize = JsonSerializer.Serialize(jsonElement);
            dynamic data = JObject.Parse(jsonElementSerialize);

            using Database db = Database.GetInstance();
            var limite = db.Limites.FirstOrDefault();
            if (limite == null) return;
            limite.TemperaturaMinima = data.temperaturaMinima;
            limite.TemperaturaMaxima = data.temperaturaMaxima;
            limite.VoltajeMinimo = data.voltajeMinimo;
            limite.VoltajeMaximo = data.voltajeMaximo;
            limite.NivelMinimo = data.nivelMinimo;
            limite.NivelMaximo = data.nivelMaximo;
            limite.FlujoMinimo = data.flujoMinimo;
            limite.FlujoMaximo = data.flujoMaximo;
                
            db.Limites.Update(limite);
            db.SaveChanges();

        }
    }
}