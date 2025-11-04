import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './lib/sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'PowerFlow CMS',
  
  projectId: 'pmybjuoo',
  dataset: 'production',
  
  basePath: '/studio',
  
  appId: 'powerflow-nextjs-studio',
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content Management')
          .items([
            // Singleton for Homepage
            S.listItem()
              .title('Homepage')
              .icon(() => '🏠')
              .child(
                S.document()
                  .schemaType('homepage')
                  .documentId('homepage')
                  .title('Homepage Settings')
              ),
            
            S.divider(),
            
            // Content Types
            S.listItem()
              .title('Services & Classes')
              .icon(() => '💪')
              .child(
                S.documentTypeList('service')
                  .title('Services')
              ),
            
            S.listItem()
              .title('Class Schedule')
              .icon(() => '📅')
              .child(
                S.documentTypeList('schedule')
                  .title('Weekly Schedule')
              ),
            
            S.listItem()
              .title('Pricing Plans')
              .icon(() => '💳')
              .child(
                S.documentTypeList('pricingPlan')
                  .title('Membership Plans')
              ),
            
            S.divider(),
            
            // Blog & Content
            S.listItem()
              .title('Blog Posts')
              .icon(() => '📝')
              .child(
                S.documentTypeList('blogPost')
                  .title('All Posts')
                  .filter('_type == "blogPost"')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
              ),
            
            S.listItem()
              .title('Testimonials')
              .icon(() => '⭐')
              .child(
                S.documentTypeList('testimonial')
                  .title('Client Reviews')
              ),
            
            S.divider(),
            
            // Settings
            S.listItem()
              .title('Contact Information')
              .icon(() => '📞')
              .child(
                S.document()
                  .schemaType('contactInfo')
                  .documentId('contactInfo')
                  .title('Contact Settings')
              ),
          ]),
    }),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
})
