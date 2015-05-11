using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace Project_Thoth.Areas.SearchPage.Controllers
{
    public class SearchController : Controller
    {
        public SearchController()
            : this(GlobalConfiguration.Configuration)
        {
        }

        public SearchController(HttpConfiguration config)
        {
            Configuration = config;
        }

        public HttpConfiguration Configuration { get; private set; }

        // GET: SearchPage/Search
        public ActionResult Index()
        {
            ViewBag.DocumentationProvider = Configuration.Services.GetDocumentationProvider();
            return View(Configuration.Services.GetApiExplorer().ApiDescriptions);
        }
    }
}