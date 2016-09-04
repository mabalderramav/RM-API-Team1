var expect = require('chai').expect;
var outOfOrder = require('../../lib/outOfOrder_lib/outOfOrdersLib.js');
var config = require('../../config.json');
var status = require('../../resources/status.json');
var room = require('../../resources/room.json');

describe('Out-of-orders Smoke Test', function () {
	this.timeout(config.timeout);
	var OutOfOrderPost = {};
	var OutOfOrder = {};
	var withPath = 0;
	var index = 0;

	beforeEach(function(done){
		var outOfOrdersJson = {
			roomId : room[index].id,
			from : "2017-09-03T22:30:00.000Z",
			to : "2017-09-03T23:00:00.000Z",
			title : "outOfOrder Test",
			sendEmail : false
		};
		outOfOrder.create(outOfOrdersJson, function(err,res){
			OutOfOrder = res.body;
     	    expect(res.status).to.equal(status.OK);
            done();
		});
	});
	afterEach(function(done){
		outOfOrder.delete(OutOfOrder._id, function(err,res){
     	    expect(res.status).to.equal(status.OK);
            done();
		});
	});

	it('GET /out-of-orders' , function(done){
		outOfOrder.get(withPath, function(err,res){
     	    expect(res.status).to.equal(status.OK);
            done();
		});
	});

	it('GET /out-of-orders/{outOfOrderId}' , function(done){
		outOfOrder.getById(withPath, OutOfOrder._id, function(err, res){
     	    expect(res.status).to.equal(status.OK);
            done();
		});
	});

	it('GET /services/{serviceId}/rooms/{roomId}/out-of-orders' , function(done){
		withPath = 1;
		outOfOrder.get(withPath, function(err,res){
     	    expect(res.status).to.equal(status.OK);
            done();
		});
	});
	
	it('GET /services/{serviceId}/rooms/{roomId}/out-of-orders/{outOfOrderId}' , function(done){
		withPath = 1;
		outOfOrder.getById(withPath, OutOfOrder._id, function(err,res){
     	    expect(res.status).to.equal(status.OK);
            done();
		});
	});

	it('PUT /services/{serviceId}/rooms/{roomId}/out-of-orders/{outOfOrderId}', function(done){
		var outOfOrderJson = { title: 'outOfOrder Test Put' };
	    outOfOrder.update(OutOfOrder._id, outOfOrderJson, function (err, res){
	        expect(res.status).to.equal(status.OK);
	     	done();
	    });
	});

	it('POST /services/{serviceId}/rooms/{roomId}/out-of-orders', function(done){
		var outOfOrdersJsonPost = {
			roomId : room[index].id,
			from : "2017-09-03T22:30:00.000Z",
			to : "2017-09-03T23:00:00.000Z",
			title : "New OutOfOrder Test",
			sendEmail : true
		};
	    outOfOrder.create(outOfOrdersJsonPost, function(err,res){
			OutOfOrderPost = res.body;
     	    expect(res.status).to.equal(status.OK);
            done();
		});
	});

	it('DELETE /services/{serviceId}/rooms/{roomId}/out-of-orders/{outOfOrderId}', function(done){
	    outOfOrder.delete(OutOfOrderPost._id, function (err, res){
	        expect(res.status).to.equal(status.OK);
	     	done();
	    });
	});
	
});
