# PowerFlow - Full Stack Fitness & Coaching Platform# PowerFlow - Next.js VersionThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



A comprehensive web application template designed for fitness studios, personal trainers, and wellness coaches. Built with Next.js and Sanity CMS for scalable content management and modern web performance.



## Project Overview## Phase B: Minimal Migration (Demo Ready)## Getting Started



PowerFlow is a production-ready template that combines a dynamic frontend with a powerful content management system. The platform enables fitness professionals to manage their services, pricing, schedules, blog content, and client testimonials through an intuitive admin interface while providing visitors with a responsive, engaging user experience.



Key features include automated content population, flexible pricing plans, contact forms with email integration, class scheduling, and a complete blog system for content marketing.This is a Next.js-powered version of the PowerFlow Gym & Fitness template with working form submissions via API routes.First, run the development server:



## Technical Stack



### Frontend Framework## 🚀 Quick Start```bash

- **Next.js 16.0.1** - React-based web framework with App Router

- **React 19.2.0** - Latest React with concurrent featuresnpm run dev

- **TypeScript 5.x** - Type-safe development environment

### 1. Install Dependencies# or

### Content Management

- **Sanity CMS 4.13.0** - Headless CMS with real-time collaborationyarn dev

- **Next-Sanity 11.6.3** - Official Sanity integration for Next.js

- **Sanity Vision 4.13.0** - Query testing and debugging tools```bash# or



### Communication & Stylingnpm installpnpm dev

- **Resend 6.4.0** - Modern email API for form submissions

- **Bootstrap 5.x** - Responsive CSS framework```# or

- **Custom CSS** - Enhanced styling and animations

bun dev

### Development Tools

- **ESLint 9.x** - Code quality and consistency### 2. Setup Environment Variables```

- **Node.js 20+** - Runtime environment



## System Architecture

Get your Resend API key from: https://resend.com/api-keysOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### URLs & Access Points



#### Public Website

- **Development**: `http://localhost:3000`Then update `.env.local`:You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

- **Production**: Deploy to Vercel, Netlify, or preferred hosting



#### Content Management System

- **Sanity Studio**: `http://localhost:3333````bashThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

- **Studio Path**: `/studio` (when deployed)

RESEND_API_KEY=re_your_actual_api_key_here

#### API Endpoints

- **Content Import**: `/api/sanity/startup-check` - Automated content populationRECIPIENT_EMAIL=mxdevelopment.code@gmail.com## Learn More

- **Contact Form**: `/api/contact` - Form submission handling

- **Join Form**: `/api/join` - Membership registration processing```



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
