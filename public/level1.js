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
  ledge = this.platforms.create(game.world.width / 2 -300, 150, 'platforms');
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
  game.time.events.add(Phaser.Timer.SECOND * 30, this.gameOver(), this); 

};

Level1.prototype.update =function(){
  game.physics.arcade.collide(this.enemies, this.platforms);
  game.physics.arcade.overlap(player.player, this.enemies, this.getBurger, null, this);
  player.update(this.platforms);
  this.checkHotDogBounds();
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
      var hamburger = this.enemies.create(i * 70, r + 100, 'hamburger');
      hamburger.width = 20;
      hamburger.height = 20;

      //  Let gravity do its thing
      hamburger.body.gravity.y = 300;
  }


}

Level1.prototype.hotDogTransform = function(enemy){

  var hotdog = this.enemies.create(enemy.x + 100, -20, 'hotdog');
  hotdog.body.velocity.x = (Math.random() * 300) - 150;
  hotdog.width = 20;
  hotdog.height = 20;
  hotdog.body.bounce.y = 0.7;
  hotdog.body.gravity.y = 250;
  hotdog.body.collideWorldBounds = true;

  //crazy hotdog bouncing
  hotDogJump(hotdog);
  //kill the burger
  enemy.kill();
}

Level1.prototype.getBurger = function(player, enemy){
  if(enemy.key === 'hamburger'){
    player.score += 10;
    scoreText.text = 'Score: ' + player.score;
    this.hotDogTransform(enemy);
  }else if(enemy.key === 'hotdog'){
    //clear the interval
    player.score += 40;
    scoreText.text = 'Score: ' + player.score;
    clearInterval(enemy.jumpTimer);
    enemy.kill();
  }

}

Level1.prototype.checkHotDogBounds = function(){
  this.enemies.forEachAlive(function(hotdog){
    if(hotdog.key === 'hotdog' && hotdog.position.x < 20){
      hotdog.body.velocity.x = 100;
    }
    if(hotdog.key === 'hotdog' && hotdog.body.velocity.x === 0){
      hotdog.body.velocity.x = Math.random() * -200;
    }
  }, this.enemies);
};


function hotDogJump(hotdog){
  hotdog.jumpTimer = setInterval(function(){
    hotdog.body.velocity.y = -200;
  }, 3000);
}

Level1.prototype.gameOver = function(){
  game.state.start('gameover');
};

Level1.prototype.render = function(){
  game.debug.text("Time Remaining: " + game.time.events.duration, 32, 32);
}
