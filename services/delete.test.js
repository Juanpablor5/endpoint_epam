const Delete = require("./delete");

describe("delete", () => {
  describe("execute", () => {
    describe("when arguments are provided", () => {
      it("should execute", () => {
        const _delete = new Delete({ first: {} }, "DELETE", ["first"]);
        _delete.execute();
        const want = {}
        expect(_delete.fileTree).toStrictEqual(want);
      });
      it("should execute and delete child directory", () => {
        const _delete = new Delete({ first: { second: {} } }, "DELETE", ["first/second"]);
        _delete.execute();
        const want = {
          first: {}
        }
        expect(_delete.fileTree).toStrictEqual(want);
      });
    });
    describe("when no arguments are provided", () => {
      it("should return an error", () => {
        const _delete = new Delete({}, "DELETE", []);
        const got = _delete.execute();
        expect(got).toEqual(new Error("not arguments"));
      });
    });
    describe("when the directory do not exist", () => {
      it("should return an error", () => {
        const _delete = new Delete({ first: {} }, "DELETE", ["first/second"]);
        const got = _delete.execute();
        expect(got).toEqual(new Error("Cannot delete first/second - second does not exist"));
      });
    });
  });
});