var expect = require('chai').expect;
var login = require('../../lib/login_libs/loginLib.js');
var config = require('../../config.json');
var status = require('../../utilities/status.json');

describe('Login', function () {
	this.timeout(config.timeout);
	it('POST /login', function (done) {
		var credentialsJson = {
			username : 'group1\\administrator',
			password : 'P@ssw0rd',
			authentication : 'ldap'
		};
		login.create(credentialsJson, function (err, res){
			expect(res.status).to.equal(status.OK);
			done();
		});
	});
});
