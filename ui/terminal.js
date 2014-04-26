var EventEmitter = require('events').EventEmitter;
var inherits = require('inherits');

module.exports = Terminal;

function Terminal(el){
  EventEmitter.call(this);
  var el = el || 'terminal';
  this.el = document.getElementById(el);
  this.input = this.el.querySelector('input');
  this.addListeners();
}

inherits(Terminal, EventEmitter);

Terminal.prototype.addListeners = function(){
  var self = this;

  this.el.addEventListener('submit', function(e){
    e.preventDefault();
    var args = self.input.value.split(' ');
    self.input.value = '';
    self.emit('command', args);
    self.emit('command:' + args[0]);
  });
};