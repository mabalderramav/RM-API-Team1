var expect = require('chai').expect;
var room = require('../../lib/room_lib/roomLib.js');
var config = require('../../config.json');
var status = require('../../resources/status.json');

/*
Feature: Rooms

Scenario 1: verify that the GET request for Rooms, returns all existent Rooms.
	Given I have existent Rooms.
	When I perform a GET request
	Then I expect status code 200 OK
*/

describe('Rooms Bdt Test',function(){
	context('Scenario 1: Verify that GET request for Rooms, returns all existent Rooms.',function(){
		this.timeout(config.timeout);
		var roomJson = {};
		var minimumRoom = 1;

		it('Given I have existent Rooms.', function(done){			
			room.getRooms(function(err, res){
				roomJson = res.body;				
				expect(roomJson.length).to.be.at.least(minimumRoom);			
				done();
			});
		});

		it('When I perform a GET request', function(done){
			room.getRooms(function(err, res){		
				expect(roomJson.length).to.be.at.least(minimumRoom);
				expect(res.status).to.equal(status.OK);
				done();
			});
		});

		it('I expect status code 200 OK', function(done){
			room.getRooms(function(err, res){										
				expect(res.status).to.equal(status.OK);
				done();
			});
		});
	});
});
