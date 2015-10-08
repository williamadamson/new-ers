var express = require('express'),
  favicon = require('serve-favicon'),
  q = require('q'),
  path = require('path'),
  glob = require('glob-all'),
  hjs = require('hjs'),

  app = express();

app.use(favicon(
  path.join(__dirname, 'global', 'public', 'images', 'favicon.ico')));

function crunchTemplates(viewdirs) {
  return glob.sync(viewdirs.map(function (e) {
    return e + '/**/*.html';
  })).reduce(function (m, file) {
    var relpath = file.replace(/^.*(?:views|template)\/(.*?)\.html/, '$1');
    m[relpath] = relpath;
    return m;
  }, {});
}

// TODO: https://github.com/wolfendale/prototype_kit/issues/2
app.locals.partials = crunchTemplates([
  __dirname + '/global/views',
  __dirname + '/global/template',
  __dirname + '/govuk_elements/views'
]);

app.locals.assetPath = '/';
app.locals.localAssets = '/';

app.engine('html', hjs.__express);
app.set('view engine', 'html');
app.set('views', glob.sync([
  __dirname + '/global/views',
  __dirname + '/global/template',
  __dirname + '/govuk_elements/views'
]));

// as the express.static middleware does not
// take an array of args, in order to serve the
// global assets and sprint assets, we need to
// loop over the glob of dirs

// TODO: if we manage to include govuk_elements
// as a dependency, this can be reduced to just
// share the 'public' dir and a gulp task to
// move the right files around
glob.sync([
  __dirname + '/govuk_elements',
  __dirname + '/global/public',
]).map(function (e) {
  app.use('/', express.static(e));
});

// include the app file from each sub project
// as sub app mounted at the prefix of the name
// of the folder
glob.sync(__dirname + '/app/**/app.js')
  .map(function (e) {
    var p = './' + path.relative(
      __dirname, e
    ).replace(/\\/g, '/');
    var name = e.replace(/^.*app(\/.*?)\/.*$/, '$1');
    var sub = require(p);
    sub.use(function (req, res, next) {
      res.render(req.path.substring(1));
    });
    app.use(name, sub);
  });

// global routes
app.get('/', function (req, res) {
  res.render('index');
});

app.listen(process.env.port || 3000);