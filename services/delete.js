const Command = require("./command");
class Delete extends Command {
  execute() {
    if (!this.args || this.args.length === 0) return;

    let pwd = this.fileTree;
    const path = this.args[0].split("/");
    for (let i = 0; i < path.length; ++i) {
      const dir = path[i];
      if (pwd[dir]) {
        if (i < path.length - 1) pwd = pwd[dir];
        else {
          delete pwd[dir];
        }
      } else {
        console.log(`Cannot delete ${this.args[0]} - ${dir} does not exist`);
        return;
      }
    }
  }
}
module.exports = Delete;
