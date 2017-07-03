var bot = require('./config')

var stream = bot.stream('statuses/filter', {follow: '16201775, 755953153, 1407822289', language:'en', filter_level: 'medium'});
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


// //search function
// bot.get('search/tweets', {q: 'from:TWITTER_HANDLE', count: 10}, function(err, data, response){
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

// //look up twitter id
// bot.get('friendships/lookup', {screen_name: 'SCREEN_NAME'}, function(err, data, response){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(data)
//   }
// })



