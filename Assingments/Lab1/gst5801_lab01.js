/* 
Name: Gaurav Sanjeev Taneja 
ID: 1001955801
Language: NodeJS 
Version: 18.1.0
OS : Windows 11

*/
const fs = require("fs") // This is the import statement. It gives access to inbuilt filesystem module to store, access and manage files.
checkForFiles = function (path) {
  let size = 0 // Variavle size is intialized to zero. This variable will be used in calculation of the folder size
  files = fs.readdirSync(path) // This readdirSync reads all the content of the directory which present in variable 'path'.

  files.forEach(function (file) { // this is the iteration of the elements that are in the files variable.
    if (fs.statSync(path + "/" + file).isDirectory()) { // Condition to check wheter the content is a directory.
      size += checkForFiles(path + "/" + file) // If it is a directory then recursive call to the function to check part of that function
    } else {
      size += fs.statSync(path + '/' + file).size // else it is a file and add the size of the file to variable.
    }
  })
  return size // returns the total size of the directory that were passed.
}
const result = checkForFiles(process.cwd()) // Function to with current directory as the parameter.
console.log('The Size of Directory in Bytes', result);