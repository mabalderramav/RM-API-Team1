var request = require('superagent');
var config = require('../../config.json');
var nodeConfig = require('../../resources/node.config.json');
var endpoint = require('../endpoint_lib/endpointLib.js');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = nodeConfig.NODE_TLS_REJECT_UNAUTHORIZED;

module.exports.get = function (endPoint, callback) {
  request
    .get(endpoint.getUri(endPoint))
    .auth(config.user,config.password)
    .set(config.contentType, config.application)
    .end(function(err,res) {
      callback(err, res);
    });
};

module.exports.create = function (endPoint, json, callback) {
  request
    .post(endpoint.getUri(endPoint))
    .auth(config.user,config.password)
    .send(json)
    .set(config.contentType, config.application)
    .end(function(err,res) {
      callback(err, res);
    });
};

module.exports.update = function (endPoint, json, callback) {
  request
    .put(endpoint.getUri(endPoint))
    .auth(config.user,config.password)
    .send(json)
    .set(config.contentType, config.application)
    .end(function (err, res) {
      callback(err, res);
    });
};

module.exports.delete = function (endPoint, callback) {
  request
    .del(endpoint.getUri(endPoint))
    .auth(config.user,config.password)
    .set(config.contentType, config.application)
    .end(function (err,res) {
      callback(err, res);
    });
};
