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
    });
  });
});
