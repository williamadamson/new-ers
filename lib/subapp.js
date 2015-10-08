var express = require('express'),
  glob = require('glob-all'),
  path = require('path');

// we need the dirname to be passed
// so that we can work out which
// subapp we are
//
// also note that this must be a
// function so that different subapps
// don't end up sharing the same 
// app instance
module.exports = function (_dirname) {

  var cwd = process.cwd(),
    app = express(),
    appName = path.basename(_dirname);

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