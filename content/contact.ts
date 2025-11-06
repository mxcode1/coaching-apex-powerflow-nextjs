import type { ContactInfo } from '@/lib/content/types'

/**
 * Contact information - JSON source
 */
export const contactData: ContactInfo = {
  address: '123 Fitness Avenue',
  city: 'New York',
  state: 'NY',
  zipCode: '10001',
  country: 'United States',
  phone: '+1 (555) 123-4567',
  email: 'info@powerflow.gym',
  hours: 'Mon-Fri: 5:00 AM - 11:00 PM, Sat-Sun: 7:00 AM - 9:00 PM',
  socialLinks: [
    {
      platform: 'facebook',
      url: 'https://facebook.com/powerflow',
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/powerflow',
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/powerflow',
    },
    {
      platform: 'youtube',
      url: 'https://youtube.com/powerflow',
    },
  ],
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841!(sample)',
}
