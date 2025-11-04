import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Street Address',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'state',
      title: 'State / Province',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'zipCode',
      title: 'ZIP / Postal Code',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: Rule => Rule.required().email()
    }),
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'text',
      rows: 3,
      description: 'e.g., "Mon-Fri: 5:00 AM - 11:00 PM"'
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'platform',
            title: 'Platform',
            type: 'string',
            options: {
              list: [
                { title: 'Facebook', value: 'facebook' },
                { title: 'Twitter / X', value: 'twitter' },
                { title: 'Instagram', value: 'instagram' },
                { title: 'LinkedIn', value: 'linkedin' },
                { title: 'YouTube', value: 'youtube' },
                { title: 'TikTok', value: 'tiktok' }
              ]
            }
          },
          {
            name: 'url',
            title: 'Profile URL',
            type: 'url'
          }
        ],
        preview: {
          select: {
            title: 'platform',
            subtitle: 'url'
          }
        }
      }]
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'URL for embedded Google Maps'
    })
  ],
  preview: {
    select: {
      address: 'address',
      city: 'city'
    },
    prepare({ address, city }) {
      return {
        title: 'Contact Information',
        subtitle: `${address}, ${city}`
      }
    }
  }
})
