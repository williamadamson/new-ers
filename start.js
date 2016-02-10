var express = require('express'),
  fs = require('fs-extra'),
  favicon = require('serve-favicon'),
  bodyParser = require('body-parser'),
  q = require('q'),
  path = require('path'),
  glob = require('glob-all'),
  hjs = require('hjs'),
  auth = require('basic-auth-connect'),

  username = process.env.USERNAME,
  password = process.env.PASSWORD,

  app = express();

// TODO: https://github.com/wolfendale/prototype_kit/issues/2
app.locals.partials = crunchTemplates([
  __dirname + '/global/views',
  __dirname + '/global/template',
]);

app.locals.assetPath = '/';
app.locals.localAssets = '/';
app.locals.isDev = app.get('env') === 'development';

app.use(favicon(
  path.join(__dirname, 'global', 'public', 'images', 'favicon.ico')));

// Password protection for Heroku
if (!app.locals.isDev) {
  if (!username || !password) {
    console.log('A username and password must be set for Heroku');
    process.exit(1);
  }
  app.use(auth(process.env.USERNAME, process.env.PASSWORD));
}

app.use(bodyParser.urlencoded({ extended : true }));

function crunchTemplates(viewdirs) {
  return glob.sync(viewdirs.map(function (e) {
    return e + '/**/*.html';
  })).reduce(function (m, file) {
    var relpath = file.replace(/^.*(?:views|template)\/(.*?)\.html/, '$1');
    m[relpath] = relpath;
    return m;
  }, {});
}

app.engine('html', hjs.__express);
app.set('view engine', 'html');
app.set('views', glob.sync([
  __dirname,
  __dirname + '/global/views',
  __dirname + '/global/template',
]));

// serve static global assets
app.use('/', 
  express.static(path.join(__dirname, 'global', 'public')));

app.use('/public/images/icons', 
  express.static(path.join(__dirname, 'global', 'public', 'images')));

// include the app file from each sub project
// as sub app mounted at the prefix of the name
// of the folder
glob.sync(__dirname + '/app/*')
  .map(function (e) {

    var p = './' + path.relative(
      __dirname, e
    ).replace(/\\/g, '/');

    var meta = fs.readJsonSync(p + '/meta.json');
    var name = e.replace(/^.*app(\/.*?)$/, '$1');
    var sub = require(p + '/app.js');
    // if a get request falls through to this
    // point we check to see if we have a view
    // that matches the url and render that.
    // useful if people do not want to declare
    // routes
    sub.get('*', function (req, res, next) {
      try {
        res.render(req.path.substring(1));
      } catch (e) {
        next();
      }
    });
    // this adds a default post to every page
    // that checks whether the request body
    // contains a 'next-page' key, if so
    // we redirect the user to whatever the
    // value of that key is
    sub.post('*', function (req, res, next) {
      if (req.body['next-page']) {
        res.redirect(name + '/' + req.body['next-page']);
      } else {
        next();
      }
    });
    app.use(name, sub);
  });

// mount admin app
if (app.locals.isDev) {
  app.use('/admin', require('./global/admin/app.js'));
}

// global controllers
require('./lib/controllers/index.js')(app);

app.listen(process.env.PORT || 3000);
