var path = require('path');
var config 	= require('jsconfig');
var defaultConfigPath = path.join(__dirname, "config.js");

config.load(defaultConfigPath, function (args, opts) {

	var server = require('./lib/server.js');
    server.run(config, function() {
        console.log("run app...");
    });

});