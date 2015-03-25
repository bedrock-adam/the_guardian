var gulp = require('gulp');

gulp.task('parse', function() {
  var fs = require('fs'),
      through2 = require('through2'),
      filter = require('through2-filter'),
      map = require('through2-map'),
      reduce = require('through2-reduce')
      csv2 = require('csv2'),
      tg = require('./src/csv'),
      gulp = require('gulp'),
      rename = require('gulp-rename');

    var skip = filter.obj(function(chunk) {
      return tg.isCountry(chunk);
    });

    var parse = map.obj(function(chunk) {
      return tg.formatRow(chunk);
    });

    var merge = reduce({objectMode: true}, function(memo, curr) {
      memo.push(curr);

      return memo;
    }, []);

    var jsonify = map.obj(function(data) {
      return JSON.stringify(data);
    });

    fs.createReadStream('data/GDP.csv', 'utf-8')
      .pipe(csv2())
      .pipe(skip)
      .pipe(parse)
      .pipe(merge)
      .pipe(jsonify)
      .pipe(fs.createWriteStream('client/api/countries.json'));
})

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
