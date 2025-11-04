/**
 * Sanity Startup Check API Route
 * Automatically runs content import if CMS is empty when Studio starts
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false
});

async function checkExistingContent() {
  try {
    const queries = [
      'count(*[_type == "service"])',
      'count(*[_type == "pricingPlan"])',
      'count(*[_type == "testimonial"])',
      'count(*[_type == "homepage"])',
      'count(*[_type == "blogPost"])'
    ];

    const results = await Promise.all(
      queries.map(query => client.fetch(query))
    );

    const totalContent = results.reduce((sum, count) => sum + count, 0);
    return { hasContent: totalContent > 0, counts: results, total: totalContent };
  } catch (error) {
    console.error('Error checking content:', error);
    return { hasContent: false, counts: [0, 0, 0, 0, 0], total: 0 };
  }
}

async function importExampleContent() {
  try {
    // Import sample services
    const services = [
      {
        _type: 'service',
        title: 'generic-example-content-Personal Training',
        description: 'One-on-one personalized fitness training sessions',
        features: ['Customized workout plans', 'Nutrition guidance', 'Progress tracking'],
        price: 85,
        duration: 60,
        difficulty: 'All Levels',
        category: 'Training'
      },
      {
        _type: 'service', 
        title: 'generic-example-content-Group Fitness',
        description: 'High-energy group workout sessions',
        features: ['Community atmosphere', 'Variety of exercises', 'Motivational coaching'],
        price: 25,
        duration: 45,
        difficulty: 'Intermediate',
        category: 'Group Class'
      },
      {
        _type: 'service',
        title: 'generic-example-content-Yoga & Wellness',
        description: 'Mindful movement and meditation practices',
        features: ['Stress reduction', 'Flexibility improvement', 'Mind-body connection'],
        price: 30,
        duration: 75,
        difficulty: 'Beginner',
        category: 'Wellness'
      }
    ];

    // Import pricing plans
    const pricingPlans = [
      {
        _type: 'pricingPlan',
        name: 'generic-example-content-Basic',
        price: 49,
        period: 'month',
        description: 'Perfect for getting started',
        features: ['4 classes per month', 'Basic equipment access', 'Online resources'],
        popular: false,
        buttonText: 'Get Started'
      },
      {
        _type: 'pricingPlan',
        name: 'generic-example-content-Premium',
        price: 89,
        period: 'month', 
        description: 'Most popular choice',
        features: ['Unlimited classes', 'Full equipment access', 'Personal trainer sessions', 'Nutrition coaching'],
        popular: true,
        buttonText: 'Go Premium'
      },
      {
        _type: 'pricingPlan',
        name: 'generic-example-content-Elite',
        price: 149,
        period: 'month',
        description: 'Ultimate fitness experience',
        features: ['Everything in Premium', 'Private training sessions', '24/7 gym access', 'Meal planning'],
        popular: false,
        buttonText: 'Go Elite'
      }
    ];

    // Import testimonials
    const testimonials = [
      {
        _type: 'testimonial',
        name: 'generic-example-content-Sarah Johnson',
        role: 'Marketing Manager',
        content: 'The personal training sessions have completely transformed my fitness routine. I feel stronger and more confident than ever!',
        rating: 5
      },
      {
        _type: 'testimonial', 
        name: 'generic-example-content-Mike Chen',
        role: 'Software Engineer',
        content: 'The group classes are amazing! Great energy, supportive community, and excellent instructors.',
        rating: 5
      },
      {
        _type: 'testimonial',
        name: 'generic-example-content-Emily Rodriguez', 
        role: 'Teacher',
        content: 'The yoga sessions help me manage stress and stay centered. Perfect for my busy lifestyle.',
        rating: 5
      }
    ];

    // Import homepage settings
    const homepage = {
      _type: 'homepage',
      _id: 'homepage',
      title: 'generic-example-content-Transform Your Body, Elevate Your Mind',
      subtitle: 'Premium Fitness & Wellness Studio',
      description: 'Join our community of fitness enthusiasts and discover your potential with personalized training, group classes, and wellness programs.',
      ctaPrimary: 'Start Your Journey',
      ctaSecondary: 'View Classes',
      aboutTitle: 'About PowerFlow',
      aboutDescription: 'We believe fitness is a journey, not a destination. Our experienced trainers and state-of-the-art facility are here to support you every step of the way.'
    };

    // Import sample blog posts
    const blogPosts = [
      {
        _type: 'blogPost',
        title: 'generic-example-content-5 Benefits of Regular Exercise',
        slug: { current: 'benefits-of-regular-exercise' },
        excerpt: 'Discover how regular exercise can improve your physical and mental health.',
        content: 'Regular exercise is one of the best things you can do for your health. It has many benefits for both your physical and mental well-being...',
        category: 'Health & Wellness',
        publishedAt: new Date().toISOString(),
        featured: true
      },
      {
        _type: 'blogPost',
        title: 'generic-example-content-Getting Started with Strength Training',
        slug: { current: 'getting-started-strength-training' },
        excerpt: 'A beginner\'s guide to building strength and muscle safely.',
        content: 'Strength training is an excellent way to build muscle, increase bone density, and improve overall fitness...',
        category: 'Training Tips',
        publishedAt: new Date().toISOString(),
        featured: false
      }
    ];

    // Create documents by type
    console.log('Creating services...');
    for (const service of services) {
      await client.create(service);
    }
    
    console.log('Creating pricing plans...');
    for (const plan of pricingPlans) {
      await client.create(plan);
    }
    
    console.log('Creating testimonials...');
    for (const testimonial of testimonials) {
      await client.create(testimonial);
    }
    
    console.log('Creating homepage...');
    await client.create(homepage);
    
    console.log('Creating blog posts...');
    for (const post of blogPosts) {
      await client.create(post);
    }

    const totalImported = services.length + pricingPlans.length + testimonials.length + 1 + blogPosts.length;
    return { success: true, imported: totalImported };
  } catch (error) {
    console.error('Import error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return { success: false, error: errorMessage };
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check if we have API token
    if (!process.env.SANITY_API_TOKEN) {
      return NextResponse.json({
        success: false,
        message: 'No API token configured - skipping auto-import'
      });
    }

    // Check existing content
    const contentCheck = await checkExistingContent();
    
    if (contentCheck.hasContent) {
      return NextResponse.json({
        success: true,
        message: `CMS already has ${contentCheck.total} documents - skipping auto-import`,
        hasContent: true
      });
    }

    // Import example content
    console.log('🌱 Empty CMS detected - importing example content...');
    const importResult = await importExampleContent();
    
    if (importResult.success) {
      return NextResponse.json({
        success: true,
        message: `✅ Imported ${importResult.imported} example documents successfully!`,
        hasContent: false,
        imported: importResult.imported
      });
    } else {
      return NextResponse.json({
        success: false,
        message: `❌ Import failed: ${importResult.error}`,
        error: importResult.error
      });
    }

  } catch (error) {
    console.error('Startup check error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({
      success: false,
      message: 'Startup check failed',
      error: errorMessage
    });
  }
}