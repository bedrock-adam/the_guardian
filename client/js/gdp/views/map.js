(function(global) {
  "use strict";

  var MapView = Backbone.View.extend({
    template: _.template($("#gdp-map-template").html()),

    render: function() {
      this.$el.html(this.template(this.collection.toJSON()));

      return this;
    }
  });

  global.tg = global.tg || {};
  global.tg.gdp = global.tg.gdp || {};
  global.tg.gdp.MapView = MapView;
})(window);
