module.exports = function(address) {
  var geocoder = require('geocoder');

  return new Promise(function(resolve, reject) {
    geocoder.geocode(address, function(err, data) {
      if (err) {
        reject(Error(err));
      } else {
        if (data.results.length > 0) {
          var location = data.results[0].geometry.location;

          return resolve({
            latitude: location.lat,
            longitude: location.lng
          });
        } else {
          return resolve({
            latitude: null,
            longitude: null
          });
        }
      }
    }, { key: process.env.key });
  });
}
