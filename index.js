'format cjs';

var engine = require('./engine');
// var conventionalCommitTypes = require('conventional-commit-types');
var configLoader = require('commitizen').configLoader;
var assign = require('lodash.assign');
var defaultConfig = require('./lib/cz-config');
var config = configLoader.load() || {};

var options = assign({}, defaultConfig, config);

(function(options) {
  try {
    var commitlintLoad = require('@commitlint/load');
    commitlintLoad().then(function(clConfig) {
      if (clConfig.rules) {
        var maxHeaderLengthRule = clConfig.rules['header-max-length'];
        if (
          typeof maxHeaderLengthRule === 'object' &&
          maxHeaderLengthRule.length >= 3 &&
          !process.env.CZ_MAX_HEADER_WIDTH &&
          !config.maxHeaderWidth
        ) {
          options.maxHeaderWidth = maxHeaderLengthRule[2];
        }
      }
    });
  } catch (err) {}
})(options);

module.exports = engine(options);
