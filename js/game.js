function Game() {}

Game.prototype.init = function (board) {
  this.board = board;
  this.turn = 0;
  this.state = this.createState();
}

Game.prototype.checkCells = function(ary) {
  // code here
}

Game.prototype.checkWinner = function() {
 
	// horizontal
	for (var i = 0; i <= 6; i+=3) {
		if (this.state[i] != "" && this.state[i] == this.state[i+1] && this.state[i+1] == this.state[i+2]) {
			return true
		};
	};

	// vertical
	for (var i = 0; i <= 2; i++) {
		if (this.state[i] != "" && this.state[i] == this.state[i+3] && this.state[i+3] == this.state[i+6]) {
			return true
		};
	};

	// diagonal
	for (var i = 0; i <= 2; i+=2) {
		if ((i == 0 && this.state[i] != "" && this.state[i] == this.state[i+4] && this.state[i+4] == this.state[i+8]) 
			|| (i == 2 && this.state[i] != "" && this.state[i] == this.state[i+2] && this.state[i+2] == this.state[i+4])){
			return true
		};
	};

  	return false;
}

Game.prototype.player = function() {
  if (this.turn %2 == 0) {
  	return 'X';
  } else{
  	return 'O';
  }
}

Game.prototype.doTurn = function(id){
  this.updateState(id);
if (this.checkWinner()) {
		this.message("Player "+this.player()+" Won!")
	}
  this.turn++;
}

Game.prototype.message = function (message) {
  return message
}

Game.prototype.updateState = function(id) {
	this.state[id] = this.player();
	this.board.updateCell(id, this.player());
}

Game.prototype.createState = function() {
  this.state = new Array(9);
  for (var i = 0; i < this.state.length; i++) {
  		this.state[i] = ""
  	};
  return this.state;
}