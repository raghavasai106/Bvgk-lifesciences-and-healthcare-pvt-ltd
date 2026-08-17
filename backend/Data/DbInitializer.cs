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
                new Division { Name = "Anti-Infectives & Critical Care", Description = "Injectable anti-infectives for severe and multidrug-resistant bacterial infections" },
                new Division { Name = "Critical Care Nutrition", Description = "Clinical nutrition support for critically ill patients — launching soon" },
                new Division { Name = "Oncology Nutrition", Description = "Nutrition support for oncology patients — launching soon" }
            );
            await db.SaveChangesAsync();
        }

        if (!await db.CompanyInfos.AnyAsync())
        {
            db.CompanyInfos.Add(new CompanyInfo
            {
                DrugLicenseNo = "Form 20B & Form 21B — TG/HYD/2026-151214",
                GstNo = "36AAOCB0928K1ZE",
                Address = "12-13-485/5/1, Street No. 14, Nagajunar Nagar Colony, Tarnaka",
                City = "Secunderabad",
                State = "Telangana",
                Phone = "+91 96764 83331 / +91 94401 13831",
                Email = "info@bvgklifesciences.com",
                FoundedYear = 2026
            });
            await db.SaveChangesAsync();
        }

        if (!await db.Products.AnyAsync())
        {
            var antiInfectives = await db.Divisions.FirstAsync(d => d.Name == "Anti-Infectives & Critical Care");
            db.Products.AddRange(
                new Product
                {
                    BrandName = "EMBLONAM",
                    Composition = "Aztreonam 1500 mg + Avibactam 500 mg",
                    Indication = "Severe or multidrug-resistant bacterial infections",
                    PackSize = "Single Vial",
                    DivisionId = antiInfectives.Id
                },
                new Product
                {
                    BrandName = "ESBLIPERA",
                    Composition = "Cefoperazone 1 g + Sulbactam 500 mg",
                    Indication = "Moderate to severe bacterial infections",
                    PackSize = "Single Vial",
                    DivisionId = antiInfectives.Id
                },
                new Product
                {
                    BrandName = "BEVYMER",
                    Composition = "Meropenem 1 g",
                    Indication = "Severe or multidrug-resistant bacterial infections",
                    PackSize = "Single Vial",
                    DivisionId = antiInfectives.Id
                },
                new Product
                {
                    BrandName = "TIGINYSE",
                    Composition = "Tigecycline 50 mg",
                    Indication = "Complicated skin and skin structure infections, complicated intra-abdominal infections, community acquired bacterial pneumonia",
                    PackSize = "Single Vial",
                    DivisionId = antiInfectives.Id
                },
                new Product
                {
                    BrandName = "PITOBLI",
                    Composition = "Piperacillin 4 g + Tazobactam 500 mg",
                    Indication = "Severe bacterial infections of the lungs, abdomen, skin, urinary tract",
                    PackSize = "Single Vial",
                    DivisionId = antiInfectives.Id
                }
            );
            await db.SaveChangesAsync();
        }

        if (!await db.Admins.AnyAsync())
        {
            db.Admins.Add(new Admin
            {
                Username = "admin",
                // Default password: Admin@123 — change after first login
                PasswordHash = "$2b$10$sBUgwpZBu4FBb5gDAJx9dOiO4uE4LLbehbz4HnBqSrnNl5P.n/Yla"
            });
            await db.SaveChangesAsync();
        }
    }
}
