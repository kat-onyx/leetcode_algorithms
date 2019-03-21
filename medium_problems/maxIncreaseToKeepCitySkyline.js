// //In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well. 

// At the end, the "skyline" when viewed from all four directions of the grid, i.e.top, bottom, left, and right, must be the same as the skyline of the original grid.A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

// What is the maximum total sum that the height of the buildings can be increased ?

var maxIncreaseKeepingSkyline = function (grid) {
    let maxRow = [];
    let maxColumn = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] > maxColumn[j] || maxColumn[j] === undefined) {
                maxColumn[j] = grid[i][j];
            }
            if (grid[i][j] > maxRow[i] || maxRow[i] === undefined) {
                maxRow[i] = grid[i][j];
            }
        }
    }

    let diffCount = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let rowDiff = Math.abs(grid[i][j] - maxRow[i]);
            let colDiff = Math.abs(grid[i][j] - maxColumn[j]);

            if (rowDiff < colDiff) {
                diffCount += rowDiff;
            } else if (colDiff < rowDiff) {
                diffCount += colDiff;
            } else {
                diffCount += rowDiff;
            }
        }
    }

    return diffCount;
};

//Runtime: 64 ms, faster than 91.18% of JavaScript online submissions for Max Increase to Keep City Skyline.
//Memory Usage: 35.3 MB, less than 74.03% of JavaScript online submissions for Max Increase to Keep City Skyline.