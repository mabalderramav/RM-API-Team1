var expect = require('chai').expect;
var randomstring = require("randomstring");
/**Manager*/
var requireManager = require('../../lib/manager_lib/requireManagerLib.js');
var endPointManager = requireManager.getRequireEndPoinManager();
var resourceManager = requireManager.getRequireResourceManager();
/**Variables*/
var config = requireManager.getRequireConfig();
var service = endPointManager.getService();
var rooms = endPointManager.getRoom();
var meeting = endPointManager.getMeeting();
var outOfOrder = endPointManager.getOutOfOrder();
var location = endPointManager.getLocation();
var resource = endPointManager.getResource();
var room = resourceManager.getRoom();
var resources = resourceManager.getResources();
var status = resourceManager.getStatus();

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
	var name= resources.resourname + randomstring.generate({ length: 6, charset: 'alphabetic'});
	var index = 0;
	var Room = {};
	var OutOfOrder = {};
	var resourceJson = {};
	var locationJson = {};
	var outOfOrdersJson = {};
	var Location = {};
	var Service = {};
	var withPath = 0;

	it('Given I get a \'Service\'',function(done){
		service.get(function(err,res){
			Service = res.body[index];
     	    expect(res.status).to.equal(status.OK);
            done();
		});
	});
		it('And I get a \'Room\'',function(done){
			Room = room[index];
			done();
		});

	it('When I create an \'out-of-order\' in the \'room\'',function(done){
		outOfOrdersJson = {
			roomId : Room.id,
			from : "2017-09-03T22:30:00.000Z",
			to : "2017-09-03T23:00:00.000Z",
			title : "New OutOfOrder Test",
			sendEmail : true
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
		var json = { locationId : locationJson._id, resources : [resourceJson]};
        rooms.update(json, function (err, res) {
            expect(res.status).to.equal(200);
            done();
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
