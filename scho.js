// var bot = require('./config')


// bot.get('friends/ids', {screen_name: 'little_lolos'}, function(err, data, response){
//   if(err){
//     console.log(err);
//   }else{
// console.log(data.ids[4])
var array= [51293016,
     2955994561,
     1477597945,
     2824132646,
     517006749,
     2810096798,
     36422731,
     21923909,
     30964262,
     15521520,
     30026404,
     15583174,
     256090039,
     583068630,
     16877448,
     14868699,
     16571541,
     18708066,
     17625560,
     19308735,
     70115381,
     16310534,
     18997715,
     14206711,
     36782022,
     17086831,
     16581734,
     49061402,
     18784113,
     29730065,
     20955168,
     69983220,
     18693575,
     19202060,
     19613544,
     31207569,
     874020825002905600,
     218697713,
     879621058424447000,
     16050296,
     124653526,
     264857582,
     15110718,
     224244450,
     325585086,
     208897204,
     551566221,
     34362083,
     462288310,
     358507441,
     238374108,
     230777466,
     168473211,
     172007937,
     212751075,
     26971967,
     22990521,
     54548089,
     54330182,
     88724281,
     18954206,
     854512956,
     2287854690,
     479809444,
     141598384,
     40965341,
     19212009,
     19247844,
     11277292,
     28175824,
     20225875,
     44364694,
     14791162,
     24190981,
     19192100,
     30947351,
     204817833,
     14222518,
     2296493942,
     2982461789 ]

    var copy = []

    for (var i = 0; i < array.length; i++ ){
      // console.log(array[i])
      copy.push( ''+array[i] +'')
    }
    
    console.log(copy)
//   }
// })