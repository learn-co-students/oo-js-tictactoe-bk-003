function Game() {
	this.turn = 0
	this.createState()
}

Game.prototype.init = function (board) {
  // code here
  this.board = board
  this.turn = 0
  this.createState()
}

Game.prototype.checkCells = function(ary) {
  // code here
  var count = 0
  for(var i=0;i<3;i++){
  	ary[i] == this.player() ? count++ : '';
  }
  return count==3 ? 1 : 0
}

Game.prototype.checkWinner = function() {
  // code here
  var verdict = 0;
  for(n=0;n<8;n++) {
  	if (n % 3==0) {
  		verdict = verdict + this.checkCells(this.state.slice(n,n+2))
  	}
  	if (n < 3) {
  		verdict = verdict + this.checkCells([this.state[n],this.state[n+3],this.state[n+6]])
  	}
  	if(n == 0) {
  		verdict = verdict + this.checkCells([this.state[0], this.state[4], this.state[8]])
  		verdict = verdict + this.checkCells([this.state[2], this.state[4], this.state[6]])
  	}
  }
  if (verdict > 0) {
  	this.message('Player '+ this.player()+ ' Won!')
  }
  return verdict > 0
}

Game.prototype.player = function() {
  // code here
  return this.turn % 2 == 0 ? 'X' : 'O';
}

Game.prototype.doTurn = function(id){
  // code here
  this.updateState(id)
  this.checkWinner()
  this.turn++
}

Game.prototype.message = function (message) {
  // code here
  return message
}

Game.prototype.updateState = function(id) {
  // code here
  this.state[id] = this.player()
  this.board.updateCell(id, this.player())
}

Game.prototype.createState = function() {
  // code here
  var arr = []
  for(var i=0;i<9;i++) {
  	arr.push('')
  }
  this.state = arr
}