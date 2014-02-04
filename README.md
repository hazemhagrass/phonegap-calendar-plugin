Calendar plugin for Cordova / PhoneGap
======================================================

This Plugin is inspired from [here](https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin)

This Plugin can create or delete event in native Calendar for iOS and Android Devices, you can also find all events for specific date.

## Usage

Example Usage: 

1. **Create Event**

```js
var title = "title";
var location = "location";
var notes = "notes";
var startDate = new Date(2104,5,5,10,30);
var endDate = new Date(2104,5,5,20,30);
window.Calendar.createEvent(title, location, notes, startDate, endDate, 
function() {console.log('success');}, 
function() {console.log('fail');});
```
2. **Delete Event**

```js
var title = "title";
var location = "location";
var notes = "notes";
var startDate = new Date(2104,5,5,10,30);
var endDate = new Date(2104,5,5,20,30);
window.Calendar.deleteEvent(title, location, notes, startDate, endDate,
function() {console.log('success');}, 
function() {console.log('fail');});
```
2. **Find Event**

```js
var title = "title";
var location = "location";
var notes = "notes";
var startDate = new Date(2104,5,5,10,30);
var endDate = new Date(2104,5,5,20,30);
window.Calendar.findEvents(title, location, notes, startDate, endDate,
function(events) {console.log('success');}, 
function() {console.log('fail');});
```

This has been successfully tested on Cordova 3.0 to 3.1.


## MIT Licence

Copyright 2013 Monday Consulting GmbH

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
