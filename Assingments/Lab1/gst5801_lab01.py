# %%
# Name : Gaurav Sanjeev Taneja
# ID : 1001955801
# Python version: 3.10.4
# OS: Windiows 11

import os # this import is good practice when code is deployed on different OS. The import is mandatory to use its in built function for filesystem. 
# below is the function definition where we expect the path of the directory as parameter.
def getSize(path):
    sum = 0 # This variable is used to store and in calculation of the size
    for element in os.scandir(path): # This loop is mandatory to iterate over the list of items in the directory. Scandir gives list of all the element that are in the folder.
        if element.is_file(): # Condition to check wheteher the element is a file
            sum += element.stat().st_size # if element is the file then get the size by using inbuilt fucntion stat which uses class stat_result which helps in getting the size of the file 
        elif element.is_dir(): # check if element is directory
           sum+= getSize(element.path) # If element is the directory then the update the path to iterate over all the elements of that directory to get size
    return sum   # Returns the size of the direcotry given in the parameter  
totalSize= getSize(os.getcwd()) # Function call for the calculating the size of the directory in bytes
print("The Size of the directory in bytes:",totalSize)   


