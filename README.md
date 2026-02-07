# Sri Sri Shanmukhi Diagnostic Website

Startup-ready monorepo for a healthcare company website with:
- `frontend`: React (Vite) website
- `backend`: ASP.NET Core Web API (`C#`)

## Project Structure

```text
.
├── backend
│   ├── LifelineHealth.Api.csproj
│   ├── Program.cs
│   └── ...
└── frontend
    ├── package.json
    ├── src
    └── ...
```

## Pages Implemented

- Home
- About
- Services
- Contact

## API Endpoints Implemented

- `GET /api/health`
- `GET /api/company`
- `GET /api/services`
- `POST /api/contact`

## Local Development

### 1) Backend (C#)

Prerequisite: Install .NET 8 SDK

```bash
cd backend
dotnet restore
dotnet run
```

The API runs on `http://localhost:5204`.

### 2) Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and proxies `/api` calls to the backend.

## Deploy Strategy (Cost-first, Scale-ready)

1. Frontend: Deploy `frontend` to Cloudflare Pages
2. Backend: Deploy `backend` to Azure Container Apps (Consumption)
3. Database (future): Neon Postgres

### Backend Container Build

```bash
cd backend
docker build -t bvgk-pharma-api:latest .
```

## Next Build Steps

1. Add admin-friendly CMS fields for About/Services content.
2. Persist contact messages to a real database.
3. Add authentication for internal dashboard pages.
4. Add SEO metadata and schema markup.
