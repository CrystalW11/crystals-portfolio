/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Step 4: Increase the chunk size limit
  build: {
    chunkSizeWarningLimit: 1000, // Adjust this limit as needed (in KB)
  },

  // Step 5: Optimize dependencies for pre-bundling
  optimizeDeps: {
    include: ["large-dependency"], // Add specific libraries you want to pre-bundle
  },
});
