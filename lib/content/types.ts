/**
 * Shared TypeScript types for content management
 * These types work for BOTH JSON and Sanity sources
 */

// ============================================================================
// IMAGE TYPES
// ============================================================================

/**
 * Image can be a string URL (JSON) or Sanity image reference
 */
export type ImageSource = string | SanityImageSource

export interface SanityImageSource {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

// ============================================================================
// HOMEPAGE CONTENT
// ============================================================================

export interface Homepage {
  hero: HeroSection
  about: AboutSection
  stats: Stat[]
}

export interface HeroSection {
  title: string
  description: string
  ctaPrimaryText: string
  ctaPrimaryLink: string
  ctaSecondaryText?: string
  ctaSecondaryLink?: string
  videoUrl: string
  backgroundImage: ImageSource
  activeMembersCount: number
  memberImages: ImageSource[]
}

export interface AboutSection {
  subtitle: string
  title: string
  description: string
  images: ImageSource[]
  yearsOfExperience: number
  ctaText: string
  ctaLink: string
}

export interface Stat {
  value: number
  label: string
  suffix?: string
}

// ============================================================================
// ABOUT PAGE
// ============================================================================

export interface About {
  hero: {
    title: string
    subtitle: string
    backgroundImage: ImageSource
  }
  story: {
    subtitle: string
    title: string
    description: string
    benefits: string[]
    images: ImageSource[]
    stats: Array<{
      value: string
      label: string
    }>
  }
  mission: {
    title: string
    backgroundImage: ImageSource
    mission: {
      title: string
      description: string
    }
    vision: {
      title: string
      description: string
    }
  }
  values: Array<{
    icon: string
    title: string
    description: string
  }>
  cta: {
    title: string
    buttonText: string
    buttonLink: string
  }
}

// ============================================================================
// SERVICES/CLASSES
// ============================================================================

export interface Service {
  id: string
  name: string
  slug: string
  description: string
  shortDescription?: string
  image: ImageSource
  duration: number // minutes
  intensity: 'Low' | 'Medium' | 'High'
  maxParticipants?: number
  benefits?: string[]
  featured?: boolean
  order?: number
}

// ============================================================================
// TESTIMONIALS
// ============================================================================

export interface Testimonial {
  id: string
  quote: string
  author: string
  location: string
  rating: 1 | 2 | 3 | 4 | 5
  image?: ImageSource
  featured?: boolean
  order?: number
}

// ============================================================================
// PRICING PLANS
// ============================================================================

export interface PricingPlan {
  id: string
  name: string
  tagline: string
  price: number
  duration: string
  durationUnit: string // e.g., "/3 months", "/year"
  benefits: string[]
  featured?: boolean
  order: number
  ctaText: string
  ctaLink: string
}

// ============================================================================
// TEAM MEMBERS
// ============================================================================

export interface TeamMember {
  id: string
  name: string
  role: string
  specialty?: string
  bio: string
  image: ImageSource
  socialLinks?: SocialLink[]
  featured?: boolean
  order?: number
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube' | 'tiktok'
  url: string
}

// ============================================================================
// SCHEDULE
// ============================================================================

export interface ScheduleSlot {
  id: string
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
  time: string // e.g., "06:00 AM"
  endTime?: string // e.g., "07:00 AM"
  className: string
  instructor: string
  room?: string
  spots?: number
}

// ============================================================================
// FAQ
// ============================================================================

export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
  order?: number
}

// ============================================================================
// CONTACT INFO
// ============================================================================

export interface ContactInfo {
  address: string
  city: string
  state: string
  zipCode: string
  country: string
  phone: string
  email: string
  hours: string
  socialLinks: SocialLink[]
  mapEmbedUrl?: string
}

// ============================================================================
// BLOG POSTS (Optional - Phase 2)
// ============================================================================

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  featuredImage: ImageSource
  category?: string
  tags?: string[]
  featured?: boolean
}

// ============================================================================
// SITE SETTINGS (Global Config)
// ============================================================================

export interface SiteSettings {
  siteName: string
  siteDescription: string
  logo: ImageSource
  logoIcon: ImageSource
  favicon: ImageSource
  primaryColor?: string
  secondaryColor?: string
  socialLinks: SocialLink[]
}

// ============================================================================
// CONTENT SOURCE INTERFACE
// ============================================================================

/**
 * All content sources (JSON, Sanity, etc.) must implement this interface
 */
export interface ContentSource {
  // Homepage
  getHomepage(): Promise<Homepage>
  
  // About
  getAbout(): Promise<About>
  
  // Services/Classes
  getServices(): Promise<Service[]>
  getServiceBySlug(slug: string): Promise<Service | null>
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>
  getFeaturedTestimonials(): Promise<Testimonial[]>
  
  // Pricing
  getPricingPlans(): Promise<PricingPlan[]>
  
  // Team
  getTeamMembers(): Promise<TeamMember[]>
  
  // Schedule
  getSchedule(): Promise<ScheduleSlot[]>
  getScheduleByDay(day: ScheduleSlot['day']): Promise<ScheduleSlot[]>
  
  // FAQ
  getFAQs(): Promise<FAQ[]>
  getFAQsByCategory(category: string): Promise<FAQ[]>
  
  // Contact
  getContactInfo(): Promise<ContactInfo>
  
  // Blog (Optional)
  getBlogPosts(): Promise<BlogPost[]>
  getBlogPostBySlug(slug: string): Promise<BlogPost | null>
  
  // Site Settings
  getSiteSettings(): Promise<SiteSettings>
}
