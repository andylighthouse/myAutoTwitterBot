var Twit = require('twit');

var bot = new Twit({
consumer_key: process.env.LOLOSBOT_CONSUMER_KEY,
consumer_secret: process.env.LOLOSBOT_CONSUMER_SECRET,
access_token: process.env.LOLOSBOT_ACCESS_TOKEN,
access_token_secret: process.env.LOLOSBOT_ACCESS_TOKEN_SECRET,
timeout_ms: 60000
}) 

module.exports = bot
//MYBOT
