/**
 * RoomLib Module
 *
 * @fileoverview roomLib module that executes GET and PUT(update) requests for Rooms.
 * @author  Jimmy.Romero@fundacion-jala.org (Jimmy Joel Romero Sejas)
 * @version 1.0.0
 * @module room_lib/roomLib
 */

var request = require('../request_lib/requestTokenLib.js');
var resource = require('../../resources/resource.json')
var service = require('../../resources/service.json');
var constant = require('../../resources/constantVariables.json');
var LogManagement = require('../../logger/LogManagement.js');
var method = require('../../resources/requestMethod.json');

var oneRoom = {};

/**
 * Module to GET all existent Rooms.
 *
 * @param {function} callback Contains the error and the response.
 */
module.exports.getRooms = function(callback){
	var endPoint = resource.rooms;
	request.get(endPoint, function(err, res){
		oneRoom = res.body;
		LogManagement.log(resource.rooms, endPoint, method.GET, err, res);
		callback(err, res);
	});
};

/**
 * Module to GET a Room by Id.
 *
 * @param {function} callback Contains the error and the response.
 */
module.exports.getRoomById = function(callback){
	var endPoint = resource.rooms + '/' + oneRoom[constant.INDEX]._id;
	request.get(endPoint, function(err, res){
		LogManagement.log(resource.rooms, endPoint, method.GET, err, res);
		callback(err, res);
	});
};

/**
 * Module to UPDATE a Room by Id.
 *
 * @param {json} roomJson Contains a Json file with room attributes to update the room.
 * @param {function} callback Contains the error and the response.
 */
module.exports.update = function (roomJson, callback) {
	var endPoint = resource.rooms + '/' + oneRoom[constant.INDEX]._id;
	request.update(endPoint, roomJson, function (err, res) {
		LogManagement.log(resource.rooms, endPoint, method.PUT, err, res);
		callback(err, res);
  });
};

/**
 * Module to GET all existent Rooms, given a Service Id.
 *
 * @param {function} callback Contains the error and the response.
 */
module.exports.getRoomByServices = function(callback){
	var endPoint = resource.services + '/' + service[constant.INDEX].id + resource.rooms;
	request.get(endPoint, function(err, res){
		LogManagement.log(resource.rooms, endPoint, method.GET, err, res);
		callback(err, res);
	});
};

/**
 * Module to GET a Room by Id, given a Service Id.
 *
 * @param {function} callback Contains the error and the response.
 */
module.exports.getRoomByIdAndServices = function(callback){
	var endPoint = resource.services + '/' + service[constant.INDEX].id + resource.rooms + '/' + oneRoom[constant.INDEX]._id;
	request.get(endPoint, function(err, res){
		LogManagement.log(resource.rooms, endPoint, method.GET, err, res);
		callback(err, res);
	});
};

/**
 * Module to UPDATE a Room by Id, given a Service Id.
 *
 * @param {json} roomJson Contains a Json file with room attributes to update the room.
 * @param {function} callback Contains the error and the response.
 */
module.exports.updateRoomByIdAndServices = function(roomJson, callback){
	var endPoint = resource.services + '/' + service[constant.INDEX].id + resource.rooms + '/' + oneRoom[constant.INDEX]._id;
	request.update(endPoint, roomJson, function(err, res){
		LogManagement.log(resource.rooms, endPoint, method.PUT, err, res);
		callback(err, res);
	});
};

/**
 * This method GETS (getOneRoomExistent) an aleatory service.
 * @param {function} callback contains the room object.
 */
module.exports.getOneRoomExistent = function(callback) {
	var endPoint = resource.rooms;
	request.get(endPoint, function(err, res){
		var oneRoom = res.body;
		callback(oneRoom[constant.INDEX]);
	});
};
