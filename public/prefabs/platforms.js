var Platforms = function(){}


Platforms.prototype.preload = function(){
	game.load.image('platforms', 'assets/platform.png');
};



Platforms.prototype.create= function(){
	this.group = game.add.group();
	this.group.enableBody = true;

	this.group.create(0, 0, 'platforms', 0, true);

  console.log('Platforms created');
  //create player group

  //create platforms group


};

Platforms.prototype.update =function(){

};

Platforms.prototype.nextLevel = function(){
  game.state.start('level2');
};