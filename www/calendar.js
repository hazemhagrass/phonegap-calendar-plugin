/**
 * Copyright (c) 2012, Twist and Shout, Inc. http://www.twist.com/
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


/**
 * @author yvonne@twist.com (Yvonne Yip)
 */

 cordova.define('cordova/plugin/calendar', function(require, exports, module) {
  var exec = require('cordova/exec');


  /**
   * @constructor
   */
   var Calendar = function() {
   };

   Calendar.prototype.createEvent = function(title,location,notes,startDate,endDate, successCallback, errorCallback) {
    if (typeof errorCallback != "function")  {
      console.log("calendarPlugin.createEvent failure: errorCallback parameter must be a function");
      return
    }
    
    if (typeof successCallback != "function") {
      console.log("calendarPlugin.createEvent failure: successCallback parameter must be a function");
      return
    }
    cordova.exec(
      successCallback, // called when signature capture is successful
      errorCallback, // called when signature capture encounters an error
      'Calendar', // Tell cordova that we want to run "PushNotificationPlugin"
      'addToCalendar', // Tell the plugin the action we want to perform
      [{
        "title": title,
        "description": notes,
        "eventLocation": location,
        "startTimeMillis": startDate.getTime(),
        "endTimeMillis": endDate.getTime()
      }]
    ); // List of arguments to the plugin
  };
  /**
   * Find calendar event items in the calendar based on a CalendarEventFilter
   * object.
   * @param {Function} successCallback Success callback.
   * @param {Function=} errorCallback Error callback.
   * @param {CalendarFindOptions=} opt_options Options to apply to the output
   *     of this method.
   */
   Calendar.prototype.findEvents = function(startDate, endDate, successCallback, errorCallback, opt_options) {
    cordova.exec(successCallback, errorCallback, 'Calendar', 'findFromCalendar', [{
      "startTimeMillis": startDate.getTime(),
      "endTimeMillis": endDate.getTime()
    }]
    );
  };
  Calendar.prototype.deleteEvent = function(title, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'Calendar', 'deleteFromCalendar', [{
      "title": title
    }]
    );
  };

  var calendar = new Calendar();
  module.exports = calendar;
});
