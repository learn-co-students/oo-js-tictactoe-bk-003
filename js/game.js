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
  	this.state[ary[i]] == this.player() ? count++ : '';
  }
  return count==3 ? 1 : 0
}

Game.prototype.checkWinner = function() {
  // code here
  var won = 0;
  [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].forEach(function(ary){
  	won = won + this.checkCells(ary)
  }, this)
  return won > 0
}

Game.prototype.player = function() {
  // code here
  return this.turn % 2 == 0 ? 'X' : 'O';
}

Game.prototype.doTurn = function(id){
  // code here
  this.updateState(id)
  if (this.checkWinner()) {
  	this.message('Player '+ this.player()+ ' Won!')
  }
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