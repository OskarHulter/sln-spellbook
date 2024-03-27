// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content'
import { docsSchema } from '@astrojs/starlight/schema'

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
}
