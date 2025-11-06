import type { Homepage } from '@/lib/content/types'

/**
 * Homepage content - JSON source
 * This data is extracted from the PowerFlow HTML template
 */
export const homepageData: Homepage = {
  hero: {
    title: 'Transform your Body and Mind with PowerFlow',
    description: 'Discover world-class training, expert coaches, and modern equipment to help you achieve your fitness goals, build strength, burn fat, and stay motivated every single day with our dynamic gym experience.',
    ctaPrimaryText: 'Join Now',
    ctaPrimaryLink: '/join',
    ctaSecondaryText: 'Watch Video',
    ctaSecondaryLink: 'https://www.youtube.com/watch?v=JxRnueT6wHs',
    videoUrl: 'https://www.youtube.com/watch?v=JxRnueT6wHs',
    backgroundImage: '/images/background/1.webp',
    activeMembersCount: 2300,
    memberImages: [
      '/images/testimonial/1.webp',
      '/images/testimonial/2.webp',
      '/images/testimonial/3.webp',
    ],
  },
  
  about: {
    subtitle: 'Welcome to PowerFlow',
    title: 'Push Beyond Limits And Unlock Your Strength',
    description: 'Step into a fitness experience designed to challenge your body and sharpen your mind. With expert trainers, cutting-edge equipment, and programs built for all levels, you will gain the power, confidence, and results you have always wanted. Every workout moves you closer to becoming your strongest self.',
    images: [
      '/images/misc/p1.webp',
      '/images/misc/p2.webp',
    ],
    yearsOfExperience: 15,
    ctaText: 'Join Now',
    ctaLink: '/join',
  },
  
  stats: [
    {
      value: 12000,
      label: 'Training Hours',
      suffix: '+',
    },
    {
      value: 2300,
      label: 'Active Members',
      suffix: '+',
    },
    {
      value: 540,
      label: 'Transformations',
      suffix: '+',
    },
    {
      value: 25,
      label: 'Expert Trainers',
      suffix: '+',
    },
  ],
}
