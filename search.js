var bot = require('./config');

var inputId = process.argv[2];

//search function
bot.get('search/tweets', {q: 'from:' + inputId, count: 10}, function(err, data, response){
  if(err){
    console.log(err);
  }else{
    data.statuses.forEach(function(s){
      console.log(s.text);
      console.log(s.user.screen_name);
      console.log('\n');
    });
  }
});