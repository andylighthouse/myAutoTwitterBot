var Twit = require('twit');

var bot = new Twit({
  consumer_key: process.env.MYBOT_CONSUMER_KEY,
  consumer_secret: process.env.MYBOT_CONSUMER_SECRET,
  access_token: process.env.MYBOT_ACCESS_TOKEN,
  access_token_secret: process.env.MYBOT_ACCESS_TOKEN_SECRET,
  timeout_ms: 60000
});

var stream = bot.stream('statuses/filter', {track: 'trump', language:'en'});

stream.on('tweet', function(tweet){
  //console.log(tweet.text+'\n');
  //console.log(tweet.user.screen_name);

 //postRetweet(tweet.id_str);
  addFollower(tweet.user.screen_name);

});

function postRetweet(tweetId){
  bot.post('statuses/retweet/:id', {id: tweetId}, function(err, data, response){
    if(err){
      console.log(err)
    }else{
      console.log('Tweeted!')
    }
  })
}

//look up relationship, use to for others
function addFollower(screen_name){
  bot.get('friendships/lookup', {screen_name: screen_name}, function(err, data, response){
    if(err){
      console.log(err)
    }else{
      if (connections[0] === 'none'){
        console.log(here)
      }
    }
  })
}



// bot.get('search/tweets', {q: 'from:@wojespn', count: 10}, function(err, data, response){
//   if(err){
//     console.log(err);
//   }else{
//     data.statuses.forEach(function(s){
//       console.log(s.text);
//       console.log(s.user.screen_name);
//       console.log('\n');
//     });
//   }
// });

