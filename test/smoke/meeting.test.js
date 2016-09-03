var expect = require('chai').expect;
var meeting = require('../../lib/meeting_libs/meetingLib.js');
var config = require('../../config.json');
var status = require('../../resources/status.json');

describe('Meetings', function () {
    this.timeout(config.timeout);
    var json = {};
    beforeEach(function (done) {
        json = {
            organizer: '"Room 001',
            title: 'MeetingTest05',
            start: '2016-09-05T22:47:00.000Z',
            end: '2016-09-05T22:48:00.000Z',
            location: 'room001 room001',
            roomEmail: 'room001@group1.local',
            resources: [
                "room001@group1.local"
            ],
            attendees: [
                "eviraka@group1.local"
            ],
            optionalAttendees: [
                "jrodriguez@group1.local"
            ]
        };
        meeting.create(json, function (err, res) {
            json = res.body;
            expect(res.status).to.equal(status.OK);
            done();
        });
    });

    afterEach(function (done) {
        meeting.delete(json._id, function (err, res) {
            expect(res.status).to.equal(status.OK);
            done();
        });
    });

    it('GET /services/{serviceId}/rooms/{roomId}/meeting/{meetingId}', function (done) {
        meeting.getById(json._id, function (err, res) {
            expect(res.status).to.equal(status.OK);
            done();
        });
    });

    it('GET /services/{serviceId}/rooms/{roomId}/meeting', function (done) {
        meeting.get(function (err, res) {
            expect(res.status).to.equal(status.OK);
            done();
        });
    });

    it('PUT /services/{serviceId}/rooms/{roomId}/meeting/{meetingId}', function (done) {
        var jsonUpdate = {
            start: '2016-09-28T22:47:00.000Z',
            end: '2016-09-28T22:48:00.000Z',
            title: 'new title',
            optionalAttendees: [],
            attendees: [
                "mabalderramav@group1.local",
                "eviraca@group1.local"
            ]
        };
        meeting.update(json._id, jsonUpdate, function (err, res) {
            expect(res.status).to.equal(status.OK);
            done();
        });
    });
});
