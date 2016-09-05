var expect = require('chai').expect;
var location = require('../../lib/location_libs/locationLib.js');
var config = require('../../config.json');
var status = require('../../resources/status.json');

describe('Location Smoke Test', function () {
    this.timeout(config.timeout);
    var json = {};
    beforeEach(function (done) {
        json = {
            name       : 'punataTest',
            customName : 'PunataTest',
            description: 'This is the PunataTest'
        };
        location.create(json, function (err, res) {
            json = res.body;
            expect(res.status).to.equal(status.OK);
            done();
        });
    });
    afterEach(function(done){
        location.delete(json._id,function(err, res){
            expect(res.status).to.equal(status.OK);
            done();
        });
    });
    it('GET /{locations}', function (done) {
        location.get(function (err, res) {
            expect(res.status).to.equal(status.OK);
            done();
        });
    });
    it('GET /locations/{locationId}', function (done) {
        location.getById(json._id,function (err, res) {
            expect(res.status).to.equal(status.OK);
            done();
        });
    });
    it('PUT /locations/{locationId}', function (done) {
        var jsonUpdate = {
            customName: 'PunataUpdated'
        };
        location.update(json._id,jsonUpdate, function (err, res) {
            expect(res.status).to.equal(status.OK);
            done();
        });
    });

});
