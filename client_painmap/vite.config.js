import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    resources: 'usable', // Enable canvas usage
    deps: {
      inline: ['canvas'], // Include canvas for tests
    },
  },
  coverage: {
    reporter: ["text", "json", "html"],
  },
});
