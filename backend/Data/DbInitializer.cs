using BvgkLifesciences.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace BvgkLifesciences.Api.Data;

public static class DbInitializer
{
    public static async Task SeedAsync(AppDbContext db)
    {
        if (!await db.Divisions.AnyAsync())
        {
            db.Divisions.AddRange(
                new Division { Name = "Critical Care", Description = "Critical care pharmaceutical products" },
                new Division { Name = "Oncology", Description = "Oncology pharmaceutical products" },
                new Division { Name = "Nutraceuticals", Description = "Nutraceutical and wellness products" }
            );
            await db.SaveChangesAsync();
        }

        if (!await db.CompanyInfos.AnyAsync())
        {
            db.CompanyInfos.Add(new CompanyInfo
            {
                DrugLicenseNo = "DL-PLACEHOLDER",
                GstNo = "GST-PLACEHOLDER",
                Address = "123 Placeholder Street",
                City = "Hyderabad",
                State = "Telangana",
                Phone = "+91-0000000000",
                Email = "info@bvgklifesciences.com",
                FoundedYear = 2020
            });
            await db.SaveChangesAsync();
        }
    }
}
