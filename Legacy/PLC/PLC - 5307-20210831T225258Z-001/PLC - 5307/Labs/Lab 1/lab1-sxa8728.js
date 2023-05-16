// Name -  Srajan Ahuja
// 1000 number - 1001858728
// Due date - March 3rd 2021

// Answer 1
var inputtable = [1,2,3,4,5,6,7,8,9,10]; // creating an array called inputtable that has values from 1 to 10 as it's element
console.log(inputtable); // displaying result

// Answer 2
// 2(a)

var fiveTable = [];
// since no element in inputtable is more than 10 and 5*10=50 is not greater than 51 but 5*11=55 is hence we'll use inputtable to compute the multiples of 5 from 5 to 50
function fiveMulti(i){ //function that takes the first inputtable element's index as parameter
    if(i==10){ // after the last element in inputtable it should stop
        return 0;
    }
    else{ //we're within 1 to 10
        fiveTable[i] = inputtable[i]*5; // storing a multiple of 5 into the array that's in our range
        fiveMulti(i+1); //calling the function for the next element
    }
}
fiveMulti(0);
console.log(fiveTable); // displaying result
 
// 2(b)

var thirteenTable = [];
// since no element in inputtable is more than 10 and 13*10=130 is not greater than 131 but 13*11=143, hence we'll use inputtable to compute the multiples of 13 from 1 to 131
function thirteenMulti(i){ //function that takes the first inputtable element's index as parameter
    if(i==10){ // after the last element in inputtable it should stop
        return 0;
    }
    else{ //we're within 1 to 10
        thirteenTable[i] = inputtable[i]*13; // storing a multiple of 13 into the array that's in our range
        thirteenMulti(i+1); //calling the function for the next element
    }
}
thirteenMulti(0);
console.log(thirteenTable); // displaying result

// 2 (c)

var squaresTable = [];
function squaresMulti(i){ //function that takes the first inputtable element's index as parameter
    if(i==10){ // after the last element in inputtable it should stop
        return 0;
    }
    else{
        squaresTable[i] = inputtable[i]*inputtable[i]; //calculating squares and storing them in the array
        squaresMulti(i+1) //calling the function for the next element 
    }
}
squaresMulti(0);
console.log(squaresTable); // displaying result


// Answer 3
function fiveOdd (startFive){ //function taking 5's multiplier as parameter
    if (5*startFive >100){ //if it's more than 100 then it's out of our range and hence needs to stop
        return 0;
    }
    if (startFive%2==1){ //product will be odd only when startFive will be odd (because odd*odd=odd)
        console.log(5*startFive); //print the odd multiple of 5 in range
    }
    fiveOdd(startFive+1); //alling the function for the next multiplier
}
fiveOdd(1); // we start with 1 to stay in the range of 1 to 100

// Answer 4
// dry run -> 0 + 14 + 0 + 28 + 0 + 42 ....... + 98 = 392

function sevenEvenSum (startSeven){ // function taking 7's multiplier as parameter
    if (7*startSeven>100){ //if it's more than 100 then it's out of our range and hence needs to stop
        return 0;
    }
    if (startSeven%2==1){ //product will be odd only when startSeven will be odd (because odd*odd=odd)
        return 0+sevenEvenSum(startSeven+1); // since the product is odd we add 0 to the function call for the next multiplier
    }
    if (startSeven%2==0){ //product will be even only when startSeven will be even (because odd*even=even)
        return (7*startSeven)+sevenEvenSum(startSeven+1); //since the product is even we add it to the function call of next multiplier
    }
}
sevenEvenSum(1); // we start with 1 to stay in the range of 1 to 100

// Answer 5

function cylinder_volume(r){ // converted the 2 arity function given into a nested function of single arguments using currying, first we take radius as the input
    return (h) => { // taking height as imput as the second argument in the nested function
        return 3.14 * r * r * h; // returning the cylinder volume as there are no more inputs left
    }
}
console.log(cylinder_volume(5)(10)); // calling the function for r=5 and h=10

// Answer 6

makeTag = function(beginTag, endTag){ // code given in the question
    return function(textcontent){
        return beginTag +textcontent +endTag;
        
        }
    }
// printing the desired outputs by calling the function using currying
console.log(makeTag("<",">")("table")); //prints "<table>"
console.log(makeTag("<",">")("tr"));
console.log(makeTag("<",">")("th")+"Employee ID"+makeTag("</",">")("th"));
console.log(makeTag("<",">")("th")+"Employee Name"+makeTag("</",">")("th"));
console.log(makeTag("<",">")("th")+"Department"+makeTag("</",">")("th"));
console.log(makeTag("</",">")("tr"));
console.log(makeTag("<",">")("tr"));
console.log(makeTag("<",">")("td")+1000+makeTag("</",">")("td"));
console.log(makeTag("<",">")("td")+"Srajan"+makeTag("</",">")("td"));
console.log(makeTag("<",">")("td")+"IT"+makeTag("</",">")("td"));
console.log(makeTag("</",">")("tr"));
console.log(makeTag("</",">")("table"));

// Q7. (5 points) Following instructions

// Answer 8
// In this function we take the input as the 1)desired odd/even product type
//2) Multiplicand (5 or 7) and 
//3) Multiplier (that we start with 1 to stay within 1 to 100)
function genericMulti(ifOddthenOne,multiplicand,multiplier){
    if(multiplicand*multiplier>100){ //if it's more than 100 then it's out of our range and hence needs to stop
        return 0;
    }
    if(ifOddthenOne == 1){ // we go further if the desired product is odd
        if(multiplier%2==1){ // since odd*odd=odd, we check the multiplier
            console.log(multiplicand*multiplier); //we print the product
        }

    }
    else{ //we go further if the desired product is even
        if(multiplier%2==0){ // since odd*even=even, we check the multiplier
            console.log(multiplicand*multiplier); //we print the product
        }
    }
    genericMulti(ifOddthenOne,multiplicand,multiplier+1); //we call the function for the next multiplier
}
genericMulti(1,5,1); //odd multiples of 5 between 1 and 100
genericMulti(0,7,1); //even multiples of 7 between 1 and 100
