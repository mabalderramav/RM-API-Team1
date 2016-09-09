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
var room = require('../../resources/room.json');
var service = require('../../resources/service.json');
var LogManagement = require('../../logger/LogManagement.js');
var method = require('../../resources/requestMethod.json');

var serviceIndex = 0;
var roomIndex = 1;

/**
 * Module to GET all existent Rooms.
 *
 * @param {function} callback Contains the error and the response.
 */
module.exports.getRooms = function(callback){
	var endPoint = resource.rooms;
	request.get(endPoint, function(err, res){
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
	var endPoint = resource.rooms + '/' + room[roomIndex].id;
	request.get(endPoint, function(err, res){
		LogManagement.log(resource.rooms, endPoint, method.GET, err, res);
		callback(err, res);
	});
};

/**
 * Module to GET a Room by Id.
 *
 * @roomUnderTest {variable} roomUnderTest Contains the random position.
 * @param {function} callback Contains the error and the response.
 */
module.exports.getRoomByIdRandom = function(roomUnderTest, callback){
	var endPoint = resource.rooms + '/' + room[roomUnderTest].id;
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
	var endPoint = resource.rooms + '/' + room[roomIndex].id;
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
	var endPoint = resource.services + '/' + service[serviceIndex].id + resource.rooms;
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
	var endPoint = resource.services + '/' + service[serviceIndex].id + resource.rooms + '/' + room[roomIndex].id;
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
	var endPoint = resource.services + '/' + service[serviceIndex].id + resource.rooms + '/' + room[roomIndex].id;
	request.update(endPoint, roomJson, function(err, res){
		LogManagement.log(resource.rooms, endPoint, method.PUT, err, res);
		callback(err, res);
	});
};
