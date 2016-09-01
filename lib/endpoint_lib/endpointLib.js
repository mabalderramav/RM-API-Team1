var config = require('../../config.json');

module.exports.getUri = function (endPoint) {
  return config.protocol + '://' + config.server + ':' + config.port + endPoint;
};
