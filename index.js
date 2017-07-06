var bot = require('./config')
console.log('bot starting....')

//add id here of the people you want to retweet
var listOfId = ['50323173', '755953153', '1407822289', '58601997', '538547125', '37013920']
var listOfId1 = ['51293016',
  '2955994561',
  '1477597945',
  '2824132646',
  '517006749',
  '2810096798',
  '36422731',
  '21923909',
  '30964262',
  '15521520',
  '30026404',
  '15583174',
  '256090039',
  '583068630',
  '16877448',
  '14868699',
  '16571541',
  '18708066',
  '17625560',
  '19308735',
  '70115381',
  '16310534',
  '18997715',
  '14206711',
  '36782022',
  '17086831',
  '16581734',
  '49061402',
  '18784113',
  '29730065',
  '20955168',
  '69983220',
  '18693575',
  '19202060',
  '19613544',
  '31207569',
  '874020825002905600',
  '218697713',
  '879621058424447000',
  '16050296',
  '124653526',
  '264857582',
  '15110718',
  '224244450',
  '325585086',
  '208897204',
  '551566221',
  '34362083',
  '462288310',
  '358507441',
  '238374108',
  '230777466',
  '168473211',
  '172007937',
  '212751075',
  '26971967',
  '22990521',
  '54548089',
  '54330182',
  '88724281',
  '18954206',
  '854512956',
  '2287854690',
  '479809444',
  '141598384',
  '40965341',
  '19212009',
  '19247844',
  '11277292',
  '28175824',
  '20225875',
  '44364694',
  '14791162',
  '24190981',
  '19192100',
  '30947351',
  '204817833',
  '14222518',
  '2296493942',
  '2982461789']
var stream = bot.stream('statuses/filter', {follow: listOfId1, language:'en'});

 stream.on('tweet', function(tweet){

  console.log('1')
    postRetweet(tweet.id_str);
    addFollower(tweet.user.screen_name);
 });
 
 //retweet posts from stream
 function postRetweet(tweetId){
  console.log('2')
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
  console.log('3')
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






