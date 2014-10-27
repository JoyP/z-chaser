var Player = function(){};

Player.prototype.preload = function(){
  game.load.spritesheet('dude', '../assets/player.png', 60, 60);
};

Player.prototype.create = function(){
  this.player = game.add.sprite(24, game.world.height - 150, 'dude');
  this.player.scale.setTo(2, 2);
  console.log('PLAYER>>>', this.player);
  game.physics.arcade.enable(this.player);
  this.player.body.bounce.y = 0.7;
  this.player.body.gravity.y = 500;
  this.player.body.collideWorldBounds = true;

  // this.player animations for walking
  this.player.animations.add('left', [71, 72,, 73, 74, 78], 10, true);
  this.player.animations.add('right', [89, 90,91,92,96], 10, true);
  cursors = game.input.keyboard.createCursorKeys();
};

Player.prototype.update = function(platform, burgers, hotdogs){
  game.physics.arcade.collide(this.player, platforms);

  this.player.body.velocity.x = 0;

  if(cursors.left.isDown){
    this.player.body.velocity.x = -150;
    this.player.animations.play('left');
  }else if(cursors.right.isDown){
    this.player.body.velocity.x = 150;
    this.player.animations.play('right');
  }else{
    this.player.animations.stop();
    // this.player facing forward when not moving
    this.player.frame = 15;
  }

  if(cursors.up.isDown && this.player.body.touching.down){
    this.player.body.velocity.y = -350;
  }

  game.physics.arcade.collide(platforms);
  // touch burger
  game.physics.arcade.overlap(this.player, burgers, burgerChange, null, this);

};
