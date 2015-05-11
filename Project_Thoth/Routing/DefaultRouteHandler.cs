using System;
using System.Web;
using System.Web.Routing;
using System.Web.WebPages;

namespace Project_Thoth.Routing
{
    public class DefaultRouteHandler : IRouteHandler
    {
        public IHttpHandler GetHttpHandler(RequestContext requestContext)
        {
            // Use cases:
            //     ~/            -> ~/views/index.cshtml
            //     ~/about       -> ~/views/about.cshtml or ~/views/about/index.cshtml
            //     ~/views/about -> ~/views/about.cshtml
            //     ~/xxx         -> ~/views/404.cshtml
            var filePath = requestContext.HttpContext.Request.AppRelativeCurrentExecutionFilePath;

            if (filePath == "~/")
            {
                filePath = "~/views/home/index.cshtml";
            }
            else
            {
                if (!filePath.StartsWith("~/views/", StringComparison.OrdinalIgnoreCase))
                {
                    filePath = filePath.Insert(2, "views/");
                }

                if (!filePath.EndsWith(".cshtml", StringComparison.OrdinalIgnoreCase))
                {
                    filePath = filePath += ".cshtml";
                }
            }

            var handler = WebPageHttpHandler.CreateFromVirtualPath(filePath); // returns Null if .cshtml file wasn't found

            if (handler == null)
            {
                requestContext.RouteData.DataTokens.Add("templateUrl", "views/shared/Error");
                handler = WebPageHttpHandler.CreateFromVirtualPath("~/views/shared/Error.cshtml");
            }
            else
            {
                requestContext.RouteData.DataTokens.Add("templateUrl", filePath.Substring(1, filePath.Length - 8));
            }

            return handler;
        }
    }
}