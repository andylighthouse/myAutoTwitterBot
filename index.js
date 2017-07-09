var bot = require('./config')
console.log('bot starting....')

//add id here of the people you want to retweet
var listOfId = []

var stream = bot.stream('user');
stream.on('tweet', function(tweet){
  var userId = tweet.user.id + ''
  postRetweet(tweet.id_str, userId);
});

//retweet posts from stream
function postRetweet(tweetId, userId){
  //
    bot.post('statuses/unretweet/:id', {id: tweetId}, function(err, data, response){
      if(err){
        console.log(err);
      }else{
        console.log('Tweeted!');
      }
    });
  //}
}






