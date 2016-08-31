var request = require('../request_client/request-type-token.js');

module.exports.getAtendee = function(callback){
	var endpoint = '/services/57bb1d6cb2efeaa00690702a/attendees?filter=j'
	request.get(endpoint, function(err, res){
		callback(err, res);
	});
};