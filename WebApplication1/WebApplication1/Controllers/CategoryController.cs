using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;


namespace WebApplication1.Controllers
{
    [EnableCors(methods: "*", headers: "*", origins: "*")]
    public class CategoryController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GettAllCategory()
        {
            return Ok(DB.categoryList);
        }
        [HttpPost]
        public Category FindCategory(Category name)
        {
            foreach (Category c in DB.categoryList)
                if (c.CategoryName == name.CategoryName)
                    return c;
            return null;
        }


    }
}

