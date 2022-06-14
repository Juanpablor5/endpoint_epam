const List = require("./list");

describe("list", () => {
  describe("execute", () => {
    it("should execute", () => {
      const list = new List({ first: { second: {} } }, "LIST", null);
      list.execute();
      const want = {
        first: {
          second: {}
        }
      };
      expect(list.fileTree).toStrictEqual(want);
    });
  });
});
