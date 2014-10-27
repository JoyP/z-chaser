// MENU STATE
var Level1 = function(){};

Level1.prototype.preload = function(){
	game.load.image('platforms', 'assets/platform.png');
  game.load.image('hamburger', 'assets/hamburger.jpg');
  game.load.image('hotdog', 'assets/hotdog.png');
};

var player;

Level1.prototype.create= function(){
  this.platforms = game.add.group();
  this.platforms.enableBody = true;
  

  var ground = this.platforms.create(0, game.world.height - 24, 'platforms');
  ground.scale.setTo(2, 2);
  ground.body.immovable = true;

  //create player group

  //enemies
  this.placeEnemies();


};

Level1.prototype.update =function(){
  game.physics.arcade.collide(this.enemies, this.platforms);
};

Level1.prototype.nextLevel = function(){
  game.state.start('level2');
};

Level1.prototype.placeEnemies = function(){
  this.enemies = game.add.group();
  this.enemies.enableBody = true;


  //create 8 burgers
  for (var i = 0; i < 8; i++){
      var r = Math.floor(Math.random() * 599) + 1;
      //  Create a star inside of the 'stars' group
      var hamburger = this.enemies.create(i * 70, r + 25, 'hamburger');

      //  Let gravity do its thing
      hamburger.body.gravity.y = 300;
  }

  console.log(this.enemies);

}

Level1.prototype.getBurger = function(){

}
