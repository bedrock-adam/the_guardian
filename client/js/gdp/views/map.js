(function(global) {
  "use strict";

  var MapView = Backbone.View.extend({
    initialize: function() {
      this.bounds = [];

      this.map = new GMaps({
        el: this.el,
        lat: 0,
        lng: 0
      });

      this.listenTo(this.collection, 'change', this.render);
    },
    renderOne: function(country) {
      if (country.latitude && country.longitude) {
        var latlng = new google.maps.LatLng(country.latitude, country.longitude);
        this.bounds.push(latlng);

        this.map.addMarker({
          lat: country.latitude,
          lng: country.longitude,
          title: country.countryName,
          mouseover: function(e) {
            this.infoWindow.open(this.map, this);
          },
          mouseout: function(e) {
            this.infoWindow.open(this.map, this);
          },
          infoWindow: {
            content: '<p>' + country.countryName + '</p>'
          }
        });
      }
    },
    render: function() {
      Array.prototype.forEach.call(this.collection.toJSON(), this.renderOne, this);

      this.map.fitLatLngBounds(this.bounds);
    }
  });

  global.tg = global.tg || {};
  global.tg.gdp = global.tg.gdp || {};
  global.tg.gdp.MapView = MapView;
})(window);
