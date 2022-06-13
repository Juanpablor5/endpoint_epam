const Delete = require("./delete");

test("Test delete execution", () => {
  const _delete = new Delete({ first: {} }, 'DELETE', ['first']);
  _delete.execute();
  const want = {}
  expect(_delete.fileTree).toStrictEqual(want);
});

test("Test delete child directory", () => {
  const _delete = new Delete({ first: { second: {} } }, 'DELETE', ['first/second']);
  _delete.execute();
  const want = {
    first: {}
  }
  expect(_delete.fileTree).toStrictEqual(want);
});

test("No arguments provided", () => {
  const _delete = new Delete({}, 'DELETE', []);
  const got = _delete.execute();
  expect(got).toEqual(new Error("not arguments"));
});

test("The directory does not exist", () => {
  const _delete = new Delete({ first: {} }, 'DELETE', ['first/second']);
  const got = _delete.execute();
  expect(got).toEqual(new Error("Cannot delete first/second - second does not exist"));
});