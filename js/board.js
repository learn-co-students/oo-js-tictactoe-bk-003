function Board() {}

Board.prototype.init = function() {
	this.buildBoard();
}

Board.prototype.buildBoard = function() {
    this.createRowArray(9,'td').forEach(function(el){
    	$("body").append(document.createElement(el));
    });
}

Board.prototype.createRowArray = function(size, element) {
  var list = [];
  while (size--) {
  	list.push(element);
  	// document.createElement(element)
  }
  return list;
}

Board.prototype.createColumnArray = function(size, element) {
	return this.createRowArray(size,element);
}

Board.prototype.createArray = function(size, element) {
  // code here
}

Board.prototype.addIds = function() {
  $('td').each(function(a,b){
  	$(this).attr('id',a);
  });
}

Board.prototype.updateCell = function(id, mark) {
  $('td#'+id).text(mark);
}

Board.prototype.addEvents = function(game) {
  $('td').click(function(){});
}