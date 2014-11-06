var Victory = function(){};

Victory.prototype.preload = function(){
  game.load.image('win', 'assets/win.jpeg');
  game.load.audio('credits', 'audio/credits.mp3');
  game.load.audio('win', 'audio/success.mp3');
};

Victory.prototype.create = function(){
  this.win = this.game.add.sprite(game.world.width / 2, game.world.height / 2, 'win');
  this.win.anchor.setTo(0.5, 0.5);
  this.win.scale.setTo(0.5, 0.5);
  this.dishes.scale.setTo(0.3, 0.3);
  this.title = game.add.text(game.world.width / 2, 30, 'You Won!', {fontsize: "90px", fill: "red"});
  this.title.anchor.setTo(0.5, 0.5);
  //this.score = game.add.text(game.world.width / 2, 80, 'Score:' + game.finalScore, {fontsize: "90px", fill: "red"});
  //this.score.anchor.setTo(0.5, 0.5);

  var gameOver = game.add.audio('credits');
  gameOver.volume = 0.4;
  gameOver.loop = true;
  gameOver.play();

  var win = game.add.audio('win');
  win.volume = 0.6;
  win.play();
};
