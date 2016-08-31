var expect = require('chai').expect;
var location = require('../../lib/location_libs/locationLib.js');

describe('Location', function () {
    this.timeout(8000);
    var json = {};
    it('GET All', function (done) {
        location.get(function (err, res) {
            expect(res.status).to.equal(200);
            done();
        });
    });
    it('GET By Id', function (done) {
        location.getById(function (err, res) {
            expect(res.status).to.equal(200);
            done();
        });
    });
    it('PUT', function (done) {
        var json = {
            customName: 'Laboratory003'
        };
        location.update(json, function (err, res) {
            expect(res.status).to.equal(200);
            done();
        });
    });
});
