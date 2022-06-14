const CommandFactory = require("./commandFactory");

describe("command class", () => {
  describe("initialize", () => {
    it("Test commandFactory for LIST", () => {
      const commandFactory = CommandFactory.create({ first: {} }, "LIST", null);
      expect(commandFactory.fileTree).toStrictEqual({ first: {} });
      expect(commandFactory.type).toBe("LIST");
      expect(commandFactory.args).toBe(undefined);
    });
    it("Test commandFactory for CREATE", () => {
      const commandFactory = CommandFactory.create({ first: {} }, "CREATE", ["first/second"]);
      expect(commandFactory.fileTree).toStrictEqual({ first: {} });
      expect(commandFactory.type).toBe("CREATE");
      expect(commandFactory.args).toStrictEqual(["first/second"]);
    });
    it("Test commandFactory for MOVE", () => {
      const commandFactory = CommandFactory.create({ first: {} }, "MOVE", ["first/second", "first/third"]);
      expect(commandFactory.fileTree).toStrictEqual({ first: {} });
      expect(commandFactory.type).toBe("MOVE");
      expect(commandFactory.args).toStrictEqual(["first/second", "first/third"]);
    });
    it("Test commandFactory for DELETE", () => {
      const commandFactory = CommandFactory.create({ first: { second: {} } }, "DELETE", ["first/second"]);
      expect(commandFactory.fileTree).toStrictEqual({ first: { second: {} } });
      expect(commandFactory.type).toBe("DELETE");
      expect(commandFactory.args).toStrictEqual(["first/second"]);
    });
    it("Test commandFactory for UNKNOWN", () => {
      const commandFactory = CommandFactory.create({ first: { second: {} } }, "UNKNOWN", ["first/second"]);
      expect(commandFactory).toBe(null);
    });
  });
});