


var video = document.getElementById("rickroll");
var lyrics = document.getElementById("lyrics");


video.addEventListener("timeupdate", function() {
	//temporary variables added for readability
	var time = video.currentTime;
	var newLyrics;

	if(time < 19){
		newLyrics = "<div></div>";
	}

	else if(time < 23){
		newLyrics = "<div>We're no strangers to love</div>";
	}

	else if(time < 26){
		newLyrics = "<div>You know the rules and so do I</div>";
	}

	else if(time < 31){
		newLyrics = "<div>A full commitment's what I'm thinking of</div>";
	}

	else if(time < 35){
		newLyrics = "<div>You wouldn't get this from any other guy</div>";
	}

	//end stanza 1, or whatever its called


	else if (time < 40){
		newLyrics = "<div>I just wanna tell you how I'm feeling</div>";
	}

	else if (time < 43){
		newLyrics = "<div>Gotta make you understand</div>";
	}
	
	else if (time < 45){
		newLyrics = "<div>Never gonna give you up</div>";
	}

	else if (time < 47){
		newLyrics = "<div>Never gonna let you down</div>";
	}

	else if (time < 51){
		newLyrics = "<div>Never gonna run around and desert you</div>";
	}

	else if (time < 53){
		newLyrics = "<div>Never gonna make you cry</div>";
	}

	else if (time < 55){
		newLyrics = "<div>Never gonna say goodbye</div>";
	}

	else if (time < 60){
		newLyrics = "<div>Never gonna tell a lie and hurt you</div>";
	}

	//end first chorus

	else if (time < 65){
		newLyrics = "<div>We've known each other for so long</div>";
	}

	else if (time < 67){
		newLyrics = "<div>Your heart's been aching, but</div>";
	}

	else if (time < 69){
		newLyrics = "<div>You're too shy to say it</div>";
	}

	else if (time < 72){
		newLyrics = "<div>Inside, we both know what's been going on</div>";
	}

	else if (time < 77){
		newLyrics = "<div>We know the game and we're gonna play it</div>";
	}

	else if (time < 82){
		newLyrics = "<div>And if you ask me how I'm feeling</div>";
	}

	else if (time < 85){
		newLyrics = "<div>Don't tell me you're too blind to see</div>";
	}

	//end stanza 2

	else if (time < 87){
		newLyrics = "<div>Never gonna give you up</div>";
	}

	else if (time < 89){
		newLyrics = "<div>Never gonna let you down</div>";
	}

	else if (time < 94){
		newLyrics = "<div>Never gonna run around and desert you</div>";
	}

	else if (time < 96){
		newLyrics = "<div>Never gonna make you cry</div>";
	}

	else if (time < 99){
		newLyrics = "<div>Never gonna say goodbye</div>";
	}

	else if (time < 101){
		newLyrics = "<div>Never gonna tell a lie and hurt you</div>";
	}

	//end chorus

	else if (time < 104){
		newLyrics = "<div>Never gonna give you up</div>";
	}

	else if (time < 106){
		newLyrics = "<div>Never gonna let you down</div>";
	}

	else if (time < 110){
		newLyrics = "<div>Never gonna run around and desert you</div>";
	}

	else if (time < 112){
		newLyrics = "<div>Never gonna make you cry</div>";
	}

	else if (time < 115){
		newLyrics = "<div>Never gonna say goodbye</div>";
	}

	else if (time < 120){
		newLyrics = "<div>Never gonna tell a lie and hurt you</div>";
	}

	//end chorus

	else if (time < 127){
		newLyrics = "<div>Ooh, give you up</div>";
	}

	else if (time < 130){
		newLyrics = "<div>Never gonna give, never gonna give</div>";
	}

	else if (time < 132){
		newLyrics = "<div>Give you up</div>";
	}

	else if (time < 134){
		newLyrics = "<div>Never gonna give, never gonna give</div>";
	}

	else if (time < 136){
		newLyrics = "<div>Give you up</div>";
	}

	//end stanza 3

	else if (time < 140){
		newLyrics = "<div>We've known each other for so long</div>";
	}

	else if (time < 142){
		newLyrics = "<div>Your heart's been aching, but</div>";
	}

	else if (time < 145){
		newLyrics = "<div>You're too shy to say it</div>";
	}

	else if (time < 149){
		newLyrics = "<div>Inside, we both know what's been going on</div>";
	}

	else if (time < 153){
		newLyrics = "<div>We know the game and we're gonna play it</div>";
	}

	else if (time < 158){
		newLyrics = "<div>I just wanna tell you how I'm feeling</div>";
	}

	else if (time < 161){
		newLyrics = "<div>Gotta make you understand</div>";
	}

	//end stanza 4

	else if (time < 163){
		newLyrics = "<div>Never gonna give you up</div>";
	}

	else if (time < 165){
		newLyrics = "<div>Never gonna let you down</div>";
	}

	else if (time < 169){
		newLyrics = "<div>Never gonna run around and desert you</div>";
	}

	else if (time < 171){
		newLyrics = "<div>Never gonna make you cry</div>";
	}

	else if (time < 174){
		newLyrics = "<div>Never gonna say goodbye</div>";
	}

	else if (time < 178){
		newLyrics = "<div>Never gonna tell a lie and hurt you</div>";
	}

	//end chorus

	else if (time < 180){
		newLyrics = "<div>Never gonna give you up</div>";
	}

	else if (time < 182){
		newLyrics = "<div>Never gonna let you down</div>";
	}

	else if (time < 186){
		newLyrics = "<div>Never gonna run around and desert you</div>";
	}

	else if (time < 188){
		newLyrics = "<div>Never gonna make you cry</div>";
	}

	else if (time < 191){
		newLyrics = "<div>Never gonna say goodbye</div>";
	}

	else if (time < 195){
		newLyrics = "<div>Never gonna tell a lie and hurt you</div>";
	}

	//end chorus

	else if (time < 197){
		newLyrics = "<div>Never gonna give you up</div>";
	}

	else if (time < 199){
		newLyrics = "<div>Never gonna let you down</div>";
	}

	else if (time < 203){
		newLyrics = "<div>Never gonna run around and desert you</div>";
	}

	else if (time < 205){
		newLyrics = "<div>Never gonna make you cry</div>";
	}

	else if (time < 207){
		newLyrics = "<div>Never gonna say goodbye</div>";
	}

	else {
		newLyrics = "<div>Never gonna tell a lie and hurt you</div>";
	}

	//end song

	//update the lyrics in the html
	lyrics.innerHTML = newLyrics;

}, false);
