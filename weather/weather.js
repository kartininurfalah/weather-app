const request = require('request');

var getWeather = (lat,long, callback) => {
    // url : `https://api.darksky.net/forecast/e1ec27f9d80f736c3e6f5469cd26102f/${lat},${long}`
    request({
      url:`https://api.darksky.net/forecast/e1ec27f9d80f736c3e6f5469cd26102f/${lat},${long}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        callback('Unable to connect the forecast server');
      } else if (response.statusCode === 400){
        callback('Unable to fetch the forecast server');
      } else if (response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        })
      }
  });
};

module.exports.getWeather = getWeather;