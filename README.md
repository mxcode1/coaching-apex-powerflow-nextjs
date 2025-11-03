# PowerFlow - Next.js VersionThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



## Phase B: Minimal Migration (Demo Ready)## Getting Started



This is a Next.js-powered version of the PowerFlow Gym & Fitness template with working form submissions via API routes.First, run the development server:



## 🚀 Quick Start```bash

npm run dev

### 1. Install Dependencies# or

yarn dev

```bash# or

npm installpnpm dev

```# or

bun dev

### 2. Setup Environment Variables```



Get your Resend API key from: https://resend.com/api-keysOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.



Then update `.env.local`:You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.



```bashThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

RESEND_API_KEY=re_your_actual_api_key_here

RECIPIENT_EMAIL=mxdevelopment.code@gmail.com## Learn More

```

To learn more about Next.js, take a look at the following resources:

### 3. Run Development Server

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

```bash- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

npm run dev

```You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!



Visit: http://localhost:3000## Deploy on Vercel



## 📋 FeaturesThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.



✅ All 24 HTML pages workingCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

✅ Contact form with email integration
✅ Join/Membership form with email integration
✅ All original CSS, JavaScript, and assets preserved
✅ Ready to deploy to Vercel

## 📁 Project Structure

```
powerflow-nextjs/
├── app/
│   ├── api/
│   │   ├── contact/route.ts   # Contact form API endpoint
│   │   └── join/route.ts      # Join form API endpoint
│   └── page.tsx               # Redirects to index.html
├── public/
│   ├── *.html                 # All HTML pages
│   ├── css/                   # Stylesheets
│   ├── js/                    # JavaScript files
│   ├── images/                # Images
│   ├── fonts/                 # Icon fonts
│   └── video/                 # Background videos
└── .env.local                 # Environment variables
```

## 🌐 Accessing Pages

- Homepage: http://localhost:3000/ or http://localhost:3000/index.html
- About: http://localhost:3000/about.html
- Contact: http://localhost:3000/contact.html
- Join: http://localhost:3000/join.html
- Classes: http://localhost:3000/classes.html
- Pricing: http://localhost:3000/pricing.html
- Blog: http://localhost:3000/blog.html
- Schedule: http://localhost:3000/schedule.html

## 📧 Setting up Resend

1. Go to https://resend.com
2. Sign up for a free account (100 emails/day)
3. Go to API Keys section
4. Create a new API key
5. Copy the key to your `.env.local` file

## 🚢 Deploying to Vercel

### Option 1: GitHub + Vercel (Recommended)

1. Push to GitHub:
```bash
git add .
git commit -m "Initial commit - Phase B complete"
git push
```

2. Go to https://vercel.com
3. Click "Import Project"
4. Select your GitHub repository
5. Add environment variables:
   - `RESEND_API_KEY`: Your Resend API key
   - `RECIPIENT_EMAIL`: mxdevelopment.code@gmail.com
6. Click "Deploy"

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts and add environment variables when asked.

## 🔧 Configuration

### Change Email Recipient

Edit `.env.local`:
```
RECIPIENT_EMAIL=your-email@example.com
```

### Customize Email Templates

Edit these files:
- `app/api/contact/route.ts` - Contact form email template
- `app/api/join/route.ts` - Join form email template

## 📝 Testing Forms Locally

1. Make sure `.env.local` has a valid Resend API key
2. Start the dev server: `npm run dev`
3. Go to http://localhost:3000/contact.html
4. Fill out and submit the form
5. Check your email (mxdevelopment.code@gmail.com)

## 🎨 Next Steps (Future Phases)

### Phase C: Hybrid (2-3 hours)
- Convert contact.html and join.html to React components
- Add clean URLs (/contact, /join)
- Better form UX with loading states

### Phase A: Full Migration (1-2 days)
- Convert all pages to React components
- Add Next.js routing
- Optimize images
- Shared layouts and components

## 🐛 Troubleshooting

### Forms not sending emails

1. Check `.env.local` has valid `RESEND_API_KEY`
2. Check browser console for errors
3. Check terminal for API errors
4. Verify Resend account is active

### Pages not loading

1. Make sure all files are in `public/` folder
2. Access pages with `.html` extension
3. Check browser console for 404 errors

### Vercel deployment issues

1. Make sure environment variables are set in Vercel dashboard
2. Check deployment logs
3. Verify all files were uploaded

## 📞 Support

For issues with:
- **Next.js**: https://nextjs.org/docs
- **Resend**: https://resend.com/docs
- **Vercel**: https://vercel.com/docs

## 📄 License

Original PowerFlow template license applies.
