import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage Content',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Main Title',
          type: 'string',
          description: 'Large headline shown at the top of the page',
          validation: Rule => Rule.required()
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
          description: 'Paragraph text below the title'
        },
        {
          name: 'ctaPrimaryText',
          title: 'Primary Button Text',
          type: 'string',
          initialValue: 'Join Now'
        },
        {
          name: 'ctaPrimaryLink',
          title: 'Primary Button Link',
          type: 'string',
          initialValue: '/join'
        },
        {
          name: 'ctaSecondaryText',
          title: 'Secondary Button Text',
          type: 'string',
          initialValue: 'Watch Video'
        },
        {
          name: 'videoUrl',
          title: 'Video URL',
          type: 'url',
          description: 'YouTube or Vimeo URL'
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: { hotspot: true }
        },
        {
          name: 'activeMembersCount',
          title: 'Active Members Count',
          type: 'number',
          initialValue: 2300
        },
        {
          name: 'memberImages',
          title: 'Member Profile Images',
          type: 'array',
          of: [{ type: 'image' }],
          validation: Rule => Rule.max(5)
        }
      ]
    }),
    
    // About Section
    defineField({
      name: 'about',
      title: 'About Section',
      type: 'object',
      fields: [
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'Welcome to PowerFlow'
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 5
        },
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }],
          validation: Rule => Rule.max(4)
        },
        {
          name: 'yearsOfExperience',
          title: 'Years of Experience',
          type: 'number',
          initialValue: 15
        },
        {
          name: 'ctaText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Join Now'
        },
        {
          name: 'ctaLink',
          title: 'Button Link',
          type: 'string',
          initialValue: '/join'
        }
      ]
    }),
    
    // Stats
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'value',
            title: 'Number',
            type: 'number',
            validation: Rule => Rule.required()
          },
          {
            name: 'label',
            title: 'Label',
            type: 'string',
            validation: Rule => Rule.required()
          },
          {
            name: 'suffix',
            title: 'Suffix',
            type: 'string',
            description: 'e.g., "+" or "k"',
            initialValue: '+'
          }
        ],
        preview: {
          select: {
            value: 'value',
            label: 'label',
            suffix: 'suffix'
          },
          prepare({ value, label, suffix }) {
            return {
              title: `${value}${suffix || ''} ${label}`
            }
          }
        }
      }]
    })
  ],
  preview: {
    select: {
      title: 'hero.title'
    },
    prepare({ title }) {
      return {
        title: 'Homepage Content',
        subtitle: title || 'Configure homepage sections'
      }
    }
  }
})
