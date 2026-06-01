using BvgkLifesciences.Api.Data;
using BvgkLifesciences.Api.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

var allowedOrigins = builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>() ?? [];
builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
    {
        if (allowedOrigins.Length == 0)
            policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
        else
            policy.WithOrigins(allowedOrigins).AllowAnyHeader().AllowAnyMethod();
    });
});

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("Default")));

var jwtSettings = builder.Configuration.GetSection("JwtSettings");
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = jwtSettings["Issuer"],
            ValidAudience = jwtSettings["Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(jwtSettings["SecretKey"]!))
        };
    });

builder.Services.AddAuthorization();
builder.Services.AddControllers();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
    await DbInitializer.SeedAsync(scope.ServiceProvider.GetRequiredService<AppDbContext>());

app.UseHttpsRedirection();
app.UseCors("Frontend");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.MapGet("/api/health", () =>
    Results.Ok(new { status = "ok", timestamp = DateTimeOffset.UtcNow }));

app.MapGet("/api/company", async (AppDbContext db) =>
{
    var info = await db.CompanyInfos.FirstOrDefaultAsync();
    return info is null ? Results.NotFound() : Results.Ok(info);
});

app.MapGet("/api/products", async (AppDbContext db) =>
    Results.Ok(await db.Products
        .Where(p => p.IsActive)
        .Include(p => p.Division)
        .ToListAsync()));

app.MapGet("/api/products/{id:int}", async (int id, AppDbContext db) =>
{
    var product = await db.Products
        .Include(p => p.Division)
        .FirstOrDefaultAsync(p => p.Id == id);
    return product is null ? Results.NotFound() : Results.Ok(product);
});

app.MapGet("/api/divisions", async (AppDbContext db) =>
    Results.Ok(await db.Divisions.ToListAsync()));

app.MapPost("/api/inquiries", async (InquiryRequest req, AppDbContext db) =>
{
    if (string.IsNullOrWhiteSpace(req.Name) || string.IsNullOrWhiteSpace(req.Email))
        return Results.BadRequest(new { message = "Name and email are required." });

    var inquiry = new Inquiry
    {
        Type = req.Type,
        Name = req.Name.Trim(),
        Company = req.Company?.Trim(),
        Phone = req.Phone?.Trim(),
        Email = req.Email.Trim(),
        Territory = req.Territory?.Trim(),
        Message = req.Message?.Trim(),
        SubmittedAt = DateTimeOffset.UtcNow
    };

    db.Inquiries.Add(inquiry);
    await db.SaveChangesAsync();
    return Results.Created($"/api/inquiries/{inquiry.Id}", inquiry);
});

app.MapGet("/api/inquiries", async (AppDbContext db) =>
    Results.Ok(await db.Inquiries
        .OrderByDescending(i => i.SubmittedAt)
        .ToListAsync()))
    .RequireAuthorization();

app.Run();

record InquiryRequest(
    string Type,
    string Name,
    string? Company,
    string? Phone,
    string Email,
    string? Territory,
    string? Message
);
