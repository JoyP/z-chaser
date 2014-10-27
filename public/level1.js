// MENU STATE
var Level1 = function(){};

Level1.prototype.preload = function(){
	game.load.image('platforms', 'assets/platform.png');
	game.load.image('background', 'assets/sky4.png');

};

var player;

Level1.prototype.create= function(){
  game.add.sprite(0, 0, 'background');
  this.platforms = game.add.group();
  this.platforms.enableBody = true;

  var ground = this.platforms.create(0, game.world.height - 24, 'platforms');
  var ledge  = this.platforms.create();
  ground.body.immovable = true;
  ground.scale.setTo(2, 2);

  ledge = this.platforms.create(game.world.width / 2, 300, 'platforms');

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
