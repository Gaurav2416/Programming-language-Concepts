class Square {
    constructor() {
        this.hasRightWall = true;
        this.hasBottomWall = true;
        this.hasBeenVisited = false;
    }

    hasNotBeenVisited = function() {
        return this.hasBeenVisited ? false : true;
    }

    eraseRightWall = function() {
        return this.hasRightWall = false
    }
    eraseBottomWall = function () {
       return this.hasBottomWall = false
    }
    markVisited = function () {
        console.log(this);
       return this.hasBeenVisited = true
    }
}



function generateMaze(width, height) {

    // let Square = {
    //     hasRightWall: true,
    //     hasBottomWall: true,
    //     hasBeenVisited: false,

    //     hasNotBeenVisited: !this.hasBeenVisited,

    //     eraseRightWall: function () {
    //         return hasRightWall = false
    //     },
    //     eraseBottomWall: function () {
    //        return hasBottomWall = false
    //     },
    //     markVisited: function () {
    //        return hasBeenVisited = true
    //     }
    // }

    // enum Direction {
    //     case left
    //     case right
    //     case up
    //     case down
    // }

    function moveToNextSquare() {
        // squaresVisited += 1
        column += 1
        if (column == width) {
            column = 0
            row += 1
            if (row == height) {
                row = 0
            }
        }
        // console.log('exit move to next square', row, column);
    }

    var squares = []
    for (let i = 0; i < height; i++) {
        let tempArr = []
        for (let j = 0; j < width; j++) {
            tempArr.push(new Square());
        }
        squares.push(tempArr)
    }
    let numberOfSquares = width * height

    var isThereAnExit = false
    var row = 0
    var column = 0
    var squaresVisited = 1

    //Enter maze at random column
    let entryColumn = Math.floor(Math.random() * (width - 0) + 0);
    column = entryColumn
    squares[row][column].markVisited()

    /*A CORRIDOR IS CONSTRUCTED BY MOVING IN A RANDOM DIRECTION FROM THE CURRENT SQUARE TO SOME SQUARE THAT HAS NOT BEEN VISITED YET AND ERASING THE WALL BETWEEN THE TWO SQUARES. IF NO SUCH MOVE IS POSSIBLE, A SIDE CORRIDOR IS STARTED IN SOME SQUARE ALREADY VISITED WHICH IS ADJACENT TO AN UNVISITED SQUARE. ONLY ONE EXIT TO THE BOTTOM OF THE MAZE IS ALLOWED.*/

    //Moves left to right, up to down from current square in raster fashion
    

    while ((squaresVisited < numberOfSquares) || !isThereAnExit) {
        //MAKE LIST OF UNBLOCKED DIRECTIONS
        var allowedDirections = [];
        //Leftco
        if (column > 0 && squares[row][column - 1].hasNotBeenVisited()) { allowedDirections.push("left") }

        //Right
        if (column < width - 1 && squares[row][column + 1].hasNotBeenVisited()) { allowedDirections.push("right") }

        //Up
        if (row > 0 && squares[row - 1][column].hasNotBeenVisited()) { allowedDirections.push("up") }

        //Down - allow for exit
        if (row < height - 1) {
            if (squares[row + 1][column].hasNotBeenVisited()) { allowedDirections.push('down') }
        } else {
            //At bottom row - allow for exit through bottom
            if (!isThereAnExit) { allowedDirections.push('down') }
        }

        if (allowedDirections.length > 0) {
            //Pick random direction from allowed directions
            let x = Math.floor(Math.random() * (allowedDirections.length - 0) + 0)
            let direction = allowedDirections[x]
            switch (direction) {
                case "left":
                    column -= 1
                    squares[row][column].eraseRightWall()
                    break;
                case "right":
                    squares[row][column].eraseRightWall()
                    column += 1
                    break;
                case "up":
                    row -= 1
                    squares[row][column].eraseBottomWall()
                    break;
                case "down":
                    squares[row][column].eraseBottomWall()
                    row += 1
                    break;
            }
            if (row < height) {
                //Still in maze. Mark square as used and increment counter
                squares[row][column].markVisited()
                squaresVisited += 1
            } else {
                //Exited bottom
                isThereAnExit = true
                //Go visit other squares, starting at origin (0,0)
                column = 0
                row = 0
                //Raster scan to the first used square
                while (squares[row][column].hasNotBeenVisited()) {
                    moveToNextSquare()
                }
            }
        } else {
            //All directions blocked. Restart in next used square to right and below,
            //raster scan - from square to right of current position (column, row)
            moveToNextSquare()

            while (squares[row][column].hasNotBeenVisited()) {
                moveToNextSquare()
            }
        }

    }
    for (let i = 0; i < width; i++) {
        if(i == entryColumn){process.stdout.write(".  ") }else{ process.stdout.write(".--")}
    }
    process.stdout.write(".\n")

    //console.log remainder of maze
    squares.forEach(rowOfSquares => {
        process.stdout.write("I")
        rowOfSquares.forEach(square => {
            square.hasRightWall ?  process.stdout.write("  I") :  process.stdout.write("   ")

        })
        process.stdout.write("\n")

        //console.log horizontal walls
        rowOfSquares.forEach(square => {
            square.hasBottomWall ?  process.stdout.write(":--") :  process.stdout.write(":  ")
        })
        process.stdout.write(".\n")
    })
}

generateMaze(15, 20)