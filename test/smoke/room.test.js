var expect = require('chai').expect;
var room = require('../../lib/room_libs/roomLib.js');

describe('Rooms', function () {
	this.timeout(8000);

	it('GET /Rooms', function(done){
		room.getRooms(function(err, res){
			expect(res.status).to.equal(200);
			done();
		});
	});

	it('GET /Rooms/{roomId}', function(done){
		room.getRoomById(function(err, res){      
			expect(res.status).to.equal(200);
			done();
		});
	});

	it('PUT /Rooms/{roomId}',function (done){
		var json = {
			enabled : true,
			location : 'string',
			customDisplayName : 'update Room 002',
			code : 'string'
		};
		room.update(json, function (err, res){      
			expect(res.status).to.equal(200);
			done();
		});
	});

	it('GET /services/{serviceId}/rooms', function(done){
		room.getRoomByServices(function(err, res){            
			expect(res.status).to.equal(200);
			done();
		});
	});

	it('GET /services/{serviceId}/rooms/{roomId}', function(done){
		room.getRoomByIdAndServices(function(err, res){      
			expect(res.status).to.equal(200);
			done();
		});
	});

	it('PUT /services/{serviceId}/rooms/{roomId}', function(done){
		var json = {
			 enabled : true,
			location : 'string',
			customDisplayName : 'update Room 002',
			code : 'string'
		};
		room.updateRoomByIdAndServices(json, function(err, res){      
			expect(res.status).to.equal(200);
			done();
		});
	});
});
