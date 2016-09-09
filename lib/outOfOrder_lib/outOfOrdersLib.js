/**
 * OutOfOrdersLib Module
 * @fileoverview OutOfOrderLib module Execute the GET, POST, PUT and DELETE, to the OutOfOrder resource.
 * @author  Ericka.Viraca@fundacion-jala.org (Ericka Viraca Silicoana)
 * @version 1.0.0
 * @module Out-Of-Orders_lib/OutOfOrderLib
 */

var requestGets = require('../request_lib/requestLib.js');
var requestPostDeletePut = require('../request_lib/requestTokenLib.js');
var constant = require('../../resources/constantVariables.json');
var resource = require('../../resources/resource.json');
var LogManagement = require('../../logger/LogManagement.js');
var method = require('../../resources/requestMethod.json');
var service = require('../service_lib/serviceLib.js');
var room = require('../room_lib/roomLib.js');

/**
 * GETS (get) all the out-of-orders.
 * @param {Integer} withPath to execute the GET resource.
 * @param {function} callback contains the error and the response.
 */
module.exports.get = function(Path, callback) {
	this.buildBaseEndPoint(function(baseEndPoint){
		var endPoint = resource.outOfOrders;
		if (Path == constant.PATH) {
			requestGets.get(endPoint, function(err, res) {
				LogManagement.log(resource.outOfOrders, endPoint, method.GET, err, res);
				callback(err, res);
			});
		}
		else {
			endPoint = baseEndPoint + '/' + resource.outOfOrders;
			requestGets.get(endPoint, function(err, res) {
				LogManagement.log(resource.outOfOrders, endPoint, method.GET, err, res);
				callback(err, res);
			});
		}
	});
};

/**
 * This method GETS (getById) a specific out-of-order by Id.
 * @param {Integer} withPath to execute the GET resource.
 * @param {String} idOutOfOrder to execute the GET resource.
 * @param {function} callback contains the error and the response.
 */
module.exports.getById = function(Path, idOutOfOrder, callback) {
	this.buildBaseEndPoint(function(baseEndPoint){
		var endPoint = resource.outOfOrders + '/' + idOutOfOrder;
		if (Path == constant.PATH) {
			requestGets.get(endPoint, function(err, res) {
				LogManagement.log(resource.outOfOrders, endPoint, method.GET, err, res);
			callback(err, res);
			});
		}
		else {
			endPoint = baseEndPoint + resource.outOfOrders + '/' + idOutOfOrder;
			requestGets.get(endPoint, function(err, res) {
				LogManagement.log(resource.outOfOrders, endPoint, method.GET, err, res);
			callback(err, res);
			});
		}
	});
};

/**
 * This method POST (create) a new out-of-order on a specific URI.
 * @param {Object} outOfOrdersJson to execute the POST resource.
 * @param {function} callback contains the error and the response.
 */
module.exports.create = function (outOfOrdersJson, callback) {
	this.buildBaseEndPoint(function(baseEndPoint){
		var endPoint = baseEndPoint + resource.outOfOrders;
		requestPostDeletePut.create(endPoint, outOfOrdersJson, function(err,res){
			LogManagement.log(resource.outOfOrders, endPoint, method.POST, err, res);
			callback(err,res);
		});
	});
};

/**
 * This method PUT (update) an existent out-of-order on a specific URI.
 * @param {String} idOutOfOrder to execute the PUT resource.
 * @param {Object} outOfOrdersJson to execute the PUT resource.
 * @param {function} callback contains the error and the response.
 */
module.exports.update = function(idOutOfOrder, outOfOrdersJson, callback) {
	this.buildBaseEndPoint(function(baseEndPoint){
		var endPoint = baseEndPoint + resource.outOfOrders + '/' + idOutOfOrder;
		requestPostDeletePut.update(endPoint, outOfOrdersJson, function(err,res){
			LogManagement.log(resource.outOfOrders, endPoint, method.PUT, err, res);
			callback(err,res);
		});
	});
};

/**
 * This method DELETE (delete) an existent out-of-order on a specific URI.
 * @param {String} idOutOfOrder to execute the DELETE resource.
 * @param {function} callback contains the error and the response.
 */
module.exports.delete = function(idOutOfOrder, callback){
	this.buildBaseEndPoint(function(baseEndPoint){
		var endPoint = baseEndPoint + resource.outOfOrders + '/' +  idOutOfOrder;
		requestPostDeletePut.delete(endPoint, function(err, res) {
			LogManagement.log(resource.outOfOrders, endPoint, method.DELETE, err, res);
			callback(err, res);
		});
	});
};

module.exports.buildBaseEndPoint = function(callback) {
	service.getOneServiceExistent(function(oneService){
		var baseEndpointServiceRoom = resource.services + '/' + oneService._id;
		room.getOneRoomExistent(function(oneRoom){
			baseEndpointServiceRoom = baseEndpointServiceRoom + resource.rooms + '/' + oneRoom._id;
			callback(baseEndpointServiceRoom);
		});
	});
};
