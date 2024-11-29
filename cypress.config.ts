import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://minhong1126.github.io/metaintern_shopsite",
    projectId: "metaIntern",
  },
});
