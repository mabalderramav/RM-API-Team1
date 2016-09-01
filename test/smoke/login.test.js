var expect = require('chai').expect;
var status = require('../../resources/status.json');
var config = require('../../config.json');
var credentials = require('../../lib/credential_lib/credentialLib.js');
var login = require('../../lib/login_libs/loginLib.js');

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
