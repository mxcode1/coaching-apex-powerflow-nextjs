# 🚀 PowerFlow Deployment Guide

## ✅ Phase B Complete - Ready to Deploy!

Your Next.js application is ready to go live. Follow these steps to deploy to Vercel.

---

## 📋 Pre-Deployment Checklist

- [x] Next.js project created
- [x] API routes created (/api/contact, /api/join)
- [x] All static assets copied to public/
- [x] Form JavaScript updated to use API routes
- [x] Environment variables configured
- [x] Local testing complete
- [ ] **Get Resend API key** (Next step!)
- [ ] Push to GitHub
- [ ] Deploy to Vercel

---

## Step 1: Get Your Resend API Key

### Option A: Create Resend Account (Recommended - 5 minutes)

1. Go to: https://resend.com/signup
2. Sign up with your email or GitHub
3. Verify your email
4. Go to: https://resend.com/api-keys
5. Click "Create API Key"
6. Name it: "PowerFlow Production"
7. Copy the key (starts with `re_...`)
8. **Save it somewhere safe!** You'll need it for Vercel

### Option B: Test Without Email (Quick Demo)

You can deploy without Resend, but forms won't send emails. To test the UI:

1. Skip to Step 2
2. Deploy without `RESEND_API_KEY`
3. Forms will show errors but UI will work
4. Add API key later in Vercel dashboard

---

## Step 2: Push to GitHub

### If you don't have a GitHub repo yet:

```bash
# Navigate to project
cd "/Users/admin/Desktop/Dev/2026 - Projects/Template - Web Development Project Repository/powerflowhtml-10/powerflowhtml-10/PowerFlow/powerflow-nextjs"

# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - PowerFlow Next.js Phase B"

# Create repo on GitHub
# Go to: https://github.com/new
# Name: powerflow-nextjs
# Don't initialize with README
# Copy the URL

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/powerflow-nextjs.git
git branch -M main
git push -u origin main
```

### If you already have a repo:

```bash
cd "/Users/admin/Desktop/Dev/2026 - Projects/Template - Web Development Project Repository/powerflowhtml-10/powerflowhtml-10/PowerFlow/powerflow-nextjs"
git add .
git commit -m "Phase B complete - ready for deployment"
git push
```

---

## Step 3: Deploy to Vercel

### Method 1: Vercel Dashboard (Easiest)

1. **Go to Vercel**: https://vercel.com
2. **Sign in** with GitHub
3. **Click**: "Add New..." → "Project"
4. **Import** your GitHub repository
5. **Configure**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next` (default)

6. **Add Environment Variables**:
   Click "Environment Variables" and add:

   ```
   Name: RESEND_API_KEY
   Value: re_your_actual_key_here
   ```

   ```
   Name: RECIPIENT_EMAIL
   Value: mxdevelopment.code@gmail.com
   ```

7. **Click**: "Deploy"

8. **Wait** 2-3 minutes for build

9. **Get your URL**: `https://powerflow-nextjs-xxx.vercel.app`

### Method 2: Vercel CLI (Faster)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd "/Users/admin/Desktop/Dev/2026 - Projects/Template - Web Development Project Repository/powerflowhtml-10/powerflowhtml-10/PowerFlow/powerflow-nextjs"
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? powerflow-nextjs
# - Directory? ./
# - Override settings? No

# Add environment variables
vercel env add RESEND_API_KEY
# Paste your Resend API key when prompted
# Select: Production, Preview, Development

vercel env add RECIPIENT_EMAIL
# Enter: mxdevelopment.code@gmail.com
# Select: Production, Preview, Development

# Deploy to production
vercel --prod
```

---

## Step 4: Test Your Live Site

Once deployed, Vercel will give you a URL like:
`https://powerflow-nextjs-abc123.vercel.app`

### Test these pages:

1. **Homepage**: https://your-url.vercel.app/
   - Should redirect to index.html
   - All navigation should work

2. **Contact Page**: https://your-url.vercel.app/contact.html
   - Fill out the form
   - Submit
   - Check mxdevelopment.code@gmail.com for email

3. **Join Page**: https://your-url.vercel.app/join.html
   - Fill out membership form
   - Submit
   - Check email

4. **Other Pages**: Test all links
   - /about.html
   - /classes.html
   - /pricing.html
   - /schedule.html
   - /blog.html

---

## 🐛 Troubleshooting

### Deployment fails

**Error**: "Build failed"
- Check Vercel deployment logs
- Make sure all files are committed to GitHub
- Verify `package.json` is correct

**Error**: "Module not found"
```bash
# Reinstall dependencies
cd powerflow-nextjs
rm -rf node_modules package-lock.json
npm install
git add .
git commit -m "Fix dependencies"
git push
```

### Forms don't send emails

**Check**: Environment variables in Vercel
1. Go to Vercel Dashboard
2. Click your project
3. Go to Settings → Environment Variables
4. Verify `RESEND_API_KEY` and `RECIPIENT_EMAIL` are set

**Check**: Resend account
1. Go to https://resend.com/emails
2. Check if emails are being sent
3. Verify domain/API key is active

### Pages show 404

**Issue**: HTML files not in public folder
```bash
# Verify files exist
ls public/*.html

# If missing, re-copy
cd "/Users/admin/Desktop/Dev/2026 - Projects/Template - Web Development Project Repository/powerflowhtml-10/powerflowhtml-10/PowerFlow"
cp -r PowerFlow/*.html powerflow-nextjs/public/
```

---

## 🎉 Success Checklist

After deployment, verify:

- [ ] Homepage loads at your-url.vercel.app
- [ ] All 24 pages are accessible
- [ ] Navigation works between pages
- [ ] Contact form submits successfully
- [ ] Contact email received at mxdevelopment.code@gmail.com
- [ ] Join form submits successfully
- [ ] Join email received
- [ ] Images and videos load
- [ ] CSS styles apply correctly
- [ ] Mobile responsive works

---

## 📊 Your Live URLs

After deployment, update this section:

- **Production URL**: https://powerflow-nextjs-xxx.vercel.app
- **Homepage**: https://powerflow-nextjs-xxx.vercel.app/index.html
- **Contact**: https://powerflow-nextjs-xxx.vercel.app/contact.html
- **Join**: https://powerflow-nextjs-xxx.vercel.app/join.html

---

## 🔄 Updating Your Site

After making changes:

```bash
# Make your changes
# ...

# Commit and push
git add .
git commit -m "Description of changes"
git push

# Vercel will auto-deploy (if connected to GitHub)
# Or manually deploy with CLI:
vercel --prod
```

---

## 🎨 Next Steps

Once deployed and tested:

### Immediate:
- [ ] Share demo URL with stakeholders
- [ ] Test on mobile devices
- [ ] Verify all forms work
- [ ] Set up custom domain (optional)

### Phase C (When Ready):
- [ ] Convert contact/join pages to React
- [ ] Add clean URLs without .html
- [ ] Improve form UX with loading states
- [ ] Add form validation with Zod

### Future (Phase A):
- [ ] Full React migration
- [ ] Image optimization
- [ ] SEO improvements
- [ ] Analytics integration

---

## 🆘 Need Help?

**Issues with deployment?**
- Check Vercel deployment logs
- Review README.md in project
- Verify all environment variables

**Forms not working?**
- Test API routes: `your-url.vercel.app/api/contact`
- Check Resend dashboard
- Review browser console for errors

**General questions?**
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Resend Docs: https://resend.com/docs

---

**Ready to deploy? Let's go! 🚀**
