var request = require('superagent');
require('superagent-proxy')(request);
var config = require('../../config.json');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

module.exports.get = function (endPoint, callback) {
  request
    .get(config.uri + endPoint)
    .proxy(config.proxy)
    .auth(config.user,config.password)
    .end(function(err,res) {
      callback(err, res);
    });
};

module.exports.create = function (endPoint, json, callback) {
  request
    .post(config.uri + endPoint)
    .proxy(config.proxy)
    .auth(config.user,config.password)
    .send(json)
    .end(function(err,res) {
      callback(err, res);
    });
};

module.exports.update = function (endPoint, json, callback) {
  request
    .put(config.uri + endPoint)
    .proxy(config.proxy)
    .auth(config.user,config.password)
    .send(json)
    .end(function (err, res) {
      callback(err, res);
    });
};

module.exports.delete = function (endPoint, callback) {
  request
    .del(config.uri + endPoint)
    .proxy(config.proxy)
    .auth(config.user,config.password)
    .end(function (err,res) {
      callback(err, res);
    });
};
