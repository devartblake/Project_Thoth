using System.Web.Http;
using System.Web.Mvc;

namespace Project_Thoth.Areas.AdminPanel
{
    public class AdminAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get { return "AdminPanel"; }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
            "Admin_Default",
            "Admin/{action}/{apiId}",
            new { controller = "Admin", action = "Index", apiId = UrlParameter.Optional });

            AdminConfig.Register(GlobalConfiguration.Configuration);
        }
    }
}