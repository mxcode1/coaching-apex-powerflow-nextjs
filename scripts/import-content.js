#!/usr/bin/env node

/**
 * Simplified Sanity Content Import Script
 * Run with: npm run import-content
 */

const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

// Import data (using require since this is a .js file)
const { servicesData } = require('../content/services.ts')
const { pricingData } = require('../content/pricing.ts')
const { testimonialsData } = require('../content/testimonials.ts')

// Sanity client with write permissions
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Requires Developer token
  apiVersion: '2024-01-01'
})

async function checkExistingContent() {
  console.log('🔍 Checking for existing content...')
  
  try {
    // Check for existing content across all types
    const existingServices = await client.fetch('*[_type == "service"] | order(_createdAt desc) [0...3]')
    const existingPricing = await client.fetch('*[_type == "pricingPlan"] | order(_createdAt desc) [0...3]')
    const existingTestimonials = await client.fetch('*[_type == "testimonial"] | order(_createdAt desc) [0...3]')
    const existingHomepage = await client.fetch('*[_type == "homepage"][0]')
    const existingBlogs = await client.fetch('*[_type == "blogPost"] | order(_createdAt desc) [0...3]')
    
    const contentCounts = {
      services: existingServices.length,
      pricing: existingPricing.length,
      testimonials: existingTestimonials.length,
      homepage: existingHomepage ? 1 : 0,
      blogs: existingBlogs.length
    }
    
    const totalContent = Object.values(contentCounts).reduce((sum, count) => sum + count, 0)
    
    console.log('\n📊 Content Summary:')
    console.log(`   Services: ${contentCounts.services}`)
    console.log(`   Pricing Plans: ${contentCounts.pricing}`) 
    console.log(`   Testimonials: ${contentCounts.testimonials}`)
    console.log(`   Homepage: ${contentCounts.homepage}`)
    console.log(`   Blog Posts: ${contentCounts.blogs}`)
    console.log(`   Total: ${totalContent} documents`)
    
    return { contentCounts, totalContent, hasContent: totalContent > 0 }
  } catch (error) {
    console.error('❌ Error checking existing content:', error)
    return { contentCounts: {}, totalContent: 0, hasContent: false }
  }
}

async function importContent(forceImport = false) {
  console.log('🚀 Starting automated Sanity content import...')
  
  try {
    // Safety Check: Check for existing content (unless forced)
    if (!forceImport) {
      const contentCheck = await checkExistingContent()
      
      if (contentCheck.hasContent) {
        console.log('\n⚠️  EXISTING CONTENT DETECTED')
        console.log('Your Sanity CMS already contains content. To avoid duplicates:')
        console.log('\n📋 Options:')
        console.log('   1. Keep existing content (recommended)')
        console.log('   2. Add --force flag to import anyway: npm run import-content -- --force')
        console.log('   3. Clear content first in Sanity Studio, then re-run')
        console.log('\n💡 Tip: Visit http://localhost:3333 to review your existing content')
        console.log('\n✅ Import cancelled - your existing content is safe!')
        return
      }
      
      console.log('\n✅ No existing content found - proceeding with import...')
    } else {
      console.log('\n🔓 Force mode - importing regardless of existing content...')
    }
    // 1. Import Services
    console.log('\n💪 Importing Services...')
    let serviceCount = 0
    
    for (const service of servicesData) {
      const serviceDoc = {
        _type: 'service',
        _id: `service-${service.slug}`,
        name: `${service.name} (generic-example-content-services)`,
        slug: { current: service.slug },
        description: service.description,
        shortDescription: service.shortDescription || service.description.substring(0, 100),
        duration: service.duration,
        intensity: service.intensity,
        maxParticipants: service.maxParticipants,
        benefits: service.benefits,
        featured: service.featured,
        order: service.order
      }
      
      await client.createOrReplace(serviceDoc)
      serviceCount++
      console.log(`   ✓ ${service.name}`)
    }
    console.log(`✅ ${serviceCount} Services imported`)

    // 2. Import Pricing Plans  
    console.log('\n💳 Importing Pricing Plans...')
    let pricingCount = 0
    
    for (const plan of pricingData) {
      const pricingDoc = {
        _type: 'pricingPlan',
        _id: `pricing-${plan.id}`,
        name: `${plan.name} (generic-example-content-pricing)`,
        price: plan.price,
        billingPeriod: 'month',
        description: plan.tagline,
        features: plan.benefits,
        featured: plan.featured,
        buttonText: plan.ctaText,
        buttonLink: plan.ctaLink,
        order: plan.order
      }
      
      await client.createOrReplace(pricingDoc)
      pricingCount++
      console.log(`   ✓ ${plan.name}`)
    }
    console.log(`✅ ${pricingCount} Pricing Plans imported`)

    // 3. Import Testimonials
    console.log('\n⭐ Importing Testimonials...')
    let testimonialCount = 0
    
    for (const testimonial of testimonialsData) {
      const testimonialDoc = {
        _type: 'testimonial',
        _id: `testimonial-${testimonial.id}`,
        name: `${testimonial.author} (generic-example-content-testimonials)`,
        role: testimonial.location,
        content: testimonial.quote,
        rating: testimonial.rating,
        featured: testimonial.featured,
        order: testimonial.order
      }
      
      await client.createOrReplace(testimonialDoc)
      testimonialCount++
      console.log(`   ✓ ${testimonial.author}`)
    }
    console.log(`✅ ${testimonialCount} Testimonials imported`)

    // 4. Create Sample Homepage
    console.log('\n🏠 Creating Homepage Settings...')
    const homepageDoc = {
      _type: 'homepage',
      _id: 'homepage',
      title: 'generic-example-content-homepage',
      hero: {
        title: 'Transform Your Body and Mind with PowerFlow',
        subtitle: 'World-class training, expert coaches, modern equipment',
        videoUrl: 'https://www.youtube.com/watch?v=JxRnueT6wHs',
        ctaText: 'Join Now',
        ctaLink: '/join'
      },
      features: {
        title: 'Why Choose PowerFlow',
        subtitle: 'Everything you need to succeed',
        items: [
          { icon: 'icofont-heart-beat', title: 'Expert Training', description: 'Certified trainers guide every workout' },
          { icon: 'icofont-muscle', title: 'Modern Equipment', description: 'State-of-the-art fitness technology' },
          { icon: 'icofont-users-alt-4', title: 'Community Support', description: 'Motivating environment for all levels' }
        ]
      },
      cta: {
        title: 'Ready to Transform Your Life?',
        buttonText: 'Start Your Journey',
        buttonLink: '/join'
      }
    }
    
    await client.createOrReplace(homepageDoc)
    console.log('✅ Homepage settings created')

    // 5. Create Sample Blog Posts
    console.log('\n📝 Creating Sample Blog Posts...')
    const blogPosts = [
      {
        _type: 'blogPost',
        _id: 'blog-strength-training',
        title: '5 Benefits of Strength Training (generic-example-content-blog)',
        slug: { current: '5-benefits-strength-training' },
        author: 'PowerFlow Team',
        publishedAt: new Date().toISOString(),
        category: 'training-tips',
        excerpt: 'Discover why strength training should be part of your fitness routine.',
        content: [
          {
            _type: 'block',
            _key: 'block1',
            style: 'normal',
            children: [{
              _type: 'span',
              text: 'Strength training offers incredible benefits for your health and fitness goals. Here are the top 5 reasons to incorporate it into your routine.'
            }]
          }
        ],
        featured: true
      },
      {
        _type: 'blogPost', 
        _id: 'blog-hiit-guide',
        title: 'HIIT Training Guide for Beginners (generic-example-content-blog)',
        slug: { current: 'hiit-training-guide-beginners' },
        author: 'Sarah Johnson',
        publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        category: 'training-tips',
        excerpt: 'Learn how to get started with High-Intensity Interval Training safely and effectively.',
        content: [
          {
            _type: 'block',
            _key: 'block1',
            style: 'normal', 
            children: [{
              _type: 'span',
              text: 'HIIT is perfect for busy schedules and maximum results. This guide covers everything you need to know to start your HIIT journey.'
            }]
          }
        ],
        featured: false
      }
    ]

    for (const post of blogPosts) {
      await client.createOrReplace(post)
      console.log(`   ✓ ${post.title}`)
    }
    console.log(`✅ ${blogPosts.length} Blog Posts created`)

    // 6. Create Sample Schedule
    console.log('\n📅 Creating Sample Schedule...')
    const scheduleData = [
      {
        _type: 'schedule',
        _id: 'schedule-monday',
        dayOfWeek: 'monday',
        order: 0,
        classes: [
          { time: '6:00 AM', name: 'HIIT Training', instructor: 'Mike Johnson', duration: 45, spotsAvailable: 15, level: 'intermediate' },
          { time: '9:00 AM', name: 'Yoga & Flexibility', instructor: 'Sarah Chen', duration: 60, spotsAvailable: 20, level: 'all' },
          { time: '6:00 PM', name: 'Strength & Conditioning', instructor: 'Alex Rodriguez', duration: 60, spotsAvailable: 12, level: 'intermediate' }
        ]
      },
      {
        _type: 'schedule',
        _id: 'schedule-tuesday', 
        dayOfWeek: 'tuesday',
        order: 1,
        classes: [
          { time: '7:00 AM', name: 'Spinning & Cycle', instructor: 'Emma Davis', duration: 45, spotsAvailable: 25, level: 'all' },
          { time: '12:00 PM', name: 'Pilates & Core', instructor: 'Lisa Kim', duration: 50, spotsAvailable: 18, level: 'beginner' },
          { time: '7:00 PM', name: 'Boxing & Martial Arts', instructor: 'Carlos Santos', duration: 60, spotsAvailable: 10, level: 'intermediate' }
        ]
      }
    ]

    for (const day of scheduleData) {
      await client.createOrReplace(day)
      console.log(`   ✓ ${day.dayOfWeek}`)
    }
    console.log(`✅ ${scheduleData.length} Schedule days created`)

    // 7. Create Contact Info
    console.log('\n📞 Creating Contact Information...')
    const contactDoc = {
      _type: 'contactInfo',
      _id: 'contactInfo',
      title: 'generic-example-content-contact',
      locations: [
        {
          name: 'Downtown Location',
          address: '123 Fitness Street, New York, NY 10001',
          phone: '+1 (555) 123-4567',
          email: 'downtown@powerflow.com',
          hours: 'Mon-Fri: 5:00AM-11:00PM, Sat-Sun: 6:00AM-10:00PM'
        },
        {
          name: 'Uptown Branch',
          address: '456 Wellness Ave, New York, NY 10002', 
          phone: '+1 (555) 765-4321',
          email: 'uptown@powerflow.com',
          hours: 'Mon-Fri: 5:30AM-10:30PM, Sat-Sun: 7:00AM-9:00PM'
        }
      ]
    }
    
    await client.createOrReplace(contactDoc)
    console.log('✅ Contact Information created')

    console.log('\n🎉 Content import completed successfully!')
    console.log('\n📋 Summary:')
    console.log(`   - Services: ${serviceCount} documents`)
    console.log(`   - Pricing Plans: ${pricingCount} documents`) 
    console.log(`   - Testimonials: ${testimonialCount} documents`)
    console.log(`   - Homepage: 1 document`)
    console.log(`   - Blog Posts: ${blogPosts.length} documents`)
    console.log(`   - Schedule: ${scheduleData.length} documents`)
    console.log(`   - Contact Info: 1 document`)
    console.log('\n🔗 Visit http://localhost:3333 to see imported content')
    console.log('🌐 Visit http://localhost:3000 to see it live on your website')
    console.log('\n✨ All content is labeled with "generic-example-content-" prefix for easy identification')

  } catch (error) {
    console.error('❌ Import failed:', error)
    if (error.message.includes('token')) {
      console.log('\n💡 Make sure you have:')
      console.log('   1. Developer token in SANITY_API_TOKEN')
      console.log('   2. Correct project ID and dataset')
    }
    process.exit(1)
  }
}

// Check for force flag
const forceFlag = process.argv.includes('--force')

async function runImport() {
  if (forceFlag) {
    console.log('🔓 Force flag detected - bypassing safety checks...')
    return importContent(true) // Pass force=true
  } else {
    return importContent(false) // Normal safety check
  }
}

// Run the import
runImport()