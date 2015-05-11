using Project_Thoth.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace Project_Thoth.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        static HomeController()
        {
            var rand = Randomizer.Next();
        }

        public ActionResult Index()
        {
            return View();
        }
    }
}