using Project_Thoth.Areas.AdminPanel.ModelDescriptions;
using Project_Thoth.Areas.AdminPanel.Models;
using System;
using System.Web.Http;
using System.Web.Mvc;

namespace Project_Thoth.Areas.AdminPanel.Controllers
{
    public class AdminController : Controller
    {
        private const string ErrorViewName = "Error";

        public AdminController()
            : this(GlobalConfiguration.Configuration)
        {
        }

        public AdminController(HttpConfiguration config)
        {
            Configuration = config;
        }

        public HttpConfiguration Configuration { get; private set; }

        // GET: Admin/Admin
        public ActionResult Index()
        {
            ViewBag.DocumentationProvider = Configuration.Services.GetDocumentationProvider();
            return View(Configuration.Services.GetApiExplorer().ApiDescriptions);
        }

        public ActionResult Api(string apiId)
        {
            if (!String.IsNullOrEmpty(apiId))
            {
                AdminApiModel apiModel = Configuration.GetAdminApiModel(apiId);
                if (apiModel != null)
                {
                    return View(apiModel);
                }
            }
            return View(ErrorViewName);
        }

        public ActionResult ResourceModel(string modelName)
        {
            if (!String.IsNullOrEmpty(modelName))
            {
                ModelDescriptionGenerator modelDescriptionGenerator = Configuration.GetModelDescriptionGenerator();
                ModelDescription modelDescription;
                if (modelDescriptionGenerator.GeneratedModels.TryGetValue(modelName, out modelDescription))
                {
                    return View(modelDescription);
                }
            }
            return View(ErrorViewName);
        }
    }
}