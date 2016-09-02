var expect = require('chai').expect;
var room = require('../../lib/room_libs/roomLib.js');
var services = require('../../lib/services_libs/servicesLib.js');
var config = require('../../config.json');
var status = require('../../resources/status.json');

describe('Rooms', function () {
	this.timeout(config.timeout);
	
	before(function(done){
		room.getRooms(function(err, res){
			idRoom = res.body;						
			expect(res.status).to.equal(status.OK);			
			done();
		});
	});

	it('GET /rooms', function(done){
		room.getRooms(function(err, res){
			expect(res.status).to.equal(status.OK);
			done();
		});
	});

	it('GET /rooms/{roomId}', function(done){		
		room.getRoomById(function(err, res){			
			expect(res.status).to.equal(status.OK);
			done();
		});
	});

	it('PUT /rooms/{roomId}',function (done){
		var roomJson = {
			enabled : true,
			location : 'string',
			customDisplayName : 'update Room 002 ID TEST',
			code : 'string'
		};
		room.update(roomJson, function (err, res){      			
			expect(res.status).to.equal(status.OK);
			done();
		});
	});

	it('GET /services/{serviceId}/rooms', function(done){
		room.getRoomByServices(function(err, res){            
			expect(res.status).to.equal(status.OK);
			done();
		});
	});

	it('GET /services/{serviceId}/rooms/{roomId}', function(done){
		room.getRoomByIdAndServices(function(err, res){      
			expect(res.status).to.equal(status.OK);
			done();
		});
	});

	it('PUT /services/{serviceId}/rooms/{roomId}', function(done){
		var roomJson = {
			 enabled : true,
			location : 'string',
			customDisplayName : 'update Room 002 index test',
			code : 'string'
		};
		room.updateRoomByIdAndServices(roomJson, function(err, res){      
			expect(res.status).to.equal(status.OK);
			done();
		});
	});
});
