# GitHub Pages Deployment Guide

## Step-by-Step Instructions

### 1. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` (or `your-username.github.io`)
3. Description: "DevOps Portfolio Website"
4. Choose **Public** (required for free GitHub Pages)
5. **DO NOT** check "Add a README file" (we already have one)
6. Click **"Create repository"**

### 2. Push Your Code

After creating the repository, GitHub will show you commands. Use these:

```bash
# Make initial commit
git commit -m "Initial commit: DevOps Portfolio Website"

# Rename branch to main (if needed)
git branch -M main

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Example:**
If your username is `surajpawar` and repo is `portfolio`:
```bash
git remote add origin https://github.com/surajpawar/portfolio.git
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**:
   - Select **main** branch
   - Select **/ (root)** folder
5. Click **Save**
6. Wait 1-2 minutes for deployment

### 4. Access Your Live Site

Your portfolio will be available at:
- `https://YOUR_USERNAME.github.io/REPO_NAME`

**Example:**
- `https://surajpawar.github.io/portfolio`

### 5. Custom Domain (Optional)

If you want to use a custom domain (e.g., `surajpawar.dev`):

1. Create a file named `CNAME` (no extension) in the root directory
2. Add your domain name inside: `surajpawar.dev`
3. Commit and push the file
4. Configure DNS settings as per GitHub Pages documentation

---

## Quick Commands Summary

```bash
# Commit files
git commit -m "Initial commit: DevOps Portfolio Website"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin main
```

Then enable GitHub Pages in repository settings!
