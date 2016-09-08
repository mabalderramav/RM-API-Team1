/**
 * RequireManager Module.
 *
 * @fileoverview RequireManager module.
 * @author  Aldo.Balderrama@fundacion-jala.org (Miguel Aldo Balderrama)
 * @version 1.0.0
 * @module manager_lib/RequireManager
 */

var UP_LEVEL = '../';
var LEVEL = './';
var SLASH = '/';
var EXTENSION_JS = '.js';
var RESOURCE_PATH = UP_LEVEL + UP_LEVEL + 'resources/';
var EXTENSION_JSON = '.json';


/**
 * Obtains config the framework.
 *
 * @return {json} return configName in literal object.
 */
module.exports.getRequireConfig = function (configName) {
  return require(UP_LEVEL + UP_LEVEL + configName + EXTENSION_JS);
};

/**
 * Obtains require lib.
 *
 * @param {String} fileName is resource required
 * @param {String} folder is folder required
 * @return {object} return require object.
 */
module.exports.getRequireLib = function (fileName, folder) {
  return require(UP_LEVEL + folder + SLASH + fileName + EXTENSION_JS);
};

/**
 * Obtains require lib.
 *
 * @param {String} resource is resource required
 * @return {object} return require object.
 */
module.exports.getRequireManager = function (fileName) {
  return require(LEVEL + fileName + EXTENSION_JS);
};

/**
 * Obtains require json.
 *
 * @param {String} jsonFileName is resource required
 * @return {json} return require object.
 */
module.exports.getRequireJson = function (jsonFileName) {
  return require(RESOURCE_PATH + jsonFileName + EXTENSION_JSON);
};
