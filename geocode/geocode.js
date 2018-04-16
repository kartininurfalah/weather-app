const request = require('request');

var geocodeAddress = (address, callback) => {

  var encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyALfWvVw3rZspKgRhd11AH0JFU3FD8Lt0Q`,
    json: true
  }, (error, response, body) => {
    //console.log(JSON.stringify(response, undefined, 2));
    if (error) {
      callback('Unable to connect to server.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address.');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    } else {
      console.log('Unable to access this api')
    }
  })
};

module.exports.geocodeAddress = geocodeAddress;