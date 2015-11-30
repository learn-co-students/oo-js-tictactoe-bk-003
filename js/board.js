function Board() {}

Board.prototype.init = function() {
  // code here
  this.buildBoard()
}

Board.prototype.buildBoard = function() {
    // code here
    var html = this.createRowArray(3, '<tr>')
    html.forEach(function(elem, index){
    	html[index] = elem+this.createColumnArray(3, '<td></td>').join('')+'</tr>'
    }, this);
    $('body').append(html.join(''))
}

Board.prototype.createRowArray = function(size, element) {
  // code here
  var arr = []
  for (var i=0; i<size; i++) {
  	arr.push(element)
  }
  return arr;
}

Board.prototype.createColumnArray = function(size, element) {
  // code here
  return this.createRowArray(size, element);
}

Board.prototype.createArray = function(size, element) {
  // code here
}

Board.prototype.addIds = function() {
  // code here
  $('td').each(function(index, elem){
  	$(elem).attr('id', index)
  })
}

Board.prototype.updateCell = function(id, mark) {
  // code here
  $('#'+id).html(mark)
}

Board.prototype.addEvents = function(game) {
  // code here
  $('td').each(function(index, elem){
  	$('#'+index).click(function(){

  	})
  })
}