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

  ledge = this.platforms.create(game.world.width / 2, 450, 'platforms');
  ledge.body.immovable = true;
  ledge = this.platforms.create(game.world.width / 2 -200, 100, 'platforms');
  ledge.body.immovable = true;
  ledge = this.platforms.create(game.world.width / 2, 250, 'platforms');
  ledge.body.immovable = true;
  ledge = this.platforms.create(-100, 350, 'platforms', 0, true);
  ledge.body.immovable = true;
  
  ledge3.scale.setTo(0.8, 1);
  ledge.scale.setTo(0.5, 1);
  ledge2.scale.setTo(0.4, 1);
    

  //this.platforms.create();
  //create player group

  //create platforms group


};

Level1.prototype.update =function(){

};

Level1.prototype.nextLevel = function(){
  game.state.start('level2');
};
