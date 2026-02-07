using LifelineHealth.Api.Models;

var builder = WebApplication.CreateBuilder(args);

var allowedOrigins = builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>() ?? [];
builder.Services.AddCors(options =>
{
  options.AddPolicy(
    "Frontend",
    policy =>
    {
      if (allowedOrigins.Length == 0)
      {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
        return;
      }

      policy.WithOrigins(allowedOrigins).AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();
var contactRequests = new List<ContactRequest>();

app.UseHttpsRedirection();
app.UseCors("Frontend");

app.MapGet("/api/health", () =>
  Results.Ok(new
  {
    status = "ok",
    timestamp = DateTimeOffset.UtcNow
  }));

app.MapGet("/api/company", () =>
  Results.Ok(new
  {
    name = "Sri Sri Shanmukhi Diagnostic",
    tagline = "Authorized service provider for Metropolis Pathology Lab. NABL & CAP accredited.",
    mission = "Build reliable healthcare supply infrastructure that scales with patient demand.",
    focusAreas = new[]
    {
      "Medical Distribution",
      "Pharma Operations",
      "Gene Diagnostic Center Enablement"
    }
  }));

app.MapGet("/api/services", () =>
  Results.Ok(new[]
  {
    new
    {
      id = "distribution",
      title = "Medical Product Distribution",
      description = "Reliable, traceable and schedule-driven delivery operations for facilities."
    },
    new
    {
      id = "pharma",
      title = "Pharma Fulfillment",
      description = "Inventory and partner support tailored for regulated pharma workflows."
    },
    new
    {
      id = "gene-diagnostics",
      title = "Gene Diagnostic Operations",
      description = "Supply and service support for labs, kits and gene diagnostic centers."
    }
  }));

app.MapPost("/api/contact", (ContactRequest request) =>
{
  if (string.IsNullOrWhiteSpace(request.Name) ||
      string.IsNullOrWhiteSpace(request.Email) ||
      string.IsNullOrWhiteSpace(request.Message))
  {
    return Results.BadRequest(new
    {
      message = "Name, email and message are required."
    });
  }

  var submission = request with
  {
    Name = request.Name.Trim(),
    Email = request.Email.Trim(),
    Phone = request.Phone.Trim(),
    Message = request.Message.Trim(),
    SubmittedAtUtc = DateTimeOffset.UtcNow
  };

  contactRequests.Add(submission);

  return Results.Ok(new
  {
    message = "Thanks for reaching out. Our team will get in touch soon."
  });
});

app.Run();
