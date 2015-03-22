module.exports = (function() {
  "use strict";

  var countryId = function(row) {
    return row[1] ? row[1].trim() : "";
  };

  var countryCode = function(row) {
    return row[0];
  };

  var isCountry = function(row) {
    return countryId(row).match(/^\d+$/) !== null;
  };

  var countries = function(csv) {
    return Array.prototype.filter.call(csv, isCountry);
  };

  var gdp = function(row) {
    return row[4].trim();
  };

  var countryName = function(row) {
    return row[3].trim();
  };

  var formatRow = function(row) {
    return {
      countryName: countryName(row),
      gdp: gdp(row)
    };
  }

  var formatCSV = function(csv) {
    return Array.prototype.map.call(countries(csv), formatRow);
  };

  var parse = function(raw, cb) {
    var babyparse = require('babyparse');

    var res = [];

    babyparse.parse(raw, {
      step: function(results, parser) {
        var row = results.data[0];

        if (isCountry(row)) {
          res.push(formatRow(row));
        }
      },
      complete: function(results, file) {
        cb(res);
      }
    });
  };

  return {
    countryId: countryId,
    countryCode: countryCode,
    isCountry: isCountry,
    countries: countries,
    gdp: gdp,
    countryName: countryName,
    formatRow: formatRow,
    formatCSV: formatCSV,
    parse: parse
  };
})();
