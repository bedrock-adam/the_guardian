(function(global) {
  "use strict";

  var Country = Backbone.Model.extend({});

  global.tg = global.tg || {};
  global.tg.gdp = global.tg.gdp || {};
  global.tg.gdp.Country = Country;
})(window);
