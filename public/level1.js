// MENU STATE
var Level1 = function(){};

Level1.prototype.preload = function(){
	platforms.preload();
};

var player;
var platforms = new Platforms();

Level1.prototype.create= function(){
  console.log('level1 created');

  platforms.create();
  //create player group

  //create platforms group


};

Level1.prototype.update =function(){

};

Level1.prototype.nextLevel = function(){
  game.state.start('level2');
};
