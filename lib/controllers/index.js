var fs = require('fs-extra'),
	path = require('path'),
	glob = require('glob-all');

module.exports = function (app) {

	var cwd = process.cwd();
	var model = {
		apps : (function () {
			return glob.sync(cwd + '/app/*').map(function (app) {
				var jsn = fs.readJsonSync(path.join(app, 'meta.json'));
				jsn.path = app.replace(/^.*app\/(.*)$/, '$1');
				return jsn;
			});
		})()
	};

	app.get('/', function (req, res) {
		res.render('index', model);
	});
};