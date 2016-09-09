var expect = require('chai').expect;
var outOfOrder = require('../../lib/outOfOrder_lib/outOfOrdersLib.js');
var config = require('../../config.json');
var outOfOrderValues = require('../../resources/outOfOrdersValues.json');
var constant = require('../../resources/constantVariables.json');
var status = require('../../resources/status.json');
var room = require('../../lib/room_lib/roomLib.js');
var randomstring = require("randomstring");
var moment = require("moment");
	

describe('Out-of-orders Smoke Test', function () {
	this.timeout(config.timeout);
	var nameOutOfOrders = outOfOrderValues.title + randomstring.generate({ length: 6, charset: 'alphabetic'});
	var OutOfOrderPost = {};
	var OutOfOrder = {};

	beforeEach(function(done){
		room.getOneRoomExistent(function(oneRoom){
			var outOfOrdersJson = {
				roomId : oneRoom._id,
				from : moment().add(constant.ADDFROM, 'hours').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
				to : moment().add(constant.ADDTO, 'hours').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
				title : nameOutOfOrders,
				sendEmail : outOfOrderValues.sendEmail
			};
			outOfOrder.create(outOfOrdersJson, function(err,res){
				OutOfOrder = res.body;
	     	    expect(res.status).to.equal(status.OK);
	            done();
			});
		});
	});	

	afterEach(function(done){
		outOfOrder.delete(OutOfOrder._id, function(err,res){
     	    expect(res.status).to.equal(status.OK);
            done();
		});
	});

	it('GET /out-of-orders' , function(done){
		outOfOrder.get(constant.PATH, function(err,res){
     	    expect(res.status).to.equal(status.OK);
            done();
		});
	});

	it('GET /out-of-orders/{outOfOrderId}' , function(done){
		outOfOrder.getById(constant.PATH, OutOfOrder._id, function(err, res){
     	    expect(res.status).to.equal(status.OK);
            done();
		});
	});

	it('GET /services/{serviceId}/rooms/{roomId}/out-of-orders' , function(done){
		outOfOrder.get(constant.FULPATH, function(err,res){
     	    expect(res.status).to.equal(status.OK);
            done();
		});
	});
	
	it('GET /services/{serviceId}/rooms/{roomId}/out-of-orders/{outOfOrderId}' , function(done){
		outOfOrder.getById(constant.FULPATH, OutOfOrder._id, function(err,res){
     	    expect(res.status).to.equal(status.OK);
            done();
		});
	});

	it('PUT /services/{serviceId}/rooms/{roomId}/out-of-orders/{outOfOrderId}', function(done){
		var outOfOrderJson = { title: nameOutOfOrders };
	    outOfOrder.update(OutOfOrder._id, outOfOrderJson, function (err, res){
	        expect(res.status).to.equal(status.OK);
	     	done();
	    });
	});

	it('POST /services/{serviceId}/rooms/{roomId}/out-of-orders', function(done){
		room.getOneRoomExistent(function(oneRoom){
			var outOfOrdersJsonPost = {
				roomId : oneRoom._id,
				from : moment().add(constant.ADDFROM, 'hours').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
				to : moment().add(constant.ADDTO, 'hours').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
				title : nameOutOfOrders,
				sendEmail : outOfOrderValues.sendEmail
			};
		    outOfOrder.create(outOfOrdersJsonPost, function(err,res){
				OutOfOrderPost = res.body;
	     	    expect(res.status).to.equal(status.OK);
	            done();
			});
		});
	});

	it('DELETE /services/{serviceId}/rooms/{roomId}/out-of-orders/{outOfOrderId}', function(done){
	    outOfOrder.delete(OutOfOrderPost._id, function (err, res){
	        expect(res.status).to.equal(status.OK);
	     	done();
	    });
	});
	
});
