$(function(){
	$('.find-events').live('click', function(){
		alert('Finding events ....');
		cordova.require('cordova/plugin/calendar').findEvents(function(events) {
			$('.events_table tbody').empty();
			$(events).each(function(index, value){
				$('.events_table tbody').append("<tr> \
					<td>" + value.id + "</td> \
					<td>" + value.summary + "</td> \
					<td>" + value.start + "</td> \
					<td>" + value.end + "</td> \
					</tr>");	
			});
		}, function() {
			alert('Error');
		}, {
			'from': new Date(1970, 1, 1).getTime(),
			'to': new Date().getTime()
		});	
	});
	
});
