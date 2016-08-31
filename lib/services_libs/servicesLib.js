var request = require('../request_client/request-type-token.js');

module.exports.get = function(callback) {
	var endpoint = 'services';
	request.get(endpoint, function(err, res) {
		callback(err, res);
	});
};
module.exports.create = function (json, callback) {
	var endpoint = 'services';
	request.create(endpoint,json,function(err,res){
		callback(err,res);
	});
};
module.exports.update = function(json, callback) {
	var endpoint = 'services/' + id_services;
	request.update(endpoint, json, function(err,res){
		callback(err,res);
	});
};
module.exports.delete = function(callback){
	var endpoint = 'services/' + id_services;
	request.delete(endpoint, function(err, res) {
		callback(err, res);
	});
};
