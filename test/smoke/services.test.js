var expect = require('chai').expect;
var login = require('../../lib/services_libs/servicesLib.js');

describe('Smokes service tests', function () {
	this.timeout(8000);
	it('GET' , function(done){
		login.get(function(err,res){
     	    expect(res.status).to.equal(200);
            done();
		});
	});
});
