const fs = require("fs");
const CommandFactory = require("./commandFactory");

(() => {
  const instructions = String(fs.readFileSync("./data/input.txt")).split("\n");
  const fileTree = {};

  for (const instruction of instructions) {
    const command = instruction.split(" ")[0].toUpperCase();
    const args = instruction.split(" ").slice(1);
    CommandFactory.create(fileTree, command, args).execute();
  }
})();
