# Name : Richa Pagare
# UTA ID : 1001873138
# Lab 01 : Recursive File Space
# Programming Language Used : Python (3.8)
# OS : Windows

#Answer 1) It was easier to code for Python and Java for this. 
# Python was easiest to code in as it did not have an overhead complexity of managing my code when compared to other languages 
# In Java, we do not make use of explicit pointers.
# I felt easier to deal with reference types without making the use of pointers. 

#Answer 2) If a language doesnot support recursion, it would be difficult to abtain the directory size using that language.
# One of the ways of doing that could be using a regex pattern where a regular expression could be matched against the whole path.

# I have written a function that will recursively obtain the file size of a directory and traverse through the whole directory structure which includes folders and sub folders.
# This program will print the directory size of the current directory if no argument is given
# For example : python rxp3138_lab01.py
# It can also print the directory size if an argument which includes the directory path is given 
# For example : python rxp338_lab01.py C:\Users\pagare\Desktop\Test

import os, sys

total_size = 0
def file_size(initial_path = '.'):
    global total_size
    # Obtaining a list of all files and directories in the specified directory
    for child in os.listdir(initial_path):
        # Joining subdirectory and the directory components
        path = os.path.join(initial_path, child) 
        if os.path.isdir(path):
            file_size(path)
        else:
            #Recursively summing up the size of all subfolders and their files
            total_size = total_size + os.path.getsize(path)     
    return total_size

initial_link='.'
if len(sys.argv) > 1:
    initial_link = sys.argv[1]

print(file_size(initial_link), 'bytes')
