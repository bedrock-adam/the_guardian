var _ = require('underscore');

var countryCode = function(row) {
  return row[0];
};

var isCountry = function(row) {
  return countryCode(row) !== "";
};

var countries = function(table) {
  return _.filter(table, isCountry);
};

var gdp = function(row) {
  return row[4].trim();
};

var countryName = function(row) {
  return row[3];
};

module.exports = {
  countryCode: countryCode,
  isCountry: isCountry,
  countries: countries,
  gdp: gdp,
  countryName: countryName
};
