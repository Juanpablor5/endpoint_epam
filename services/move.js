const Command = require('./command');
class Move extends Command {
  constructor(fileTree, type, args) {
    super(fileTree, type, args);
  }

  execute() {
    const origin = this.args[0];
    const destination = this.args[1];

    let key = null, data = null;

    if (origin && destination) {
      let pwd = this.fileTree;
      const path = origin.split('/');
      for (let i = 0; i < path.length; ++i) {
        const dir = path[i];
        if (pwd[dir]) {
          if (i < path.length - 1) pwd = pwd[dir];
          else {
            key = dir;
            data = pwd[dir];
            delete pwd[dir];
          }
        } else {
          console.log(`Cannot move ${origin} - ${dir} does not exist`);
          return;
        }
      }
    }

    if (destination && data) this.createNew(destination, data, key);
  }

  createNew(destination, data, key) {
    let pwd = this.fileTree;
    const path = destination.split('/');
    for (const dir of path) {
      if (!pwd[dir]) pwd[dir] = {};
      pwd = pwd[dir];
    }
    pwd[key] = data;
  }
}
module.exports = Move;