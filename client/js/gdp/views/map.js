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
    },
    renderOne: function(country) {
      var latlng = new google.maps.LatLng(country.lat, country.lng);
      this.bounds.push(latlng);

      this.map.addMarker({
        lat: country.lat,
        lng: country.lng,
        title: country.countryName,
        mouseover: function(e) {
          this.infoWindow.open(this.map, this);
        },
        infoWindow: {
          content: '<p>' + country.countryName + '</p>'
        }
      });
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
