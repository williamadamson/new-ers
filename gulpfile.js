'use strict';

var gulp = require('gulp'),
  gls = require('gulp-live-server'),
  rimraf = require('gulp-rimraf'),
  rename = require('gulp-rename'),
  glob = require('glob-all'),
  path = require('path'),
  fs = require('fs-extra'),
  debug = require('gulp-debug'),
  flatten = require('gulp-flatten'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass');

gulp.task('clean', function() {
  return gulp.src(__dirname + '/**/public', { read : false})
    .pipe(rimraf({ force : true }))
});

gulp.task('move', function () {
  return gulp.src('node_modules/govuk_*/**/*.@(js|css|png|gif|jpg|jpeg)')
    .pipe(rename(function (path) {
      path.dirname = path.dirname.replace(/^.*?[\\\/](assets)?/, '');
    }))
    .pipe(gulp.dest('public'))
    .pipe(debug());
});

// This needs tidying up, preferrably with Q
// TODO: Fix this so it returns an async thing and
// doesn't break dependant tasks
gulp.task('sass', function () {

  var appDir = 'app';

  fs.readdir(appDir, function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
      fs.stat(path.join(__dirname, appDir, file), function (err, stats) {
        if (err) throw err;
        if (stats.isDirectory()) {
          gulp.src(path.join(__dirname, appDir, file, 'src/sass/**/*.scss'))
            .pipe(sass({
              outputStyle : 'extended',
              includePaths : glob.sync(path.join(__dirname, 'node_modules/govuk_*/stylesheets'))
            }))
            .pipe(gulp.dest(
              path.join(__dirname, appDir, file, 'public/assets/stylesheets')))
        }
      });
    });
  });
});

gulp.task('build', ['sass', 'move']);

// TODO: add 'build' as dependent task when it works
gulp.task('start', function () {
  var server = gls.new('start.js', 3000);
  server.start();

  // recompiles sass files on the fly
  gulp.watch(glob.sync('app/**/*.scss'), ['sass']);

  // restarts the server when the start file changes
  // TODO: add routes files to this
  gulp.watch('start.js', server.start.bind(server));
});

gulp.task('default', ['start']);