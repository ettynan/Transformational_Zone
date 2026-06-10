# Sanity CMS Proof of Concept Notes

## Purpose

The website originally stored all content directly in React source files. Any update required modifying code and redeploying the site.

The goal of this proof of concept was to verify that editable content could be moved into Sanity while leaving the existing React website intact.

---

## Folder Structure

```text
Transformational/
├── Transformational_Zone/       # React website
└── Transformational_Zone_CMS/   # Sanity CMS
```

---

## Step 1 - Create Sanity Project

Created a new folder:

```text
Transformational_Zone_CMS
```

Installed a new Sanity project:

```bash
npm create sanity@latest
```

Selected:

- Create New Project
- TypeScript
- Clean Project
- Default dataset (production)

Result:

```text
Transformational_Zone_CMS/
├── sanity.config.ts
├── schemaTypes/
├── package.json
└── ...
```

---

## Step 2 - Create First Schema

Created:

```text
schemaTypes/testimonials.ts
```

Added schema:

```ts
export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    { name: 'quote', title: 'Quote', type: 'text' },
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
  ],
}
```

---

## Step 3 - Register Schema

Modified:

```text
schemaTypes/index.ts
```

Original:

```ts
export const schemaTypes = []
```

Updated:

```ts
import testimonials from './testimonials'

export const schemaTypes = [testimonials]
```

---

## Step 4 - Start Sanity Studio

Ran:

```bash
npm run dev
```

Sanity Studio became available at:

```text
http://localhost:3333
```

Confirmed:

- Testimonials appeared in the left navigation
- New testimonial entries could be created

---

## Step 5 - Create Test Content

Created a test testimonial in Sanity.

Published the testimonial.

Confirmed content existed within the CMS.

---

## Step 6 - Install Sanity Client in Website

From website folder:

```bash
cd Transformational_Zone
npm install @sanity/client
```

Installed:

```text
@sanity/client
```

This package allows the React application to retrieve content from Sanity.

---

## Step 7 - Create Sanity Connection

Created:

```text
src/lib/sanity.ts
```

Added:

```ts
import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '<project-id>',
  dataset: 'production',
  apiVersion: '2026-06-08',
  useCdn: true,
})
```

Project ID was copied from:

```text
Transformational_Zone_CMS/sanity.config.ts
```

---

## Step 8 - Convert Testimonial Carousel

Modified:

```text
TestimonialCarousel.tsx
```

Changes:

1. Added:

```ts
import { sanityClient } from "../lib/sanity";
```

2. Renamed:

```ts
const testimonials = [...]
```

to:

```ts
const fallbackTestimonials = [...]
```

3. Added React state:

```ts
const [testimonials, setTestimonials] =
  useState<Testimonial[]>(fallbackTestimonials);
```

4. Added Sanity fetch:

```ts
sanityClient.fetch(...)
```

5. Preserved existing hardcoded testimonials as fallback data.

---

## Step 9 - Verify Integration

Website running:

```bash
cd Transformational_Zone
npm run dev
```

Website:

```text
http://localhost:5173
```

CMS:

```text
http://localhost:3333
```

Result:

- Website successfully retrieved testimonial content from Sanity
- Carousel displayed Sanity content
- Existing fallback testimonials remained available during migration

---

## Step 10 - Create Service Schemas

Created individual schemas for:

```text
schemaTypes/reiki.ts
schemaTypes/footZone.ts
schemaTypes/steamSauna.ts
```

Purpose:

* Allow service content to be edited through Sanity
* Preserve existing website layout and styling
* Limit editable content to service descriptions, pricing, and duration information

Fields added:

### Reiki

```text
Description
Price
Distance Reiki Price
Duration
```

### Foot Zone

```text
Description
Price
In-Home Price
Duration
```

### Steam Sauna

```text
Description
Price
Combo Price
Duration
Combo Duration
```

Preview titles were configured so service documents display as:

```text
Reiki
Foot Zone
Steam Sauna
```

within the Sanity Studio navigation.

---

## Step 11 - Connect Service Content to React Website

Modified:

```text
Services.tsx
```

Changes:

1. Added Sanity client integration.
2. Added service-specific content types.
3. Added React state for:

   * Reiki
   * Foot Zone
   * Steam Sauna
4. Added Sanity queries to retrieve service content.
5. Added fallback values for:

   * Descriptions
   * Prices
   * Durations
6. Preserved existing page structure and styling.

Description behavior:

* If content exists in Sanity, website displays Sanity content.
* If content is unavailable, original hardcoded content is displayed.

Pricing and duration values now support updates through Sanity while maintaining fallback values within the application.

---

## Current Status

Completed:

- Sanity installation
- Testimonial schema
- Testimonial CMS integration
- Service schemas
- Service CMS integration
- Sanity Studio configuration
- Test content creation
- React integration
- Successful content retrieval

Remaining:

- Migrate remaining testimonials
- Create Packages schema
- Create Specials schema
- Create Add-ons schema
- Create Business Settings schema
- Remove hardcoded fallback content after migration is complete

## Long-Term Goal

Client edits content through Sanity.

React website remains hosted separately.

Website code remains in GitHub.

Content becomes independent from source code.