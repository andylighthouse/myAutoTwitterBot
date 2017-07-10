var bot = require('./config');

//look up twitter id
var inputId = process.argv[2];
bot.get('friendships/lookup', {screen_name: inputId}, function(err, data, response){
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
})
