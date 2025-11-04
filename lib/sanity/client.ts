/**
 * Sanity Client Configuration
 * Connects to Sanity CMS project
 */

import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'
const token = process.env.SANITY_API_TOKEN

if (!projectId && process.env.CONTENT_SOURCE === 'sanity') {
  console.warn('⚠️  SANITY: Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable')
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production
  token, // Optional: needed for authenticated requests
  perspective: 'published', // Only fetch published documents
})
