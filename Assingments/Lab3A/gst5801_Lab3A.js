/*
Name: Gaurav Taneja
ID:1001955801
OS: Windows 11
Version: Node 18.1.0
Language: Javascript
*/

/*This is attempt to make conversion of the basic code provided for the assignment.
  
   The below function will generate a puzzle which will have a path to solve the puzzle. 
*/
function puzzle(width, len) {
    /*
    The below object iscreated to check whether the points we traverse is end point bottm,up, and right.
    The also help to mark the points that are visited the boolean value will help in deciding start from zero for next row or column or move forward
     */
    let checkObj = {
        rightBorder: true,
        downBorder: true,
        alreadyVisited: false,
// this function will change the value of already visited to true or false utilized when reached any ends.
        notAlreadyVisited: function () {
            return this.alreadyVisited ? false : true
        },
// This fucntion will set the border value to false for new row
        popRightBorder: function () {
            return this.rightBorder = false
        },
// This fucntion will set the border value to false for new column
        popBottomBorder: function () {
            return this.downBorder = false
        },
// This function will set the visited node value to true so one node is not visited twice 
        visited: function () {
            return this.alreadyVisited = true
        }
    }
 /* we plan to traverse side ways. So this fucntion will help us traverse . */   
    function traverseToNextPointPath() {
        column += 1// move to next point increment value of column.
        // if column reached width value then set column value to 0 and to move to next row add 1
        if (column == width) {
            column = 0
            row += 1
        // if row reached len value then set row value to 0.
            if (row == len) {
                row = 0
            }
        }
    }
    // this array will store all possible object
    var allCordinateObj = []
    // This loop will iterate with all the possible points vertically and create array for all the points.
    for (let i = 0; i < len; i++) {
        let tempArr = []
        // This loop will iterate horizontally all the points. And create object for each points and append into the array
        for (let j = 0; j < width; j++) {
            tempArr.push(Object.create(checkObj));
        }
        allCordinateObj.push(tempArr)// The entire 2d array is pushed into the allCordinateObj array.
    }

    let totalNumberOfPoints = width * len // Counts the dimension possible by mul the width into height.
    var checkForPossibleExit = false // checks for the exit path.
    // Intialize row and col to zero to start traversing.
    var row = 0
    var column = 0
    // the first point will always be visited
    var pointVisited = 1
    //Enter puzzle at random column point. we can choose random point by using math random function call and floor Returns the greatest integer less than or equal to its numeric argument.
    let startingColPoint = Math.floor(Math.random() * (width - 0) + 0);
    // the assign the point to the column to start creating the puzzle.
    column = startingColPoint
    // change the value of alreadyVisited to true because the first point will always be visited.
    allCordinateObj[row][column].visited()
    /*THE WALL BETWEEN THE TWO SQUARES IS ERADICATED AND A CORRIDOR IS CREATED BY MOVING IN A RANDOM DIRECTION FROM THE CURRENT SQUARE TO SOME SQUARE THAT HAS NOT BEEN VISITED YET. If such a move is not feasible, a side corridor is started in a previously visited square next to an unexplored square. There can be just one exit from the maze's bottom..*/
    //Moves left to right, up to down from current point.
    while ((pointVisited < totalNumberOfPoints) || !checkForPossibleExit) {
        //This array will be utilized to store all the possible paths.
        var pathAvailable = [];
        //If the condition is true then it means left side path is available.
        if (column > 0 && allCordinateObj[row][column - 1].notAlreadyVisited()) { pathAvailable.push("left") }

        //If the condition is true then it means right side path is available.
        if (column < width - 1 && allCordinateObj[row][column + 1].notAlreadyVisited()) { pathAvailable.push("right") }

         //If the condition is true then it means up side path is available.
        if (row > 0 && allCordinateObj[row - 1][column].notAlreadyVisited()) { pathAvailable.push("up") }

        //If the condition is true then it means down side path is available. And also allows for exit.
        if (row < len - 1) {
            if (allCordinateObj[row + 1][column].notAlreadyVisited()) { pathAvailable.push('down') }
        } else {
            //at the bottom row, allowing for bottom-row exit
            if (!checkForPossibleExit) { pathAvailable.push('down') }
        }
        // Check for the length of array pathAvailable 
        if (pathAvailable.length > 0) {
            //Choose string at random direction from allowed directions which allows to choose points
            let x = Math.floor(Math.random() * (pathAvailable.length - 0) + 0)
            // the string at the position is stored in direction
            let direction = pathAvailable[x]
            // this case will check for string match and then perform the necessary computation
            switch (direction) {
                case "left":
                    column -= 1
                    allCordinateObj[row][column].popRightBorder()
                    break;
                case "right":
                    allCordinateObj[row][column].popRightBorder()
                    column += 1
                    break;
                case "up":
                    row -= 1
                    allCordinateObj[row][column].popBottomBorder()
                    break;
                case "down":
                    allCordinateObj[row][column].popBottomBorder()
                    row += 1
                    break;
            }
            // this condition is true then we still inside the puzzle and the increment the pointVisited counter.
            if (row < len) {
                allCordinateObj[row][column].visited()
                pointVisited += 1
            } else {
                //Else we are at the end of the row so the checkForPossibleExit is set to true.
                checkForPossibleExit = true
                //Setting to the origin point.
                column = 0
                row = 0
                //This will check for the condition and then calls the function that helps to move to next point
                while (allCordinateObj[row][column].notAlreadyVisited()) {
                    traverseToNextPointPath()
                }
            }
        } else {
            //obstructed in all directions. Restart in the next utilized square to the right and below, then scan the raster from the square to the right of where you are now on point.
            traverseToNextPointPath()
            //  Then checks for the condition and if true the calls the function to move to the next point.
            while (allCordinateObj[row][column].notAlreadyVisited()) {
                traverseToNextPointPath()
            }
        }

    }
    /* This iteration will move horizontally until the end is reached width wise */
    for (let i = 0; i < width; i++) {
        //Then checks for each point and prints according to the condition
        if (i == startingColPoint) { process.stdout.write(".  ") } else { process.stdout.write(".--") }
    }
    // Moves to the next point.
    process.stdout.write(".\n")
    // This point will iterate each point that is in the array allCordinateObj
    allCordinateObj.forEach(iterateRows => {
        process.stdout.write("I") // Print for all the points
        //Iterate all the points that is in the iterateRows
        iterateRows.forEach(points => {
            // this is the ternary operator that checks for the condition of rightBorder
            points.rightBorder ? process.stdout.write("  I") : process.stdout.write("   ")
        })
        //moves to next line
        process.stdout.write("\n")
        //Iterate all the points that is in the iterateRows
        iterateRows.forEach(points => {
        // this is the ternary operator that checks for the condition of downBorder
            points.downBorder ? process.stdout.write(":--") : process.stdout.write(":  ")
        })
        //moves to next line
        process.stdout.write(".\n")
    })
}

//This is the fucntion call to generate puzzle
puzzle(15, 20)