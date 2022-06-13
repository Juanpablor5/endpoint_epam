const List = require("./services/list");
const Create = require("./services/create");
const Move = require("./services/move");
const Delete = require("./services/delete");
const DICTIONARY = require("./utils/commands");

class CommandFactory {
  create(fileTree, command, args) {
    switch (command) {
      case DICTIONARY.LIST:
        return new List(fileTree, command);
      case DICTIONARY.CREATE:
        return new Create(fileTree, command, args);
      case DICTIONARY.MOVE:
        return new Move(fileTree, command, args);
      case DICTIONARY.DELETE:
        return new Delete(fileTree, command, args);
      default:
        console.log("unknown command");
        return null;
    }
  }
}

module.exports = new CommandFactory();
