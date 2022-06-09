const fs = require ('fs');
const DICTIONARY = require('./utils/commands');

let fileTree = {};

(() => {
  const instructions = String(fs.readFileSync('./data/input.txt')).split('\n');
  let flag = false;
  for (const instruction of instructions) {
    console.log(instruction);
    const command = instruction.split(' ')[0].toUpperCase();
    const args = instruction.split(' ').slice(1);

    switch (command) {
      case DICTIONARY.LIST:
        list(fileTree);
        break;
      case DICTIONARY.CREATE:
        create(fileTree, args);
        break;
      case DICTIONARY.MOVE:
        move(fileTree, args);
        break;
      case DICTIONARY.DELETE:
        _delete(fileTree, args);
        break;
      default:
        console.log('unkow command')
        flag = true
        break;
    }
    if (flag) break;
  }
})();

function list(fileTree) {
  console.log(JSON.stringify(fileTree, null, 2));
}

function create(fileTree, args, move = null) {
  if (!args || args.length === 0) return

  let pwd = fileTree;
  const path = args[0].split('/');
  for (const dir of path) {
    if (!pwd[dir]) pwd[dir] = {};
    pwd = pwd[dir];
  }
  if (move) pwd[move.key] = move.data;
}

function move(fileTree, args) {
  const origin = args[0];
  const destination = args[1];

  let key = null, data = null;

  if (origin && destination) {
    let pwd = fileTree;
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

  if (destination && data) {
    create(fileTree, [destination], { key, data });
  }
}

function _delete(fileTree, args) {
  if (!args || args.length === 0) return

  let pwd = fileTree;
  const path = args[0].split('/');
  for (let i = 0; i < path.length; ++i) {
    const dir = path[i];
    if (pwd[dir]) {
      if (i < path.length - 1) pwd = pwd[dir];
      else {
        delete pwd[dir];
      }
    } else {
      console.log(`Cannot delete ${args[0]} - ${dir} does not exist`);
      return;
    }
  }
}