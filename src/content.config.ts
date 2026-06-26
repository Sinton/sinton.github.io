import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { articlesSchema, projectsSchema } from "astro-newspaper-theme/lib/content-schema";

const works = defineCollection({
  loader: glob({ base: "./src/content/works", pattern: "**/*.{md,mdx}" }),
  schema: projectsSchema.extend({
    // 可以在这里扩展主站专有的自定义属性，例如：
    // githubRepo: z.string().url().optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ base: "./src/content/articles", pattern: "**/*.{md,mdx}" }),
  schema: articlesSchema.extend({
    // 可以在这里扩展主站专有的自定义属性，例如：
    // originalUrl: z.string().url().optional(),
  }),
});

const travel = defineCollection({
  loader: glob({ base: "./src/content/travel", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    region: z.string(),
    tags: z.array(z.string()).default([]),
    mood: z.string().default("Field Note"),
  }),
});

export const collections = { works, articles, travel };