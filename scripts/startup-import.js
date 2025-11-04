/**
 * Startup Content Import Script
 * Automatically imports generic example content when Sanity Studio starts
 * if the CMS is empty (no existing content detected)
 */

const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const { createClient } = require('@sanity/client');

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'pmybjuoo',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false
});

/**
 * Check if CMS has any existing content
 */
async function checkExistingContent() {
  try {
    const queries = [
      'count(*[_type == "service"])',
      'count(*[_type == "pricingPlan"])',
      'count(*[_type == "testimonial"])',
      'count(*[_type == "homepageSettings"])',
      'count(*[_type == "blogPost"])'
    ];

    const results = await Promise.all(
      queries.map(query => client.fetch(query))
    );

    const totalContent = results.reduce((sum, count) => sum + count, 0);
    
    console.log('📊 Content Check Results:');
    console.log(`   Services: ${results[0]}`);
    console.log(`   Pricing Plans: ${results[1]}`);
    console.log(`   Testimonials: ${results[2]}`);
    console.log(`   Homepage Settings: ${results[3]}`);
    console.log(`   Blog Posts: ${results[4]}`);
    console.log(`   Total Documents: ${totalContent}`);

    return totalContent > 0;
  } catch (error) {
    console.error('❌ Error checking existing content:', error.message);
    return false; // Assume no content if we can't check
  }
}

/**
 * Import content from JSON files
 */
async function importContent() {
  try {
    console.log('🚀 Starting automatic content import...');
    
    // Load content files
    const contentDir = path.join(__dirname, '../content');
    const services = JSON.parse(fs.readFileSync(path.join(contentDir, 'services.ts'), 'utf8').replace('export const services = ', '').replace(/;$/, ''));
    const pricing = JSON.parse(fs.readFileSync(path.join(contentDir, 'pricing.ts'), 'utf8').replace('export const pricing = ', '').replace(/;$/, ''));
    const testimonials = JSON.parse(fs.readFileSync(path.join(contentDir, 'testimonials.ts'), 'utf8').replace('export const testimonials = ', '').replace(/;$/, ''));
    const homepage = JSON.parse(fs.readFileSync(path.join(contentDir, 'homepage.ts'), 'utf8').replace('export const homepage = ', '').replace(/;$/, ''));

    // Import services
    console.log('📝 Importing services...');
    for (const service of services) {
      await client.create({
        _type: 'service',
        title: `generic-example-content-${service.title}`,
        description: service.description,
        features: service.features,
        price: service.price,
        duration: service.duration,
        difficulty: service.difficulty,
        category: service.category,
        image: service.image
      });
    }

    // Import pricing plans
    console.log('💰 Importing pricing plans...');
    for (const plan of pricing.plans) {
      await client.create({
        _type: 'pricingPlan',
        name: `generic-example-content-${plan.name}`,
        price: plan.price,
        period: plan.period,
        description: plan.description,
        features: plan.features,
        popular: plan.popular || false,
        buttonText: plan.buttonText
      });
    }

    // Import testimonials
    console.log('💬 Importing testimonials...');
    for (const testimonial of testimonials) {
      await client.create({
        _type: 'testimonial',
        name: `generic-example-content-${testimonial.name}`,
        role: testimonial.role,
        content: testimonial.content,
        rating: testimonial.rating,
        image: testimonial.image
      });
    }

    // Import homepage settings
    console.log('🏠 Importing homepage settings...');
    await client.create({
      _type: 'homepageSettings',
      title: `generic-example-content-${homepage.hero.title}`,
      subtitle: homepage.hero.subtitle,
      description: homepage.hero.description,
      ctaPrimary: homepage.hero.ctaPrimary,
      ctaSecondary: homepage.hero.ctaSecondary,
      heroImage: homepage.hero.backgroundImage,
      aboutTitle: homepage.about.title,
      aboutDescription: homepage.about.description,
      aboutImage: homepage.about.image
    });

    // Import sample blog posts
    console.log('📰 Importing sample blog posts...');
    const samplePosts = [
      {
        title: 'generic-example-content-Getting Started with Yoga',
        slug: 'getting-started-with-yoga',
        excerpt: 'Learn the basics of yoga and how to begin your wellness journey.',
        content: 'This is a sample blog post about getting started with yoga...',
        category: 'Yoga',
        publishedAt: new Date().toISOString(),
        featured: true
      },
      {
        title: 'generic-example-content-Nutrition Tips for Athletes',
        slug: 'nutrition-tips-for-athletes',
        excerpt: 'Essential nutrition guidance for peak athletic performance.',
        content: 'This is a sample blog post about nutrition for athletes...',
        category: 'Nutrition',
        publishedAt: new Date().toISOString(),
        featured: false
      }
    ];

    for (const post of samplePosts) {
      await client.create({
        _type: 'blogPost',
        ...post
      });
    }

    console.log('✅ Content import completed successfully!');
    console.log('📍 All content has been labeled with "generic-example-content-" prefix');
    console.log('🎯 You can now access your Sanity Studio and see the imported content');
    
    return true;
  } catch (error) {
    console.error('❌ Error importing content:', error.message);
    return false;
  }
}

/**
 * Main startup function
 */
async function runStartupImport() {
  console.log('🔄 PowerFlow CMS - Startup Content Check');
  
  // Check if we have the required API token
  if (!process.env.SANITY_API_TOKEN) {
    console.log('⚠️  No SANITY_API_TOKEN found - skipping auto-import');
    console.log('💡 Add your API token to .env.local to enable auto-import');
    return;
  }

  try {
    const hasExistingContent = await checkExistingContent();
    
    if (hasExistingContent) {
      console.log('✅ CMS already has content - skipping auto-import');
      console.log('💡 Use "npm run import-content:force" to override existing content');
    } else {
      console.log('🌱 Empty CMS detected - importing example content...');
      const success = await importContent();
      
      if (success) {
        console.log('🎉 Startup import completed! Your CMS is ready to use.');
      } else {
        console.log('⚠️  Import failed - you may need to run it manually');
      }
    }
  } catch (error) {
    console.error('❌ Startup import error:', error.message);
    console.log('💡 You can run "npm run import-content" manually if needed');
  }
}

// Run if called directly
if (require.main === module) {
  runStartupImport();
}

module.exports = { runStartupImport };