Caleb Dixon


I used example code from the google maps API geolocation page:
https://developers.google.com/maps/documentation/javascript/examples/map-geolocation

and the following stack overflow threads:
https://stackoverflow.com/questions/247483/http-get-request-in-javascript
for information on how to use a get request.

and
https://stackoverflow.com/questions/1875596/have-just-one-infowindow-open-in-google-maps-api-v3
which was very helpful in how I could restructure my buggy code that only ever showed 
the schedule for the last station an event listener was made for. 

I also referenced piazza posts and the week 4 readings. 



Every aspect of this project was completed sucessfully. There is one known bug
where one station (Wollestein, I belive) does not recive any data from the API
following a GET request. An empty schedule is shown for this station in the 
program. I belive this is an issue with the API, not my code. Simmilarly, a 
few stations show null for departures. Specifically this effects the trains
at the ends of the lines (ashmont, braintree, alewife). I belive this
too to be an issue with the API. I also completed one extra credit option,
where clicking on the your location icon shows your distance from
each train station, sorted. 

I spent about 5 hours on this project, about 2 of which were spent
debugging issues with the inal part due to train schedules not
working properly. I spent a 6th hour on the extra credit.



