var request = require('../request_client/request-type-token.js');

module.exports.update = function (json, callback) {
  var endPoint = 'rooms/57bb1d6fb2efeaa00690702c';
  request.update(endPoint, json, function (err, res) {
    callback(err, res);
  });
};
