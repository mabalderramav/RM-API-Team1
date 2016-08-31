var request = require('../request_client/request-type-token.js');

module.exports.create = function (json, callback) {
    var endPoint = 'locations';
    request.create(endPoint, json, function (err, res) {
        callback(err, res);
    });
};
module.exports.get = function (callback) {
    var endPoint = 'locations';
    request.get(endPoint, function (err, res) {
        callback(err, res);
    });
};
module.exports.getById = function (callback) {
    var endPoint = 'locations/57c5d6be8e93693c07ce2c20';
    request.get(endPoint, function (err, res) {
        callback(err, res);
    });
};
module.exports.update = function (json, callback) {
    var endPoint = 'locations/57c5d6be8e93693c07ce2c20';
    request.update(endPoint, json, function (err, res) {
        callback(err, res);
    });
};
module.exports.delete = function (callback) {
    var endPoint = 'locations/57b610fbb2efeaa006906f91';
    request.delete(endPoint, function (err, res) {
        callback(err, res);
    });
};