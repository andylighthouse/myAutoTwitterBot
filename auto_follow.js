var bot = require('./config')

//do not run for too long, will get banned from Twittier for making to many calls to the api
var stream = bot.stream('user');
stream.on('tweet', function(tweet){
 addFollower(tweet.user.screen_name);
});


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