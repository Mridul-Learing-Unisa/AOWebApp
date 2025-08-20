using System;
using AOWebApp.Models;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace AOWebApp.ViewModels
{
	public class CustomeSearchViewModel
	{
		public object searchName { get; set; }
		public object searchSuburb { get; set; }
        public SelectList suburbs { get; set; }
        public List<Customer> customerList { get; set; }
        public CustomeSearchViewModel()
		{
		}
	}
}

