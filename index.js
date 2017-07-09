var bot = require('./config')
console.log('bot starting....')

//add id here of the people you want to retweet
var listOfId = ['755953153', '1094922224', '292116015', '19363044', '58601997', '599838934']

var stream = bot.stream('user');
stream.on('tweet', function(tweet){
  var userId = tweet.user.id + ''
  postRetweet(tweet.id_str, userId);
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



