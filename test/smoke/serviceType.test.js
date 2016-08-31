var expect = require('chai').expect;
var serviceType = require('../../lib/serviceType_libs/serviceType.js');

describe('Service Types', function(){
	this.timeout(4000);

	it('GET /service-types', function(done){
		serviceType.getServiceTypes(function(err, res){			
			expect(res.status).to.equal(200);
			done();
		});
	});
});