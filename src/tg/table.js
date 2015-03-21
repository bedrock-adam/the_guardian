var selectCountry = function(row) {
  return row[0];
};

var isCountry = function(row) {
  return selectCountry(row) !== "";
}

module.exports = {
  selectCountry: selectCountry,
  isCountry: isCountry
};
