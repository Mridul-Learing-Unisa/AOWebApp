using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AOWebApp.Models;

public partial class Customer
{
    public int CustomerId { get; set; }

    public string FullName => FirstName + " " + LastName;
    [NotMapped]
    

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string MainPhoneNumber { get; set; } = null!;

    public string? SecondaryPhoneNumber { get; set; }

    public int AddressId { get; set; }

    public virtual Address Address { get; set; } = null!;

    public virtual ICollection<CustomerOrder> CustomerOrders { get; set; } = new List<CustomerOrder>();

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    public static implicit operator Customer(List<Customer> v)
    {
        throw new NotImplementedException();
    }
}
