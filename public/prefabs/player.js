var Player = function(){};

Player.prototype.preload = function(){
  game.load.spritesheet('dude', 'assets/player.png', 24, 24);
};

Player.prototype.create = function(){
  player = game.add.sprite(24, game.world.height - 400, 'dude');
  game.physics.arcade.enable(player);
  player.body.bounce.y = 0.7;
  player.body.gravity.y = 500;
  player.body.collideWorldBounds = true;

  // player animations for walking
  player.animations.add('left', [71, 72,, 73, 74, 78], 10, true);
  player.animations.add('right', [89, 90,91,92,96], 10, true);
  cursors = game.input.keyboard.createCursorKeys();
};

Player.prototype.update = function(){
  game.physics.arcade.collide(player, platforms);

  player.body.velocity.x = 0;

  if(cursors.left.isDown){
    player.body.velocity.x = -150;
    player.animations.play('left');
  }else if(cursors.right.isDown){
    player.body.velocity.x = 150;
    player.animations.play('right');
  }else{
    player.animations.stop();
    // player facing forward when not moving
    player.frame = 15;
  }

  if(cursors.up.isDown && player.body.touching.down){
    player.body.velocity.y = -350;
  }

  game.physics.arcade.collide(platforms);
  // touch burger
  game.physics.arcade.overlap(player, burgers, burgerChange, null, this);

  function burgerChange(player, burger){
    // burger changes to hotdog

    burger.kill
  };

};
