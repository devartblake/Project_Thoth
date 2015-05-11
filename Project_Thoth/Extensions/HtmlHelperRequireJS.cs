using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace Thoth.Extensions
{
    public enum ScriptLocation
    {
        Area = 1,
        Root = 2
    }

    public static class HtmlHelperRequireJS
    {
        /// <summary>
        /// An Html helper for Require.js
        /// </summary>
        /// <param name="helper"></param>
        /// <param name="common">Location of the common js file.</param>
        /// <param name="module">Location of the main.js file.</param>
        /// <returns></returns>
        public static MvcHtmlString RequireJs(this HtmlHelper helper, string main, string module, ScriptLocation location)
        {
            var require = new StringBuilder();

            var jsLocation = getCommonLocation(location);

            require.AppendLine("<script>");
            require.AppendLine(string.Format(@"require( [ ""{0}{1}"", ""{2}"" ], function(common,library) {{", jsLocation, main, module));
            //require.AppendLine(string.Format(" var library = require( [ \"{0}\"] );", module));
            require.AppendLine(string.Format("library.init();"));
            require.AppendLine("});");
            require.AppendLine("</script>");

            return new MvcHtmlString(require.ToString());
        }

        public static string getCommonLocation(ScriptLocation location)
        {
            var baseUrl = location == ScriptLocation.Area ? "../../" : "";
            var jsLocation = ConfigurationManager.AppSettings["JsLocation"];
            jsLocation = baseUrl + jsLocation;
            return jsLocation;
        }
    }
}