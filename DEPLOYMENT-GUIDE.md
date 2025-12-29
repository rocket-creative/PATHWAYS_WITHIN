# Vercel Deployment Guide

Deploy all 3 Pathways Within sites from this single GitHub repository.

---

## Overview

| Site | Folder | Domain |
|------|--------|--------|
| Landing | `apps/landing` | pathwayswithin.com |
| Therapy | `apps/therapy` | pathwayswithintherapy.com |
| Wellness | `apps/wellness` | pathwayswithinwellness.com |

---

## Step 1: Push to GitHub

1. Create a new GitHub repository (e.g., `pathways-within-sites`)
2. Push this entire project:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/pathways-within-sites.git
git push -u origin main
```

---

## Step 2: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. This automatically links your repositories

---

## Step 3: Deploy Landing Site

1. Click **"Add New Project"** in Vercel dashboard
2. Select your `pathways-within-sites` repository
3. Configure the project:

| Setting | Value |
|---------|-------|
| **Project Name** | `pathways-landing` |
| **Framework Preset** | Next.js |
| **Root Directory** | `apps/landing` ← Click "Edit" and type this |
| **Build Command** | (leave default) |
| **Output Directory** | (leave default) |

4. Click **"Deploy"**
5. Wait for build to complete (~2-3 minutes)

---

## Step 4: Deploy Therapy Site

1. Go back to Vercel dashboard
2. Click **"Add New Project"** again
3. Select the **same repository** (`pathways-within-sites`)
4. Configure:

| Setting | Value |
|---------|-------|
| **Project Name** | `pathways-therapy` |
| **Framework Preset** | Next.js |
| **Root Directory** | `apps/therapy` |

5. Click **"Deploy"**

---

## Step 5: Deploy Wellness Site

1. Click **"Add New Project"** again
2. Select the **same repository**
3. Configure:

| Setting | Value |
|---------|-------|
| **Project Name** | `pathways-wellness` |
| **Framework Preset** | Next.js |
| **Root Directory** | `apps/wellness` |

4. Click **"Deploy"**

---

## Step 6: Add Custom Domains

For each project:

1. Go to **Project Settings** → **Domains**
2. Add your custom domain
3. Vercel will show DNS records to add

### DNS Configuration

Add these records at your domain registrar (GoDaddy, Namecheap, etc.):

**For root domain (pathwayswithin.com):**
| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |

**For www subdomain:**
| Type | Name | Value |
|------|------|-------|
| CNAME | www | cname.vercel-dns.com |

Repeat for each domain.

---

## Step 7: Enable HTTPS

Vercel automatically provisions SSL certificates. Just wait 5-10 minutes after adding the domain.

---

## After Initial Setup

### Automatic Deployments

Once set up, every push to GitHub automatically deploys all 3 sites:

```
Push to GitHub → Vercel detects changes → Rebuilds affected sites → Live in ~2 min
```

### Preview Deployments

Every pull request gets a preview URL:
- `pathways-landing-git-feature-branch.vercel.app`
- `pathways-therapy-git-feature-branch.vercel.app`
- `pathways-wellness-git-feature-branch.vercel.app`

---

## Environment Variables (Optional)

If you need environment variables later (API keys, etc.):

1. Go to **Project Settings** → **Environment Variables**
2. Add variables for each environment:
   - Production
   - Preview
   - Development

Common variables you might add later:
- `RESEND_API_KEY` - For contact form emails
- `NEXT_PUBLIC_SITE_URL` - The site's public URL

---

## Troubleshooting

### Build Fails

1. Check the build logs in Vercel
2. Common issues:
   - Missing dependencies: Run `npm install` locally first
   - TypeScript errors: Run `npm run build` locally to see errors

### Domain Not Working

1. DNS propagation can take up to 48 hours
2. Use [dnschecker.org](https://dnschecker.org) to verify DNS records
3. Make sure you added records for both `@` and `www`

### Changes Not Showing

1. Check if the deploy completed in Vercel dashboard
2. Hard refresh your browser (Cmd+Shift+R or Ctrl+Shift+R)
3. Check you pushed to the correct branch (usually `main`)

---

## Project Structure Reference

```
pathways-within-sites/
├── apps/
│   ├── landing/          ← pathwayswithin.com
│   │   ├── app/
│   │   ├── public/
│   │   ├── package.json
│   │   └── vercel.json
│   │
│   ├── therapy/          ← pathwayswithintherapy.com
│   │   ├── app/
│   │   ├── data/         ← Team CSV/JSON
│   │   ├── public/team/  ← Team photos
│   │   ├── package.json
│   │   └── vercel.json
│   │
│   └── wellness/         ← pathwayswithinwellness.com
│       ├── app/
│       ├── data/         ← Team CSV/JSON
│       ├── public/team/  ← Team photos
│       ├── package.json
│       └── vercel.json
│
├── packages/
│   └── shared/           ← Shared components
│
├── scripts/
│   └── build-team-data.js
│
└── package.json
```

---

## Monthly Cost Estimate

Vercel Hobby (Free) plan includes:
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Unlimited deployments
- ✅ Preview deployments

For most small business sites, the free plan is sufficient. Pro plan ($20/month) adds:
- More bandwidth
- Team collaboration
- Password protection for previews
- Advanced analytics

---

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)

---

*Last updated: December 2024*

