var glob = require('glob-all'),
  path = require('path'),
  fs = require('fs-extra');

var cwd = process.cwd();

// this is a lazily-instantiated and cached array of the app models
var model = (function () {
  return glob.sync(cwd + '/app/*').map(function (app) {
    var jsn = fs.readJsonSync(path.join(app, 'meta.json'));
    jsn.path = app.replace(/^.*app\/(.*)$/, '$1');
    return jsn;
  }); 
})();

module.exports = model;