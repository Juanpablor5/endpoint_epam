const Command = require("./command");

describe("command class", () => {
  describe("initialize", () => {
    describe("when arguments are provided", () => {
      it("should assign all values", () => {
        const command = new Command({}, "ANY", ["first"]);
        expect(command.fileTree).toStrictEqual({});
        expect(command.type).toBe("ANY");
        expect(command.args).toStrictEqual(["first"]);
      });
      it("should initialize without args", () => {
        const command = new Command({ first: {} }, "ANY", null);
        expect(command.fileTree).toStrictEqual({
          first: {}
        });
        expect(command.type).toBe("ANY");
        expect(command.args).toBe(null);
      });
    });
  });
});
