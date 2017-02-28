var util    = require('util');
var cheerio = require('cheerio');

var TEMPLATE_INIT = 'window.__html__ = window.__html__ || {};'
var TEMPLATE = 'window.__html__[\'%s\'] = \'%s\';';

var escapeContent = function(content) {
  return content.replace(/\\/g, '\\\\').replace(/'/g, '\\\'').replace(/\r?\n/g, '\\n\' +\n    \'');
};

var createInlineHtmlPreprocessor = function(logger, basePath, config) {
  config = typeof config === 'object' ? config : {};

  var log = logger.create('preprocessor.inlinehtml');
  var selector = config.templateSelector || 'script[type="text/html"]';
  var prefix = config.prefix || '';

  return function(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);
    var htmlPath = file.originalPath.replace(basePath + '/', '');
    var templates = TEMPLATE_INIT;
    $ = cheerio.load(content);
    $templates = $(selector);
    $templates.each(function(item) {
      id = $templates[item].attribs.id;
      log.debug('Adding %s', id);
      templates += util.format(TEMPLATE, prefix + id, escapeContent($('#' + id).html()))
    });
    file.path = file.path + '.js';
    done(templates);
  };
};

createInlineHtmlPreprocessor.$inject = ['logger', 'config.basePath', 'config.inlineHtmlPreprocessor'];
module.exports = createInlineHtmlPreprocessor;
