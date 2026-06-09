import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'wqaw7x12',
  dataset: 'production',
  apiVersion: '2026-06-08',
  useCdn: true,
})