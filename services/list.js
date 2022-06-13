const Command = require('./command');
class List extends Command {
  constructor(fileTree, command) {
    super(fileTree, command);
  }

  execute() {
    const sortedTree = this.recursivelySort(this.fileTree);
    console.log(JSON.stringify(sortedTree, null, 2).replace(/[\{\}",:]/g, '').replace(/^\s*\n|^ {2}/gm, ''));
  }

  recursivelySort(obj) {
    obj = Object.keys(obj).sort().reduce(
      (sortedObj, key) => {
        sortedObj[key] = obj[key];
        return sortedObj;
      },
      {}
    );

    for (var k in obj) {
      if (typeof obj[k] == "object" && obj[k] !== null && Object.keys(obj[k]).length > 0) {
        obj[k] = this.recursivelySort(obj[k]);
      }
    }
    return obj;
  }
}
module.exports = List;