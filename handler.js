'use strict';

const dadJokes = require('./dad_jokes');
const TwitterIstance = require('./twitter_controller');

module.exports.dadjokes = async (event, context, callback) => {
    console.log("Begin request")
    const randomJoke = await dadJokes();
    console.log('randomJoke', randomJoke)
    new TwitterIstance().tweet(randomJoke.joke);
    const response = {
        statusCode: 200,
        body: randomJoke.joke
    };
    callback(null, response);
    
    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
