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

var formatRow = function(row) {
  return {
    countryName: countryName(row),
    gdp: gdp(row)
  };
}

var formatTable = function(table) {
  return _.map(countries(table), formatRow);
};

module.exports = {
  countryCode: countryCode,
  isCountry: isCountry,
  countries: countries,
  gdp: gdp,
  countryName: countryName,
  formatRow: formatRow,
  formatTable: formatTable
};
