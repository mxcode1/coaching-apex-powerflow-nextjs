import type { Testimonial } from '@/lib/content/types'

/**
 * Testimonials - JSON source
 * Extracted from PowerFlow HTML template
 */
export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'The trainers here are incredible. They push you to be your best while keeping it fun and supportive.',
    author: 'Sarah M.',
    location: 'New York',
    rating: 5,
    image: '/images/testimonial/1.webp',
    featured: true,
    order: 1,
  },
  {
    id: 'testimonial-2',
    quote: 'The facilities are top-notch. Every session leaves me feeling stronger and more energized.',
    author: 'Nadia R.',
    location: 'Dubai',
    rating: 5,
    image: '/images/testimonial/2.webp',
    featured: true,
    order: 2,
  },
  {
    id: 'testimonial-3',
    quote: 'Joining this gym completely changed my lifestyle. It is the best decision I ever made.',
    author: 'Tom S.',
    location: 'Los Angeles',
    rating: 5,
    image: '/images/testimonial/3.webp',
    featured: true,
    order: 3,
  },
  {
    id: 'testimonial-4',
    quote: 'From the group classes to personal training, everything is professional and motivating.',
    author: 'Elise K.',
    location: 'Amsterdam',
    rating: 5,
    featured: false,
    order: 4,
  },
  {
    id: 'testimonial-5',
    quote: 'Amazing atmosphere, skilled trainers, and results I never thought possible.',
    author: 'David M.',
    location: 'Singapore',
    rating: 5,
    featured: false,
    order: 5,
  },
]
