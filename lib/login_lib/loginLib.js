/**
 * LoginLib Module.
 *
 * @fileoverview LoginLib module that obtains URI.
 * @author  Aldo.Balderrama@fundacion-jala.org (Miguel Aldo Balderrama)
 * @version 1.0.0
 * @module login_lib/loginLib
 */

var request = require('../request_lib/requestLib.js');
var resource = require('../../resources/resource.json');
var LogManagement = require('../../logger/LogManagement.js');
var method = require('../../resources/requestMethod.json');

/**
 * It makes a create allow creating a new login, to obtains a token.
 *
 * @param {json} credentialsJson Contains a json file with the login attributes.
 * @param {function} callback Contains the error and the response.
 */
module.exports.create = function (credentialsJson, callback) {
	var endPoint = resource.login;
	request.create(endPoint, credentialsJson, function (err, res) {
			LogManagement.log(resource.login, endPoint, method.POST, err, res);
			callback(err, res);
	});
};
