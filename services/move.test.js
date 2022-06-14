const Move = require("./move");

describe("move", () => {
  describe("execute", () => {
    describe("when arguments are provided", () => {
      it("should execute", () => {
        const fileTree = {
          first: {
            second: {},
            third: {}
          },
          fourth: {
            fifth: {}
          }
        }

        const move = new Move(fileTree, "MOVE", ["first/second", "first/third"]);
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
      it("should execute and move child directory", () => {
        const fileTree = {
          first: {
            second: {},
            third: {}
          },
          fourth: {
            fifth: {}
          }
        }

        const move = new Move(fileTree, "MOVE", ["first/second", "fourth/sixth"]);
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
    });
    describe("when no arguments are provided", () => {
      it("should return an error", () => {
        const fileTree = {
          first: {
            second: {},
            third: {}
          },
          fourth: {
            fifth: {}
          }
        }

        const move = new Move(fileTree, "MOVE", ["first"]);
        const got = move.execute();
        expect(got).toEqual(new Error("not arguments"));
      });
    });
    describe("when the directory do not exist", () => {
      it("should return an error", () => {
        const fileTree = {
          first: {
            second: {},
            third: {}
          },
          fourth: {
            fifth: {}
          }
        }

        const move = new Move(fileTree, "MOVE", ["first/fifth", "fourth/second"]);
        const got = move.execute();
        expect(got).toEqual(new Error("Cannot move first/fifth - fifth does not exist"));
      });
    });
  });
});