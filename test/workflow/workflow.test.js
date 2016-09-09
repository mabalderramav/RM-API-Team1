var expect = require('chai').expect;
var service = require('../../lib/service_lib/serviceLib.js');
var room = require('../../lib/room_lib/roomLib.js');
var constant = require('../../resources/constantVariables.json');
var outOfOrderValues = require('../../resources/outOfOrdersValues.json');
var meeting = require('../../lib/meeting_libs/meetingLib.js');
var constant = require('../../resources/constantVariables.json');
var outOfOrder = require('../../lib/outOfOrder_lib/outOfOrdersLib.js');
var location = require('../../lib/location_libs/locationLib.js');
var resource = require('../../lib/resources_libs/resourceLib.js');
var resources = require('../../resources/resources.json');
var config = require('../../config.json');
var status = require('../../resources/status.json');
var randomstring = require("randomstring");
var moment = require("moment");

/*
Feature: Workflow Test

Scenario : Verify the Workflow.
	Given I get a service.
		And I get a room.
	When I create an out-of order in the room
		And I create a location.
		And I create a resource.
	Then I assigned the location and resource to the room.
		And I delete all
*/

describe('Workflow Test', function () {
	context('Verify the Workflow. ',function(){
	this.timeout(config.timeout);
	var nameOutOfOrders = outOfOrderValues.title + randomstring.generate({ length: 6, charset: 'alphabetic'});
	var name= resources.resourname + randomstring.generate({ length: 6, charset: 'alphabetic'});
	var Room = {};
	var resourceJson = {};
	var locationJson = {};
	var outOfOrdersJson = {};
	var Service = {};
	
	it('Given I get a \'Service\'',function(done){
		service.getOneServiceExistent(function(oneService){
			Service = oneService;
            done();
		});
	});
		it('And I get a \'Room\'',function(done){
			room.getOneRoomExistent(function(oneRoom){
				Room =  oneRoom;
				done();
			});
		});

	it('When I create an \'out-of-order\' in the \'room\'',function(done){
		outOfOrdersJson = {
			roomId : Room._id,
			from : moment().add(constant.ADDFROM, 'hours').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
			to : moment().add(constant.ADDTO, 'hours').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
			title : nameOutOfOrders,
			sendEmail : outOfOrderValues.sendEmail
		};
		outOfOrder.create(outOfOrdersJson, function(err,res){
			outOfOrdersJson = res.body;
	     	expect(res.status).to.equal(status.OK);
	        done();
		});
	});
		it('And I create a \'location\'',function(done){
			locationJson = {
				name       : 'location Test Bdt',
				customName : 'location Test Bdt',
				description: 'This is the location Test1'
			};
			location.create(locationJson, function (err, res) {
				locationJson = res.body;
				expect(res.status).to.equal(status.OK);
				done();
			});
		});
			it('And I create a \'resource\'',function(done) {
				resourceJson = {
					name: name,
					customName:resources.resourcusname,
					fontIcon: resources.resourfonticon,
			  		from: resources.resourfrom,
					description: resources.resourdesc
				};
				resource.create (resourceJson, function(err,res){
					resourceJson = res.body;
					expect(res.status).to.equal(status.OK);
					done();
				});
			});
				
	it('Then I assigned the \'location\' and \'resource\' to the room',function(done){
		room.getRooms(function(err,res){
			var json = {locationId : locationJson._id, resources : [resourceJson]};
        	room.update(json, function (err, res) {
	            expect(res.status).to.equal(status.OK);
	            done();
        	});
		});
	});

		it('And I delete all',function(done) {
            outOfOrder.delete(outOfOrdersJson._id, function (err, res){
		        expect(res.status).to.equal(status.OK);
		        location.delete(locationJson._id, function (err, res){
			        expect(res.status).to.equal(status.OK);
			        resource.delete(resourceJson._id, function (err, res){
				        expect(res.status).to.equal(status.OK);
				        done();
				    });
		   		});
            });
	    });
	});
		
});
