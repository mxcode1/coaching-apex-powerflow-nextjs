/**
 * Sanity Content Import Script
 * Automated population of CMS with existing JSON data
 * Uses proper labeling: generic-example-content-{section}
 */

import { createClient } from '@sanity/client'
import { servicesData } from '../content/services'
import { pricingData } from '../content/pricing'
import { testimonialsData } from '../content/testimonials'
import { homepageData } from '../content/homepage'

// Sanity client with write permissions
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false, // Important for writes
  token: process.env.SANITY_API_TOKEN!, // Requires Developer token
  apiVersion: '2024-01-01'
})

async function importContent() {
  console.log('🚀 Starting automated Sanity content import...')
  
  try {
    // 1. Import Homepage Settings
    console.log('\n📄 Importing Homepage content...')
    const homepageDoc = {
      _type: 'homepage',
      _id: 'homepage',
      title: 'generic-example-content-homepage',
      hero: {
        title: homepageData.hero.title,
        description: homepageData.hero.description,
        ctaPrimaryText: homepageData.hero.ctaPrimaryText,
        ctaPrimaryLink: homepageData.hero.ctaPrimaryLink,
        videoUrl: homepageData.hero.videoUrl
      },
      about: {
        title: homepageData.about.title,
        subtitle: homepageData.about.subtitle,
        description: homepageData.about.description
      }
    }
    
    await client.createOrReplace(homepageDoc)
    console.log('✅ Homepage imported')

    // 2. Import Services
    console.log('\n💪 Importing Services...')
    let serviceCount = 0
    for (const service of servicesData) {
      const serviceDoc = {
        _type: 'service',
        _id: `service-${service.slug}`,
        name: `${service.name} (generic-example-content-services)`,
        slug: { current: service.slug },
        description: service.description,
        shortDescription: service.shortDescription,
        duration: service.duration,
        intensity: service.intensity,
        maxParticipants: service.maxParticipants,
        benefits: service.benefits,
        featured: service.featured,
        order: service.order,
        // Note: Images will need manual upload or separate image import
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-placeholder' // Placeholder for now
          }
        }
      }
      
      await client.createOrReplace(serviceDoc)
      serviceCount++
    }
    console.log(`✅ ${serviceCount} Services imported`)

    // 3. Import Pricing Plans
    console.log('\n💳 Importing Pricing Plans...')
    let pricingCount = 0
    for (const plan of pricingData) {
      const pricingDoc = {
        _type: 'pricingPlan',
        _id: `pricing-${plan.id}`,
        name: `${plan.name} (generic-example-content-pricing)`,
        price: plan.price,
        billingPeriod: 'month',
        description: plan.description,
        features: plan.features,
        featured: plan.featured,
        buttonText: plan.buttonText,
        buttonLink: plan.buttonLink,
        order: plan.order
      }
      
      await client.createOrReplace(pricingDoc)
      pricingCount++
    }
    console.log(`✅ ${pricingCount} Pricing Plans imported`)

    // 4. Import Testimonials
    console.log('\n⭐ Importing Testimonials...')
    let testimonialCount = 0
    for (const testimonial of testimonialsData) {
      const testimonialDoc = {
        _type: 'testimonial',
        _id: `testimonial-${testimonialCount + 1}`,
        name: `${testimonial.name} (generic-example-content-testimonials)`,
        role: testimonial.role,
        content: testimonial.content,
        rating: testimonial.rating,
        featured: testimonial.featured,
        order: testimonial.order,
        // Placeholder image
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-placeholder'
          }
        }
      }
      
      await client.createOrReplace(testimonialDoc)
      testimonialCount++
    }
    console.log(`✅ ${testimonialCount} Testimonials imported`)

    // 5. Import Contact Info
    console.log('\n📞 Importing Contact Information...')
    const contactDoc = {
      _type: 'contactInfo',
      _id: 'contactInfo',
      title: 'generic-example-content-contact',
      locations: contactData.locations.map(location => ({
        name: location.name,
        address: location.address,
        phone: location.phone,
        email: location.email,
        hours: location.hours
      }))
    }
    
    await client.createOrReplace(contactDoc)
    console.log('✅ Contact Info imported')

    // 6. Create Sample Blog Posts
    console.log('\n📝 Creating Sample Blog Posts...')
    const blogPosts = [
      {
        _type: 'blogPost',
        _id: 'blog-strength-training-benefits',
        title: '5 Benefits of Strength Training (generic-example-content-blog-posts)',
        slug: { current: '5-benefits-strength-training' },
        author: 'PowerFlow Team',
        publishedAt: new Date().toISOString(),
        category: 'training-tips',
        excerpt: 'Discover the top 5 benefits of incorporating strength training into your fitness routine.',
        content: [
          {
            _type: 'block',
            _key: 'block1',
            style: 'normal',
            children: [{
              _type: 'span',
              text: 'Strength training offers incredible benefits for both physical and mental health. Here are the top 5 reasons to add it to your routine.'
            }]
          }
        ],
        featured: true,
        // Placeholder image
        image: {
          _type: 'image',
          asset: {
            _type: 'reference', 
            _ref: 'image-placeholder'
          }
        }
      },
      {
        _type: 'blogPost',
        _id: 'blog-hiit-workout-guide',
        title: 'HIIT Workout Guide for Beginners (generic-example-content-blog-posts)',
        slug: { current: 'hiit-workout-guide-beginners' },
        author: 'Sarah Johnson',
        publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        category: 'training-tips',
        excerpt: 'A comprehensive guide to getting started with High-Intensity Interval Training.',
        content: [
          {
            _type: 'block',
            _key: 'block1', 
            style: 'normal',
            children: [{
              _type: 'span',
              text: 'HIIT training is perfect for busy schedules and maximum results. Learn how to start safely and effectively.'
            }]
          }
        ],
        featured: false,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-placeholder'
          }
        }
      }
    ]

    for (const post of blogPosts) {
      await client.createOrReplace(post)
    }
    console.log(`✅ ${blogPosts.length} Blog Posts imported`)

    // 7. Create Sample Schedule
    console.log('\n📅 Creating Sample Schedule...')
    const scheduleDays = [
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

    for (const day of scheduleDays) {
      await client.createOrReplace(day)
    }
    console.log(`✅ ${scheduleDays.length} Schedule days imported`)

    console.log('\n🎉 Content import completed successfully!')
    console.log('\n📋 Summary:')
    console.log(`   - Homepage: 1 document`)
    console.log(`   - Services: ${serviceCount} documents`) 
    console.log(`   - Pricing Plans: ${pricingCount} documents`)
    console.log(`   - Testimonials: ${testimonialCount} documents`)
    console.log(`   - Contact Info: 1 document`)
    console.log(`   - Blog Posts: ${blogPosts.length} documents`)
    console.log(`   - Schedule: ${scheduleDays.length} documents`)
    console.log('\n🔗 Visit http://localhost:3333 to see imported content')
    console.log('🌐 Visit http://localhost:3000 to see it live on your website')

  } catch (error) {
    console.error('❌ Import failed:', error)
    process.exit(1)
  }
}

// Run the import
importContent()