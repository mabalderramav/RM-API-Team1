var expect = require('chai').expect;
var attendee = require('../../lib/attendee_lib/attendeeLib.js');
var config = require('../../config.json')
var status = require('../../resources/status.json')

describe('Attendee', function(){
	this.timeout(config.timeout);	
	it('GET /attendee', function(done){
		attendee.getAttendee(function(err, res){			
			expect(res.status).to.equals(status.OK);
			done();
		});
	});
});