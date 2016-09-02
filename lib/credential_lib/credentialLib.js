/**
 * CredentialsLib Module.
 * @fileoverview CredentialsLib module that obtains credentials and token of the aplicaction.
 * @author  Aldo.Balderrama@fundacion-jala.org (Miguel Aldo Balderrama)
 * @version 1.0.0
 * @module credential_lib/credentialLib
 */

var login = require('../login_lib/loginLib.js');
var config = require('../../config.json');

/**
 * Get credentials in format json.
 */
module.exports.getCredentialsJson = function () {
  var credentialsJson = {
    username : config.domain + '\\' + config.user,
    password : config.password,
    authentication : config.authentication
  };
  return credentialsJson;
};

/**
 * Get token of the application.
 * @param {function} callback contains the token.
 */
module.exports.token = function (callback) {
  login.create(this.getCredentialsJson(), function (err, res){
    var token = config.token + res.body.token;
    callback(token);
  });
};
