using System;
using AOWebApp.Models;

namespace AOWebApp.ViewModels
{
	public class ItemWithRatingsViewModel
	{
        public Item Item { get; set; }

        public double? AverageRating { get; set; } 
        public int ReviewCount { get; set; }

        public ItemWithRatingsViewModel()
		{
		}
	}
}

