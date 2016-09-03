/**
 * LogManagement Module.
 *
 * @fileoverview LogManagement module, responsible the log management for saving the logs of the application.
 * @author  Aldo.Balderrama@fundacion-jala.org (Miguel Aldo Balderrama)
 */
var logger = require('./logger.js').getLogger('logFile');
/**
 * Saves the log.
 *
 * @param {String} endPoint Contains the EndPoint.
 * @param {String} method Contains the Request Method.
 * @param {String} err Contains the error.
 * @param {String} res Contains the response.
 */
module.exports.log = function (endPoint, method, err, res) {
  logger.debug(method + ' ' + endPoint);
  if(err){
    logger.error(err.status);
    logger.error(err.response);
  } else {
    logger.debug("status: " + res.status);
  };
};
