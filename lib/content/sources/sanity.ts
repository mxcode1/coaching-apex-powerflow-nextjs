/**
 * Sanity Content Source Implementation
 * Fetches content from Sanity CMS via GROQ queries
 */

import type { ContentSource, Homepage, About, Service, Testimonial, PricingPlan, TeamMember, ScheduleSlot, FAQ, ContactInfo, BlogPost, SiteSettings } from '../types'
import { client } from '@/lib/sanity/client'
import { urlForImage } from '@/lib/sanity/imageUrl'

export class SanityContentSource implements ContentSource {
  
  /**
   * Wrapper to handle Sanity fetch errors gracefully
   * Returns fallback value if fetch fails (network issues, empty dataset, etc.)
   */
  private async safeFetch<T>(query: string, params?: Record<string, any>, fallback?: T): Promise<T | null> {
    try {
      const result = await client.fetch(query, params)
      // If result is null/undefined, use fallback
      if (result === null || result === undefined) {
        return fallback !== undefined ? fallback : null
      }
      return result
    } catch (error) {
      console.warn('⚠️ Sanity fetch failed, using fallback:', error instanceof Error ? error.message : 'Unknown error')
      return fallback !== undefined ? fallback : null
    }
  }
  
  // Homepage
  async getHomepage(): Promise<Homepage> {
    const data = await this.safeFetch<Homepage>(`
      *[_type == "homepage"][0]{
        hero {
          title,
          description,
          ctaPrimaryText,
          ctaPrimaryLink,
          ctaSecondaryText,
          ctaSecondaryLink,
          videoUrl,
          backgroundImage,
          activeMembersCount,
          memberImages
        },
        about {
          subtitle,
          title,
          description,
          images,
          yearsOfExperience,
          ctaText,
          ctaLink
        },
        stats[] {
          value,
          label,
          suffix
        }
      }
    `)
    
    const defaultHomepage = this.getDefaultHomepage()
    const homepage = data || defaultHomepage
    
    // Ensure nested structures exist (Sanity might return null)
    return {
      hero: {
        ...(homepage.hero || defaultHomepage.hero),
        memberImages: (homepage.hero?.memberImages || []),
      },
      about: {
        ...(homepage.about || defaultHomepage.about),
        images: (homepage.about?.images || []),
      },
      stats: homepage.stats || [],
    }
  }
  
  // About
  async getAbout(): Promise<About> {
    const data = await this.safeFetch<About>(`
      *[_type == "about"][0]{
        hero,
        story,
        mission,
        values,
        cta
      }
    `)
    
    return data || this.getDefaultAbout()
  }
  
  private getDefaultAbout(): About {
    return {
      hero: {
        title: 'About PowerFlow',
        subtitle: 'Your Journey to Strength Starts Here',
        backgroundImage: '/images/background/6.webp',
      },
      story: {
        subtitle: 'About Us',
        title: 'We Help You Build a Stronger, Healthier, and Fitter You',
        description: 'Founded with a passion for fitness and community.',
        benefits: [],
        images: [],
        stats: [],
      },
      mission: {
        title: 'Our Mission & Vision',
        backgroundImage: '/images/background/6.webp',
        mission: { title: 'Our Mission', description: '' },
        vision: { title: 'Our Vision', description: '' },
      },
      values: [],
      cta: {
        title: 'Ready to transform?',
        buttonText: 'Join Now',
        buttonLink: '/join',
      },
    }
  }
  
  private getDefaultHomepage(): Homepage {
    return {
      hero: {
        title: 'Transform your Body and Mind with PowerFlow',
        description: 'Discover world-class training',
        ctaPrimaryText: 'Join Now',
        ctaPrimaryLink: '/join',
        videoUrl: '',
        backgroundImage: '/images/background/1.webp',
        activeMembersCount: 0,
        memberImages: [],
      },
      about: {
        subtitle: 'Welcome',
        title: 'About Us',
        description: 'We help you achieve your fitness goals',
        images: [],
        yearsOfExperience: 0,
        ctaText: 'Learn More',
        ctaLink: '/about',
      },
      stats: [],
    }
  }
  
  // Services/Classes
  async getServices(): Promise<Service[]> {
    const services = await this.safeFetch<Service[]>(`
      *[_type == "service"] | order(order asc) {
        "id": _id,
        name,
        slug,
        description,
        shortDescription,
        image,
        duration,
        intensity,
        maxParticipants,
        benefits,
        featured,
        order
      }
    `, {}, [])
    
    return services || []
  }
  
  async getServiceBySlug(slug: string): Promise<Service | null> {
    const service = await this.safeFetch<Service>(`
      *[_type == "service" && slug.current == $slug][0] {
        "id": _id,
        name,
        "slug": slug.current,
        description,
        shortDescription,
        image,
        duration,
        intensity,
        maxParticipants,
        benefits,
        featured,
        order
      }
    `, { slug }, undefined)
    
    return service || null
  }
  
  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    const testimonials = await this.safeFetch<Testimonial[]>(`
      *[_type == "testimonial"] | order(order asc) {
        "id": _id,
        quote,
        author,
        location,
        rating,
        image,
        featured,
        order
      }
    `, {}, [])
    
    return testimonials || []
  }
  
  async getFeaturedTestimonials(): Promise<Testimonial[]> {
    const testimonials = await this.safeFetch<Testimonial[]>(`
      *[_type == "testimonial" && featured == true] | order(order asc) {
        "id": _id,
        quote,
        author,
        location,
        rating,
        image,
        featured,
        order
      }
    `, {}, [])
    
    return testimonials || []
  }
  
  // Pricing
  async getPricingPlans(): Promise<PricingPlan[]> {
    const plans = await this.safeFetch<PricingPlan[]>(`
      *[_type == "pricingPlan"] | order(order asc) {
        "id": _id,
        name,
        tagline,
        price,
        duration,
        durationUnit,
        benefits,
        featured,
        order,
        ctaText,
        ctaLink
      }
    `, {}, [])
    
    // Ensure benefits array exists for each plan
    return (plans || []).map(plan => ({
      ...plan,
      benefits: plan.benefits || [],
    }))
  }
  
  // Team
  async getTeamMembers(): Promise<TeamMember[]> {
    const members = await this.safeFetch<TeamMember[]>(`
      *[_type == "teamMember"] | order(order asc) {
        "id": _id,
        name,
        role,
        specialty,
        bio,
        image,
        socialLinks,
        featured,
        order
      }
    `, {}, [])
    
    return members || []
  }
  
  // Schedule
  async getSchedule(): Promise<ScheduleSlot[]> {
    const schedule = await this.safeFetch<ScheduleSlot[]>(`
      *[_type == "scheduleSlot"] | order(day asc, time asc) {
        "id": _id,
        day,
        time,
        endTime,
        className,
        instructor,
        room,
        spots
      }
    `, {}, [])
    
    return schedule || []
  }
  
  async getScheduleByDay(day: ScheduleSlot['day']): Promise<ScheduleSlot[]> {
    const schedule = await this.safeFetch<ScheduleSlot[]>(`
      *[_type == "scheduleSlot" && day == $day] | order(time asc) {
        "id": _id,
        day,
        time,
        endTime,
        className,
        instructor,
        room,
        spots
      }
    `, { day }, [])
    
    return schedule || []
  }
  
  // FAQ
  async getFAQs(): Promise<FAQ[]> {
    const faqs = await this.safeFetch<FAQ[]>(`
      *[_type == "faq"] | order(order asc) {
        "id": _id,
        question,
        answer,
        category,
        order
      }
    `, {}, [])
    
    return faqs || []
  }
  
  async getFAQsByCategory(category: string): Promise<FAQ[]> {
    const faqs = await this.safeFetch<FAQ[]>(`
      *[_type == "faq" && category == $category] | order(order asc) {
        "id": _id,
        question,
        answer,
        category,
        order
      }
    `, { category }, [])
    
    return faqs || []
  }
  
  // Contact
  async getContactInfo(): Promise<ContactInfo> {
    const contact = await this.safeFetch<ContactInfo>(`
      *[_type == "contactInfo"][0] {
        address,
        city,
        state,
        zipCode,
        country,
        phone,
        email,
        hours,
        socialLinks,
        mapEmbedUrl
      }
    `)
    
    return contact || this.getDefaultContactInfo()
  }
  
  private getDefaultContactInfo(): ContactInfo {
    return {
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      phone: '',
      email: '',
      hours: '',
      socialLinks: [],
    }
  }
  
  // Blog
  async getBlogPosts(): Promise<BlogPost[]> {
    const posts = await this.safeFetch<BlogPost[]>(`
      *[_type == "blogPost"] | order(publishedAt desc) {
        "id": _id,
        title,
        "slug": slug.current,
        excerpt,
        content,
        author,
        publishedAt,
        featuredImage,
        category,
        tags,
        featured
      }
    `, {}, [])
    
    return posts || []
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    const post = await this.safeFetch<BlogPost>(`
      *[_type == "blogPost" && slug.current == $slug][0] {
        "id": _id,
        title,
        "slug": slug.current,
        excerpt,
        content,
        author,
        publishedAt,
        featuredImage,
        category,
        tags,
        featured
      }
    `, { slug }, undefined)
    
    return post || null
  }
  
  // Site Settings
  async getSiteSettings(): Promise<SiteSettings> {
    const settings = await this.safeFetch<SiteSettings>(`
      *[_type == "siteSettings"][0] {
        siteName,
        siteDescription,
        logo,
        logoIcon,
        favicon,
        primaryColor,
        secondaryColor,
        socialLinks
      }
    `)
    
    return settings || this.getDefaultSiteSettings()
  }
  
  private getDefaultSiteSettings(): SiteSettings {
    return {
      siteName: 'PowerFlow',
      siteDescription: 'Transform your body and mind',
      logo: '/images/logo.webp',
      logoIcon: '/images/logo-icon.webp',
      favicon: '/images/icon.webp',
      socialLinks: [],
    }
  }
}
