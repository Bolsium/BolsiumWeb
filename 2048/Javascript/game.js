
// operate 3 function in a section and return the row 
function operate(row) {
    row = slide(row);
    row = combine(row);
    row = slide(row);
    return row;
  }
  

  function slide(row) {
    let arr = row.filter(val => val);
    let missing = 4 - arr.length;
    let zeros = Array(missing).fill(0);
    arr = zeros.concat(arr);
    return arr;
  }
  

  function combine(row) {
    //looks from the end to the start
    for (let i = 3; i >= 1; i--) {
      let a = row[i];
      let b = row[i - 1];
      //looks if the number from selected th is the same as the number 
      // from the previous block in the same block
      if (a == b) {
        row[i] = a + b;
        score += row[i];
        row[i - 1] = 0;
      }
    }
    return row;
  }
  
  function isGameWon() {
    //looks in every field if some number is 2048
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (grid[i][j] == 2048) {
          return true;
        }
      }
    }
    return false;
  }
  
  
  function isGameOver() {
    //looks in every field
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        //looks if the field has zero
        if (grid[i][j] == 0) {
          return false;
        }
        //If the field is not in the right side and if the two have same number
        if (i !== 3 && grid[i][j] === grid[i + 1][j]) {
          return false;
        }
        //If the field is not on the bottom and if the two have same number
        if (j !== 3 && grid[i][j] === grid[i][j + 1]) {
          return false;
        }
      }
    }
    return true;
  }
  