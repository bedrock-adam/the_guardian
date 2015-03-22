describe("csv", function() {
  var CSV = require('../src/csv');

  var csvData = [
    ["","Gross domestic product 2013","","","","","","","",""],
    ["","","","","","","","","",""],
    ["PHL","40","","Philippines"," 272,017 ","","","","",""],
    ["EGY","41","","Egypt, Arab Rep."," 271,973 ","","","","",""],
    ["",".. Not available.  ","","","","","","","",""]
  ];

  describe("row", function() {
    describe("countryCode", function() {
      it("should return the first element", function() {
        expect(CSV.countryCode(csvData[0])).toBe("");
        expect(CSV.countryCode(csvData[1])).toBe("");
        expect(CSV.countryCode(csvData[2])).toBe("PHL");
        expect(CSV.countryCode(csvData[3])).toBe("EGY");
        expect(CSV.countryCode(csvData[4])).toBe("");
      });
    });

    describe("countryId", function() {
      it("should return the second element", function() {
        expect(CSV.countryId(csvData[0])).toBe("Gross domestic product 2013");
        expect(CSV.countryId(csvData[1])).toBe("");
        expect(CSV.countryId(csvData[2])).toBe("40");
        expect(CSV.countryId(csvData[3])).toBe("41");
        expect(CSV.countryId(csvData[4])).toBe(".. Not available.");
      });
    });

    describe("isCountry", function(row) {
      it("should return false when country(row) returns an empty string", function() {
        expect(CSV.isCountry(csvData[0])).toBe(false);
        expect(CSV.isCountry(csvData[1])).toBe(false);
        expect(CSV.isCountry(csvData[4])).toBe(false);
      });

      it("should return true when country(row) does not return an empty string", function() {
        expect(CSV.isCountry(csvData[2])).toBe(true);
        expect(CSV.isCountry(csvData[3])).toBe(true);
      });
    });

    describe("countries", function() {
      it("should return the second element", function() {
        expect(CSV.countries(csvData)).toEqual([
          ["PHL","40","","Philippines"," 272,017 ","","","","",""],
          ["EGY","41","","Egypt, Arab Rep."," 271,973 ","","","","",""]
        ]);
      });
    });

    describe("gdp", function() {
      it("should return the trimmed fifth element", function() {
        expect(CSV.gdp(csvData[2])).toBe("272,017");
        expect(CSV.gdp(csvData[3])).toBe("271,973");
      });
    });

    describe("countryName", function() {
      it("should return the forth element", function() {
        expect(CSV.countryName(csvData[2])).toBe("Philippines");
        expect(CSV.countryName(csvData[3])).toBe("Egypt, Arab Rep.");
      });
    });

    describe("formatRow", function() {
      it("should output correct format", function() {
        expect(CSV.formatRow(csvData[2])).toEqual({
          countryName: "Philippines",
          gdp: "272,017"
        });
        expect(CSV.formatRow(csvData[3])).toEqual({
          countryName: "Egypt, Arab Rep.",
          gdp: "271,973"
        });
      });
    });

    describe("formatCSV", function() {
      it("should output correct format", function() {
        expect(CSV.formatCSV(csvData)).toEqual([
          { countryName: "Philippines", gdp: "272,017" },
          { countryName: "Egypt, Arab Rep.", gdp: "271,973" }
        ]);
      });
    });
  });
});
