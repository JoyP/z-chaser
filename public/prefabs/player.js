var Player = function(){};

Player.prototype.preload = function(){
  game.load.spritesheet('dude', '../assets/chef.png', 32, 32);
};

var cursors;

Player.prototype.create = function(){
  this.player = game.add.sprite(24, game.world.height - 150, 'dude');
  this.player.height = 40; 
  this.player.width = 40; 
  game.physics.arcade.enable(this.player);
  this.player.body.bounce.y = 0.2;
  this.player.body.gravity.y = 600;
  this.player.body.collideWorldBounds = true;

  // this.player animations for walking
  this.player.animations.add('right', [24, 25, 26, 27, 28, 29], 20, true);
  this.player.animations.add('left', [18, 19, 20, 21, 22, 23], 20, true);
  cursors = game.input.keyboard.createCursorKeys();
};

Player.prototype.update = function(platforms){
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
    this.player.frame = 3;
  }

  if(cursors.up.isDown && this.player.body.touching.down){
    this.player.body.velocity.y = -420;
  }

  game.physics.arcade.collide(platforms);
  // touch burger
  //game.physics.arcade.overlap(this.player, burgers, burgerChange, null, this);

};
