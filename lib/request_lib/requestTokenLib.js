var request = require('superagent');
var config = require('../../config.json');
var credentials = require('../credential_lib/credentialLib.js');
var nodeConfig = require('../../resources/node.config.json');
var endpoint = require('../endpoint_lib/endpointLib.js');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = nodeConfig.NODE_TLS_REJECT_UNAUTHORIZED;

module.exports.get = function (endPoint, callback) {
  credentials.token(function (token) {
    request
      .get(endpoint.getUri(endPoint))
      .set(config.authorization, token)
      .set(config.contentType, config.application)
      .end(function(err,res) {
        callback(err, res);
      });
  });
};

module.exports.create = function (endPoint, json, callback) {
  credentials.token(function (token) {
    request
      .post(endpoint.getUri(endPoint))
      .set(config.authorization, token)
      .set(config.contentType, config.application)
      .send(json)
      .end(function(err,res) {
        callback(err, res);
      });
  });
};

module.exports.update = function (endPoint, json, callback) {
  credentials.token(function (token) {
    request
      .put(endpoint.getUri(endPoint))
      .set(config.authorization, token)
      .set(config.contentType, config.application)
      .send(json)
      .end(function (err, res) {
        callback(err, res);
      });
  });
};

module.exports.delete = function (endPoint, callback) {
  credentials.token(function (token) {
    request
      .del(endpoint.getUri(endPoint))
      .set(config.authorization, token)
      .set(config.contentType, config.application)
      .end(function (err,res) {
        callback(err, res);
      });
  });
};
