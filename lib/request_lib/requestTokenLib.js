/**
 * RequestTokenLib Module.
 * @fileoverview RequestTokenLib module Execute GET, POST, PUT and DELETE of any endpoint that requires token.
 * @author  Aldo.Balderrama@fundacion-jala.org (Miguel Aldo Balderrama)
 * @version 1.0.0
 * @module request_lib/RequestTokenLib
 */

var request = require('superagent');
var config = require('../../config.json');
var credentials = require('../credential_lib/credentialLib.js');
var nodeConfig = require('../../resources/node.config.json');
var endpoint = require('../endpoint_lib/endpointLib.js');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = nodeConfig.NODE_TLS_REJECT_UNAUTHORIZED;

/**
 * It makes a GET from a specific URI.
 * @param {String} endPoint EndPoint to run de GET.
 * @param {function} callback contains the error and the response.
 */
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

/**
 * It makes a POST from a specific URI.
 * @param {String} endPoint EndPoint to run de POST.
 * @param {json} json contains a json file to a POST.
 * @param {function} callback contains the error and the response.
 */
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

/**
 * It makes a PUT from a specific URI.
 * @param {String} endPoint EndPoint to run de PUT.
 * @param {json} json contains a json file to a PUT.
 * @param {function} callback contains the error and the response.
 */
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

/**
 * It makes a DELETE from a specific URI.
 * @param {String} endPoint EndPoint to run de DELETE.
 * @param {function} callback contains the error and the response.
 */
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
