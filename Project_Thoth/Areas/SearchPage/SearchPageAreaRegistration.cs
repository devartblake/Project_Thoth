using System.Web.Http;
using System.Web.Mvc;

namespace Project_Thoth.Areas.SearchPage
{
    public class SearchPageAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "SearchPage";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "SearchPage_Default",
                "Search/{action}/{id}",
                new { controller = "Search", action = "Index", id = UrlParameter.Optional });

            SearchPageConfig.Register(GlobalConfiguration.Configuration);
        }
    }
}