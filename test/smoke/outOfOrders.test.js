var expect = require('chai').expect;
var login = require('../../lib/Out-Of-Orders_libs/OutOfOrdersLib.js');

describe('Smokes out-of-orders tests', function () {
	this.timeout(8000);

	it('GET All' , function(done){
		login.getAll(function(err,res){
     	    expect(res.status).to.equal(200);
            done();
		});
	});
	it('GET By Id' , function(done){
		login.getById(function(err,res){
     	    expect(res.status).to.equal(200);
            done();
		});
	});
});
