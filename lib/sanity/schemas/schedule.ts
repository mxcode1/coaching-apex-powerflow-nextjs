import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'schedule',
  title: 'Class Schedule',
  type: 'document',
  fields: [
    defineField({
      name: 'dayOfWeek',
      title: 'Day of Week',
      type: 'string',
      options: {
        list: [
          { title: 'Monday', value: 'monday' },
          { title: 'Tuesday', value: 'tuesday' },
          { title: 'Wednesday', value: 'wednesday' },
          { title: 'Thursday', value: 'thursday' },
          { title: 'Friday', value: 'friday' },
          { title: 'Saturday', value: 'saturday' },
          { title: 'Sunday', value: 'sunday' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'classes',
      title: 'Classes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'time',
              title: 'Time',
              type: 'string',
              placeholder: 'e.g., 6:00 AM',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'name',
              title: 'Class Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'instructor',
              title: 'Instructor',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'duration',
              title: 'Duration (minutes)',
              type: 'number',
              initialValue: 60,
            },
            {
              name: 'spotsAvailable',
              title: 'Spots Available',
              type: 'number',
              initialValue: 20,
            },
            {
              name: 'level',
              title: 'Level',
              type: 'string',
              options: {
                list: [
                  { title: 'Beginner', value: 'beginner' },
                  { title: 'Intermediate', value: 'intermediate' },
                  { title: 'Advanced', value: 'advanced' },
                  { title: 'All Levels', value: 'all' },
                ],
              },
              initialValue: 'all',
            },
          ],
          preview: {
            select: {
              time: 'time',
              name: 'name',
              instructor: 'instructor',
            },
            prepare({ time, name, instructor }) {
              return {
                title: `${time} - ${name}`,
                subtitle: `with ${instructor}`,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which days appear (0=Monday, 6=Sunday)',
      validation: (Rule) => Rule.required().min(0).max(6),
    }),
  ],
  orderings: [
    {
      title: 'Day Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      day: 'dayOfWeek',
      classCount: 'classes',
    },
    prepare({ day, classCount }) {
      return {
        title: day.charAt(0).toUpperCase() + day.slice(1),
        subtitle: `${classCount?.length || 0} classes`,
      }
    },
  },
})
