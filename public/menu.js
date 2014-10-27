var Menu = function(){};

function preload(){
	game.load.image('button', 'assets/start-button.png');
}

function create(){
	this.startButton = this.game.add.button(this.game.width/2, 300, 'button', this.startClick, this);
    this.startButton.anchor.setTo(0.5, 0.5);
}

function update(){}
