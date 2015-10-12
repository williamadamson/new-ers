var apps = require('../../../lib/models/apps-model.js'),
  path = require('path'),
  fs = require('fs-extra'),
  util = require('./util.js');

var cwd = process.cwd();

module.exports = function (app) {

  app.get('/new-iteration', function (req, res) {
    res.render('new-iteration', {
      apps : require('../../lib/models/apps-model.js')
    });
  });

  app.post('/new-iteration', function (req, res) {
    var meta = {
      name : req.body.name,
      description : req.body.description
    };
    fs.copySync(
      path.join(cwd, 'app', req.body.app),
      path.join(cwd, 'app', req.body.path)
    );
    fs.writeJsonSync(
      path.join(cwd, 'app', req.body.path, 'meta.json'), meta);
    res.redirect('new-iteration');
    util.restartApp();
  });
}