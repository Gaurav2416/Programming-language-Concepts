/*Name : Richa Pagare
 UTA ID : 1001873138
 Lab 01 : Recursive File Space
Programming Language Used : JAVA 

I have written a function that will recursively obtain the file size of a directory and traverse through the whole directory structure which includes folders and sub folders.
This program will print the directory size of the current directory if no argument is given
For example : java rxp3138_lab01
It can also print the directory size if an argument which includes the directory path is given 
For example : java rxp338_lab01 C:\Users\pagare\Desktop\Test

*/
import java.io.File;
public class rxp3138_lab01{

	public long getSize(File folder)
    {
        long size = 0;
        
        //Obtaining a list of all the files.
        File[] files = folder.listFiles();
 
        int len = files.length;
 
        for (int i = 0; i < len; i++) {
            if (files[i].isFile()) 
            {
                size += files[i].length();
            }
            else 
            {
                //Recursively obtaining the summation of the size of all the files.
            	size += getSize(files[i]);
            }
        }
        return size;
    }
 
    // Driver Code
    public static void main(String[] args)
    {
    	String path=" ";
    	if(args.length > 0)
    	{	
    		 path=args[0];
    	}
    	else
    	{
    		path=new File("").getAbsolutePath();
    	}
        File f = new File(path);       
        rxp3138_lab01 cal=new rxp3138_lab01();
        long size = cal.getSize(f);      
        System.out.println("Size is " + size + " Bytes");
    }
}