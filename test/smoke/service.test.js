var expect = require('chai').expect;
var service = require('../../lib/service_lib/serviceLib.js');
var config = require('../../config.json');
var status = require('../../resources/status.json');

describe('Services Smoke', function () {
	this.timeout(config.timeout);
	var idService = {};
	var index = 0;

	it('GET /services' , function(done){
		service.get(function(err,res){
			idService = res.body;
     	    expect(res.status).to.equal(status.OK);
            done();
		});
	});

	it('GET /services/{serviceId}' , function(done){
		service.getById(idService[index]._id, function(err,res){
     	    expect(res.status).to.equal(status.OK);
            done();
		});
	});

	it('PUT /services/{serviceId}', function(done){
		var serviceJson = { impersonate: true };
	    service.update(idService[index]._id, serviceJson, function (err, res){
	        expect(res.status).to.equal(status.OK);
	     	done();
	    });
	});

});
