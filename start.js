var express = require('express'),
  path = require('path'),
  glob = require('glob-all'),
  engines = require('consolidate'),

  app = express();

app.engine('html', engines.hogan);
app.set('view engine', 'html');
app.set('views', glob.sync([
  __dirname + '/app/**/views',
  __dirname + '/node_modules/govuk_*/**/views'
  ]));

app.use('/', express.static(
  path.join(__dirname, 'public')
));

app.get('/', function (req, res) {
  res.render('layouts/govuk_template', {name: 'world'});
});

app.listen(process.env.port || 3000);