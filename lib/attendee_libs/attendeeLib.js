var request = require('../request_lib/requestLib.js');
var resource = require('../../resources/resource.json');
var service = require('../../resources/service.json');

var filter = '?filter=j';
var index = 0;

/**
 * Module to GET the Attendee, given a service Id and a filter.
 *
 * @param callback Contains the error and the response.
 */
module.exports.getAttendee = function(callback){	
	var endpoint = resource.services + '/' + service[index].id + resource.attendee + filter;	
	request.get(endpoint, function(err, res){
		callback(err, res);
	});
};
