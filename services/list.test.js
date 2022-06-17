const List = require("./list");

describe("list", () => {
  describe("execute", () => {
    it("should execute", () => {
      const list = new List({ first: { second: {} } }, "LIST", null);
      list.execute();
      expect(list.fileTree).toStrictEqual({
        first: {
          second: {}
        }
      });
    });
    it("should execute with different key", () => {
      const list = new List({ key: "s" }, "LIST", null);
      list.execute();
      expect(list.fileTree).toStrictEqual({ key: "s" });
    });
  });
});
