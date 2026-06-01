namespace BvgkLifesciences.Api.Models;

public class CompanyInfo
{
    public int Id { get; set; }
    public string? DrugLicenseNo { get; set; }
    public string? GstNo { get; set; }
    public string? Address { get; set; }
    public string? City { get; set; }
    public string? State { get; set; }
    public string? Phone { get; set; }
    public string? Email { get; set; }
    public int? FoundedYear { get; set; }
}
