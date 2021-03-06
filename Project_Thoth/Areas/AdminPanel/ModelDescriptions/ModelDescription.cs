﻿using System;

namespace Project_Thoth.Areas.AdminPanel.ModelDescriptions
{
    /// <summary>
    /// Describes a type model
    /// </summary>
    public abstract class ModelDescription
    {
        public string Documentation { get; set; }

        public Type ModelType { get; set; }

        public string Name { get; set; }
    }
}