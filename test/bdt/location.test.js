var expect = require('chai').expect;
var location = require('../../lib/location_libs/locationLib.js');
var config = require('../../config.json');
var status = require('../../resources/status.json');

/*
 Feature: Location

 Scenario 1: Verify the creation of location

 Given I have access to Room Manager
 When I create a location 'locationTest'
 Then ensure 'locationTest' is created
 And I delete the 'locationTest' created
 */

describe('Feature: location:', function () {
    context('Scenario 1: Verify the creation of location', function () {
        this.timeout(config.timeout);
        var locationJson = {};
        it('Given I create  a location \'locationTest\'', function (done) {
            locationJson = {
                name: 'locationTest',
                customName: 'LocationTest',
                description: 'This is the LocationTest'
            };
            location.create(locationJson, function (err, res) {
                locationJson = res.body;
                expect(res.status).to.equal(status.OK);
                done();
            });
        });

        it('When ensure \'locationTest\' is created', function (done) {
            location.getById(locationJson._id, function (err, res) {
                expect(res.status).to.equal(status.OK);
                done();
            });
        });

        it('Then I delete the \'locationTest\' created', function (done) {
            location.delete(locationJson._id, function (err, res) {
                expect(res.status).to.equal(status.OK);
                done();
            });
        });
    });

    /*
     Scenario 2: Verify that a location deleted don't exist.
     Given I have access to Room Manager
     When I create a location 'locationTest'
     When I deleted the location 'locationTest'
     Then ensure 'locationTest' is deleted
     */
    context('Scenario 2: Verify that a location deleted dont exist', function () {
        this.timeout(config.timeout);
        var locationJson = {};
        var loginJson = {};
        it('Given I create  a location \'locationTest\'', function (done) {
            locationJson = {
                name: 'locationTest',
                customName: 'LocationTest',
                description: 'This is the LocationTest'
            };
            location.create(locationJson, function (err, res) {
                locationJson = res.body;
                expect(res.status).to.equal(status.OK);
                done();
            });
        });
        it('When I deleted the location \'locationTest\'', function (done) {
            location.delete(locationJson._id, function (err, res) {
                locationJson = res.body;
                expect(res.status).to.equal(status.OK);
                done();
            });
        });
        it('Then ensure \'locationTest\' is deleted', function (done) {
            location.getById(locationJson._id, function (err, res) {
                expect(res.status).to.equal(status.NOT_FOUND);
                done();
            });
        });
    });
});