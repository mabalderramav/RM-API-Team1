/**
 * MeetingLib Module
 * @fileoverview meetingLib module that executes POST, GET, PUT and DELETE requests for Meetings.
 * @author  Juana.Rodriguez@fundacion-jala.org (Juana Francisca Rodriguez)
 * @version 1.0.0
 * @module meeting_lib/meetingLib
 */

var requestAuthentication = require('../request_lib/requestAutenticationLib.js');
var request = require('../request_lib/requestLib.js');
var resource = require('../../resources/resource.json');
var resourceRoom = require('../../resources/room.json');
var resourceService = require('../../resources/service.json');
var LogManagement = require('../../logger/LogManagement.js');
var method = require('../../resources/requestMethod.json');

var index = 0;
var room = resourceRoom[index];
var service = resourceService[index];

/**
 * The module create allow creating a new meeting.
 *
 * @param {json} meetingJson, contains a json file with the meeting attributes.
 * @param {function}callback, contains the error and the response.
 */
module.exports.create = function (meetingJson, callback) {
    var endPoint = resource.services + '/' + service.id + resource.rooms + '/' + room.id + resource.meeting;
    requestAuthentication.create(endPoint, meetingJson, function (err, res) {
        LogManagement.log(resource.meeting, endPoint, method.POST, err, res);
        callback(err, res);
    });
};

/**
 * The method gets all the meetings created
 *
 * @param {function} callback, contains the error and the response.
 */
module.exports.get = function (callback) {
    var endPoint = resource.services + '/' + service.id + resource.rooms + '/' + room.id + resource.meeting;
    request.get(endPoint, function (err, res) {
        LogManagement.log(resource.meeting, endPoint, method.GET, err, res);
        callback(err, res);
    });
};

/**
 * The module gets a meeting given an id.
 *
 * @param {String} idMeeting, contains the id of meeting at get.
 * @param {function}callback, contains the error and the response.
 */
module.exports.getById = function (idMeeting, callback) {
    var endPoint = resource.services + '/' + service.id + resource.rooms + '/' + room.id + resource.meeting + '/' + idMeeting;
    request.get(endPoint, function (err, res) {
        LogManagement.log(resource.meeting, endPoint, method.GET, err, res);
        callback(err, res);
    });
};

/**
 * The module updates a specific meeting.
 *
 * @param {String} idMeeting, contains the id of meeting at update.
 * @param {json}meetingJson, contains a json file with the meeting attributes that will be updated.
 * @param{function} callback, contains the error and the response.
 */
module.exports.update = function (idMeeting, meetingJson, callback) {
    var endPoint = resource.services + '/' + service.id + resource.rooms + '/' + room.id + resource.meeting + '/' + idMeeting;
    requestAuthentication.update(endPoint, meetingJson, function (err, res) {
        LogManagement.log(resource.meeting, endPoint, method.PUT, err, res);
        callback(err, res);
    });
};

/**
 * The module deletes a specific meeting given an id.
 *
 * @param {String} idMeeting, contains the id of meeting at delete.
 * @param {function}callback, contains the error and the response.
 */
module.exports.delete = function (idMeeting, callback) {
    var endPoint = resource.services + '/' + service.id + resource.rooms + '/' + room.id + resource.meeting + '/' + idMeeting;
    requestAuthentication.delete(endPoint, function (err, res) {
        LogManagement.log(resource.meeting, endPoint, method.DELETE, err, res);
        callback(err, res);
    });
};