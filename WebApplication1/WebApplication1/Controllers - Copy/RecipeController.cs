using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;


namespace WebApplication1.Controllers
{
    [EnableCors(methods: "*", headers: "*", origins: "*")]
    public class RecipeController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GettAllRecipe()
        {
            return Ok(DB.recipeList);
        }
        [HttpGet]
        public IHttpActionResult gettRecipeDetails(string name)
        {
            foreach(var i in DB.recipeList)
            {
                if (name == i.NameRecipe)
                    return Ok(i);
            }
            return Ok(false);
        }
        
    }
}

