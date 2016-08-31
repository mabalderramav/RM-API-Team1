var request = require('superagent');
var config = require('../../config.json');
var utility = require('../../utilities/utility.json');
var credentials = require('../../utilities/credentials.js');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = utility.NODE_TLS_REJECT_UNAUTHORIZED;

module.exports.get = function (endPoint, callback) {
  credentials.token(function (token) {
    request
      .get(config.uri + endPoint)
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
      .post(config.uri + endPoint)
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
      .put(config.uri + endPoint)
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
      .del(config.uri + endPoint)
      .set(config.authorization, token)
      .set(config.contentType, config.application)
      .end(function (err,res) {
        callback(err, res);
      });
  });
};
