const Command = require("./command");
class List extends Command {
  execute() {
    const sortedTree = this.recursivelySort(this.fileTree);
    console.log(JSON.stringify(sortedTree, null, 2).replace(/[{}",:]/g, "").replace(/^\s*\n|^ {2}/gm, ""));
  }

  // recursively sort the object's keys
  recursivelySort(obj) {
    const sorted = {};
    Object.keys(obj).sort().forEach(key => {
      if (typeof obj[key] === "object") {
        sorted[key] = this.recursivelySort(obj[key]);
      } else {
        sorted[key] = obj[key];
      }
    }
    );
    return sorted;
  }
}
module.exports = List;
