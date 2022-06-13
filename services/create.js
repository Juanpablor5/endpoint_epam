const Command = require("./command");
class Create extends Command {
  execute() {
    if (!this.args || this.args.length === 0) return new Error("not arguments");

    let pwd = this.fileTree;
    const path = this.args[0].split("/");
    for (const dir of path) {
      if (!pwd[dir]) pwd[dir] = {};
      pwd = pwd[dir];
    }
  }
}
module.exports = Create;
