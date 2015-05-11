using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace Project_Thoth
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/vendors/jquery/jquery-{version}.js",
                "~/Scripts/vendors/jquery/jquery.slimscroll.min.js",
                "~/Scripts/vendors/jquery/jquery.touchSwipe.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                "~/Scripts/vendors/jquery/jquery.unobtrusive.*",
                "~/Scripts/vendors/jquery/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/admin").Include(
                "~/Scripts/vendors/d3.js"));

            //bundles.Add(new ScriptBundle("~/bundles/app").Include(
            //    "~/Scripts/sammy-{version}.js",
            //    "~/Scripts/app/common.js",
            //    "~/Scripts/app/app.datamodel.js",
            //    "~/Scripts/app/app.viewmodel.js",
            //    "~/Scripts/app/home.viewmodel.js",
            //    "~/Scripts/app/_run.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/Scripts/vendors/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/Scripts/classie.js",
                "~/Scripts/thoth.js",
                "~/Scripts/qrCode.js",
                "~/Scripts/vendors/typeahead.bundle.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                 "~/Scripts/vendors/jquery-ui/jquery-ui.structure.css",
                 "~/Scripts/vendors/jquery-ui/jquery-ui.theme.css",
                 "~/Scripts/vendors/jquery-ui/jquery-ui.css",
                 "~/Content/bootstrap/bootstrap.css",
                 "~/Content/font-awesome.css",
                 "~/Content/animated.css",
                 "~/Content/toastr.css",
                 "~/Content/Site.css"));
        }
    }
}