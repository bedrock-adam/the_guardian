describe("table", function() {
  var Table = require('../src/table');

  var tableData = [
    ["","Gross domestic product 2013","","","","","","","",""],
    ["","","","","","","","","",""],
    ["PHL","40","","Philippines"," 272,017 ","","","","",""],
    ["EGY","41","","Egypt, Arab Rep."," 271,973 ","","","","",""],
    ["",".. Not available.  ","","","","","","","",""]
  ];

  describe("row", function() {
    describe("countryCode", function() {
      it("should return the first element", function() {
        expect(Table.countryCode(tableData[0])).toBe("");
        expect(Table.countryCode(tableData[1])).toBe("");
        expect(Table.countryCode(tableData[2])).toBe("PHL");
        expect(Table.countryCode(tableData[3])).toBe("EGY");
        expect(Table.countryCode(tableData[4])).toBe("");
      });
    });

    describe("isCountry", function(row) {
      it("should return false when country(row) returns an empty string", function() {
        expect(Table.isCountry(tableData[0])).toBe(false);
        expect(Table.isCountry(tableData[1])).toBe(false);
        expect(Table.isCountry(tableData[4])).toBe(false);
      });

      it("should return true when country(row) does not return an empty string", function() {
        expect(Table.isCountry(tableData[2])).toBe(true);
        expect(Table.isCountry(tableData[3])).toBe(true);
      });
    });

    describe("countries", function() {
      it("should return the second element", function() {
        expect(Table.countries(tableData)).toEqual([
          ["PHL","40","","Philippines"," 272,017 ","","","","",""],
          ["EGY","41","","Egypt, Arab Rep."," 271,973 ","","","","",""]
        ]);
      });
    });

    describe("gdp", function() {
      it("should return the trimmed fifth element", function() {
        expect(Table.gdp(tableData[2])).toBe("272,017");
        expect(Table.gdp(tableData[3])).toBe("271,973");
      });
    });

    describe("countryName", function() {
      it("should return the forth element", function() {
        expect(Table.countryName(tableData[2])).toBe("Philippines");
        expect(Table.countryName(tableData[3])).toBe("Egypt, Arab Rep.");
      });
    });

    describe("format", function() {
      it("should output correct format", function() {
        expect(Table.format(tableData[2])).toEqual({
          countryName: "Philippines",
          gdp: "272,017"
        });
        expect(Table.format(tableData[3])).toEqual({
          countryName: "Egypt, Arab Rep.",
          gdp: "271,973"
        });
      });
    });

    describe("toJSON", function() {
      it("should output correct format", function() {
        expect(Table.toJSON(tableData)).toBe(JSON.stringify([
          { countryName: "Philippines", gdp: "272,017" },
          { countryName: "Egypt, Arab Rep.", gdp: "271,973" }
        ]));
      });
    });
  });
});
