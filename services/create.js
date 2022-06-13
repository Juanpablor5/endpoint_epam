const Command = require('./command');
class Create extends Command {
  constructor(fileTree, type, args) {
    super(fileTree, type, args);
  }

  execute() {
    if (!this.args || this.args.length === 0) return

    let pwd = this.fileTree;
    const path = this.args[0].split('/');
    for (const dir of path) {
      if (!pwd[dir]) pwd[dir] = {};
      pwd = pwd[dir];
    }
  }
}
module.exports = Create;