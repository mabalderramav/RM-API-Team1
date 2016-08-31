var expect = require('chai').expect;
var login = require('../../lib/login_libs/loginLib.js');
var status = require('../../utilities/status.json');
var config = require('../../config.json');
var credentials = require('../../utilities/credentials.js');

describe('Login', function () {
	this.timeout(config.timeout);
	it('POST /login', function (done) {
		var credentialsJson = credentials.getCredentialsJson();
		login.create(credentialsJson, function (err, res){
			expect(res.status).to.equal(status.OK);
			done();
		});
	});
});
