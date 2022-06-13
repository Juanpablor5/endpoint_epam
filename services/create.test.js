const Create = require("./create");

test("Test create execution", () => {
  const create = new Create({}, 'CREATE', ['first']);
  create.execute();
  const want = {
    first: {}
  };
  expect(create.fileTree).toStrictEqual(want);
});

test("Test create child directory", () => {
  const create = new Create({ first: {} }, 'CREATE', ['first/second']);
  create.execute();
  const want = {
    first: {
      second: {}
    }
  };
  expect(create.fileTree).toStrictEqual(want);
});

test("No arguments provided", () => {
  const create = new Create({}, 'CREATE', []);
  const got = create.execute();
  expect(got).toEqual(new Error("not arguments"));
});