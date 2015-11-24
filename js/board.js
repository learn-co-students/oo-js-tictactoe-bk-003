function Board() {}

Board.prototype.init = function(game) {
  this.game = game;
  this.buildBoard();
  this.addIds();
  this.addEvents(this.game);
}

Board.prototype.buildBoard = function() {
  $('body').append('<table border="1" cellpadding="40"><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>');
}

Board.prototype.addIds = function() {
  var myElements = $('td');
  for (var i = 0; i < myElements.length; i++){
    $(myElements[i]).attr('id', i.toString() );
  }
}

Board.prototype.updateCell = function(id, mark) {
  var cellSelector = 'td#' + id.toString();
  $(cellSelector).append(mark);
}

Board.prototype.addEvents = function(game) {
  $('td').click({game}, function(event) {
    if (event.target.textContent == "") {
      event.data.game.doTurn(parseInt(event.target.id));
    }
  });
}