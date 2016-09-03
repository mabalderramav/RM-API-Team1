/**
 * OutOfOrdersLib Module
 * @fileoverview OutOfOrderLib module Execute the GET, POST, PUT and DELETE, to the OutOfOrder resource.
 * @author  Ericka.Viraca@fundacion-jala.org (Ericka Viraca Silicoana)
 * @version 1.0.0
 * @module Out-Of-Orders_lib/OutOfOrderLib
 */

var requestGets = require('../request_lib/requestLib.js');
var requestPostDeletePut = require('../request_lib/requestTokenLib.js');
var resource = require('../../resources/resource.json');
var LogManagement = require('../../logger/LogManagement.js');
var method = require('../../resources/requestMethod.json');
var service = require('../../resources/service.json');
var room = require('../../resources/room.json');

var specificRoom = {status : 404};
var index = 0;
var baseEndpointServiceRoom = resource.services + '/' 
					+ service[index].id + resource.rooms + '/' 
						+ room[index].id;

/**
 * GETS (get) all the out-of-orders.
 * @param {Integer} withPath to execute the GET resource.
 * @param {function} callback contains the error and the response.
 */
module.exports.get = function(withPath, callback) {
	var endPoint = resource.outOfOrders;
	if (withPath == 0) {
		requestGets.get(endPoint, function(err, res) {
			LogManagement.log(resource.outOfOrders, endPoint, method.GET, err, res);
			callback(err, res);
		});
	}
	else {
		endPoint = baseEndpointServiceRoom + '/' + resource.outOfOrders;
		requestGets.get(endPoint, function(err, res) {
			LogManagement.log(resource.outOfOrders, endPoint, method.GET, err, res);
			callback(err, res);
		});
	}
};

/**
 * This method GETS (getById) a specific out-of-order by Id.
 * @param {Integer} withPath to execute the GET resource.
 * @param {String} idOutOfOrder to execute the GET resource.
 * @param {function} callback contains the error and the response.
 */
module.exports.getById = function(withPath, idOutOfOrder, callback) {
	var endPoint = resource.outOfOrders + '/' + idOutOfOrder;
	if (withPath == 0) {
		requestGets.get(endPoint, function(err, res) {
			LogManagement.log(resource.outOfOrders, endPoint, method.GET, err, res);
		callback(err, res);
		});
	}
	else {
		endPoint = baseEndpointServiceRoom + resource.outOfOrders + '/' + idOutOfOrder;
		requestGets.get(endPoint, function(err, res) {
			LogManagement.log(resource.outOfOrders, endPoint, method.GET, err, res);
		callback(err, res);
		});
	}
};

/**
 * This method POST (create) a new out-of-order on a specific URI.
 * @param {Object} outOfOrdersJson to execute the POST resource.
 * @param {function} callback contains the error and the response.
 */
module.exports.create = function (outOfOrdersJson, callback) {
	var endPoint = baseEndpointServiceRoom + resource.outOfOrders;
	requestPostDeletePut.create(endPoint, outOfOrdersJson, function(err,res){
		LogManagement.log(resource.outOfOrders, endPoint, method.POST, err, res);
		callback(err,res);
	});
};

/**
 * This method PUT (update) an existent out-of-order on a specific URI.
 * @param {String} idOutOfOrder to execute the PUT resource.
 * @param {Object} outOfOrdersJson to execute the PUT resource.
 * @param {function} callback contains the error and the response.
 */
module.exports.update = function(idOutOfOrder, outOfOrdersJson, callback) {
	var endPoint = baseEndpointServiceRoom + resource.outOfOrders + '/' + idOutOfOrder;
	requestPostDeletePut.update(endPoint, outOfOrdersJson, function(err,res){
		LogManagement.log(resource.outOfOrders, endPoint, method.PUT, err, res);
		callback(err,res);
	});
};

/**
 * This method DELETE (delete) an existent out-of-order on a specific URI.
 * @param {String} idOutOfOrder to execute the DELETE resource.
 * @param {function} callback contains the error and the response.
 */
module.exports.delete = function(idOutOfOrder, callback){
	var endPoint = baseEndpointServiceRoom + resource.outOfOrders + '/' +  idOutOfOrder;
	requestPostDeletePut.delete(endPoint, function(err, res) {
		LogManagement.log(resource.outOfOrders, endPoint, method.DELETE, err, res);
		callback(err, res);
	});
};
