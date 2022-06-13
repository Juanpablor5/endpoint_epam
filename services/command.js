class Command {
  constructor(fileTree, type, args) {
    this.fileTree = fileTree;
    this.type = type;
    this.args = args;
    console.log(this.type, this.args ? this.args.join(" ") : "");
  }
}
module.exports = Command;
