(function(global) {
  "use strict";

  var MapView = Backbone.View.extend({
    render: function() {
      var map = new GMaps({
        el: this.el,
        lat: -25.274398,
        lng: 133.775136
      });

      var bounds = [];

      this.collection.toJSON().forEach(function(country) {
        var latlng = new google.maps.LatLng(country.lat, country.lng);
        bounds.push(latlng);

        map.addMarker({
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
      });

      map.fitLatLngBounds(bounds);
    }
  });

  global.tg = global.tg || {};
  global.tg.gdp = global.tg.gdp || {};
  global.tg.gdp.MapView = MapView;
})(window);
