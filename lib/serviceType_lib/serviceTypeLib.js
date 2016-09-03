/**
 * ServiceTypeLib Module
 * @fileoverview serviceTypeLib module that obtains the the service types.
 * @author  Jimmy.Romero@fundacion-jala.org (Jimmy Joel Romero Sejas)
 * @version 1.0.0
 * @module serviceType_lib/serviceTypeLib
 */

var request = require('../request_lib/requestLib.js');
var resource = require('../../resources/resource.json');
var LogManagement = require('../../logger/LogManagement.js');
var method = require('../../resources/requestMethod.json');

/**
 * Module to GET the Service Type.
 *
 * @param {function} callback Contains the error and the response.
 */
module.exports.getServiceTypes = function(callback){
	var endpoint = resource.serviceTypes;
	request.get(endpoint, function(err, res){
		LogManagement.log(endpoint, method.GET, err, res);
		callback(err, res);
	});
};
