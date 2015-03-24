(function(global) {
  "use strict";

  var CountryList = Backbone.Collection.extend({
    model: global.tg.gdp.Country,
    url: '/api/countries_geocoded.json'
  });

  global.tg = global.tg || {};
  global.tg.gdp = global.tg.gdp || {};
  global.tg.gdp.CountryList = CountryList;
})(window);
