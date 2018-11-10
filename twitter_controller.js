'use strict';

var Twitter = require('twitter');
var config = require('./config');

var TwitterClient = new Twitter(config);

module.exports = class TwitterController {
    constructor() { }
    
    tweet(status){
        return TwitterClient.post('statuses/update', {status},  function(error, tweet, response) {
            if(error){ 
                throw error;}
                console.log(tweet);  // Tweet body.
            });
        }
        
        
    }