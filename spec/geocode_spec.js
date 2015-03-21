var geocode = require("../src/geocode");

describe("geocode", function() {
  xit("should call the cb with the geocoded address", function(done) {
    geocode("Australia", function(location) {
      expect(location).toEqual({
         "lat" : -25.274398,
         "lng" : 133.775136
      });

      done();
    });
  });
});
