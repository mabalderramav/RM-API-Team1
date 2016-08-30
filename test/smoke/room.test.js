var expect = require('chai').expect;
var login = require('../../lib/room_libs/roomLib.js');

describe('Rooms', function () {
  this.timeout(8000);
  it('PUT',function (done) {
    var json = {
      enabled : true,
      location : 'string',
      customDisplayName : 'Test-Aldo',
      code : 'string'
    };
    login.update(json, function (err, res){
      expect(res.status).to.equal(200);
      done();
    });
  });
});
