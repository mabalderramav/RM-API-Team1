var request = require('../request_client/request-type-token.js');

module.exports.getRooms = function(callback){
	var endPoint = 'rooms';
	request.get(endPoint, function(err, res){
		callback(err, res);
	});
};

module.exports.getRoomById = function(callback){
	var endPoint = 'rooms/57bb1d6fb2efeaa00690702c';
	request.get(endPoint, function(err, res){
		callback(err, res);
	});
};

module.exports.update = function (json, callback) {
	var endPoint = 'rooms/57bb1d6fb2efeaa00690702c';
	request.update(endPoint, json, function (err, res) {
		callback(err, res);
  	});
};

module.exports.getRoomByServices = function(callback){
	var endPoint = '/services/57bb1d6cb2efeaa00690702a/rooms';
	request.get(endPoint, function(err, res){
		callback(err, res);
	});
};

module.exports.getRoomByIdAndServices = function(callback){
	var endPoint = '/services/57bb1d6cb2efeaa00690702a/rooms/57bb1d6fb2efeaa00690702c';
	request.get(endPoint, function(err, res){
		callback(err, res);
	});
};

module.exports.updateRoomByIdAndServices = function(json, callback){
	var endPoint = '/services/57bb1d6cb2efeaa00690702a/rooms/57bb1d6fb2efeaa00690702c';
	request.update(endPoint, json, function(err, res){
		callback(err, res);
	});
};