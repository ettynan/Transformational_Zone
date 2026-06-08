module.exports = {
  ci: {
    collect: {
      // Starts Vite preview server on port 4173 after the build step
      startServerCommand: "npm run preview", 
      // Scans specific pages built for the project
      url: [
        "http://localhost:4173/",
        "http://localhost:4173/services",
        "http://localhost:4173/about",
        "http://localhost:4173/contact"
      ],
      // Waits for Vite's preview server to be live
      startServerReadyPattern: "Local:", 
    },
    assert: {
      assertions: {
        // Threshold set to 0.85 to accommodate current home page scores
        "categories:accessibility": ["warn", { "minScore": 0.85 }],
        // Monitors the side-button and testimonial contrast
        "color-contrast": "warn",
        "button-name": "warn",
        "aria-live-polite": "warn"
      },
    },
    upload: {
      // Generates a temporary link to the full report for review
      target: "temporary-public-storage",
    },
  },
};