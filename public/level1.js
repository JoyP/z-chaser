// MENU STATE
var Level1 = function(){};

Level1.prototype.preload = function(){
	game.load.image('platforms', 'assets/platform.png');
};

var player;

Level1.prototype.create= function(){
  this.platforms = game.add.group();
  this.platforms.enableBody = true;
  
  this.platforms.create(0, 0, 'platforms', 0, true);

  this.platforms.create();
  //create player group

  //create platforms group

};

Level1.prototype.update =function(){

};

Level1.prototype.nextLevel = function(){
  game.state.start('level2');
};
