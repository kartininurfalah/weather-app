const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .option({
    a: {
      demand : true,
      alias : 'address',
      describe : 'Address to fetch weather for',
      string : true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyALfWvVw3rZspKgRhd11AH0JFU3FD8Lt0Q`,
  json: true
}, (error, response, body) => {
  //console.log(JSON.stringify(response, undefined, 2));
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});