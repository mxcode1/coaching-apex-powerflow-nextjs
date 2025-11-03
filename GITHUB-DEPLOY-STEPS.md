# PowerFlow Next.js - GitHub & Vercel Deployment

## 🎯 You're Here: Push to GitHub

Your code is ready! Follow these steps:

### **Option 1: GitHub Web Interface (Easiest)**

1. **Go to GitHub**: https://github.com/new

2. **Create Repository**:
   - Repository name: `powerflow-nextjs`
   - Description: `PowerFlow Gym & Fitness - Next.js with API routes`
   - ✅ Public (or Private if you prefer)
   - ❌ **DO NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

3. **Copy the commands shown**, they'll look like:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/powerflow-nextjs.git
   git branch -M main
   git push -u origin main
   ```

4. **Run those commands in your terminal**

### **Option 2: GitHub CLI (Fastest)**

```bash
# Install GitHub CLI (if not installed)
brew install gh

# Login to GitHub
gh auth login

# Create repo and push
gh repo create powerflow-nextjs --public --source=. --remote=origin --push
```

---

## After Pushing to GitHub...

### **Deploy to Vercel**

1. **Go to Vercel**: https://vercel.com/new

2. **Import your GitHub repository**:
   - Click "Import Project"
   - Select "Import Git Repository"
   - Choose `powerflow-nextjs`

3. **Configure Project**:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave as is)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Add Environment Variables**:
   Click "Environment Variables" and add:

   **Variable 1:**
   - Name: `RESEND_API_KEY`
   - Value: `re_LszQYdLn_6D62vBJ3dCmF52GX6oFt9zxj`
   - Environment: ✅ Production, ✅ Preview, ✅ Development

   **Variable 2:**
   - Name: `RECIPIENT_EMAIL`
   - Value: `mxdevelopment.code@gmail.com`
   - Environment: ✅ Production, ✅ Preview, ✅ Development

5. **Click "Deploy"**

6. **Wait 2-3 minutes** for build to complete

7. **Get your live URL**: `https://powerflow-nextjs-xxx.vercel.app`

---

## 🎉 Your Site is Live!

Test these URLs:
- Homepage: `https://your-url.vercel.app/index.html`
- Contact Form: `https://your-url.vercel.app/contact.html`
- Join Form: `https://your-url.vercel.app/join.html`

---

## 🔧 Quick Commands Reference

```bash
# View current directory
pwd

# Check git status
git status

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/powerflow-nextjs.git

# Push to GitHub
git push -u origin main

# Deploy to Vercel (if using CLI)
npm install -g vercel
vercel --prod
```

---

## ⚠️ Important Notes

- Your `.env.local` is NOT pushed to GitHub (protected by .gitignore)
- You MUST add environment variables in Vercel dashboard
- Test forms after deployment to verify email sending works
- Check spam folder for test emails

---

## 🆘 Troubleshooting

**Can't push to GitHub?**
```bash
# Make sure you're authenticated
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Try HTTPS instead of SSH
git remote set-url origin https://github.com/YOUR_USERNAME/powerflow-nextjs.git
```

**Vercel build fails?**
- Check environment variables are set correctly
- Verify both keys are added to Vercel
- Check deployment logs in Vercel dashboard

**Forms don't work on Vercel?**
- Verify `RESEND_API_KEY` is correct in Vercel
- Check browser console for errors
- Test API endpoint directly: `your-url.vercel.app/api/contact`

---

Ready to proceed? Let me know when you've created the GitHub repo!
