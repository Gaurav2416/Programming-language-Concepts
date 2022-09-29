/*
    Name: Gaurav Taneja
    ID: 1001955801
    NodeJS version: 18.1.0
    OS: Windows 11
    Due Date: 07/11/2022
*/
/* These are function definition, there is no assignment of variable. The arrays are made using the inbuilt function of class Array*/
 inputtable=Array.from({ length: 10 }, (_, i) => i + 1)// This variable stores array from 1 to 10.

function fiveTable() { // This function uses the return values of inputtable ie 1 to 10. Then this funtion iterate the each element of array multiply 5.
    return inputtable.map(e => { return e * 5 })
}
function thirteenTable() {  // This function uses the return values of inputtable ie 1 to 10. Then this funtion iterate the each element of array multiply 13.
    return inputtable.map(e => { return e * 13 })
}
function squareTable() {  // This function uses the return values of inputtable ie 1 to 10. Then this funtion iterate the each element and return square of each.
    return inputtable.map(e => { return e * e })
}
 function array100(){ // This function when called will return the length of array 100. The elemnts in this array will be 1 to 100.
    return Array.from({ length: 100 }, (_, i) => i + 1);
 }
function oddMultipleCheckof5() {// This funtion uses all 99 element of array created by 'array100' function.Then it checks for the odd number and the number that are multiple of 5. 
                                //Then return the number that satisfies both condition.
    return array100().filter(element => element % 5 == 0 && element % 2 != 0)
}
function sumOfEvenMultiple7() { // This funtion uses all 99 element of array created by 'array100' function.Then it checks for the even number and the number that are multiple of 7. 
                                //Then return the sum of all the number that satisfies both condition.
    return array100().filter(element => element % 7 == 0 && element % 2 == 0).reduce((sum, a) => sum + a, 0)
}
function cylinder_vol(r) { // This function is an example of currying function.This function returns the volume of the radius and height passed.
    return function (h) {
        return 3.14 * r * r * h
    }
}

// this functin will help in creating tags. The purpose is to show and creates table format in console
function makeTag (startTag, endTag) {
    return function (text) {
        return startTag + text + endTag;
    }
}
 
// This function is a generic type where it will return multiples of a number. 
// When function is called two arguments must be passed the number whose multiple we have to find and the we want even or odd multiple of that number.
function generic(multiple, numbreType) {

    if (numbreType.toLowerCase() == 'odd') {
        return array100().filter(element => element % multiple == 0 && element % 2 != 0)

    } else if (numbreType.toLowerCase() == 'even') {
        return array100().filter(element => element % multiple == 0 && element % 2 == 0)

    }
}

// this is call for the generic function we can change the number or change even to odd. Any combination will work
console.log('Generic function Output:',generic(13, 'EVEN'));

// This function call for the inputtable which will return an array of 10 elements from 1 to 10.
console.log( 'Task: Input Array: ', inputtable);
// This function call for the fiveTbale which will return an array of 10 multiple of 5.
console.log( 'Task: Five Table: ', fiveTable() )
// This function call for the thirteenTable which will return an array of 10 multiple of 13.
console.log( 'Task: Thirteen Table: ', thirteenTable() )
// This function call for the squareTable which will return an array of 10 with each element square.
console.log( 'Task: Square Table: ', squareTable() )
// This function call for the oddMultipleCheckof5 which will return an array of odd multiple of 5 till 100.
console.log( 'Task: Odd Multiple of 5 Table: ', oddMultipleCheckof5() )
// This function call for the sumOfEvenMultiple7 which will return an sum of even multiple of 7 till 100.\
console.log( 'Task: Sum of even multiple of 7: ', sumOfEvenMultiple7() )
//This function with cylinder_vol with argumtnet 5 as radius and 10 as height. This will return volume of function.
console.log( 'Task: Cylinder Volume with h =10: ', cylinder_vol(5)(10) )
//This function with cylinder_vol with argumtnet 5 as radius and 17 as height. This will return volume of function.
console.log( 'Task: Cylinder Volume with h =17: ', cylinder_vol(5)(17) )
//This function with cylinder_vol with argumtnet 5 as radius and 11 as height. This will return volume of function.
console.log( 'Task: Cylinder Volume with h =11: ', cylinder_vol(5)(11))

// This function help in creating the tags. We are using this function and creatinga table with the help of it demonstrate an example.
console.log('Table create');
console.log(makeTag('<', '>')('table'));
console.log(makeTag('<', '>')('tr'));
console.log(makeTag('<', '>')('th'));
console.log(makeTag('', '')('Firstname'));
console.log(makeTag('</', '>')('th'));
console.log(makeTag('<', '>')('th'));
console.log(makeTag('', '')('ID'));
console.log(makeTag('</', '>')('th'));
console.log(makeTag('<', '>')('th'));
console.log(makeTag('', '')('Department'));
console.log(makeTag('</', '>')('th'));
console.log(makeTag('</', '>')('tr'));
console.log(makeTag('<', '>')('tr'));
console.log(makeTag('<', '>')('th'));
console.log(makeTag('', '')('Gaurav'));
console.log(makeTag('</', '>')('th'));
console.log(makeTag('<', '>')('th'));
console.log(makeTag('', '')('1234'));
console.log(makeTag('</', '>')('th'));
console.log(makeTag('<', '>')('th'));
console.log(makeTag('', '')('CSE'));
console.log(makeTag('</', '>')('th'));
console.log(makeTag('</', '>')('tr'));
console.log(makeTag('</', '>')('table'));
