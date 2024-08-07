'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import schemas from './sanity/schemas'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  apiVersion, // Ensure this matches your .env.local
  schema: {
    types: schemas, // Correctly referencing schemas
  },
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
