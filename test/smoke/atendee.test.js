var expect = require('chai').expect;
var attendee = require('../../lib/attendee_lib/attendeeLib.js');
var config = require('../../config.json')
var status = require('../../resources/status.json')

describe('Attendee Smoke Test', function(){
	this.timeout(config.timeout);	
	it('GET /services/{serviceId}/attendees', function(done){
		attendee.getAttendee(function(err, res){			
			expect(res.status).to.equals(status.OK);
			done();
		});
	});
});