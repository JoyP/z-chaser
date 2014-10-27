var game;

(function(){
  'use strict';
  game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

  game.state.add('menu', Play);
  game.state.start('menu');


})();
