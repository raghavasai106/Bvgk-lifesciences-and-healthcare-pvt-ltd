# BVGK Lifesciences and Healthcare Pvt Ltd

Monorepo for the BVGK Lifesciences and Healthcare Pvt Ltd company website with:
- `frontend`: React (Vite) SPA
- `backend`: ASP.NET Core Web API (C#, .NET 10)

## Project Structure

```text
.
├── backend
│   ├── BvgkLifesciences.Api.csproj
│   ├── Program.cs
│   ├── Data/
│   │   └── AppDbContext.cs
│   ├── Models/
│   │   ├── CompanyInfo.cs
│   │   ├── Division.cs
│   │   ├── Inquiry.cs
│   │   └── Product.cs
│   ├── Migrations/
│   └── ...
└── frontend
    ├── package.json
    ├── src
    └── ...
```

## Pages

- Home
- About
- Services
- Contact

## API Endpoints

- `GET  /api/health`
- `GET  /api/company`
- `GET  /api/products`
- `GET  /api/products/{id}`
- `GET  /api/divisions`
- `POST /api/inquiries`

## Local Development

### 1) Backend (C#)

Prerequisite: .NET 10 SDK and a running Postgres instance.

```bash
cd backend
dotnet restore
dotnet run
```

The API runs on `http://localhost:5204`.

Update the connection string in `appsettings.json` before running:

```json
"ConnectionStrings": {
  "Default": "Host=localhost;Database=bvgk_lifesciences;Username=postgres;Password=postgres"
}
```

Apply migrations:

```bash
dotnet ef database update
```

### 2) Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and proxies `/api` calls to the backend.

## Docker (Backend)

```bash
cd backend
docker build -t bvgk-lifesciences-api:latest .
```

## Deploy Strategy

1. Frontend: Vercel / Cloudflare Pages
2. Backend: Azure Container Apps (Consumption)
3. Database: Neon Postgres

## Next Steps

1. Seed initial CompanyInfo and Division data.
2. Add admin dashboard for managing products.
3. Add authentication for internal routes.
4. Add SEO metadata and schema markup.
