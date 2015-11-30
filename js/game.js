function Game() {}

Game.prototype.init = function (board) {
  this.board = board;
  this.turn = 0;
  this.createState();
}

Game.prototype.checkCells = function(ary) {
  var winner = ""
  var winningArrays = [
    [this.state[0], this.state[1], this.state[2]],
    [this.state[3], this.state[4], this.state[5]],
    [this.state[6], this.state[7], this.state[8]],
    [this.state[0], this.state[3], this.state[6]],
    [this.state[1], this.state[4], this.state[7]],
    [this.state[2], this.state[5], this.state[8]],
    [this.state[0], this.state[4], this.state[8]],
    [this.state[2], this.state[4], this.state[6]]
    ];
    winningArrays.forEach(function(winCombo) {
      if (winCombo[0] == winCombo[1] && winCombo[1] == winCombo[2] && winCombo[0] == this.player()) {
        winner = winCombo[0];
      }
    },this);
    if (winner == this.player()) {
      return winner;
    }
}

Game.prototype.checkWinner = function() {
 if (this.checkCells(this.state) == this.player()) {
    this.message('Player ' + this.checkCells(this.state) + ' Won!');
  }
  else {
    return false;
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
  if (this.turn >= 9) {
    this.message("It's a tie!");
  }
}

Game.prototype.message = function (message) {
  $('p#message').empty().append(message);
  this.reset();
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
Game.prototype.reset = function() {
  $('td').empty();
  this.createState();
  this.turn = 0;
};