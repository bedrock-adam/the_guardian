var gulp = require('gulp');

gulp.task('parse', function(cb) {
  var fs = require('fs'),
      CSV = require('./src/csv');

  var raw = fs.readFileSync('data/GDP.csv', 'utf-8');

  CSV.parse(raw, function(output) {
    fs.writeFileSync('client/api/countries.json', JSON.stringify(output));
  });
});

gulp.task('geocode', function(done) {
  var fs = require('fs'),
      geocode = require('./src/geocode'),
      Q = require('q');

  Q.nfbind(fs.readFile)('client/api/countries.json', 'utf-8')
    .then(function(data) {
      var geocoded = [];

      return Array.prototype.reduce.call(JSON.parse(data), function(p, country) {
        return p
          .then(function() { return geocode(country.countryName); })
          .then(function(res) {
            geocoded.push({
              countryName: country.countryName,
              gdp: country.gdp,
              latitude: res.latitude,
              longitude: res.longitude
            });
          });
      }, Q()).then(function() {
        return geocoded;
      });
    })
    .then(function(geocoded) {
      Q.nfbind(fs.writeFile)('client/api/countries_geocoded.json', JSON.stringify(geocoded))
    })
    .then(done);
});
