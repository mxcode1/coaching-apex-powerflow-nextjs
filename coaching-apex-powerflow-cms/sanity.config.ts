import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Coaching CMS',

  projectId: 'pmybjuoo',
  dataset: 'production',

  // Studio configuration
  studioHost: 'coaching-studio',

  // Enable dark mode by default
  studio: {
    components: {
      navbar: (props) => {
        // Set color scheme to dark on load
        if (typeof window !== 'undefined') {
          localStorage.setItem('sanity-ui-color-scheme', 'dark')
        }
        return props.renderDefault(props)
      },
    },
  },

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton for Homepage
            S.listItem()
              .title('Homepage')
              .icon(() => '🏠')
              .child(
                S.document()
                  .schemaType('homepage')
                  .documentId('homepage')
              ),
            
            S.divider(),
            
            // Regular document types
            S.documentTypeListItem('service')
              .title('Services')
              .icon(() => '💪'),
            
            S.documentTypeListItem('pricingPlan')
              .title('Pricing Plans')
              .icon(() => '💳'),
            
            S.documentTypeListItem('schedule')
              .title('Class Schedule')
              .icon(() => '📅'),
            
            S.divider(),
            
            S.documentTypeListItem('blogPost')
              .title('Blog Posts')
              .icon(() => '📝'),
            
            S.documentTypeListItem('testimonial')
              .title('Testimonials')
              .icon(() => '⭐'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

