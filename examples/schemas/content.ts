import { z } from 'astro:content'

export const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string().default('Oskar Hulter'),
  date: z.string().optional(),
  image: z.string().optional(),
  tags: z.array(z.string().default('post')),
})
