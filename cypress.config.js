const { defineConfig } = require("cypress");


module.exports = defineConfig({
  
  e2e: {
    experimentalStudio : true,
    testIsolation: false,
    watchForFileChanges: false,
    pageLoadTimeout : 1000000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
