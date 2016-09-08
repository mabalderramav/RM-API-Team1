/**
 * CredentialsLib Module.
 *
 * @fileoverview CredentialsLib module that obtains credentials and token of the aplicaction.
 * @author  Aldo.Balderrama@fundacion-jala.org (Miguel Aldo Balderrama)
 * @version 1.0.0
 * @module credential_lib/credentialLib
 */

var manager = require('../manager_lib/managerLib.js');

var login = manager.resourceManager().getLogin();
var config = manager.getJsonManager().getConfig();

//var login = require('../login_lib/loginLib.js');
//var config = require('../../config.json');

var token = null;
/**
 * Get credentials in format json.
 *
 * @return {json} credentialsJson return credentials in format json.
 */
module.exports.getCredentialsJson = function () {
  return {
    username : config.domain + '\\' + config.user,
    password : config.password,
    authentication : config.authentication
  };
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
