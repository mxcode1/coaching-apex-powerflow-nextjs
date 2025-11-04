'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export function PowerFlowScripts() {
  useEffect(() => {
    // Initialize PowerFlow functionality after scripts load
    const initPowerFlow = () => {
      // Skip preloader since it causes hydration issues
      const loader = document.getElementById('de-loader')
      if (loader) {
        loader.style.display = 'none'
      }

      // Ensure jQuery is available
      if (typeof window !== 'undefined' && (window as any).jQuery) {
        console.log('PowerFlow scripts initialized')
      }
    }

    // Run initialization after a short delay to ensure DOM is ready
    const timer = setTimeout(initPowerFlow, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Script
        src="/js/vendors.js"
        strategy="afterInteractive"
        onLoad={() => console.log('Vendors.js loaded')}
      />
      <Script
        src="/js/designesia.js"
        strategy="afterInteractive"
        onLoad={() => console.log('Designesia.js loaded')}
      />
      <Script
        src="/js/swiper.js"
        strategy="afterInteractive"
        onLoad={() => console.log('Swiper.js loaded')}
      />
      <Script
        src="/js/custom-marquee.js"
        strategy="afterInteractive"
        onLoad={() => console.log('Custom marquee loaded')}
      />
    </>
  )
}
