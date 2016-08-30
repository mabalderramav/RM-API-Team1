var request = require('../request_client/request.js');

module.exports.create = function (json, callback) {
  var endPoint = 'login';
  request.create(endPoint, json, function (err, res) {
    callback(err, res);
  });
};
