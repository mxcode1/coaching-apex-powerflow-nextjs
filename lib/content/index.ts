/**
 * Public Content API
 * All React components should import content functions from here
 * This layer abstracts the content source (JSON vs Sanity)
 */

import { getContentSource } from './source'
import type {
  Homepage,
  About,
  Service,
  Testimonial,
  PricingPlan,
  TeamMember,
  ScheduleSlot,
  FAQ,
  ContactInfo,
  BlogPost,
  SiteSettings,
} from './types'

// Get the active content source
const source = getContentSource()

// ============================================================================
// HOMEPAGE
// ============================================================================

/**
 * Get homepage content (hero, about, stats)
 */
export async function getHomepage(): Promise<Homepage> {
  return source.getHomepage()
}

// ============================================================================
// ABOUT PAGE
// ============================================================================

/**
 * Get about page content
 */
export async function getAbout(): Promise<About> {
  return source.getAbout()
}

// ============================================================================
// SERVICES/CLASSES
// ============================================================================

/**
 * Get all services/classes
 */
export async function getServices(): Promise<Service[]> {
  return source.getServices()
}

/**
 * Get a single service by slug
 */
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return source.getServiceBySlug(slug)
}

// ============================================================================
// TESTIMONIALS
// ============================================================================

/**
 * Get all testimonials
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  return source.getTestimonials()
}

/**
 * Get only featured testimonials
 */
export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  return source.getFeaturedTestimonials()
}

// ============================================================================
// PRICING
// ============================================================================

/**
 * Get all pricing plans
 */
export async function getPricingPlans(): Promise<PricingPlan[]> {
  return source.getPricingPlans()
}

// ============================================================================
// TEAM
// ============================================================================

/**
 * Get all team members
 */
export async function getTeamMembers(): Promise<TeamMember[]> {
  return source.getTeamMembers()
}

// ============================================================================
// SCHEDULE
// ============================================================================

/**
 * Get full class schedule
 */
export async function getSchedule(): Promise<ScheduleSlot[]> {
  return source.getSchedule()
}

/**
 * Get schedule for a specific day
 */
export async function getScheduleByDay(day: ScheduleSlot['day']): Promise<ScheduleSlot[]> {
  return source.getScheduleByDay(day)
}

// ============================================================================
// FAQ
// ============================================================================

/**
 * Get all FAQs
 */
export async function getFAQs(): Promise<FAQ[]> {
  return source.getFAQs()
}

/**
 * Get FAQs by category
 */
export async function getFAQsByCategory(category: string): Promise<FAQ[]> {
  return source.getFAQsByCategory(category)
}

// ============================================================================
// CONTACT
// ============================================================================

/**
 * Get contact information
 */
export async function getContactInfo(): Promise<ContactInfo> {
  return source.getContactInfo()
}

// ============================================================================
// BLOG
// ============================================================================

/**
 * Get all blog posts
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  return source.getBlogPosts()
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return source.getBlogPostBySlug(slug)
}

// ============================================================================
// SITE SETTINGS
// ============================================================================

/**
 * Get global site settings
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  return source.getSiteSettings()
}

// ============================================================================
// EXPORTS
// ============================================================================

// Re-export types for convenience
export type {
  Homepage,
  About,
  Service,
  Testimonial,
  PricingPlan,
  TeamMember,
  ScheduleSlot,
  FAQ,
  ContactInfo,
  BlogPost,
  SiteSettings,
}
