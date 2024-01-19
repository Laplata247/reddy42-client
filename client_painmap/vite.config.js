import { defineConfig } from "vitest/config";
import { configDefaults } from 'vitest/config';
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    exclude:[
      ...configDefaults.exclude, 
      'node_modules/**'
    ]
  },
  coverage: {
    reporter: ["text", "json", "html"],
    
  },
});
