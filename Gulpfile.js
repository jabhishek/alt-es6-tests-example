var gulp = require("gulp");
var Server = require('karma').Server;
var path = require('path');

gulp.task('karma', function(cb) {

	var config = {
		configFile: path.join(__dirname, '/karma.conf.js'),
		singleRun: false,
		autoWatch: true
	};

	var server = new Server(config, null);
	server.start();
	cb();
});

