var request = require('superagent');
var config = require('../../config.json');
var utility = require('../../utilities/utility.json');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = utility.NODE_TLS_REJECT_UNAUTHORIZED;

module.exports.get = function (endPoint, callback) {
  request
    .get(config.uri + endPoint)
    .set(config.contentType, config.application)
    .end(function(err,res) {
      callback(err, res);
    });
};

module.exports.create = function (endPoint, json, callback) {
  request
    .post(config.uri + endPoint)
    .send(json)
    .set(config.contentType, config.application)
    .end(function(err, res) {
      callback(err, res);
    });
};

module.exports.update = function (endPoint, json, callback) {
  request
    .put(config.uri + endPoint)
    .send(json)
    .set(config.contentType, config.application)
    .end(function (err, res) {
      callback(err, res);
    });
};

module.exports.delete = function (endPoint, callback) {
  request
    .del(config.uri + endPoint)
    .set(config.contentType, config.application)
    .end(function (err,res) {
      callback(err, res);
    });
};
