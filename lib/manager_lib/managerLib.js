/**
 * ManagerLib Module.
 *
 * @fileoverview ManagerLib module that json all.
 * @author  Aldo.Balderrama@fundacion-jala.org (Miguel Aldo Balderrama)
 * @version 1.0.0
 * @module manager_lib/managerLib
 */

var requireManager = require('./requireManager.js');

 /**
  * Obtains jsonManager the framework.
  *
  * @return {object} return jsonManager object.
  */
module.exports.getJsonManager = function () {
  return requireManager.getRequireManager('jsonManagerLib')
};

/**
 * Obtains requestManager the framework.
 *
 * @return {object} return requestManager object.
 */
module.exports.getRequestManager = function () {
  return requireManager.getRequireManager('requestManagerLib');
};

/**
 * Obtains resourceManager the framework.
 *
 * @return {object} return resourceManager object.
 */
module.exports.getResourceManager = function () {
  return requireManager.getRequireManager('resourceManagerLib');
};
