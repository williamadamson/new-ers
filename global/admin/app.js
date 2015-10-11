var app = require('../../lib/subapp.js')(__dirname),
  path = require('path'),
  fs = require('fs-extra'),
  touch = require('touch');

var cwd = process.cwd();

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/new-iteration', function (req, res) {
  res.render('new-iteration', {
    apps : require('../../lib/models/apps-model.js')
  });
});

app.post('/new-iteration', function (req, res) {
  var body = req.body;
  var meta = {
    name : body.name,
    description : body.description
  };
  fs.copySync(
    path.join(cwd, 'app', body.app),
    path.join(cwd, 'app', body.path)
  );
  fs.writeJsonSync(
    path.join(cwd, 'app', body.path, 'meta.json'), meta);
  res.redirect('new-iteration');
  setTimeout(function () {
    touch(path.join(cwd, 'start.js'));
  }, 1000);
});

module.exports = app;