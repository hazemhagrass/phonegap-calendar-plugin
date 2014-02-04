Calendar plugin for Cordova / PhoneGap
======================================================

This Plugin is inspired from [here](https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin)

This Plugin can create or delete event in native calendar for iOS and Android Devices, you can also find all events for specific date.

## Usage

Example Usage: 

```js
var title = "title";
var location = "location";
var notes = "notes";
var startDate = new Date(2104,5,5,10,30);
var endDate = new Date(2104,5,5,20,30);
window.Calendar.createEvent(title, location, notes, startDate, endDate, 
function() {
			console.log('success');
		}, 
function() {
			console.log('fail');
});
```

This has been successfully tested on Cordova 3.0 to 3.1.

This plugin is tested on Gingerbread (Samsung Galaxy S2) and Jellybean. Since there is no official Calendar API before Ice Cream Sandwich, your mileage may vary for older Androids.


## Licence ##

```
Copyright (c) 2012, Twist and Shout, Inc. http://www.twist.com/
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met: 

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer. 
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```
