const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://www.automationpractice.pl/',
    chromeWebSecurity: false,
    viewportWidth: 1280,
    viewportHeight: 800,
    waitForAnimations: false,
    watchForFileChanges: false
  },
});
