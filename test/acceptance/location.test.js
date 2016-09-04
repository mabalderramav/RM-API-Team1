var expect = require('chai').expect;
var location = require('../../lib/location_libs/locationLib.js');
var config = require('../../config.json');
var status = require('../../resources/status.json');
var __v = 0;
var quantity = 1;

describe('Location acceptance test:', function () {
    this.timeout(config.timeout);
    var json = {};

    beforeEach(function (done) {
        json = {
            name       : 'locationTest',
            customName : 'LocationTest',
            description: 'This is the LocationTest'
        };
        location.create(json, function (err, res) {
            json = res.body;
            expect(res.status).to.equal(status.OK);
            expect(res.body.name).to.equal(json.name);
            expect(res.body.customName).to.equal(json.customName);
            expect(res.body.description).to.equal(json.description);
            done();
        });
    });

    afterEach(function(done){
        location.delete(json._id,function(err, res){
            expect(res.status).to.equal(status.OK);
            location.getById(json._id,function (err, res) {
                expect(res.status).to.equal(status.NOT_FOUND);
                done();
             });
        });
    });

    it('GET /{locations}', function (done) {
        location.get(function (err, res) {
            expect(res.status).to.equal(status.OK);
            expect(res.body.length).to.be.at.least(quantity);
            done();
        });
    });

    it('GET /locations/{locationId}}', function (done) {
        location.getById(json._id,function (err, res) {
            expect(res.status).to.equal(status.OK);
            expect(res.body.name).to.equal(json.name);
            expect(res.body.__v).to.equal(__v);
            expect(res.body.customName).to.equal(json.customName);
            expect(res.body.description).to.equal(json.description);
            done();
        });
    });
    it('PUT /locations/{locationId}', function (done) {
        var jsonUpdate = {
            customName: 'PunataUpdated'
        };
        location.update(json._id,jsonUpdate, function (err, res) {
            expect(res.status).to.equal(status.OK);
            expect(res.body.__v).to.equal(__v);
            expect(res.body.customName).to.equal(jsonUpdate.customName);
            done();
        });
    });

});
