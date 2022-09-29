/* 
Name: Gaurav Sanjeev Taneja 
ID: 1001955801
Language: Java 
Version: 18.0.0.1
OS : Windows 11

*/
/* 
1. Was one language easier or faster to write the code for this? If so, describe in detail why, as in what about the language made that the case?
  -> Yes python was the easiest language as there was no need to define a class. The iterating over the content of the directory is also easy. 
  Python handles the variables of any type   so no need to worry about the paramters is handles itself. 

2. Even though a language may not (e.g. FORTRAN) does not support recursion, describe how you could write a program to produce the same results without using recursion.
   Would that approach have any limitations and if so, what would they be?
 -> The code can be written using loops. We can use recursive function when the function size is small or time is not of concern. The limitation in looping is that it need to
	traverse each element ,it cannot skip any element. For example we need to traverse over all the elements we cannnot move to another directory or else it will be lost.
 */

import java.io.File; // This is the import statement. It gives access to inbuilt filesystem module to store, access and manage files.

class gst5801_lab01 {
	private static long getSize(File path) { // A private fucntion is created to get size of the directory. The
												// fucntion is used within the class.
		long sum = 0; // The variable is intialized to zero that will be used in calcualtion.
		File[] fileArray = path.listFiles(); // List of files is used to get all the content from the path.
		int len = fileArray.length; // this stores the length of the files variable in len.
		for (int i = 0; i < len; i++) { // this will iterate thorugh all the content in files.
			if (fileArray[i].isFile()) { // check for the element is a file
				sum += fileArray[i].length();// if its a file then add length to the sum variable
			} else {
				sum += getSize(fileArray[i]);// directory then call the fucntion recursively
			}
		}
		return sum; // Return the value of the directory that was passed.
	}

	public static void main(String[] args) { // Main function to create obeject and initiate calling
		String path = new File("").getAbsolutePath(); // this will get the absolute path where the code is running.
		File file1 = new File(path); // create instance of the file converitng the string pathname to absolute
										// pathname
		long size = getSize(file1); // call to the function with parameter returning the size of the directory.
		System.out.println("The Size of the directory in bytes:"
				+ size);
	}
}
