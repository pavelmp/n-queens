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

  var recursion = function(rowIndex,colIndex, curBoard,currentCount){
    currentCount = currentCount || 0;
    curBoard.togglePiece(rowIndex,colIndex);
    currentCount++;
    if(curBoard.hasAnyRooksConflicts()){
      curBoard.togglePiece(rowIndex,colIndex);
      currentCount--;
      if(colIndex+1<n){
        return recursion(rowIndex,colIndex+1,curBoard,currentCount);
      } else if(rowIndex+1<n){
        return recursion(rowIndex+1,colIndex,curBoard,currentCount);
      }
    } else if(rowIndex+1<n){
      return recursion(rowIndex+1,0,curBoard,currentCount); 
    } else if(currentCount === n){
      return curBoard.rows();
    } 
  };

  solution = recursion(0,0,board);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n}); 
  if(n === 0){return []};
  var solution = undefined;

  var recursion = function(rowIndex,colIndex, curBoard,currentCount){
    currentCount = currentCount || 0;
    curBoard.togglePiece(rowIndex,colIndex);
    currentCount++;
    if(curBoard.hasAnyQueenConflicts()){
      curBoard.togglePiece(rowIndex,colIndex);
      currentCount--;
      if(colIndex+1<n){
        return recursion(rowIndex,colIndex+1,curBoard,currentCount);
      } else if(rowIndex+1<n){
        return recursion(rowIndex+1,colIndex,curBoard,currentCount);
      }
    } else if(rowIndex+1<n){
      return recursion(rowIndex+1,0,curBoard,currentCount); 
    } else if(currentCount === n){
      return curBoard.rows();
    } 
  };

  var alt = new Board({n:n});
  solution = recursion(0,0,board) || alt.rows();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
