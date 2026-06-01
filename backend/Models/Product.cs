namespace BvgkLifesciences.Api.Models;

public class Product
{
    public int Id { get; set; }
    public string BrandName { get; set; } = string.Empty;
    public string Composition { get; set; } = string.Empty;
    public string? Indication { get; set; }
    public string? PackSize { get; set; }
    public string? StorageConditions { get; set; }
    public bool IsActive { get; set; } = true;
    public int DivisionId { get; set; }
    public Division Division { get; set; } = null!;
}
