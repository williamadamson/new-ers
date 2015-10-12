var touch = require('touch'),
  path = require('path');

var cwd = process.cwd();

module.exports = {
  
  restartApp : function restartApp() {
    // This is a bit of a dirty hack
    // to reload the app by touching
    // the main js file of the app
    // and letting the gulp watch task
    // restart the app from there.
    // We wrap this in a setTimeout
    // to give the app time to respond
    // to the http request before
    // the restart...
    // If you can think of a better way
    // to do this, please do!
    setTimeout(function () {
      touch(path.join(cwd, 'start.js'));
    }, 1000);
  } 
};