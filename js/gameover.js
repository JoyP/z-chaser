var Gameover = function(){};

Gameover.prototype.preload = function(){
  game.load.image('dishes', 'assets/Dirty_dishes.jpg');
  game.load.audio('gameover', 'assets/audio/gameOver.mp3');
};

Gameover.prototype.create = function(){
  this.dishes = this.game.add.sprite(game.world.width / 2, game.world.height / 2, 'dishes');
  this.dishes.anchor.setTo(0.5, 0.5);
  this.dishes.scale.setTo(0.3, 0.3);
  this.title = game.add.text(game.world.width / 2, 30, 'Game over!', {fontsize: "90px", fill: "red"});
  this.title.anchor.setTo(0.5, 0.5);

  var gameOver = game.add.audio('gameover');
  gameOver.volume = 0.4;
  gameOver.play()
};

Gameover.prototype.update = function(){};
