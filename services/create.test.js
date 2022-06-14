const Create = require("./create");

describe("create", () => {
  describe("execute", () => {
    describe("when arguments are provided", () => {
      it("should execute", () => {
        const create = new Create({}, "CREATE", ["first"]);
        create.execute();
        expect(create.fileTree).toStrictEqual({ first: {} });
      });
      it("should execute and create child directory", () => {
        const create = new Create({ first: {} }, "CREATE", ["first/second"]);
        create.execute();
        expect(create.fileTree).toStrictEqual({
          first: {
            second: {}
          }
        });
      });
    });
    describe("when no arguments are provided", () => {
      it("should return an error", () => {
        const create = new Create({}, "CREATE", []);
        const got = create.execute();
        expect(got).toEqual(new Error("not arguments"));
      });
    });
  });
});
