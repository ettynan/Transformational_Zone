# Transformational Zone Website

**Author:** E. Tynan

This repository contains the source code for the Transformational Zone website, a static client-side website for a small holistic wellness business offering Reflexology and Footzoning services.

The site is informational only. It does not use a backend server, database, or user accounts.

---

## Table of Contents

- [Semantic Versioning](#semantic-versioning)
- [Purpose of the Site](#purpose-of-the-site)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [How to Update Site Content (Non-Technical Guide)](#how-to-update-site-content-non-technical-guide)
  - [Updating Homepage Text or Buttons](#updating-homepage-text-or-buttons)
  - [Updating Services Descriptions or Prices](#updating-services-descriptions-or-prices)
  - [Updating About Page Content](#updating-about-page-content)
  - [Updating Contact Information](#updating-contact-information)
  - [Updating Navigation Links](#updating-navigation-links)
  - [Updating Footer Information](#updating-footer-information)
  - [Updating Images](#updating-images)
  - [Image Credits](#image-credits)
- [Transformational Zone Company Website](#transformational-zone-company-website)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Future Enhancements](#future-enhancements)

---

## Semantic Versioning :mage:

This project is going to utilize semantic versioning for its tagging.
[semver.org](https://semver.org/)

The general format:

**MAJOR.MINOR.PATCH**, eg. `1.0.1`

- **MAJOR** version when you make incompatible API changes
- **MINOR** version when you add functionality in a backward compatible manner
- **PATCH** version when you make backward compatible bug fixes

---

## Purpose of the Site

The website provides:
- An overview of the business and its wellness philosophy
- Descriptions of offered services (Reflexology and Footzoning)
- Pricing and package information
- Contact information
- Basic navigation between pages

---

## Technology Stack

- **TypeScript** – Primary programming language
- **React** – UI framework
- **Vite** – Development server and build tooling
- **Tailwind CSS** – Styling and layout
- **Wouter** – Client-side routing
- **Framer Motion** – Animations
- **Lucide React** – Icon library

---

## Project Structure

```text
client/
├─ public/
│  └─ images/                 Locally stored images used throughout the site
│
├─ src/
│  ├─ components/
│  │  ├─ Navigation.tsx       Top navigation bar
│  │  ├─ Footer.tsx           Footer with site links and contact info
│  │  ├─ SectionHeader.tsx    Reusable section heading component
│  │  └─ ui/                  Shared UI primitives (buttons, inputs, etc.)
│  │
│  ├─ pages/
│  │  ├─ Home.tsx             Landing page
│  │  ├─ Services.tsx         Services and pricing page
│  │  ├─ About.tsx            About the business
│  │  ├─ Contact.tsx          Contact information and form UI
│  │  └─ not-found.tsx        404 page
│  │
│  ├─ lib/                    Shared utilities and helpers
│  │
│  ├─ App.tsx                 Application routing
│  └─ main.tsx                Application entry point
│
├─ index.html                 Base HTML template
└─ vite.config.ts             Vite configuration
```
---

## How to Update Site Content (Non-Technical Guide)

This section explains where to go to make common updates without needing deep technical knowledge.

### Updating Homepage Text or Buttons

File:
```bash
client/src/pages/Home.tsx
```
You can update:

1. The main headline text
2. The short description under the headline
3. Button text such as “Explore Services” or “Request Appointment”
4. Introductory text about the business

Look for clearly written text inside 
```
<h1> and <p> 
```
 and button labels.

### Updating Services Descriptions or Prices

File:
```bash
client/src/pages/Services.tsx
```

You can update:
1. Service descriptions for Reflexology and Footzoning
2. Session durations and prices
3. Package prices and package descriptions

Prices are grouped together in a pricing configuration near the top of the file, making them easier to change in one place.

### Updating About Page Content
File:
```bash
client/src/pages/About.tsx
```

Use this file to change:
1. Business philosophy text
2. Practitioner biography
3. Certifications and experience
4. Supporting images or quotes

This page is text-heavy and safe to edit the text on.

### Updating Contact Information
File:
```bash
client/src/pages/Contact.tsx
```

Use this file to change:
1. Address
2. Phone number
3. Email address
4. Business hours
5. Messaging about how to request an appointment

The site currently does not send messages. It displays contact information only.

### Updating Navigation Links
File:
```bash
client/src/components/Navigation.tsx
```

Use this file to change:
1. Top navigation labels
2. Which pages appear in the menu
3. The “Request Appointment” button text or destination

### Updating Footer Information
File:
```bash
client/src/components/Footer.tsx
```

Use this file to change:
1. Footer text
2. Address and contact details
3. Footer navigation links
4. Photo credits 

### Updating Images
Folder:
```bash
client/public/images/
```

To change an image:
1. Replace the image file in this folder
2. Keep the same filename or update the image path in the page file

### Image Credits
All images used on this site were sourced from royalty-free photography platforms.

Images are used in accordance with the respective platform licenses, which allow free use for commercial and non-commercial projects without attribution.

- Rock on the Ground by Benjamin Nguyen — https://unsplash.com/@another_passenger717 — https://unsplash.com/photos/a-rock-on-the-ground-TPhn7vWOlHs
- Seashore during golden hour by Sean Oulashin — https://unsplash.com/@oulashin — https://unsplash.com/photos/seashore-during-golden-hour-KMn4VEeEPR8
- Zen sand and water image by krzhck — https://unsplash.com/@krzhck — https://unsplash.com/photos/BdCCmdzgV90
- A blue butterfly with orange markings rests on the ground by Thomas Elliott — https://unsplash.com/@thomaselliott — https://unsplash.com/photos/bBG9h5OO7Ck
- A sandy beach with waves coming in to shore by Karin Kim — https://unsplash.com/@karinkim — https://unsplash.com/photos/l4AWZ5QhyDk
- Stones, Balance, Meditation by Martin Baumann https://pixabay.com/photos/stones-balance-meditation-quiet-10016267/

---
## Transformational Zone Company Website

Transformational Zone is a modern, responsive wellness-focused website built with React and Vite. The project is structured as a front-end application with an emphasis on maintainability, accessibility, and scalability for future enhancements.

The site is intended to be deployed as a static web application and is compatible with most modern hosting platforms.

---

## Prerequisites

Before running this project locally, ensure the following are installed:

- Node.js (LTS recommended)
- npm (included with Node.js)

Verify installation:
```bash
    node -v
    npm -v
```

## Getting Started

### Install Dependencies

From the project root directory, install base dependencies:
```bash
    npm install
```
---

### Resolve TypeScript / Vite Config Errors

If you encounter TypeScript errors in vite.config.ts related to missing type definitions (for example, Node globals or Vite plugin types), install the required development dependencies:
```bash
    npm install -D @types/node
```

These typings are required for proper TypeScript support in the Vite configuration file and prevent editor and build-time errors.

After installation, restart your development server and editor to ensure the types are picked up correctly.

---

### Run the Development Server

Start the local development server:
```bash
    npm run dev
```
Vite will start the application and output a local URL: http://localhost:5173

The application will automatically reload as changes are made.

---

## Available Scripts
Starts the local development server.

```bash
    npm run dev  
```

Creates an optimized production build.
```bash
    npm run build  
```

Serves the production build locally for verification.
```bash
    npm run preview  
```

---

## Building for Production

When you are ready to prepare the site for deployment, run:
```bash
    npm run build
```

This command generates a production-ready static build in the dist/ directory.

---

## Deployment

The contents of the dist/ directory can be deployed to any static hosting provider, including:

- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages
- GoDaddy
- Traditional web hosting providers

### General Deployment Steps

1. Generate the production build using 
```bash
    npm run build
```
2. Deploy the contents of the dist/ directory to your hosting provider.
3. Configure the host to serve index.html as the entry point.

If client-side routing is enabled, ensure your hosting provider redirects all routes to index.html.

---

## Environment Variables

This project does not currently require environment variables.

If environment-specific configuration is added in the future, Vite supports the following conventions:

- .env for default values
- .env.local for local overrides (not committed)
- .env.production for production-specific values

---

## Future Enhancements

Potential future improvements include:

- Backend or API integration
- CMS-driven content management
- Authentication and user accounts
- SEO optimization
- Analytics integration