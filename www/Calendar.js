var Calendar = {
  createEvent: function(title, location, notes, startDate, endDate, successCallback, errorCallback) {
    if (device.platform == "Android")
      cordova.exec(
        successCallback,
        errorCallback,
        'CalendarPlugin',
        'addToCalendar', [{
          "title": title,
          "description": notes,
          "eventLocation": location,
          "startTimeMillis": startDate.getTime(),
          "endTimeMillis": endDate.getTime()
        }]
        );
    else
      cordova.exec(successCallback,errorCallback,"CalendarPlugin","createEvent", [title,location,notes,startDate,endDate]);
  },
  findEvents: function(title, location, notes, startDate, endDate, successCallback, errorCallback) {
    if (device.platform == "Android")
      cordova.exec(successCallback, errorCallback, 'CalendarPlugin', 'findFromCalendar', [{
        "startTimeMillis": startDate.getTime(),
        "endTimeMillis": endDate.getTime()
      }]
      );
    else
      cordova.exec(successCallback,errorCallback,"CalendarPlugin","findEvent", [title,location,notes,startDate,endDate]);
  },
  deleteEvent: function(title, successCallback, errorCallback) {
    if (device.platform == "Android")
      cordova.exec(successCallback, errorCallback, 'CalendarPlugin', 'deleteFromCalendar', [{
        "title": title
      }]
      );
    else
     cordova.exec(successCallback,errorCallback,"CalendarPlugin","deleteEvent", [title,location,notes,startDate,endDate, true]);
 }
};

module.exports = Calendar;