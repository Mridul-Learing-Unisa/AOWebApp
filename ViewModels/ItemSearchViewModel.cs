using System;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace AOWebApp.ViewModels
{
	public class ItemSearchViewModel
	{
        public string searchText { get; set; }
        public int? CategoryId { get; set; }
        public SelectList CategoryList { get; set; }
        public List<ItemWithRatingsViewModel> ItemList { get; set; }

        public ItemSearchViewModel()
		{
		}
    }
}

