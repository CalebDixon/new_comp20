// Your JavaScript goes here...

function parse() {

	var request = new XMLHttpRequest();
	request.open("GET", "data.json", true);

	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			
			var jsonData = request.responseText;

			var messages = document.getElementById("messages");
	 		var parsed = JSON.parse(jsonData);
			var output = parsed[0].content + parsed[0].username + "<br>" + parsed[1].content + parsed[1].username;
	 		messages.innerHTML = '<div>' + output + '</div';
		}
	};
	request.send();
	
}
