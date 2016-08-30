var expect = require('chai').expect;
var login = require('../../lib/login_libs/loginLib.js');

describe('Login', function () {
  this.timeout(8000);
  it('POST',function (done) {
    var json = {
      username : 'group1\\administrator',
      password : 'P@ssw0rd',
      authentication : 'ldap'
    };
    login.create(json, function (err, res){
      expect(res.status).to.equal(200);
      done();
    });
  });
});
