module.exports = {
  ci: {
    collect: {
      // Starts Vite preview server (port 4173) after the build step in YAML
      startServerCommand: "npm run preview", 
      // Scans the specific pages built
      url: [
        "http://localhost:4173/",
        "http://localhost:4173/services",
        "http://localhost:4173/about",
        "http://localhost:4173/contact"
      ],
      // Tells Lighthouse to wait until Vite's preview server is live
      startServerReadyPattern: "Local:", 
    },
    assert: {
      assertions: {
        // Warnings at 8.5 or lower
        "categories:accessibility": ["warn", { "minScore": 0.85 }],
        // Specifically monitors the side-button and testimonial contrast
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