// MENU STATE
var Menu = function(){};

Menu.prototype.preload = function(){
  game.load.image('background', 'assets/burger-hotdog.jpg');
  game.load.image('button', 'assets/start-button.png');
};

Menu.prototype.create= function(){
  this.background = this.game.add.sprite(game.world.centerX, game.world.centerY, 'background');
  this.background.anchor.setTo(0.5, 0.5);
  this.title  = game.add.text(game.world.centerX, 40, 'Burger Town', { font: "30px Arial", fill: "red" });
  this.title.anchor.setTo(0.5, 0.5);
  this.startButton = this.game.add.button(this.game.width/2, 300, 'button', this.startGame, this);
  this.startButton.anchor.setTo(0.5, 0.5);
};

Menu.prototype.update =function(){
};

Menu.prototype.startGame = function(){
  game.state.start('level1');
};
