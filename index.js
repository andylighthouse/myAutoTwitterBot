var bot = require('./config')
console.log('bot starting....')

//add id here of the people you want to retweet
var listOfId = ['517377422', '16201775', '755953153', '1407822289', '58601997', '538547125', '37013920']

var stream = bot.stream('user');
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





