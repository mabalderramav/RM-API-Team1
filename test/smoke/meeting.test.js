var expect = require('chai').expect;
var meeting = require('../../lib/meeting_libs/meetingLib.js');

describe('Meetings', function () {
    this.timeout(8000);
    it('GET All', function (done) {
        meeting.get(function (err, res) {
            expect(res.status).to.equal(200);
            done();
        });
    });
    it('GET By Id', function (done) {
        meeting.getById(function (err, res) {
            expect(res.status).to.equal(200);
            done();
        });
    });
});
