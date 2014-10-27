// MENU STATE
var Menu = function(){};

Menu.prototype.preload = function(){

};

Menu.prototype.create= function(){
  this.title  = game.add.text(game.world.centerX, 40, 'Burger Town', { font: "30px Arial", fill: "red" });
  this.title.anchor.setTo(0.5, 0.5);
};

Menu.prototype.update =function(){

};

Menu.prototype.startGame = function(){
  game.state.start('level1');
};
