var request = require('../request_client/request.js');

module.exports.getServiceTypes = function(callback){
	var endpoint = 'service-types';
	request.get(endpoint, function(err, res){
		callback(err, res);
	});
};