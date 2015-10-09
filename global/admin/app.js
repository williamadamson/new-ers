var app = require('../../lib/subapp.js')(__dirname),
  path = require('path'),
  fs = require('fs-extra'),
  touch = require('touch');

var cwd = process.cwd();

app.get('/', function (req, res) {
  res.render('index');
});

// This would reset the app in a really
// really dirty way. Not sure if we need this
// app.get('/touch', function (req, res) {
//  setTimeout(function () {
//    touch(path.join(cwd, 'start.js'));
//  }, 1000);
//  res.redirect('/');
// });

app.get('/new-iteration', function (req, res) {
  res.render('new-iteration', {
    apps : require('../../lib/models/apps-model.js')
  });
});

app.post('/new-iteration', function (req, res) {
  var body = req.body;
  console.log(path.join(cwd, 'app', body.app));
  // fs.copySync(
  //   path.join(cwd, 'app', body.app),
  //   path.join(cwd, 'app', body.path)
  // );
  res.redirect('new-iteration');
});

module.exports = app;