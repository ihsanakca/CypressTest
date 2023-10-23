const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  chromeWebSecurity: false,
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 4000,
  viewportHeight: 800,
  viewportWidth: 1080,
  failOnStatusCode: false,
  video:true,

  env:{
    baseUrl:"https://www.demoblaze.com/",
    username:"mgezer@gmail.com",
    password:"Mg12345678"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
