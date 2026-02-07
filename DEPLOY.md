# Deploy Sri Sri Shanmukhi Diagnostic Website

## Option 1: GitHub + Vercel (Easiest, Recommended)

### Step 1: Push to GitHub

```bash
# If not already initialized
git init
git add .
git commit -m "Initial commit - Sri Sri Shanmukhi Diagnostic website"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New** → **Project**
3. Import your GitHub repo
4. **Root Directory**: Set to `frontend` (important!)
5. **Build Command**: `npm run build`
6. **Output Directory**: `dist`
7. Click **Deploy**

Your site will be live in ~1 minute at `your-project.vercel.app`.

---

## Option 2: GitHub Pages

### Step 1: Configure for GitHub Pages

The repo is ready. Create a new repo on GitHub and push your code.

### Step 2: Build and Deploy

```bash
cd frontend
npm run build
```

### Step 3: Deploy with `gh-pages` (one-time setup)

```bash
npm install -g gh-pages
cd frontend
# Add to package.json "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
npx gh-pages -d dist
```

Or use **GitHub Actions** for auto-deploy on push—see [Vite GitHub Pages guide](https://vitejs.dev/guide/static-deploy.html#github-pages).

---

## Option 3: Netlify

Same as Vercel: connect GitHub repo, set **Base directory** to `frontend`, **Build command** `npm run build`, **Publish directory** `dist`.

---

## Note on Contact Form

The contact form calls `/api/contact` on the backend. For frontend-only hosting (Vercel, Netlify, GitHub Pages), the form will fail until you deploy the backend or connect to an API. For a base version, the site will be live and visitors can see your phone number (Ganesh Kowlasker - 96764 83331) and content.
