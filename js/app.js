// you can ignore this file, but it gives you an example of how you might actually run this code in the browser
// if you run 'python -m SimpleHTTPServer' from the root directory it will load the tictactoe.html file.  that file has script tags which loads the required js in order
// those files draw the boards HTML and wire up the event listeners
var app = app || {};
var newGame = new Game();
var newBoard = new Board();
app.board = newBoard.init(newGame);
app.game = newGame.init(newBoard);