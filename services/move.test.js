const Move = require("./move");

test("Test move execution", () => {
  const fileTree = {
    first: {
      second: {},
      third: {}
    },
    fourth: {
      fifth: {}
    }
  }

  const move = new Move(fileTree, 'MOVE', ['first/second', 'first/third']);
  move.execute();
  const want = {
    first: {
      third: {
        second: {}
      }
    },
    fourth: {
      fifth: {}
    }
  }
  expect(move.fileTree).toStrictEqual(want);
});

test("No arguments provided", () => {
  const fileTree = {
    first: {
      second: {},
      third: {}
    },
    fourth: {
      fifth: {}
    }
  }

  const move = new Move(fileTree, 'MOVE', ['first']);
  const got = move.execute();
  expect(got).toEqual(new Error("not arguments"));
});

test("Move as a new child directory", () => {
  const fileTree = {
    first: {
      second: {},
      third: {}
    },
    fourth: {
      fifth: {}
    }
  }

  const move = new Move(fileTree, 'MOVE', ['first/second', 'fourth/sixth']);
  move.execute();
  const want = {
    first: {
      third: {}
    },
    fourth: {
      fifth: {},
      sixth: {
        second: {}
      }
    }
  }
  expect(move.fileTree).toStrictEqual(want);
});

test("The directory does not exist", () => {
  const fileTree = {
    first: {
      second: {},
      third: {}
    },
    fourth: {
      fifth: {}
    }
  }
  
  const move = new Move(fileTree, 'MOVE', ['first/fifth', 'fourth/second']);
  const got = move.execute();
  expect(got).toEqual(new Error("Cannot move first/fifth - fifth does not exist"));
});