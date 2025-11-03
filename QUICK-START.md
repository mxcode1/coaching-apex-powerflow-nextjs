# ⚡ PowerFlow Quick Reference

## 🎯 Current Status: Phase B Complete ✅

Your Next.js PowerFlow demo is **READY TO DEPLOY**!

---

## 🚀 Quick Commands

```bash
# Start dev server
cd powerflow-nextjs && npm run dev

# Visit locally
http://localhost:3002  # (or 3000 if available)

# Deploy to Vercel
vercel --prod

# Push to GitHub
git add . && git commit -m "Update" && git push
```

---

## 📍 What You Have Now

| Feature | Status | Details |
|---------|--------|---------|
| **HTML Pages** | ✅ Working | All 24 pages in public/ |
| **Contact Form** | ✅ Ready | /api/contact endpoint |
| **Join Form** | ✅ Ready | /api/join endpoint |
| **Email Service** | ⚠️ Needs Key | Resend setup required |
| **Deploy Ready** | ✅ Yes | Push to GitHub → Vercel |

---

## 🔑 Next Immediate Steps

### 1. Get Resend API Key (5 min)
```
1. Visit: https://resend.com/signup
2. Create account
3. Get API key from: https://resend.com/api-keys
4. Copy key (starts with re_...)
```

### 2. Update .env.local
```bash
RESEND_API_KEY=re_your_actual_key_here
RECIPIENT_EMAIL=mxdevelopment.code@gmail.com
```

### 3. Test Locally
```
1. Visit: http://localhost:3002/contact.html
2. Fill form and submit
3. Check email: mxdevelopment.code@gmail.com
```

### 4. Deploy to Vercel
```
See DEPLOYMENT.md for full instructions
Quick: vercel --prod
```

---

## 📂 File Locations

```
powerflow-nextjs/
├── .env.local           ← Add your Resend key here
├── README.md            ← Full documentation
├── DEPLOYMENT.md        ← Deployment guide
│
├── app/
│   ├── api/
│   │   ├── contact/     ← Contact form API
│   │   └── join/        ← Join form API
│   └── page.tsx         ← Root redirect
│
└── public/
    ├── index.html       ← Homepage
    ├── contact.html     ← Contact page
    ├── join.html        ← Join page
    ├── css/             ← Styles
    ├── js/              ← Scripts
    └── images/          ← Assets
```

---

## 🌐 URL Structure

### Local (Dev)
```
http://localhost:3002/                  → redirects to index.html
http://localhost:3002/index.html        → Homepage
http://localhost:3002/contact.html      → Contact
http://localhost:3002/join.html         → Join
http://localhost:3002/api/contact       → Contact API
http://localhost:3002/api/join          → Join API
```

### Production (Vercel)
```
https://your-project.vercel.app/        → Same structure
```

---

## 🎨 Phase Roadmap

### ✅ Phase B (Current) - COMPLETE
- All HTML pages working
- API routes for forms
- Email integration ready
- Deploy to Vercel ready

### 🔜 Phase C (Future - 2-3 hrs)
- Convert contact.html → React page
- Convert join.html → React page
- Clean URLs (/contact, /join)
- Better form UX

### 🚀 Phase A (Future - 1-2 days)
- All pages → React components
- Shared layouts
- Image optimization
- Full Next.js features

---

## 📧 Email Configuration

### Recipients (Configurable)
```
Default: mxdevelopment.code@gmail.com
Change in: .env.local (RECIPIENT_EMAIL)
```

### Email Templates
```
Contact: app/api/contact/route.ts
Join:    app/api/join/route.ts
```

### Resend Free Tier
```
✅ 100 emails/day
✅ 3,000 emails/month
✅ Perfect for demos
```

---

## ✅ Pre-Flight Checklist

Before deploying:
- [ ] Resend API key obtained
- [ ] .env.local updated with key
- [ ] Tested forms locally
- [ ] Committed code to GitHub
- [ ] Environment variables ready for Vercel

---

## 🆘 Quick Fixes

### Server won't start
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Forms don't work
```bash
# Check .env.local exists
cat .env.local

# Restart server
# Stop: Ctrl+C
npm run dev
```

### Pages 404
```bash
# Verify files
ls public/*.html

# Should see all HTML files
```

---

## 📱 Test URLs

Test these after deployment:

```
✅ Homepage:     your-url.vercel.app/index.html
✅ About:        your-url.vercel.app/about.html
✅ Classes:      your-url.vercel.app/classes.html
✅ Pricing:      your-url.vercel.app/pricing.html
✅ Schedule:     your-url.vercel.app/schedule.html
✅ Blog:         your-url.vercel.app/blog.html
✅ Contact:      your-url.vercel.app/contact.html ← TEST FORM
✅ Join:         your-url.vercel.app/join.html    ← TEST FORM
```

---

## 💡 Pro Tips

1. **Test forms locally first** before deploying
2. **Save your Resend API key** somewhere safe
3. **Use Vercel dashboard** to manage environment variables
4. **Check email spam folder** when testing
5. **Commit often** to track changes

---

## 📞 Support Resources

- **README.md** - Full documentation
- **DEPLOYMENT.md** - Step-by-step deployment
- **Next.js**: https://nextjs.org/docs
- **Resend**: https://resend.com/docs
- **Vercel**: https://vercel.com/docs

---

**You're ready to go live! 🚀**
