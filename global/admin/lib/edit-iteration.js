var apps = require('../../../lib/models/apps-model.js'),
  path = require('path'),
  fs = require('fs-extra'),
  util = require('./util.js');

var cwd = process.cwd();

module.exports = function (app) {

  app.get('/edit-iteration', function (req, res) {
    res.render('edit-iteration-summary', {
      apps : apps
    });
  });

  // boilerplate function for the controllers
  function editIteration(fn) {
    return function (req, res, next) {
      var subapp = apps.find(function (e) {
        return e.path === req.params.iteration;
      });
      if (subapp) {
        fn(subapp)(req, res);
      } else {
        next();
      }
    };
  }

  app.get('/edit-iteration/:iteration', editIteration(function (subapp) {
    return function (req, res) {
      res.render('edit-iteration', subapp);
    };
  }));

  app.post('/edit-iteration/:iteration', editIteration(function (subapp) {
    return function (req, res) {
      var meta = {
        name : req.body.name,
        description : req.body.description
      };
      fs.writeJsonSync(
        path.join(cwd, 'app', req.params.iteration, 'meta.json'), meta);
      res.redirect('/admin/edit-iteration');
      util.restartApp();
    };
  }));
}