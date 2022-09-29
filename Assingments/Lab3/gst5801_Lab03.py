
# Name: Gaurav Taneja
# ID: 1001955801
# Python version: 3.9.13
# OS: Windows 11
# Date: 07/25/2022 

import os
# This command will open file from the directory where code is stored with the mode mentioned.
path = os.path.realpath('input_RPN.txt')
file = open(path, 'r')
# This will store file data line by line into the variable. 
filedata= file.readlines()
# This is the dictionary. The operator are used as the keys. Lambda funtion is used to perfrom the computation and return the result.
operator= {
  "+": (lambda a, b: a + b),
  "-": (lambda a, b: a - b),
  "*": (lambda a, b: a * b),
  "/": (lambda a, b: a / b)
}
# This function will calculate the result for the expression passed .
def calculate(rpnexp):
  #  This is the place where split function will Return a list of the words in the string, using sep as the delimiter string.
  t = rpnexp.split()
  # This is the array where result are stored and number are stored.
  stack = []
  for i in t:#This will iterate all the token stored in t.
    if i in operator:# check if the current token i is in the operator dictionary.
      a2 = stack.pop()#Pop the number storend in the stack from else part.
      a1 = stack.pop()
      result = operator[i](a1, a2) #This will pass the operator, numbers and the lambda function will perform the operations and return the result.
      stack.append(result)# result is appended to the stack array.
    else:
      stack.append(int(i)) # this will append integers from the expressions.

  return stack.pop() # return the result
  #Function call for each line expression from the file 
for rpnexp in filedata:
  print(calculate(rpnexp))