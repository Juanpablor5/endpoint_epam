const List = require("./list");

test("Test list execution", () => {
  const list = new List({ first: { second: {} } }, 'LIST', null);
  list.execute();
  const want = {
    first: {
      second: {}
    }
  };
  expect(list.fileTree).toStrictEqual(want);
});