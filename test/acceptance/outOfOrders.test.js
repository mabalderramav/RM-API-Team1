var expect = require('chai').expect;
/**Manager*/
var requireManager = require('../../lib/manager_lib/requireManagerLib.js');
var endPointManager = requireManager.getRequireEndPoinManager();
var resourceManager = requireManager.getRequireResourceManager();
/**Variables*/
var outOfOrder = endPointManager.getOutOfOrder();
var config = requireManager.getRequireConfig();
var status = resourceManager.getStatus();
var room = resourceManager.getRoom();

describe('Out-of-orders Acceptance Test', function () {
	this.timeout(config.timeout);
	var OutOfOrderPost = {};
	var OutOfOrders = {};
	var OutOfOrder = {};
	var withPath = 0;
	var quant = 1;
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
			OutOfOrders = res.body;
     	    expect(res.status).to.equal(status.OK);
     	    expect(res.body.length).to.be.at.least(quant);
     	    expect(res.body.length).to.equal(OutOfOrders.length);
            done();
		});
	});

	it('GET /out-of-orders/{outOfOrderId}' , function(done){
		withPath = 1;
			outOfOrder.getById(withPath, OutOfOrder._id, function(err, res){
     	    expect(res.status).to.equal(status.OK);
     	    expect(res.body._id).to.equal(OutOfOrder._id);
     	    expect(res.body.roomId).to.equal(OutOfOrder.roomId);
     	    expect(res.body.from).to.equal(OutOfOrder.from);
     	    expect(res.body.to).to.equal(OutOfOrder.to);
     	    expect(res.body.title).to.equal(OutOfOrder.title);
     	    expect(res.body._v).to.equal(OutOfOrder._v);
     	    expect(res.body.sendEmail).to.equal(OutOfOrder.sendEmail);
     	    expect(res.body.Url).to.equal(OutOfOrder.Url);
          done();
			});
	});

	it('GET /services/{serviceId}/rooms/{roomId}/out-of-orders' , function(done){
		outOfOrder.get(withPath, function(err,res){
     	    expect(res.status).to.equal(status.OK);
     	    expect(res.body.length).to.equal(OutOfOrders.length);
            done();
		});
	});

	it('GET /services/{serviceId}/rooms/{roomId}/out-of-orders/{outOfOrderId}' , function(done){
		withPath = 1;
		outOfOrder.getById(withPath, OutOfOrder._id, function(err,res){
     	    expect(res.status).to.equal(status.OK);
     	    expect(res.body._id).to.equal(OutOfOrder._id);
     	    expect(res.body.roomId).to.equal(OutOfOrder.roomId);
     	    expect(res.body.from).to.equal(OutOfOrder.from);
     	    expect(res.body.to).to.equal(OutOfOrder.to);
     	    expect(res.body.title).to.equal(OutOfOrder.title);
     	    expect(res.body._v).to.equal(OutOfOrder._v);
     	    expect(res.body.sendEmail).to.equal(OutOfOrder.sendEmail);
     	    expect(res.body.Url).to.equal(OutOfOrder.Url);
            done();
		});
	});

	it('PUT /services/{serviceId}/rooms/{roomId}/out-of-orders/{outOfOrderId}', function(done){
		var outOfOrderJson = { sendEmail: true, title: 'outOfOrder Test Put'};
	    outOfOrder.update(OutOfOrder._id, outOfOrderJson, function (err, res){
	        expect(res.status).to.equal(status.OK);
	        expect(res.body._id).to.equal(OutOfOrder._id);
     	    expect(res.body.roomId).to.equal(OutOfOrder.roomId);
     	    expect(res.body.from).to.equal(OutOfOrder.from);
     	    expect(res.body.to).to.equal(OutOfOrder.to);
     	    expect(res.body.title).to.equal(outOfOrderJson.title);
     	    expect(res.body._v).to.equal(OutOfOrder._v);
     	    expect(res.body.sendEmail).to.equal(outOfOrderJson.sendEmail);
     	    expect(res.body.Url).to.equal(OutOfOrder.Url);
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
     	    expect(res.body.roomId).to.equal(outOfOrdersJsonPost.roomId);
     	    expect(res.body.from).to.equal(outOfOrdersJsonPost.from);
     	    expect(res.body.to).to.equal(outOfOrdersJsonPost.to);
     	    expect(res.body.title).to.equal(outOfOrdersJsonPost.title);
     	    expect(res.body.sendEmail).to.equal(outOfOrdersJsonPost.sendEmail);
            done();
		});
	});

	it('DELETE /services/{serviceId}/rooms/{roomId}/out-of-orders/{outOfOrderId}', function(done){
	    outOfOrder.delete(OutOfOrderPost._id, function (err, res){
	    	withPath = 1;
	    	expect(res.status).to.equal(status.OK);
	    	outOfOrder.getById(withPath, OutOfOrderPost._id, function(err,res){
		        expect(res.status).to.equal(status.NOT_FOUND);
		     	done();
	    	});
		});
	});

});
