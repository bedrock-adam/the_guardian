(function(global) {
  "use strict";

  var TableView = Backbone.View.extend({
    tagName: "table",

    template: _.template($("#gdp-table-template").html()),

    initialize: function() {
      this.listenTo(this.collection, 'change', this.render);
    },

    render: function() {
      this.$el.html(this.template({
        collection: this.collection.toJSON()
      }));

      return this;
    }
  });

  global.tg = global.tg || {};
  global.tg.gdp = global.tg.gdp || {};
  global.tg.gdp.TableView = TableView;
})(window);
