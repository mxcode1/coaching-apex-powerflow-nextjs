import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'pricingPlan',
  title: 'Pricing Plans',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Plan Name',
      type: 'string',
      description: 'e.g., "3 Months Plan", "6 Months Plan"',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'e.g., "Perfect for Starters", "Best Value"',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price in dollars',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., "3 months", "1 year"',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'durationUnit',
      title: 'Duration Unit (for display)',
      type: 'string',
      description: 'e.g., "/3 months", "/year"',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'benefits',
      title: 'Plan Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of included benefits',
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'featured',
      title: 'Featured Plan',
      type: 'boolean',
      description: 'Highlight this plan (usually best value)',
      initialValue: false
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order to display (1 = first)',
      validation: Rule => Rule.required(),
      initialValue: 1
    }),
    defineField({
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
      description: 'Text on the signup button',
      initialValue: 'Choose Plan'
    }),
    defineField({
      name: 'ctaLink',
      title: 'Button Link',
      type: 'string',
      description: 'Where the button leads',
      initialValue: '/join'
    })
  ],
  preview: {
    select: {
      title: 'name',
      price: 'price',
      duration: 'durationUnit',
      featured: 'featured'
    },
    prepare({ title, price, duration, featured }) {
      return {
        title: title,
        subtitle: `$${price}${duration}${featured ? ' ⭐ Featured' : ''}`,
        media: undefined
      }
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    },
    {
      title: 'Price (Low to High)',
      name: 'priceAsc',
      by: [{ field: 'price', direction: 'asc' }]
    }
  ]
})
