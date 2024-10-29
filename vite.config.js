/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy"; // Step 1: Import legacy plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11", "chrome >= 60", "android >= 5"], // Step 2: Set compatibility
    }),
  ],

  // Step 4: Increase the chunk size limit
  build: {
    target: "es2015", // Step 3: Set build target to support older syntax
    chunkSizeWarningLimit: 1000, // Adjust this limit as needed (in KB)
    sourcemap: true, // Optional: Enable source maps for debugging
  },

  // Step 5: Optimize dependencies for pre-bundling
  optimizeDeps: {
    include: ["large-dependency"], // Add specific libraries you want to pre-bundle
  },
});