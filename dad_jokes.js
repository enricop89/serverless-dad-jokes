const request = require('request-promise');
module.exports = function getJokes() {
    return new Promise((resolve, reject) => {   
        const options = {
            uri: 'https://icanhazdadjoke.com/',
            method: 'GET',
            json: true,
            headers: {
                'accept': 'application/json'
            }
        };
        request(options).then(function(response) {
                resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })

}