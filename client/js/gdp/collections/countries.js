(function(global) {
  "use strict";

  var CountryList = Backbone.Collection.extend({
    model: global.tg.gdp.Country,
    url: '/api/countries.json'
  });

  global.tg = global.tg || {};
  global.tg.gdp = global.tg.gdp || {};
  global.tg.gdp.CountryList = CountryList;
})(window);
