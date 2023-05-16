// Name -  Richa Pagare
// Student Id - 1001873138
// Due date - March 10th 2021

// Answer 1 :
var inputtable = [1,2,3,4,5,6,7,8,9,10]; // creating an array called inputtable with the values values from 1 to 10.
console.log(inputtable); // displaying result

//Answer  2(a) :
/*
The function fiveTableGenerator() creates and displays an array fiveTable containing multiples of 5
*/
function fiveTableDisplay()
{

	var fiveTable = [];	// Create an empty array for results
	fiveTableFunc(inputtable, 0, fiveTable );  // call to the function which populates fiveTable array
	console.log(" Set of multiple of 5 betweeen 1 and 51 "); 
	console.log(fiveTable); 	// Result displaying on console

}


function fiveTableFunc(inputtable , i, fiveTable) 
{
	if(i == 10)	//Terminating condition as inputtable has maximum value of 10. So, to stop the recursion using this condition.

	{													
		return 0;	
	}

	fiveTable[i] = 5 * inputtable[i];   //Generate multiple of 5 for every value of i in inputtable inside recursion i.e., from 1 to 10							
	fiveTableFunc(inputtable , i+1, fiveTable);	// Recursive call to generate multiples for every value in inputtable 																				
}

fiveTableDisplay();


//Answer  2(b) :
function thirteenTableDisplay()
{
	var thirteenTable = [];		// Create an empty array for results
	thirteenTableFunc(inputtable, 0, thirteenTable);  
	console.log("Set of multiple of 13 betweeen 1 and 131");
	console.log(thirteenTable);	// Result displaying on console	
}


function thirteenTableFunc(inputtable , i , thirteenTable)
{
	if(i == 10)				//Terminating condition as inputtable has maximum value of 10. So, to stop the recursion using this condition.						
	{
		return 0;
	}
	thirteenTable[i] = 13 * inputtable[i];  //Generate multiple of 13 for every value of i in inputtable inside recursion i.e., from 1 to 10	
	thirteenTableFunc(inputtable , i+1, thirteenTable); // Recursive call to generate multiples for every value in inputtable 
}

thirteenTableDisplay(); //call to the function

// Answer 2(c) :


function squaresTableDisplay()
{
	var squaresTable = []; // Creating an empty array for storing all the squares
	squaresTableFunc(inputtable ,0, squaresTable); // call to the function which finds squares and populates the array squaresTable
	console.log(" Elements in squaresTable are as follows:"); 
	console.log(squaresTable);  // displaying result on console.
}

function squaresTableFunc(inputtable , i, squaresTable)
{
	if(i == 10) //Terminating condition as inputtable has maximum value of 10. So, to stop the recursion using this condition.						
	{
			return 0;  // return statement
	}

	squaresTable[i] = inputtable[i] * inputtable[i];  // calculating square and storing into squaresTable array.
	squaresTableFunc(inputtable , i+1, squaresTable); // recursive call to the function.
}

squaresTableDisplay(); //call to the function


//Answer 3:
function oddMultiplesofFive (inputFive){ //function taking 5's multiplier as parameter
    if (5*inputFive >100){ //if it's more than 100 then it's out of our range and hence needs to stop
        return 0;
    }
    if (inputFive%2==1){ //product will be odd only when startFive will be odd (because odd*odd=odd)
        console.log(5*inputFive); //print the odd multiple of 5 in range
    }
    oddMultiplesofFive(inputFive+1); //alling the function for the next multiplier
}
oddMultiplesofFive(1);

// Answer 4:

function displayEvenMultipleSum()
{
	var sum = calculateSum(1); // we call the function and start with 1
	console.log("The sum of even multiples of 7 is:" + sum); // displaying result on console
}


function calculateSum(sevenMultiplier) 
{
	if((7 * sevenMultiplier)>100) // stopping or terminating condition for recursion
		{
			return 0;
		}
	else 
		{
			
			if(((7 * sevenMultiplier) % 2) == 0)  
			{

				return (7 * sevenMultiplier) + calculateSum(sevenMultiplier + 1); //Here, we fetch the sum of even multiples of 7.

			}
			else
				return 0 + calculateSum(sevenMultiplier + 1); // If the multiple is not an even number, then it is not added and we instead add 0 to the function call.
		}
}

displayEvenMultipleSum(); //call to the function

//Answer 5 :

function cylinder_volume(r){ //  Taking radius as the input.
    return (h) => { // taking height as imput as the second parameter.
        return 3.14 * r * r * h; // returning the cylinder volume 
    }
}
console.log("Volume of cylinder with r =5, h=10 "+cylinder_volume(5)(10));
console.log("Volume of cylinder with r =5, h=17 "+cylinder_volume(5)(17));
console.log("Volume of cylinder with r =5, h=11 "+cylinder_volume(5)(11));

//Answer 6:
// Given code in the question
makeTag = function(beginTag, endTag){ 
    return function(textcontent){
        return beginTag +textcontent +endTag;
        
        }
    }

console.log(makeTag("<",">")("table")); //This shall print "<table>" on console.
console.log(makeTag("<",">")("tr"));
console.log(makeTag("<",">")("th")+"StudentFirstname"+makeTag("</",">")("th"));
console.log(makeTag("<",">")("th")+"StudentLastname"+makeTag("</",">")("th"));
console.log(makeTag("<",">")("th")+"StudentID"+makeTag("</",">")("th"));
console.log(makeTag("</",">")("tr"));
console.log(makeTag("<",">")("tr"));
console.log(makeTag("<",">")("td")+"Richa"+makeTag("</",">")("td"));
console.log(makeTag("<",">")("td")+"Pagare"+makeTag("</",">")("td"));
console.log(makeTag("<",">")("td")+1001873138+makeTag("</",">")("td"));
console.log(makeTag("</",">")("tr"));
console.log(makeTag("</",">")("table"));

//Answer 7:

function displayMultiples(input , number)
{
	var result = []; //array which will be returned
	calculatetheMultiples(input, number, result, 1, 0); 
	console.log(result); // displays the result on console.
	return result; // returns an array which shall contain the multiples.
}

function calculatetheMultiples(input, num, result, flag, i)
{

	if(num * flag > 100 )  //Checking condition to terminate the recursion.
	{
		return 0;
	}
	if(input == "odd" || input == "Odd") // checking if the input is Odd.
	{
		if((num * flag) % 2 != 0) // if input is odd, checking if the multiple is odd or not
			{
				result[i] = num * flag; 
				calculatetheMultiples(input, num, result, flag+1, i+1);  // recursive call to the function 
			}
		else
			{
				calculatetheMultiples(input,num,result,flag+1,i); // recursive call to function when multiple is not valid. Note that index is not incremented.
			}
	}
			
	else  // when input is for even
	{
		if(((num * flag) % 2) == 0) //checking if the input is even or not
			{
				result[i] = num * flag; //inserting reuired even multiple in multiples array
				calculatetheMultiples(input, num, result, flag+1, i+1);  // recursive call to the function 
			}
		else
			{
				calculatetheMultiples(input,num,result,flag+1,i); // recursive call to function when multiple is not valid. Note that index is not incremented.
			}
	}
}

var n = displayMultiples("odd" ,3); 
console.log("Output of the generic function ");
console.log(n);//displaying result