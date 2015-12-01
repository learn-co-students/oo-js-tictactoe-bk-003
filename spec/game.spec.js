'use strict';
describe('game', function() {
  var board;
  var game;
  beforeEach(function() {
    board = new Board();
    game = new Game();
  });

  describe( "#doTurn", function() {
    it("should increment the turn variable, update the board and check for winner", function() {
      spyOn(game, "checkWinner");
      spyOn(game, "updateState");
      game.init();
      game.doTurn();
      expect(game.turn).toEqual(1);
    });     
  });

  describe( "#createState", function() {
    it("should create an array of 9 empty values", function() {
      game.createState()
      // debugger
      expect(game.state.length).toEqual(9);
    });     
  });

  describe( "#updateState", function() {
    it("should add the mark of the player that moved into the correct index in the array and tell the board to update its state", function() {
      spyOn(board, "updateCell");
      game.init(board);
      game.updateState(0);
      expect(game.state[0]).toEqual("X")
      expect(board.updateCell).toHaveBeenCalledWith(0, "X")
    });     
  });

  describe( "#player", function() {
    it("should return the mark of the current player", function() {
      game.init();
      expect(game.player()).toEqual("X")
    });     
  });

  describe( "#checkWinner", function() {
    it("should tell me if there is a winning combo on the board for the current player", function() {
      game.init(board);
      spyOn(board, "updateCell")
      game.doTurn(0)
      game.doTurn(1)
      game.doTurn(2)
      expect(game.checkWinner()).toBe(false)
    });     
  });

  describe( "#checkWinner", function() {
    it("should tell me if there is a winning combo on the board for the current player (vertical)", function() {
      game.init(board);
      spyOn(board, "updateCell")
      spyOn(game, "message")
      game.doTurn(0);
      game.doTurn(1);
      game.doTurn(2);
      game.doTurn(3);
      game.doTurn(4);
      game.doTurn(5);
      game.doTurn(6);
      debugger
      expect(game.message).toHaveBeenCalledWith("Player X Won!")
    });     
  });

  describe( "#checkWinner", function() {
    it("should tell me if there is a winning combo on the board for the current player (diagonal)", function() {
      game.init(board);
      spyOn(board, "updateCell")
      spyOn(game, "message")
      game.doTurn(0);
      game.doTurn(1);
      game.doTurn(4);
      game.doTurn(2);
      game.doTurn(8);
      expect(game.message).toHaveBeenCalledWith("Player X Won!")
    });     
  });

  describe( "#init", function() {
    it("should set the turns to 0, set the board as a property, and create the state array", function() {
      spyOn(game, "createState");
      game.init(board);
      expect(game.createState).toHaveBeenCalled();
      expect(game.turn).toEqual(0);
      expect(game.board).toEqual(board);
    });     
  });

});
