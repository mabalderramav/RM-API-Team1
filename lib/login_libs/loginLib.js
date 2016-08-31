var request = require('../request_client/request.js');
var resource = require('../../utilities/resource.json');

module.exports.create = function (credentialsJson, callback) {
	var endPoint = resource.login;
	request.create(endPoint, credentialsJson, function (err, res) {
		callback(err, res);
	});
};
