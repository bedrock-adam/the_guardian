describe("tg", function() {
  describe("table", function() {
    var tgTable = require('../../src/tg/table');

    var tableData = [
      ["","Gross domestic product 2013","","","","","","","",""],
      ["","","","","","","","","",""],
      ["PHL","40","","Philippines"," 272,017 ","","","","",""],
      ["EGY","41","","Egypt, Arab Rep."," 271,973 ","","","","",""],
      ["",".. Not available.  ","","","","","","","",""]
    ];

    describe("row", function() {
      describe("selectCountry", function() {
        it("should return the first element", function() {
          expect(tgTable.selectCountry(tableData[0])).toBe("");
          expect(tgTable.selectCountry(tableData[1])).toBe("");
          expect(tgTable.selectCountry(tableData[2])).toBe("PHL");
          expect(tgTable.selectCountry(tableData[3])).toBe("EGY");
          expect(tgTable.selectCountry(tableData[4])).toBe("");
        });
      });

      describe("isCountry", function(row) {
        it("should return false when selectCountry(row) returns an empty string", function() {
          expect(tgTable.isCountry(tableData[0])).toBe(false);
          expect(tgTable.isCountry(tableData[1])).toBe(false);
          expect(tgTable.isCountry(tableData[4])).toBe(false);
        });

        it("should return true when selectCountry(row) does not return an empty string", function() {
          expect(tgTable.isCountry(tableData[2])).toBe(true);
          expect(tgTable.isCountry(tableData[3])).toBe(true);
        });
      });
    });
  });
});
