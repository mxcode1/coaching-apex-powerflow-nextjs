import type { PricingPlan } from '@/lib/content/types'

/**
 * Pricing plans - JSON source
 * Extracted from PowerFlow HTML template
 */
export const pricingData: PricingPlan[] = [
  {
    id: '3-month',
    name: '3 Months Plan',
    tagline: 'Perfect for Starters',
    price: 120,
    duration: '3 months',
    durationUnit: '/3 months',
    benefits: [
      'Unlimited gym access & equipment use.',
      'Access to all group fitness classes.',
      'Free locker & shower usage.',
      'Monthly body composition tracking.',
      '10% discount on personal training.',
    ],
    featured: false,
    order: 1,
    ctaText: 'Choose Plan',
    ctaLink: '/join',
  },
  {
    id: '6-month',
    name: '6 Months Plan',
    tagline: 'Commit to Your Fitness',
    price: 210,
    duration: '6 months',
    durationUnit: '/6 months',
    benefits: [
      'Unlimited gym access & equipment use.',
      'Access to all group fitness classes.',
      'Free locker & shower usage.',
      'Monthly body composition tracking.',
      '15% off on personal training sessions.',
    ],
    featured: true,
    order: 2,
    ctaText: 'Choose Plan',
    ctaLink: '/join',
  },
  {
    id: '12-month',
    name: '12 Months Plan',
    tagline: 'Best Value Package',
    price: 360,
    duration: '12 months',
    durationUnit: '/year',
    benefits: [
      'Unlimited gym access & equipment use.',
      'Access to all group fitness classes.',
      'Free locker & shower usage.',
      'Bi-weekly body composition tracking.',
      '20% off all personal training sessions.',
      'Free guest pass once per month.',
    ],
    featured: false,
    order: 3,
    ctaText: 'Choose Plan',
    ctaLink: '/join',
  },
]
