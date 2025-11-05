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

  // Enable dark mode by default and run startup content check
  studio: {
    components: {
      layout: (props) => {
        // Force dark mode immediately on load
        if (typeof window !== 'undefined') {
          // Set multiple attributes to ensure dark mode applies
          document.documentElement.setAttribute('data-ui', 'dark');
          document.documentElement.setAttribute('data-scheme', 'dark');
          document.body.setAttribute('data-ui', 'dark');
          localStorage.setItem('sanity-ui-color-scheme', 'dark');
        }
        return props.renderDefault(props)
      },
      navbar: (props) => {
        // Run startup content check after Studio loads
        if (typeof window !== 'undefined') {
          setTimeout(async () => {
            try {
              console.log('🎯 PowerFlow CMS - Running startup content check...');
              const response = await fetch('/api/sanity/startup-check', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
              });
              
              if (response.ok) {
                const result = await response.json();
                console.log(result.message);
                
                if (result.imported) {
                  console.log(`🎉 Auto-imported ${result.imported} example documents!`);
                  console.log('💡 All content is labeled with "generic-example-content-" prefix');
                  console.log('🔄 Refresh the Studio to see your new content');
                }
              }
            } catch (error) {
              console.log('💡 Manual import available: npm run import-content');
            }
          }, 2000); // Wait 2 seconds for Studio to fully load
        }
        return props.renderDefault(props)
      },
    },
  },
  
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
