Caleb Dixon

All aspects of this project were completed sucessfully and there are no known bugs (or unexpected
behaviors in the other parts).

I did not collaborate with any other people on this project, expect by reading Piazza posts.

I spent about 1.5 hours on this project.



Part 2:

	Simply opening the index.html file in chrome did not display any of the messages or parsed 
	data. The request.send() method failed because there was no server to communicate with. The 
	chrome developer tools showed an error on this function as expected, the text of which is below.

Failed to load file:///home/tuftscs/Desktop/comp20-cdixon/messages/data.json: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.

	Failed to load file makes sense to me, since nothing can be loaded from a nonexistant server. 
	I am not sure why chrome sees this as a "cross origin request". I am also not sure what protocol
	opening a local html document uses, or precisely why this is the error given in this case.  

	After reading a piazza post on this subject, I tested this again with the firefox browser. Interestingly
	this worked the same way hosting a local server did (it dispalyed the messages). I am not certain
	exactly why this works the way that it does, or why some browsers accept it and some do not.  


Part 3:

	Changing the source of the data to another website also failed to load the messages. This is 
	because of an error on the same function: reqest.send(), this time with this error message:

Cross-Origin Read Blocking (CORB) blocked cross-origin response https://messagehub.herokuapp.com/messages.json with MIME type application/js

	This failed with what amounts to a failure based on file permissions. The local server made with
	python is a different "origin" (host and source of the webpage) than the server hosting 
	herokuapp.com. For this reason, it would be a security flaw for my webpage to be able to
	read and alter data in communications between the client and another website, unless that
	website permits it (which is evidently does not). 
