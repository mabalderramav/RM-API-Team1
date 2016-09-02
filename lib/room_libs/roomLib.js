var request = require('../request_lib/requestTokenLib.js');
var resource = require('../../resources/resource.json')
var room = require('../../resources/room.json');
var service = require('../../resources/service.json');

var serviceIndex = 0;
var roomIndex = 1;

/**
 * Module to GET all existent Rooms.
 *
 * @param callback Contains the error and the response.
 */
module.exports.getRooms = function(callback){
	var endPoint = resource.rooms;
	request.get(endPoint, function(err, res){
		callback(err, res);
	});
};

/**
 * Module to GET a Room by Id.
 *
 * @param callback Contains the error and the response.
 */
module.exports.getRoomById = function(callback){
	var endPoint = resource.rooms + '/' + room[roomIndex].id;	
	request.get(endPoint, function(err, res){
		callback(err, res);
	});
};

/**
 * Module to UPDATE a Room by Id.
 *
 * @param roomJson Contains a Json file with room attributes to update the room.
 * @param callback Contains the error and the response.
 */
module.exports.update = function (roomJson, callback) {
	var endPoint = resource.rooms + '/' + room[roomIndex].id;
	request.update(endPoint, roomJson, function (err, res) {
		callback(err, res);
  	});
};

/**
 * Module to GET all existent Rooms, given a Service Id.
 *
 * @param callback Contains the error and the response.
 */
module.exports.getRoomByServices = function(callback){
	var endPoint = resource.services + '/' + service[serviceIndex].id + resource.rooms;
	request.get(endPoint, function(err, res){
		callback(err, res);
	});
};

/**
 * Module to GET a Room by Id, given a Service Id.
 *
 * @param callback Contains the error and the response.
 */
module.exports.getRoomByIdAndServices = function(callback){
	var endPoint = resource.services + '/' + service[serviceIndex].id + resource.rooms + '/' + room[roomIndex].id;
	request.get(endPoint, function(err, res){
		callback(err, res);
	});
};

/**
 * Module to UPDATE a Room by Id, given a Service Id.
 *
 * @param roomJson Contains a Json file with room attributes to update the room.
 * @param callback Contains the error and the response.
 */
module.exports.updateRoomByIdAndServices = function(roomJson, callback){
	var endPoint = resource.services + '/' + service[serviceIndex].id + resource.rooms + '/' + room[roomIndex].id;
	request.update(endPoint, roomJson, function(err, res){
		callback(err, res);
	});
};
