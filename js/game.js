function Game() {}

Game.prototype.init = function (board) {
	this.board = board;
	this.turn = 0;
}

Game.prototype.checkCells = function(ary) {
  // code here
}

Game.prototype.checkWinner = function() {
	if (this.state) {
		
	}
}

Game.prototype.player = function() {
	if (this.turn % 2 == 0) {
		return "X";
	} else {
		return "O";
	}
}

Game.prototype.doTurn = function(id){
  this.updateState(id);
  this.checkWinner();
  this.turn += 1;
}

Game.prototype.message = function (message) {
  // code here
}

Game.prototype.updateState = function(id) {
	if (!this.state) {
		this.createState();
	}
	this.state[id] = this.player();
	this.board.updateCell(id, this.player());

}

Game.prototype.createState = function() {
  this.state = [,,,,,,,,,];
}