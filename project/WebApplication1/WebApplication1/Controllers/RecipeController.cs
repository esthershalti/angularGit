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
        //[HttpGet]
        //public IHttpActionResult addIngredients(string name)
        //{
        //    foreach (var i in DB.recipeList)
        //    {
        //        if (name == i.NameRecipe)
        //            return Ok(i);
        //    }
        //    return Ok(false);
        //}
        [HttpPost]
        public IHttpActionResult onSubmit(Recipe r)
        {
            DB.recipeList.Add(new Recipe { NameRecipe = r.NameRecipe, CategoryRecipe = r.CategoryRecipe, Time = r.Time, Difficulty = r.Difficulty, DateAdd = r.DateAdd, Ingredients = r.Ingredients, Preparetion = r.Preparetion, UserName = r.UserName, Image = r.Image });
            return Ok(r.NameRecipe);
        }
        [HttpPost]
        public Recipe FindCategory(Recipe name)
        {
            foreach (Recipe c in DB.recipeList)
                if (c.CategoryRecipe == name.CategoryRecipe)
                    return c;
            return null;
        }
        [HttpPost]
        public IHttpActionResult editR(Recipe rNew)
        {
           foreach (var i in DB.recipeList)
            
                if (i.NameRecipe ==rNew.NameRecipe)
                {
                    i.CategoryRecipe = rNew.CategoryRecipe;
                    i.Difficulty = rNew.Difficulty;
                    i.Image = rNew.Image;
                    i.Ingredients = rNew.Ingredients;
                    i.Preparetion = rNew.Preparetion;
                    i.Time = rNew.Time;
                    return Ok("succeed!!");
                }
            return Ok("oppps");
            
        }

    }
}

