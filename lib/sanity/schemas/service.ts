import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Services / Classes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Class Name',
      type: 'string',
      description: 'e.g., "Strength & Conditioning", "HIIT Training"',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of the name',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'text',
      rows: 5,
      description: 'Detailed description of the class'
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      description: 'Brief one-line description for previews'
    }),
    defineField({
      name: 'image',
      title: 'Class Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'duration',
      title: 'Duration (minutes)',
      type: 'number',
      description: 'Class length in minutes',
      validation: Rule => Rule.required().min(15).max(180),
      initialValue: 60
    }),
    defineField({
      name: 'intensity',
      title: 'Intensity Level',
      type: 'string',
      options: {
        list: [
          { title: 'Low', value: 'Low' },
          { title: 'Medium', value: 'Medium' },
          { title: 'High', value: 'High' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'maxParticipants',
      title: 'Max Participants',
      type: 'number',
      description: 'Maximum class size'
    }),
    defineField({
      name: 'benefits',
      title: 'Key Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of benefits (e.g., "Builds strength", "Burns calories")'
    }),
    defineField({
      name: 'featured',
      title: 'Featured Class',
      type: 'boolean',
      description: 'Highlight this class on the homepage',
      initialValue: false
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'intensity',
      media: 'image',
      duration: 'duration',
      slug: 'slug'
    },
    prepare({ title, subtitle, media, duration, slug }) {
      const slugValue = slug?.current
      return {
        title,
        subtitle: `${subtitle} intensity • ${duration} min`,
        media
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
      title: 'Name (A-Z)',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }]
    }
  ]
})
