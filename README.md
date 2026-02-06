# Transformational Zone Website

This repository contains the source code for the Transformational Zone website, a static client-side website for a small holistic wellness business offering Reflexology and Footzoning services.

The site is informational only. It does not use a backend server, database, or user accounts.

---

## Semantic Versioning :mage:

This project is going to utilize semantic versioning for its tagging.
[semver.org](https://sember.org/)

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
- Contact information and a contact form UI
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

## Transformational Zone Website

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

## Project Structure

The project is organized to support modular UI components, a clear separation of concerns, and future integration with backend services or a CMS.

---

## Future Enhancements

Potential future improvements include:

- Backend or API integration
- CMS-driven content management
- Authentication and user accounts
- SEO optimization
- Analytics integration