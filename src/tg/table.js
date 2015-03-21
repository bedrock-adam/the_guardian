var _ = require('underscore');

var country = function(row) {
  return row[0];
};

var isCountry = function(row) {
  return country(row) !== "";
};

var countries = function(table) {
  return _.filter(table, isCountry);
};

var gdp = function(row) {
  return row[1];
};

module.exports = {
  country: country,
  isCountry: isCountry,
  countries: countries,
  gdp: gdp
};
