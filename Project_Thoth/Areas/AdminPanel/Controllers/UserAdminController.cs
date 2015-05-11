using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Project_Thoth.Areas.AdminPage.Controllers
{
    public class UserAdminController : Controller
    {
        // GET: AdminPage/UserAdmin
        public ActionResult Index()
        {
            return View();
        }

        // GET: AdminPage/UserAdmin/AssignRoles
        [Authorize(Roles = "Admin-User-Edit")]
        public ActionResult AssignRoles(String username)
        {
            // Check if user is not allowed to edit their own roles
            if (User.Identity.Name.Equals(username))
            {
                ModelState.AddModelError("", "Your not allowes to edit your own roles.");
            }
            else
            {
                MembershipUser user = Membership.GetUser(username);
                if (user = null)
                {
                    ModelState.AddModelError("", "Username is not valid.");
                }
                else
                {
                    ViewBag.Username = username;
                    ViewBag.AllRoles = Roles.GetAllRoles();
                    ViewBag.AllowRoles = Roles.GetRolesForUser(username);
                }
            }
            return View();
        }
    }
}