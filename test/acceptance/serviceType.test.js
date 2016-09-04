var expect = require('chai').expect;
var serviceType = require('../../lib/serviceType_lib/serviceTypeLib.js');
var config = require('../../config.json');
var status = require('../../resources/status.json');

describe('Service Types Acceptance Test', function(){
	this.timeout(config.timeout);
	var serviceTypeJson = {};
	var arrayServiceType;
	var firstElement = 0;
	var minimumServiceType = 1;

	before(function(done){
		serviceType.getServiceTypes(function(err, res){
			expect(res.status).to.equal(status.OK);
			arrayServiceType = res.body;			
			done();
		});
	});	

	it('GET /service-types', function(done){
		serviceType.getServiceTypes(function(err, res){
			if(expect(arrayServiceType.length).to.be.at.least(minimumServiceType)){
				serviceTypeJson = arrayServiceType[firstElement];				
				expect(res.body[firstElement].version).to.equal(serviceTypeJson.version);	
				expect(res.body[firstElement].name).to.equal(serviceTypeJson.name);
				expect(res.body[firstElement].version).to.equal(serviceTypeJson.version);
			}			
			else{
				serviceTypeJson = arrayServiceType;
				expect(res.body).to.be.at.least(serviceTypeJson);
			}
			expect(res.status).to.equal(status.OK);
			done();
		});
	});
});