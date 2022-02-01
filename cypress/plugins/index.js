const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
const dev = require('../../cypress.json')
const tagify = require('cypress-tags');

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: require.resolve("typescript"),
  };

  on("file:preprocessor", cucumber(options));

  on('file:preprocessor', tagify(config));
  //config.env.CYPRESS_INCLUDE_TAGS = 'E2E';

  // on('before:browser:launch', (browser = {}, launchOptions) => {
  //   if (browser.name === 'chrome') {
  //       launchOptions.args.push('--auto-open-devtools-for-tabs','--window-size=800,800')
  //       return launchOptions
  //   }
  // });

  // return config.env.configFile = dev;
};