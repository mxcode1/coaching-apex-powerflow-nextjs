/**
 * Sanity Client Configuration
 * Connects to Sanity CMS project
 */

import { createClient, type SanityClient } from 'next-sanity'

let clientInstance: SanityClient | null = null

/**
 * Get Sanity client instance (lazy initialization)
 * Returns null if Sanity is not configured
 */
export function getClient(): SanityClient | null {
  // Return cached instance if available
  if (clientInstance) {
    return clientInstance
  }

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'
  const token = process.env.SANITY_API_TOKEN

  // If no projectId, return null (Sanity not configured)
  if (!projectId) {
    if (process.env.CONTENT_SOURCE === 'sanity') {
      console.warn('⚠️  SANITY: Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable')
    }
    return null
  }

  // Create and cache the client
  clientInstance = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: process.env.NODE_ENV === 'production',
    token,
    perspective: 'published',
    timeout: 30000,
    maxRetries: 2,
    retryDelay: (attemptNumber) => 1000 * attemptNumber,
  })

  return clientInstance
}

/**
 * Legacy export for backwards compatibility
 * @deprecated Use getClient() instead
 */
export const client = getClient() as SanityClient
