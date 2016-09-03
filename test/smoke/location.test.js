var expect = require('chai').expect;
var location = require('../../lib/location_libs/locationLib.js');
var config = require('../../config.json');
var status = require('../../resources/status.json');

describe('Location', function () {
    this.timeout(config.timeout);
    var json = {};
    beforeEach(function (done) {
        json = {
            name       : 'ho6',
            customName : 'HO6',
            description: 'this is the hoy6'
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
    it('GET All', function (done) {
        location.get(function (err, res) {
            expect(res.status).to.equal(status.OK);
            done();
        });
    });
    it('GET by ID}', function (done) {
        location.getById(json._id,function (err, res) {
            expect(res.status).to.equal(status.OK);
            done();
        });
    });
    it('PUT', function (done) {
        var jsonUpdate = {
            customName: 'HO66'
        };
        location.update(json._id,jsonUpdate, function (err, res) {
            expect(res.status).to.equal(status.OK);
            done();
        });
    });

});
