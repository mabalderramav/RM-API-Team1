/**
 * ServiceTypeLib Module
 * @fileoverview serviceTypeLib module that obtains the the service types.
 * @author  Jimmy.Romero@fundacion-jala.org (Jimmy Joel Romero Sejas)
 * @version 1.0.0
 * @module serviceType_lib/serviceTypeLib
 */

var request = require('../request_lib/requestLib.js');
var resource = require('../../resources/resource.json');

/**
 * Module to GET the Service Type.
 *
 * @param {function} callback Contains the error and the response.
 */
module.exports.getServiceTypes = function(callback){
	var endpoint = resource.serviceTypes;
	console.log(endpoint);
	request.get(endpoint, function(err, res){
		callback(err, res);
	});
};