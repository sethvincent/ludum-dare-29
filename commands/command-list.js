module.exports = [
  {
    name: 'clear',
    help: 'empties the screen.',
    example: 'clear',
    fn: function(args){
      return '';
    }
  },
  {
    name: 'move',
    help: 'allows you to move through the tunnels',
    example: 'move forward',
    fn: function(args){
      if (args[1] == undefined) return 'You did not move';
      else return 'You moved ' + args[1];
    }
  },
  {
    name: 'location',
    help: 'find out your location',
    example: 'location',
    fn: function(args){
      return 'You are someplace that exists, believe me';
    }
  }
];