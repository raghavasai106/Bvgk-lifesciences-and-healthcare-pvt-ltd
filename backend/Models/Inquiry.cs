namespace BvgkLifesciences.Api.Models;

public class Inquiry
{
    public int Id { get; set; }
    public string Type { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? Company { get; set; }
    public string? Phone { get; set; }
    public string Email { get; set; } = string.Empty;
    public string? Territory { get; set; }
    public string? Message { get; set; }
    public DateTimeOffset SubmittedAt { get; set; }
}
