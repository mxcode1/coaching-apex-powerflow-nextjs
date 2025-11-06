/**
 * JSON Content Source Implementation
 * Reads content from local TypeScript files
 */

import type { ContentSource, Homepage, About, Service, Testimonial, PricingPlan, TeamMember, ScheduleSlot, FAQ, ContactInfo, BlogPost, SiteSettings } from '../types'
import { homepageData } from '@/content/homepage'
import { aboutData } from '@/content/about'
import { servicesData } from '@/content/services'
import { testimonialsData } from '@/content/testimonials'
import { pricingData } from '@/content/pricing'
import { contactData } from '@/content/contact'

export class JsonContentSource implements ContentSource {
  
  // Homepage
  async getHomepage(): Promise<Homepage> {
    return homepageData
  }
  
  // About
  async getAbout(): Promise<About> {
    return aboutData
  }
  
  // Services/Classes
  async getServices(): Promise<Service[]> {
    return servicesData
  }
  
  async getServiceBySlug(slug: string): Promise<Service | null> {
    const service = servicesData.find(s => s.slug === slug)
    return service || null
  }
  
  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return testimonialsData
  }
  
  async getFeaturedTestimonials(): Promise<Testimonial[]> {
    return testimonialsData.filter(t => t.featured)
  }
  
  // Pricing
  async getPricingPlans(): Promise<PricingPlan[]> {
    return pricingData.sort((a, b) => a.order - b.order)
  }
  
  // Team
  async getTeamMembers(): Promise<TeamMember[]> {
    // TODO: Add team data
    return []
  }
  
  // Schedule
  async getSchedule(): Promise<ScheduleSlot[]> {
    // TODO: Add schedule data
    return []
  }
  
  async getScheduleByDay(day: ScheduleSlot['day']): Promise<ScheduleSlot[]> {
    const schedule = await this.getSchedule()
    return schedule.filter(slot => slot.day === day)
  }
  
  // FAQ
  async getFAQs(): Promise<FAQ[]> {
    // TODO: Add FAQ data
    return []
  }
  
  async getFAQsByCategory(category: string): Promise<FAQ[]> {
    const faqs = await this.getFAQs()
    return faqs.filter(faq => faq.category === category)
  }
  
  // Contact
  async getContactInfo(): Promise<ContactInfo> {
    return contactData
  }
  
  // Blog
  async getBlogPosts(): Promise<BlogPost[]> {
    // TODO: Add blog data
    return []
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    const posts = await this.getBlogPosts()
    return posts.find(post => post.slug === slug) || null
  }
  
  // Site Settings
  async getSiteSettings(): Promise<SiteSettings> {
    // TODO: Add site settings
    return {
      siteName: 'PowerFlow',
      siteDescription: 'Transform your body and mind with world-class training',
      logo: '/images/logo.webp',
      logoIcon: '/images/logo-icon.webp',
      favicon: '/images/icon.webp',
      socialLinks: contactData.socialLinks,
    }
  }
}
