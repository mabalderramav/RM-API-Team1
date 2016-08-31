var request = require('../request_client/request-type-autentication');

module.exports.create = function (json, callback) {
    var endPoint = '/services/57bb1d6cb2efeaa00690702a/rooms/57bb1d6fb2efeaa00690702b/meetings';
    request.create(endPoint, json, function (err, res) {
        callback(err, res);
    });
};

module.exports.get = function (callback) {
    var endPoint = '/services/57bb1d6cb2efeaa00690702a/rooms/57bb1d6fb2efeaa00690702b/meetings';
    request.get(endPoint, function (err, res) {
        callback(err, res);
    });
};

module.exports.getById = function (callback) {
    var endPoint = '/services/57bb1d6cb2efeaa00690702a/rooms/57bb1d6fb2efeaa00690702b/meetings/57c5e4178e93693c07ce2c24';
    request.get(endPoint, function (err, res) {
        callback(err, res);
    });
};

module.exports.update = function (json, callback) {
    var endPoint = '/services/57bb1d6cb2efeaa00690702a/rooms/57bb1d6fb2efeaa00690702b/meetings/57c5e4178e93693c07ce2c24'; //Laboratory003
    request.update(endPoint, json, function (err, res) {
        callback(err, res);
    });
};

module.exports.delete = function (callback) {
    var endPoint = '/services/57bb1d6cb2efeaa00690702a/rooms/57bb1d6fb2efeaa00690702b/meetings/57c5e4178e93693c07ce2c25'; //MeetingX
    request.delete(endPoint, function (err, res) {
        callback(err, res);
    });
};