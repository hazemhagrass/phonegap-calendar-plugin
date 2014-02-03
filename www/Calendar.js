var Calendar = {
  createEvent: function(title, location, notes, startDate, endDate, successCallback, errorCallback) {
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
  }
};

module.exports = Calendar;