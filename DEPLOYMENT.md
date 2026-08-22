# 🚀 Vercel Deployment Guide

This guide details how to deploy the Ashutosh Basnet Portfolio on **Vercel** with full support for the Vite/React frontend and the Express/Supabase serverless backend.

---

## 🛠️ Architecture Overview

- **Frontend**: Vite + React 19 + Tailwind CSS + GSAP (compiled to `dist/`)
- **Backend**: Express Serverless API in `api/index.js` (endpoints at `/api/*`)
- **Database**: Supabase PostgreSQL (via `@supabase/supabase-js`)
- **Routing**: `vercel.json` routes `/api/*` to the serverless function and all other routes to `dist/index.html` (SPA fallback).

---

## Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Configure Vercel deployment and serverless API"
   git push origin main
   ```

2. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **Add New...** -> **Project**.
   - Select your repository (`Portfolio` or `ashutosh-basnet-portfolio`).

3. **Configure Build Settings**:
   - **Framework Preset**: Vite (detected automatically via `vercel.json`)
   - **Build Command**: `vite build` (or `npm run build`)
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Add Environment Variables**:
   In the **Environment Variables** section, add:
   | Key | Value | Description |
   |---|---|---|
   | `SUPABASE_URL` | `https://your-project-id.supabase.co` | Your Supabase project URL |
   | `SUPABASE_ANON_KEY` | `your-supabase-anon-key` | Your Supabase publishable/anon key |

   *(Note: If Supabase credentials are not provided, the API automatically falls back to curated mock data so your website continues to work flawlessly without breaking.)*

5. **Deploy**:
   - Click **Deploy**.
   - Vercel will build the frontend bundle and deploy the serverless functions in ~1 minute.

---

## Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy to Preview**:
   ```bash
   vercel
   ```

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

5. **Add Environment Variables via CLI**:
   ```bash
   vercel env add SUPABASE_URL
   vercel env add SUPABASE_ANON_KEY
   ```

---

## 🗄️ Database Setup (Supabase)

If setting up a new Supabase project:
1. Open the [Supabase SQL Editor](https://supabase.com/dashboard/project/_/sql).
2. Copy and run the contents of [`api/schema.sql`](file:///c:/Users/romen/Desktop/Islington/Potfolio/api/schema.sql) in the SQL Editor.
3. This creates:
   - `projects` table (pre-populated with academic projects)
   - `messages` table (to receive contact form inquiries)
   - Row-level security policies (public read for projects, public insert for contact messages)

---

## 📡 API Endpoints on Vercel

Once deployed, your backend functions are accessible at:
- `GET /api` - API Health & Service Information
- `GET /api/health` - Serverless runtime health check
- `GET /api/projects` - Fetches portfolio projects (Supabase or fallback)
- `POST /api/contact` - Submits a contact inquiry

---

## 💻 Local Development

To run both the frontend and API locally:

```bash
# Terminal 1: Start Express API server (Port 3001)
npm run api

# Terminal 2: Start Vite Dev Server (Port 5173 with proxy to 3001)
npm run dev
```
