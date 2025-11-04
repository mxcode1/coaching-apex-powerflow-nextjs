/**
 * Content Source Selector
 * Determines which content source to use based on CONTENT_SOURCE environment variable
 */

import type { ContentSource } from './types'
import { JsonContentSource } from './sources/json'
import { SanityContentSource } from './sources/sanity'

/**
 * Get the active content source
 * Reads CONTENT_SOURCE environment variable (default: 'json')
 */
export function getContentSource(): ContentSource {
  const source = (process.env.CONTENT_SOURCE || 'json').toLowerCase()
  
  // Check if Sanity is properly configured
  const hasSanityConfig = !!(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET
  )
  
  // Log which source is active (dev mode only)
  if (process.env.NODE_ENV === 'development') {
    console.log(`📦 [Content Source]: Using ${source.toUpperCase()} source`)
    if (source === 'sanity' && !hasSanityConfig) {
      console.warn('⚠️  [Content Source]: Sanity selected but not configured, falling back to JSON')
    }
  }
  
  switch (source) {
    case 'sanity':
      // Only use Sanity if properly configured, otherwise fallback to JSON
      if (hasSanityConfig) {
        return new SanityContentSource()
      }
      console.warn('⚠️  Sanity not configured, using JSON fallback')
      return new JsonContentSource()
    
    case 'json':
    default:
      return new JsonContentSource()
  }
}

/**
 * Get the current content source type
 * Useful for debugging and conditional logic
 */
export function getContentSourceType(): 'json' | 'sanity' {
  const source = (process.env.CONTENT_SOURCE || 'json').toLowerCase()
  return source === 'sanity' ? 'sanity' : 'json'
}
