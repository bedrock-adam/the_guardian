var country = function(row) {
  return row[0];
};

var isCountry = function(row) {
  return country(row) !== "";
};

module.exports = {
  country: country,
  isCountry: isCountry
};
