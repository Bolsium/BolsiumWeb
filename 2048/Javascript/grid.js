
// create blank array
function blankGrid() {
    return [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
}

//looks if  the two matrixes are the same 
function compare(a, b) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (a[i][j] !== b[i][j]) {
        return true;
      }
    }
  }
  return false;
}
  

function copyGrid(grid) {
  let extra = blankGrid();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      extra[i][j] = grid[i][j];
    }
  }
  return extra;
}


function flipGrid(grid) {
  for (let i = 0; i < 4; i++) {
    //switch the start with the end
    grid[i].reverse();
  }
  return grid;
}

//rotates the matrix by 90° anti-clockwise
function transposeGrid(grid) {
  let newGrid = blankGrid();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      newGrid[i][j] = grid[j][i];
    }
  }
  return newGrid;
}
  
function addNumber() {
  let options = [];
  //in every field
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j] === 0) {
        options.push({
          x: i,
          y: j
        });
      }
    }
  }
  //
  if (options.length > 0) {
    let spot = random(options);
    let r = random(1);
    //spawns 10% 4 and the other times 2
    grid[spot.x][spot.y] = r > 0.1 ? 2 : 4;
    grid_new[spot.x][spot.y] = 1;
  }
}
  