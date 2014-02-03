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
      cordova.exec(successCallback,errorCallback,"Calendar","createEvent", [title,location,notes,startDate.getTime(),endDate.getTime()]);
  },
  findEvents: function(startDate, endDate, successCallback, errorCallback) {
    if (device.platform == "Android")
      cordova.exec(successCallback, errorCallback, 'CalendarPlugin', 'findFromCalendar', [{
        "startTimeMillis": startDate.getTime(),
        "endTimeMillis": endDate.getTime()
      }]
      );
    else
      cordova.exec(successCallback,errorCallback,"Calendar","findEvent", [title,location,notes,startDate.getTime(),endDate.getTime()]);
  },
  deleteEvent: function(title, successCallback, errorCallback) {
    if (device.platform == "Android")
      cordova.exec(successCallback, errorCallback, 'CalendarPlugin', 'deleteFromCalendar', [{
        "title": title
      }]
      );
    else
     cordova.exec(successCallback,errorCallback,"Calendar","deleteEvent", [title,location,notes,startDate.getTime(),endDate.getTime(), true]);
 }
};

module.exports = Calendar;