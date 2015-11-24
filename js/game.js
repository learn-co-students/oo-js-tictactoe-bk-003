function Game() {
}

Game.prototype.init = function (board) {
	this.turn = 0;
	this.players = ["X","O"];
	this.createState();
	this.board = board;
}

Game.prototype.checkCells = function(ary) {
  // code here
}

Game.prototype.checkWinner = function() {
	/*
	0 1 2
	3 4 5
	6 7 8

	036 147 258 -- vertical
	012 345 678 -- horizontal
	048 642 -- diagonal
	*/

	var s = this.state;
	for(var i = 0; i < 9; i += 3) {
		if (s[i]==s[i+1] && s[i] == s[i+2] && s[i] != undefined) return true
	}
	for(var i = 0; i < 3; i++) {
		if (s[i]==s[i+3] && s[i] == s[i+6] && s[i] != undefined) return true
	}
	if (((s[0]==s[4] && s[0]==s[8]) || (s[4] == s[2] && s[4] == s[6])) && s[4] != undefined) {
		return true
	}
	return false;
}

Game.prototype.player = function() {
  return this.players[this.turn];
}

Game.prototype.doTurn = function(id){
	this.updateState(id);
	if (this.checkWinner()) {
		this.message("Player "+this.player()+" Won!")
	}
	this.turn = ++(this.turn) % 2;	
}

Game.prototype.message = function (message) {
  // code here
}

Game.prototype.updateState = function(id) {
  this.state[id] = this.player() ;
  this.board.updateCell(id, this.player());
}

Game.prototype.createState = function() {
  this.state = new Array(9);
}