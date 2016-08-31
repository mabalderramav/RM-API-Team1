var login = require('../lib/login_libs/loginLib.js');
var config = require('../config.json');

module.exports.getCredentialsJson = function () {
  var credentialsJson = {
    username : config.domain + '\\' + config.user,
    password : config.password,
    authentication : config.authentication
  };
  return credentialsJson;
};
module.exports.token = function (callback) {
  login.create(this.getCredentialsJson(), function (err, res){
    var token = config.token + res.body.token;
    callback(token);
  });
}
