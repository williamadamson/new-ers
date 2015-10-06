var express = require('express'),
  q = require('q'),
  path = require('path'),
  glob = require('glob-all'),
  hjs = require('hjs'),

  app = express();

var viewdirs = [
  __dirname + '/views',
  __dirname + '/app/**/views'
];

var viewext = 'html';

app.locals.partials = 
  glob.sync(viewdirs.map(function (e) {
    return e + '/**/*.' + viewext;
  })).reduce(function (m, file) {
      relpath = file.replace(/^.*views\/(.*?)\.html/, '$1');
      m[relpath] = relpath;
      return m;
  }, {});

console.log(app.locals.partials);

app.engine('html', require('hjs').__express);
app.set('view engine', viewext);
app.set('views', glob.sync(viewdirs));

app.use('/', express.static(
  path.join(__dirname, 'public')
));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(process.env.port || 3000);