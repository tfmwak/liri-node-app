var keys = require("./keys.js");

var Twitter = require("twitter");

var spotify = require("node-spotify-api");

var getMyTweets = function(){
 
	var client = new Twitter(keys.twitterKeys);
 
	var params = {screen_name: 'franknumber3'};
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error) {
    	//console.log(tweets);
    	for (var i=0; i<tweets.length; i++){
    		console.log(tweets[i].created_at)
    		console.log(' ');
    		console.log(tweets[i].text);
   		 }
  	  }
  });
}

var getMeSpotify = function(songName){

var spotify = new spotify(keys.spotifyKeys);
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
  	   	var songs = data.tracks.items;
  	   	//console.log(data);
    	for (var i = 0; i<songs.length; i++) {
    		console.log(i);
    		console.log("artist(s): "+ songs[i].artists.map(getArtistNames));
    		console.log("song name: "+ songs[i].name);
    		console.log("preview song: "+ songs[i].preview_url);
    		console.log("album: "+ songs[i].album.name);
    		console.log("----------------------------");
    	}
	});
}

var pick = function(caseData, functionData) {
	switch(caseData){
		case "my-tweets":
		getMyTweets();
		break;
		case "spotify-this-song":
		getMeSpotify(functionData);
		default:
			console.log("Liri doesn't know that cuz.");
		}
	}

var runThis = function(argOne, argTwo) {
	pick(argOne,argTwo);
};
runThis(process.argv[2], process.argv[3]);