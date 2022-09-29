# Name: Gaurav Taneja
# ID: 1001955801
# Python version: 3.9.13
# OS: Windows 11

import os
# This command will open file from the directory where code is stored with the mode mentioned.
path = os.path.realpath('input_RPN_EC.txt')
file = open(path, 'r')
# This will store file data line by line into the variable. 
fileDataExtra= file.readlines()
# This is the dictionary. The operator are used as the keys. Lambda funtion is used to perfrom the computation and return the result.
operatorext= {
  "+": (lambda a, b: a + b),
  "-": (lambda a, b: a - b),
  "*": (lambda a, b: a * b),
  "/": (lambda a, b: a / b),
  "%": (lambda a, b: a % b)
}
# This function will calculate the result for the expression passed .
def calculateext(rpnexp):
#  This is the place where split function will Return a list of the words in the string, using sep as the delimiter string.
  t = rpnexp.split()
  stack = [] # This is the array where result are stored and number are stored.
  for i in t: #This will iterate all the token stored in t.
    if i in operatorext:# check if the current token i is in the operator dictionary.
      a2 = stack.pop() #Pop the number storend in the stack from else part.
      a1 = stack.pop()
      result = operatorext[i](a1, a2) #This will pass the operator, numbers and the lambda function will perform the operations and return the result.
      stack.append(result) # result is appended to the stack array.
    else:
      stack.append(int(i)) # this will append integers from the expressions.

  return stack.pop() # return the result
temp='' # an empty string where RPN expression is made.
optemp=[] # Normal expression tokens are appended
dict= {'+':1, '-':1,'*':2,'/':2,'%':3}# We have used additional function of modulous. This is used to form epxression as per BODMAS
for line in fileDataExtra: # Each line iterated from the text file 
  line = line.split() # splits each line into tokens and add to the line variable
for i in line: # Iterate each token from the line
    if i.isdigit():# Checks if the token is integer
        temp += ' ' + i # If yes then add to the interger is added to the string
    elif i=='(':  # Else if checked for the open bracket
            optemp.append('(') # Appended to the temp array
        # As soon as a closing bracket is ')' found, we start removing until we find the opening bracket or '('.
    elif i==')':
        while optemp[-1]!= '(':
            temp= temp +' '+optemp.pop()
        optemp.pop()
    else:
        # Maintianing the bodmas rule
        while len(optemp)!=0 and optemp[-1]!='(' and dict[i]<=dict[optemp[-1]]: 
            temp= temp+' '+optemp.pop()# Poping the token from the array and concatenate with the temp string
        optemp.append(i)
while len(optemp)!=0: #check if the array length is zero.if zero it will give final RPN expression which we use to calculate
    temp=temp +' '+optemp.pop()
    
print(calculateext(temp))    