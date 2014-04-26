var commandList = require('./command-list');

module.exports = Commands;

function Commands (game, terminal) {
  this.game = game;
  this.terminal = terminal;
  this.methods = {};
  this.addMany(commandList);
}

Commands.prototype.add = function(command) {
  if (!this.methods[command.name]){
    this.methods[command.name] = command;
  }
};

Commands.prototype.addMany = function(commands) {
  var self = this;
  commands.forEach(function(command){
    self.add(command);
  });
};

Commands.prototype.exec = function(args) {
  var name = args[0];
  if (name == 'help') return 'this will eventually be a useful help statement';
  else if (this.methods[name]) return this.methods[name].fn(args);
  else return '`' + name + '` is not a recognized command. Please execute the `help` command for assistance.'
};