var request = require('../request_lib/requestLib.js');
var resource = require('../../resources/resource.json');

/**
 * Module to GET the Service Type.
 *
 * @param callback Contains the error and the response.
 */
module.exports.getServiceTypes = function(callback){
	var endpoint = resource.serviceTypes;
	console.log(endpoint);
	request.get(endpoint, function(err, res){
		callback(err, res);
	});
};