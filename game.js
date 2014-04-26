/*
* crtrdg.js modules
*/

var Game = require('gameloop-canvas');
var Mouse = require('crtrdg-mouse');
var Keyboard = require('crtrdg-keyboard');


/*
* custom modules
*/

var Log = require('./ui/log');
var Terminal = require('./ui/terminal');
var Commands = require('./commands');


/*
* create game object
*/

var game = new Game({
  canvas: 'game',
  width: window.innerWidth,
  height: window.innerHeight - 80
});


/*
* terminal
*/

var terminal = new Terminal();
var commands = new Commands(game, terminal);
var log = new Log('log');

terminal.on('command', function(args){
  log.add(commands.exec(args)); 
});

terminal.on('command:clear', function(args){
  log.clear();
});