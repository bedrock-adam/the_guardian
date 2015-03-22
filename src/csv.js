module.exports = (function() {
  "use strict";

  var countryId = function(row) {
    return row[1].trim();
  };

  var countryCode = function(row) {
    return row[0];
  };

  var isCountry = function(row) {
    return countryCode(row) !== "";
  };

  var countries = function(csv) {
    return Array.prototype.filter.call(csv, isCountry);
  };

  var gdp = function(row) {
    return row[4].trim();
  };

  var countryName = function(row) {
    return row[3];
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

  return {
    countryCode: countryCode,
    isCountry: isCountry,
    countries: countries,
    gdp: gdp,
    countryName: countryName,
    formatRow: formatRow,
    formatCSV: formatCSV
  };
})();
