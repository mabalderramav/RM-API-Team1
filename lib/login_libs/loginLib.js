var request = require('../request_lib/requestLib.js');
var resource = require('../../resources/resource.json');

module.exports.create = function (credentialsJson, callback) {
	var endPoint = resource.login;
	request.create(endPoint, credentialsJson, function (err, res) {
		callback(err, res);
	});
};
