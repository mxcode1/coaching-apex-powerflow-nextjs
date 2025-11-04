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
  
  // Log which source is active (dev mode only)
  if (process.env.NODE_ENV === 'development') {
    console.log(`📦 [Content Source]: Using ${source.toUpperCase()} source`)
  }
  
  switch (source) {
    case 'sanity':
      return new SanityContentSource()
    
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
