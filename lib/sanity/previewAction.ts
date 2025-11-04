export function PreviewAction(props: any) {
  const { id, type, draft } = props

  return {
    label: 'Preview on Site',
    icon: () => '👁️',
    onHandle: () => {
      // Generate preview URLs based on document type
      let previewUrl = 'http://localhost:3000'
      
      switch (type) {
        case 'blogPost':
          previewUrl = 'http://localhost:3000/blog'
          break
        case 'service':
          previewUrl = 'http://localhost:3000/classes'
          break
        case 'pricingPlan':
          previewUrl = 'http://localhost:3000/pricing'
          break
        case 'schedule':
          previewUrl = 'http://localhost:3000/schedule'
          break
        case 'homepage':
          previewUrl = 'http://localhost:3000'
          break
        case 'testimonial':
          previewUrl = 'http://localhost:3000'
          break
        default:
          previewUrl = 'http://localhost:3000'
      }
      
      // Open preview in new tab
      window.open(previewUrl, '_blank')
    }
  }
}