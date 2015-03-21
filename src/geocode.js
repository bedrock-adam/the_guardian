var geocoder = require('geocoder');

module.exports = function(address, cb) {
  geocoder.geocode(address, function(err, data) {
    return cb(data.results[0].geometry.location);
  });
}
