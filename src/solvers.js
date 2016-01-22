/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  var solution = undefined;

  var findSolution = function(rowIndex){
    if(rowIndex === n){
      solution = board.rows();
      return true;
    }
    for(var col=0;col<n;col++){
      board.togglePiece(rowIndex,col);
      if(!board.hasColConflictAt(col)){
        if(findSolution(rowIndex+1)){
          return true;
        }  
      }
      board.togglePiece(rowIndex,col);
    }
  };

  findSolution(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n:n});
  var solutionCount = 0;

  var findSolution = function(rowIndex){
    if(rowIndex === n){
      solutionCount++;
      return;
    }
    for(var col=0;col<n;col++){
      board.togglePiece(rowIndex,col);
      if(!board.hasColConflictAt(col)){
        findSolution(rowIndex+1);
      }
      board.togglePiece(rowIndex,col);
    }
  };  

  findSolution(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var solution = undefined;

  var findSolution = function(rowIndex){
    if(rowIndex === n){
      solution = board.rows();
      return true;
    }
    for(var col=0;col<n;col++){
      board.togglePiece(rowIndex,col);
      if(!board.hasAnyQueenConflictsOn(rowIndex,col)){
        if(findSolution(rowIndex+1)){
          return true;
        } 
      }
      board.togglePiece(rowIndex,col);
    }
  };

  findSolution(0);

  //If no solution found, return current board;
  if(!solution){
    solution = board.rows();
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n:n});
  var solutionCount = 0;

  var findSolution = function(rowIndex){
    if(rowIndex === n){
      solutionCount++;
      return;
    }
    for(var col=0;col<n;col++){
      board.togglePiece(rowIndex,col);
      if(!board.hasAnyQueenConflictsOn(rowIndex,col)){
        findSolution(rowIndex+1);
      }
      board.togglePiece(rowIndex,col);
    }
  };  

  findSolution(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
