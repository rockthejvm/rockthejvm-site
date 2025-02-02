/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    root: "test/",
    coverage: {
      include: ["src/utils/**"],
    },
  },
});
