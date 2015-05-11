using System;
using System.Reflection;

namespace Project_Thoth.Areas.AdminPanel.ModelDescriptions
{
    public interface IModelDocumentationProvider
    {
        string GetDocumentation(MemberInfo member);

        string GetDocumentation(Type type);
    }
}