var bot = require('./config')
console.log('bot starting....')

//add id here of the people you want to retweet
var listOfId = ['755953153', '1094922224', '292116015', '19363044', '58601997', '599838934', '706915245575565300', '882804910755991553']

var stream = bot.stream('statuses/filter', {follow: listOfId, language:'en'});
  stream.on('tweet', function(tweet){
    var userId = tweet.user.id + ''
    postRetweet(tweet.id_str, userId);
    addFollower(tweet.user.screen_name);
  });

//retweet posts from stream
function postRetweet(tweetId, userId){
  if (listOfId.includes(userId)){
    bot.post('statuses/retweet/:id', {id: tweetId}, function(err, data, response){
      if(err){
        console.log(err);
      }else{
        console.log('Tweeted!');
      }
    });
  }
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




