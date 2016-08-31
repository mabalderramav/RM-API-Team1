var requestGets = require('../request_client/request.js');

module.exports.getAll = function(callback) {
	var endpoint = 'out-of-orders';
	requestGets.get(endpoint, function(err, res) {
		callback(err, res);
	});
};
module.exports.getById = function(callback) {
	var endpoint = 'out-of-orders/57c5ce648e93693c07ce2c10';
	requestGets.get(endpoint, function(err, res) {
		callback(err, res);
	});
};
