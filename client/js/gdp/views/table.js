(function(global) {
  "use strict";

  var TableView = Backbone.View.extend({
    tagName: "table",

    template: _.template($("#gdp-table-template").html()),

    render: function() {
      this.$el.html(this.template(this.collection.toJSON()));

      return this;
    }
  });

  global.tg = global.tg || {};
  global.tg.gdp = global.tg.gdp || {};
  global.tg.gdp.TableView = TableView;
})(window);
