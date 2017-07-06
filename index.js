var bot = require('./config')


//add id here of the people you want to retweet
var stream = bot.stream('statuses/filter', {follow: 'fffff22', language:'en'});
console.log('bot starting here1')
  stream.on('tweet', function(tweet){
    console.log('bot starting here23')
    console.log(tweet.id_str)
    postRetweet(tweet.id_str);
    addFollower(tweet.user.screen_name);
 });
 
 //retweet posts from stream
 function postRetweet(tweetId){
  console.log('here2')
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






