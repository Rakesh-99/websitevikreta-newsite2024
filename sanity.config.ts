'use client'

import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { apiVersion, dataset, projectId } from './sanity/env'
import schemas from './sanity/schemas'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  apiVersion: '2024-08-06', // Make sure this matches your .env.local
  schema: {
    types: schemas, // Correctly referencing schemas
  },
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
