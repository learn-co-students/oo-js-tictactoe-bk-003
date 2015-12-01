function Board() {}

Board.prototype.init = function() {
  	this.buildBoard();
}

Board.prototype.buildBoard = function() {
	var html = this.createArray();
 	$('body').append(html.join(''));   
}

Board.prototype.createRowArray = function(size, element) {
  	var arr = new Array(size);
  	for (var i = 0; i < size; i++) {
  		arr[i] = element
  	};
  	return arr;
}

Board.prototype.createColumnArray = function(size, element) {
    var arr = new Array(size);
  	for (var i = 0; i < size; i++) {
  		arr[i] = element
  	};
  	return arr;
}

Board.prototype.createArray = function( ) {
    var html = this.createRowArray(3, '<tr>');
    for (var i = 0; i < html.length; i++) {
    	html[i] += this.createColumnArray(3, "<td></td>").join('') + "</tr>";
    };
    return html;
}

Board.prototype.addIds = function() {
  	var selector = "td"
  	var myElements = $(selector)
  	for (var i = 0; i < myElements.length; i++) {
  		myElements[i].setAttribute("id", i);
  	};
}

Board.prototype.updateCell = function(id, mark) {
 	var selector = "#" + id.toString()
	var myElement = $(selector)
	myElement.html(mark)
}

Board.prototype.addEvents = function(game) {
  // code here
  	 var selector = "td"
  	 var myElements = $(selector)
  	for (var i = 0; i < myElements.length; i++) {
  		var selector = "#" + i.toString()
		var myElement = $(selector)
		myElement.click(function(){

  	})
  	};
}