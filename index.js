var bot = require('./config')
console.log('bot starting....')

//add id here of the people you want to retweet
var stream = bot.stream('statuses/filter', {follow: '51293016,2955994561,1477597945, 2824132646, 517006749, 2810096798, 36422731,21923909,'
+ '30964262,15521520,30026404,15583174,256090039,583068630,16877448,14868699,16571541,18708066,17625560,19308735,70115381,16310534,18997715,'
+ '14206711,36782022, 17086831, 16581734, 49061402, 18784113,29730065,', language:'en'});
  stream.on('tweet', function(tweet){
    postRetweet(tweet.id_str);
    addFollower(tweet.user.screen_name);
 });
 
 //retweet posts from stream
 function postRetweet(tweetId){
   bot.post('statuses/retweet/:id', {id: tweetId}, function(err, data, response){
     if(err){
       console.log(err);
     }else{
       console.log('Tweeted!');
     }
   });
 }
 
 //look up relationship for a user, then follower that user if not followed already
 function addFollower(screen_name){
   bot.get('friendships/lookup', {screen_name: screen_name}, function(err, data, response){
     if(err){
       console.log(err);
     }else{
       if(data[0].connections[0] === 'none'){
         bot.post('friendships/create', {screen_name: screen_name}, function(err, data, response){
           if(err){
             console.log(err);
           }else{
             console.log('Followed!');
           }
         });
       }
     }
   });
  }






