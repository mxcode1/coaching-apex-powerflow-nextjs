/**
 * Sanity Image URL Builder
 * Helper to generate optimized image URLs from Sanity image references
 */

import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'
import type { SanityImageSource } from '@/lib/content/types'

const builder = imageUrlBuilder(client)

/**
 * Generate URL for Sanity image
 * @param source - Sanity image reference
 */
export function urlForImage(source: SanityImageSource) {
  return builder.image(source)
}

/**
 * Helper to check if image source is from Sanity
 */
export function isSanityImage(source: any): source is SanityImageSource {
  return source && typeof source === 'object' && source._type === 'image'
}

/**
 * Get image URL (works for both JSON strings and Sanity references)
 */
export function getImageUrl(source: string | SanityImageSource, width?: number): string {
  if (typeof source === 'string') {
    return source // JSON source - return as-is
  }
  
  if (isSanityImage(source)) {
    const builder = urlForImage(source)
    if (width) {
      return builder.width(width).url()
    }
    return builder.url()
  }
  
  return '' // Fallback
}
