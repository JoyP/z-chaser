// MENU STATE
var Level1 = function(){};

var player = new Player();

Level1.prototype.preload = function(){
	game.load.image('platforms', 'assets/platform.png');
  game.load.image('hamburger', 'assets/hamburger.png');
  game.load.image('hotdog', 'assets/hotdog.png');
	game.load.image('background', 'assets/sky4.png');
  player.preload();
};

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
  
  //ledge3.scale.setTo(0.8, 1);
  //ledge.scale.setTo(0.5, 1);
  //ledge2.scale.setTo(0.4, 1;

  //create player
  player.create();

  //enemies
  this.placeEnemies();

  console.log(this.enemies);

};

Level1.prototype.update =function(){
  game.physics.arcade.collide(this.enemies, this.platforms);
  game.physics.arcade.overlap(player.player, this.enemies, this.getBurger, null, this);
  player.update(this.platforms);
};

Level1.prototype.nextLevel = function(){
  game.state.start('level2');
};

Level1.prototype.placeEnemies = function(){
  this.enemies = game.add.group();
  this.enemies.enableBody = true;


  //create 10 burgers
  for (var i = 0; i < 10; i++){
      var r = Math.floor(Math.random() * 599) + 1;
      //  Create a star inside of the 'stars' group
      var hamburger = this.enemies.create(i * 70, r + 40, 'hamburger');
      hamburger.width = 20;
      hamburger.height = 20;

      //  Let gravity do its thing
      hamburger.body.gravity.y = 300;
  }


}

Level1.prototype.hotDogTransform = function(enemy){
  //crazy hotdog bouncing
  enemy.body.velocity.x = Math.random() + 2;
  enemy.body.bounce.y = 0.5;
  enemy.body.gravity.y = 600;

}

Level1.prototype.getBurger = function(player, enemy){
  this.hotDogTransform(enemy);
  console.log('you got the burger');
}
