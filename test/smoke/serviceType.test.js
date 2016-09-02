var expect = require('chai').expect;
var serviceType = require('../../lib/serviceType_libs/serviceTypeLib.js');
var config = require('../../config.json');
var status = require('../../resources/status.json');

describe('Service Types', function(){
	this.timeout(config.timeout);

	it('GET /service-types', function(done){
		serviceType.getServiceTypes(function(err, res){			
			expect(res.status).to.equal(status.OK);
			done();
		});
	});
});