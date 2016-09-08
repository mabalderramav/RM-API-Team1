var expect = require('chai').expect;
/**Manager*/
var requireManager = require('../../lib/manager_lib/requireManagerLib.js');
var endPointManager = requireManager.getRequireEndPoinManager();
var resourceManager = requireManager.getRequireResourceManager();
/**Variables*/
var service = endPointManager.getService();
var config = requireManager.getRequireConfig();
var status = resourceManager.getStatus();

describe('Service Smoke Test', function () {
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
