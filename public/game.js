var game;

(function(){
  'use strict';

  //width, height, type of medium to use, what element to attach canvas to, function that will be used
  game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

  //--GAME STATES
  //Game states are added to the Game Object. When a game
  //is made, State().start will be the default starting state
  game.state.add('menu', Menu);
  game.state.add('level1', Level1);
  game.state.add('gameover', Gameover);
  game.state.start('menu');

})();
