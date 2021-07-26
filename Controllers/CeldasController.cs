using System.Collections.Generic;
using System.Linq;
using Evaluacion4_PAA2021_JesusCruz.Model;
using Microsoft.AspNetCore.Mvc;

namespace Evaluacion4_PAA2021_JesusCruz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class CeldasController : ControllerBase
    {
        [HttpGet("GetDatosCeldas")]
        public IEnumerable<Celda> GetDatosCeldas()
        {
            using Database db = Database.GetInstance();
            
            IEnumerable<Celda> celdas = db.Celdas.ToList();

            return celdas;
        }
    }
}