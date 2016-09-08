var expect = require('chai').expect;
/**Manager*/
var requireManager = require('../../lib/manager_lib/requireManagerLib.js');
var endPointManager = requireManager.getRequireEndPoinManager();
var resourceManager = requireManager.getRequireResourceManager();
/**Variables*/
var room = endPointManager.getRoom();
var config = requireManager.getRequireConfig();;
var status = resourceManager.getStatus();

describe ('Rooms Acceptance Test', function(){
	this.timeout(config.timeout);
	var roomJson = {};
	var minimumRoom = 1;

	before(function(done){
		room.getRooms(function(err, res){
			expect(res.status).to.equal(status.OK);
			roomJson = res.body;
			done();
		});
	});

	it('GET /rooms', function(done){
		room.getRooms(function(err, res){
			expect(res.status).to.equal(status.OK);
			expect(roomJson.length).to.be.at.least(minimumRoom);
			done();
		});
	});

	it('GET /rooms/{roomId}', function(done){
		room.getRoomById(function(err, res){
			expect(res.status).to.equal(status.OK);
			var roomDefined = roomJson[1];
			expect(res.body._id).to.equal(roomDefined._id);
			expect(res.body.emailAddress).to.equal(roomDefined.emailAddress);
			expect(res.body.displayName).to.equal(roomDefined.displayName);
			expect(res.body.serviceId).to.equal(roomDefined.serviceId);
			expect(res.body.__v).to.equal(roomDefined.__v);
			expect(res.body.enabled).to.equal(roomDefined.enabled);
			expect(res.body.locationId).to.equal(roomDefined.locationId);
			expect(res.body.customDislplayName).to.equal(roomDefined.customDislplayName);
			expect(res.body.code).to.equal(roomDefined.code);

			done();
		});
	});

	it('PUT /rooms/{roomId}',function (done){
		var roomJsonUpdate = {
			enabled : true,
			location : 'string',
			customDisplayName : 'update Room 002 ID TEST',
			code : 'string'
		};
		room.update(roomJsonUpdate, function (err, res){
			expect(res.status).to.equal(status.OK);
			var roomDefined = roomJson[1];
			expect(res.body._id).to.equal(roomDefined._id);
			expect(res.body.emailAddress).to.equal(roomDefined.emailAddress);
			expect(res.body.displayName).to.equal(roomDefined.displayName);
			expect(res.body.serviceId).to.equal(roomDefined.serviceId);
			expect(res.body.__v).to.equal(roomDefined.__v);
			expect(res.body.enabled).to.equal(roomDefined.enabled);
			expect(res.body.locationId).to.equal(roomDefined.locationId);
			expect(res.body.customDislplayName).to.equal(roomDefined.customDislplayName);
			expect(res.body.code).to.equal(roomDefined.code);
			done();
		});
	});

	it('GET /services/{serviceId}/rooms', function(done){
		room.getRoomByServices(function(err, res){
			expect(res.status).to.equal(status.OK);
			expect(roomJson.length).to.be.at.least(1);
			done();
		});
	});

	it('GET /services/{serviceId}/rooms/{roomId}', function(done){
		room.getRoomByIdAndServices(function(err, res){
			expect(res.status).to.equal(status.OK);
			var roomDefined = roomJson[1];
			expect(res.body._id).to.equal(roomDefined._id);
			expect(res.body.emailAddress).to.equal(roomDefined.emailAddress);
			expect(res.body.displayName).to.equal(roomDefined.displayName);
			expect(res.body.serviceId).to.equal(roomDefined.serviceId);
			expect(res.body.__v).to.equal(roomDefined.__v);
			expect(res.body.enabled).to.equal(roomDefined.enabled);
			expect(res.body.locationId).to.equal(roomDefined.locationId);
			expect(res.body.customDislplayName).to.equal(roomDefined.customDislplayName);
			expect(res.body.code).to.equal(roomDefined.code);
			done();
		});
	});

	it('PUT /services/{serviceId}/rooms/{roomId}', function(done){
		var roomJsonUpdate = {
			 enabled : true,
			location : 'string',
			customDisplayName : 'update Room 002 index test',
			code : 'string'
		};
		room.updateRoomByIdAndServices(roomJsonUpdate, function(err, res){
			expect(res.status).to.equal(status.OK);
			var roomDefined = roomJson[1];
			expect(res.body._id).to.equal(roomDefined._id);
			expect(res.body.emailAddress).to.equal(roomDefined.emailAddress);
			expect(res.body.displayName).to.equal(roomDefined.displayName);
			expect(res.body.serviceId).to.equal(roomDefined.serviceId);
			expect(res.body.__v).to.equal(roomDefined.__v);
			expect(res.body.enabled).to.equal(roomDefined.enabled);
			expect(res.body.locationId).to.equal(roomDefined.locationId);
			expect(res.body.customDislplayName).to.equal(roomDefined.customDislplayName);
			expect(res.body.code).to.equal(roomDefined.code);
			done();
		});
	});
});
