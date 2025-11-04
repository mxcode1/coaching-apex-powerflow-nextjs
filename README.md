# PowerFlow - Full Stack Fitness & Coaching Platform

A comprehensive Next.js web application for fitness studios, personal trainers, and wellness coaches. Built with **Next.js 16** and **Sanity CMS** for scalable content management and modern web performance.

## 🚀 Live Demo & Deployment

**Vercel Deployment**: Your app is configured for seamless Vercel deployment!

### Quick Deploy to Vercel

1. **Push to GitHub** (already done! ✅)
2. **Import to Vercel**: [vercel.com/new](https://vercel.com/new)
3. **Set Environment Variables** (see below)
4. **Deploy!**

### Required Environment Variables for Vercel

```bash
# Content Source (use 'json' for guaranteed build success)
CONTENT_SOURCE=json

# Optional - Sanity CMS (for future dynamic content)
NEXT_PUBLIC_SANITY_PROJECT_ID=pmybjuoo
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Optional - Email Integration
RESEND_API_KEY=your_resend_api_key
RECIPIENT_EMAIL=your_email@example.com
```

**Important**: Set these for **Production**, **Preview**, and **Development** environments in Vercel.

## 🎯 After Deployment

Once your site is live on Vercel:

1. **Visit Your Site**: `https://your-project.vercel.app`
2. **Access Sanity Studio**: `https://your-project.vercel.app/studio`
3. **Test Forms**: Try the contact form at `/contact`
4. **Explore Content**: Browse all pages and features

### Switching to Dynamic CMS (Optional)

To enable live content editing via Sanity Studio:

1. Visit `/studio` on your deployed site
2. Ensure Sanity project is set up with content
3. Update Vercel environment variable: `CONTENT_SOURCE=sanity`
4. Redeploy

📖 **See [VERCEL-DEPLOYMENT.md](./VERCEL-DEPLOYMENT.md) for detailed deployment guide**

---

## 🏗️ Technical Stack

- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - Latest React with concurrent features
- **TypeScript 5.x** - Type-safe development
- **Sanity CMS 4.13.0** - Headless CMS for content management
- **Resend 6.4.0** - Modern email API for forms
- **Bootstrap 5.x** - Responsive CSS framework

## 🚦 Getting Started Locally

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Setup Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```bash
# Content source
CONTENT_SOURCE=json  # or 'sanity' for CMS

# Email configuration (get key from resend.com)
RESEND_API_KEY=your_key_here
RECIPIENT_EMAIL=your_email@example.com

# Sanity (optional for local dev)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Access Sanity Studio (Optional)

```bash
npm run sanity
# or visit http://localhost:3000/studio after starting dev server
```

## 📋 Key Features

✅ **Responsive Design** - Mobile-first, works on all devices  
✅ **Contact Form** - Email integration with Resend API  
✅ **Membership Forms** - Join/registration with email notifications  
✅ **Blog System** - Full blog with categories and featured posts  
✅ **Class Schedules** - Weekly timetables and booking  
✅ **Pricing Plans** - Flexible membership tiers  
✅ **Sanity CMS** - Live content editing via `/studio`  
✅ **SEO Optimized** - Meta tags and semantic HTML  
✅ **TypeScript** - Type-safe codebase  

## 📁 Project Structure

```
apex-coaching-platform-cms-nextjs/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Homepage
│   ├── about/                    # About page
│   ├── blog/                     # Blog pages
│   ├── classes/                  # Services/Classes
│   ├── contact/                  # Contact page
│   ├── join/                     # Membership signup
│   ├── pricing/                  # Pricing plans
│   ├── schedule/                 # Class schedules
│   ├── studio/                   # Sanity Studio (embedded)
│   └── api/                      # API routes
│       ├── contact/              # Contact form handler
│       ├── join/                 # Join form handler
│       └── sanity/               # Sanity utilities
├── components/                   # React components
│   ├── forms/                    # Form components
│   └── layout/                   # Layout components
├── content/                      # Static JSON content
│   ├── homepage.ts
│   ├── pricing.ts
│   └── services.ts
├── lib/                          # Utilities and configs
│   ├── content/                  # Content source abstraction
│   │   ├── sources/              # JSON & Sanity sources
│   │   ├── index.ts              # Content API
│   │   └── types.ts              # TypeScript types
│   └── sanity/                   # Sanity client & schemas
├── public/                       # Static assets
│   ├── images/                   # Images and media
│   ├── css/                      # Additional styles
│   └── js/                       # Legacy scripts
├── .env.local                    # Environment variables (create this)
├── .env.example                  # Example env file
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── VERCEL-DEPLOYMENT.md          # Deployment guide
└── README.md                     # This file
```

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server (port 3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run sanity       # Start Sanity Studio
npm run import-content      # Import example content to Sanity
npm run check-content       # Check Sanity content status
```

## 🎨 Customization

### Content Management

**Option A: JSON Source (Default)**
- Edit files in `/content/` directory
- Changes require code deployment
- Fast builds, no external dependencies

**Option B: Sanity CMS (Recommended for Production)**
- Edit content via Studio at `/studio`
- Real-time updates without deployment
- Collaborative content editing

### Styling

- Global styles: `app/globals.css`
- Component styles: Individual CSS modules
- Bootstrap theme: Customize in `/public/css/`

### Branding

- Logo: Replace files in `/public/images/logo/`
- Colors: Update CSS variables in `globals.css`
- Content: Edit via Sanity Studio or JSON files

## 📧 Email Setup (Resend)

1. Create account at [resend.com](https://resend.com)
2. Get API key (free tier: 100 emails/day)
3. Add to `.env.local`:
   ```bash
   RESEND_API_KEY=re_your_key_here
   RECIPIENT_EMAIL=your_email@example.com
   ```
4. Customize email templates in:
   - `app/api/contact/route.ts`
   - `app/api/join/route.ts`

## 🐛 Troubleshooting

### Build Fails on Vercel

**Solution**: Ensure `CONTENT_SOURCE=json` in environment variables

### Forms Not Working

**Solution**: 
1. Check `RESEND_API_KEY` is set
2. Verify API key is active
3. Check browser console for errors

### Sanity Studio Won't Load

**Solution**:
1. Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct
2. Check Sanity project exists at [sanity.io/manage](https://sanity.io/manage)
3. Ensure project has proper CORS settings

### Content Not Appearing

**Solution**:
- Using JSON source: Check files in `/content/`
- Using Sanity: Run `npm run import-content` to populate CMS

## 📚 Documentation

- **Deployment Guide**: [VERCEL-DEPLOYMENT.md](./VERCEL-DEPLOYMENT.md)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Sanity Docs**: [sanity.io/docs](https://www.sanity.io/docs)
- **Resend Docs**: [resend.com/docs](https://resend.com/docs)

## 🤝 Support

For issues or questions:
- Check [VERCEL-DEPLOYMENT.md](./VERCEL-DEPLOYMENT.md) for deployment help
- Review Next.js documentation for framework questions
- Contact Sanity support for CMS issues

## 📄 License

This template is provided for commercial and personal use. Customize freely for your fitness business needs.

---

**Built with ❤️ using Next.js, Sanity CMS, and modern web technologies**



### Page StructureTo learn more about Next.js, take a look at the following resources:

- **Homepage** (`/`) - Hero section, services overview, testimonials

- **About** (`/about`) - Studio information and philosophy### 3. Run Development Server

- **Services** (`/classes`) - Class listings and service details

- **Pricing** (`/pricing`) - Membership plans and packages- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- **Schedule** (`/schedule`) - Weekly class timetables

- **Blog** (`/blog`) - Content marketing and articles```bash- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

- **Contact** (`/contact`) - Contact information and inquiry form

- **Join** (`/join`) - Membership signup and registrationnpm run dev



## Content Management Features```You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!



### Automated Content Population

The system includes intelligent content initialization that automatically populates the CMS with example content when first launched. All generated content is clearly labeled with prefixes for easy identification and replacement.

Visit: http://localhost:3000## Deploy on Vercel

### Content Types

- **Services & Classes** - Fitness programs with pricing, duration, and difficulty levels

- **Pricing Plans** - Membership tiers with feature comparisons

- **Testimonials** - Client reviews with ratings and photos## 📋 FeaturesThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

- **Blog Posts** - SEO-optimized articles with categories and featured images

- **Schedule Items** - Weekly class schedules with instructor information

- **Homepage Settings** - Hero content, about sections, and call-to-action buttons

✅ All 24 HTML pages workingCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Studio Features

- Dark mode interface (enabled by default)✅ Contact form with email integration

- Live preview functionality for all content types✅ Join/Membership form with email integration

- Structured content organization with intuitive navigation✅ All original CSS, JavaScript, and assets preserved

- Real-time collaborative editing✅ Ready to deploy to Vercel

- Media asset management with Sanity's CDN

## 📁 Project Structure

## Development Environment

```

### Environment Variablespowerflow-nextjs/

Create a `.env.local` file in the project root:├── app/

│   ├── api/

```env│   │   ├── contact/route.ts   # Contact form API endpoint

# Sanity Configuration│   │   └── join/route.ts      # Join form API endpoint

NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id│   └── page.tsx               # Redirects to index.html

NEXT_PUBLIC_SANITY_DATASET=production├── public/

SANITY_API_TOKEN=your_api_token│   ├── *.html                 # All HTML pages

│   ├── css/                   # Stylesheets

# Content Source Toggle│   ├── js/                    # JavaScript files

CONTENT_SOURCE=sanity  # or 'json' for development│   ├── images/                # Images

│   ├── fonts/                 # Icon fonts

# Email Configuration (Resend)│   └── video/                 # Background videos

RESEND_API_KEY=your_resend_key└── .env.local                 # Environment variables

RESEND_FROM_EMAIL=noreply@yourdomain.com```

RESEND_TO_EMAIL=admin@yourdomain.com

```## 🌐 Accessing Pages



### Available Scripts- Homepage: http://localhost:3000/ or http://localhost:3000/index.html

- About: http://localhost:3000/about.html

#### Primary Commands- Contact: http://localhost:3000/contact.html

```bash- Join: http://localhost:3000/join.html

npm run dev          # Start Next.js development server (port 3000)- Classes: http://localhost:3000/classes.html

npm run sanity       # Start Sanity Studio with content checking (port 3333)- Pricing: http://localhost:3000/pricing.html

npm run build        # Build production application- Blog: http://localhost:3000/blog.html

npm run start        # Start production server- Schedule: http://localhost:3000/schedule.html

```

## 📧 Setting up Resend

#### Content Management

```bash1. Go to https://resend.com

npm run import-content       # Import example content (safe mode)2. Sign up for a free account (100 emails/day)

npm run import-content:force # Force import, replacing existing content3. Go to API Keys section

npm run check-content        # Check existing content without importing4. Create a new API key

```5. Copy the key to your `.env.local` file



#### Development Tools## 🚢 Deploying to Vercel

```bash

npm run lint         # Run ESLint for code quality checks### Option 1: GitHub + Vercel (Recommended)

```

1. Push to GitHub:

## Getting Started```bash

git add .

### Prerequisitesgit commit -m "Initial commit - Phase B complete"

- Node.js 20 or latergit push

- npm or yarn package manager```

- Sanity account (free tier available)

2. Go to https://vercel.com

### Installation Steps3. Click "Import Project"

4. Select your GitHub repository

1. **Clone and Install**5. Add environment variables:

   ```bash   - `RESEND_API_KEY`: Your Resend API key

   git clone <repository-url>   - `RECIPIENT_EMAIL`: mxdevelopment.code@gmail.com

   cd powerflow-nextjs6. Click "Deploy"

   npm install

   ```### Option 2: Vercel CLI



2. **Sanity Setup**```bash

   - Create a new project at [sanity.io](https://sanity.io)npm install -g vercel

   - Note your Project ID and Dataset namevercel

   - Generate an API token with Editor permissions```



3. **Environment Configuration**Follow the prompts and add environment variables when asked.

   - Copy `.env.example` to `.env.local`

   - Add your Sanity credentials## 🔧 Configuration

   - Configure email settings (optional for development)

### Change Email Recipient

4. **Start Development Servers**

   ```bashEdit `.env.local`:

   # Terminal 1: Next.js Frontend```

   npm run devRECIPIENT_EMAIL=your-email@example.com

   ```

   # Terminal 2: Sanity Studio

   npm run sanity### Customize Email Templates

   ```

Edit these files:

5. **Access Applications**- `app/api/contact/route.ts` - Contact form email template

   - Frontend: `http://localhost:3000`- `app/api/join/route.ts` - Join form email template

   - CMS Studio: `http://localhost:3333`

## 📝 Testing Forms Locally

### Initial Content Setup

1. Make sure `.env.local` has a valid Resend API key

On first launch, the system will automatically detect an empty CMS and populate it with example content including services, pricing plans, testimonials, and blog posts. This content is clearly labeled and can be easily replaced with your actual business information.2. Start the dev server: `npm run dev`

3. Go to http://localhost:3000/contact.html

### Customization4. Fill out and submit the form

5. Check your email (mxdevelopment.code@gmail.com)

#### Branding & Styling

- Update logo files in `/public/images/`## 🎨 Next Steps (Future Phases)

- Modify color schemes in `/app/globals.css`

- Customize component styling in individual CSS files### Phase C: Hybrid (2-3 hours)

- Convert contact.html and join.html to React components

#### Content Structure- Add clean URLs (/contact, /join)

- Modify Sanity schemas in `/lib/sanity/schemas/`- Better form UX with loading states

- Update content types and field requirements

- Rebuild and deploy schema changes### Phase A: Full Migration (1-2 days)

- Convert all pages to React components

#### Email Configuration- Add Next.js routing

- Set up Resend account for form submissions- Optimize images

- Configure email templates in API routes- Shared layouts and components

- Test contact and registration forms

## 🐛 Troubleshooting

### Deployment

### Forms not sending emails

#### Vercel (Recommended)

1. Connect GitHub repository to Vercel1. Check `.env.local` has valid `RESEND_API_KEY`

2. Add environment variables to Vercel dashboard2. Check browser console for errors

3. Deploy automatically on git push3. Check terminal for API errors

4. Verify Resend account is active

#### Manual Hosting

1. Run `npm run build` to create production build### Pages not loading

2. Upload `/out` or `/.next` directory to hosting provider

3. Configure environment variables on hosting platform1. Make sure all files are in `public/` folder

2. Access pages with `.html` extension

## Support & Documentation3. Check browser console for 404 errors



For detailed configuration options and advanced customization, refer to:### Vercel deployment issues

- [Next.js Documentation](https://nextjs.org/docs)

- [Sanity Documentation](https://www.sanity.io/docs)1. Make sure environment variables are set in Vercel dashboard

- [Resend API Documentation](https://resend.com/docs)2. Check deployment logs

3. Verify all files were uploaded

## License

## 📞 Support

This template is provided as-is for commercial and personal use. Customize freely for your fitness business needs.
For issues with:
- **Next.js**: https://nextjs.org/docs
- **Resend**: https://resend.com/docs
- **Vercel**: https://vercel.com/docs

## 📄 License

Original PowerFlow template license applies.
