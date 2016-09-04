var config = require('../../config.json');
var expect = require('chai').expect;
var resource = require('../../lib/resources_libs/resourceLib.js');
var resources = require('../../resources/resources.json');
var status = require('../../resources/status.json');
var randomstring = require("randomstring");


describe ('Resources Smoke Test', function (){
	this.timeout(config.timeout);
	var resourceJson={};
	var resourceJsonUpdate={};
	var name= resources.resourname + randomstring.generate({ length: 6, charset: 'alphabetic'});
	var nameup;

	before(function(done){
		resourceJson = {
			name: name,
			customName:resources.resourcusname,
			fontIcon: resources.resourfonticon,
  		from: resources.resourfrom,
			description: resources.resourdesc
		};
		resource.create (resourceJson, function(err,res){
			expect(res.status).to.equal(status.OK);
			resourceJson = res.body;
			done();
		});
	});

	after(function(done){
		resource.delete(resourceJson._id, function(err,res){
			expect(res.status).to.equal(status.OK);
			done();
		});
	});

	it('GET /resources - all resources', function(done){
		resource.get(function(err,res){
			expect(res.status).to.equal(status.OK);
			done();
		});
	});

	it('GET /resources/{resourceId}', function(done){
		resource.getById(resourceJson._id, function(err,res){
			expect(res.status).to.equal(status.OK);
			done();
		});
	});

	it('PUT /resources/{resourceId}', function(done){
		resourceJsonUpdate= {
			name : resourceJson.name + '-Update',
			customName: resourceJson.customName + '-Update',
			fontIcon: resourceJson.fontIcon + '-Update',
  		from: resourceJson.from + '-Update',
			description: resourceJson.description + '-Update'
		};
		resource.update(resourceJson._id, resourceJsonUpdate, function(err,res){
			expect(res.status).to.equal(status.OK);
			done();
		});
	})

});
