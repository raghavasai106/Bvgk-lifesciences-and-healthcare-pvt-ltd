using Microsoft.EntityFrameworkCore;
using BvgkLifesciences.Api.Models;

namespace BvgkLifesciences.Api.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
    public DbSet<Division> Divisions => Set<Division>();
    public DbSet<Inquiry> Inquiries => Set<Inquiry>();
    public DbSet<CompanyInfo> CompanyInfos => Set<CompanyInfo>();
    public DbSet<Admin> Admins => Set<Admin>();
}
