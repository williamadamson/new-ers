var express = require('express'),
  glob = require('glob-all'),
  path = require('path'),
  cwd = process.cwd(),
  app = express();


// we need the dirname to be passed
// so that we can work out which
// subapp we are
module.exports = function (_dirname) {

  var appName = path.basename(_dirname);

  // set view directories
  app.set('views', glob.sync([
    _dirname + '/views',
    cwd + '/views',
    cwd + '/govuk_elements/views'
  ]));

  // set view partials
  function crunchTemplates(viewdirs) {
    return glob.sync(viewdirs.map(function (e) {
      return e + '/**/*.html';
    })).reduce(function (m, file) {
      var relpath = file.replace(/^.*views\/(.*?)\.html/, '$1');
      m[relpath] = relpath;
      return m;
    }, {});
  }
  app.locals.partials = crunchTemplates([
    cwd + '/views',
    cwd + '/govuk_elements/views'
  ]);

  // app locals
  app.locals.assetPath = '/' + appName + '/public/';

  // set static assets
  app.use('/public',
    express.static(path.join(_dirname, 'public')));

  return app;
}