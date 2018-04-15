const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyALfWvVw3rZspKgRhd11AH0JFU3FD8Lt0Q',
  json: true
}, (error, response, body) => {
  console.log(body);
});