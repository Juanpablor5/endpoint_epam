const Command = require("./command");

test("Test command class", () => {
  const command = new Command({}, 'ANY', ['first']);
  expect(command.fileTree).toStrictEqual({});
  expect(command.type).toBe('ANY');
  expect(command.args).toStrictEqual(['first']);
});

test("Test command initiation with not args provided", () => {
  const command = new Command({first: {}}, 'ANY', null);
  const want = {
    first: {}
  }
  expect(command.fileTree).toStrictEqual(want);
  expect(command.type).toBe('ANY');
  expect(command.args).toBe(null);
});