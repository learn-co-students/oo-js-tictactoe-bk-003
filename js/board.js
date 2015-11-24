function Board() {}

Board.prototype.init = function() {
	this.buildBoard();
}

Board.prototype.buildBoard = function() {
    $('body').append('<table border="1" cellpadding="40"><tr><td data-x="0" data-y="0"></td><td data-x="1" data-y="0"></td><td data-x="2" data-y="0"></td></tr><tr><td data-x="0" data-y="1"></td><td data-x="1" data-y="1"></td><td data-x="2" data-y="1"></td></tr><tr><td data-x="0" data-y="2"></td><td data-x="1" data-y="2"></td><td data-x="2" data-y="2"></td></tr></table><div id="message"></div>');
}

Board.prototype.createRowArray = function(size, element) {
  // code here
}

Board.prototype.createColumnArray = function(size, element) {
  // code here
}

Board.prototype.createArray = function(size, element) {
  // code here
}

Board.prototype.addIds = function() {
  $('td').each(function(index, thing) {
  	thing.id = index;
  });
}

Board.prototype.updateCell = function(id, mark) {
  $('#'+id).html(mark);
}

Board.prototype.addEvents = function(game) {
	$('td').click(function(event){
		game.doTurn(event.target.id);
	});
}