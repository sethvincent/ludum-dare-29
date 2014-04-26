module.exports = Log;

function Log(id){
  this.el = document.getElementById(id);
}

Log.prototype.add = function(message){
  var self = this;
  this.el.style.display = 'block';
  var item = document.createElement('li');
  item.innerHTML = message;
  this.el.appendChild(item);
  this.el.scrollTop = this.el.scrollHeight;
};

Log.prototype.clear = function(){
  this.el.innerHTML = '';
};