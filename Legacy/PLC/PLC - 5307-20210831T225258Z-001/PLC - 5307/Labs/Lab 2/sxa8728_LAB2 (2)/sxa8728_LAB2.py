"""
Name - Srajan Ahuja
1000 Number - 1001858728
April 6th 2021
macOS Big Sur Version 11.2.3
"""
import os

def result (op,num1,num2): #Defining operations and returning their result
  if op == '+':
    return num1+num2
  elif op == '-':
    return num2-num1
  elif op == '*':
    return num1*num2
  elif op == '/':
    return num2/num1

def RPNcalc (rpn,ops): #RPN calculator
  RPNlist=rpn.split()  #Separating the Input string 
  stack = [] #Stack to process intermediate steps
  #print(RPNlist)
  for t in RPNlist: # t is a single element in the input 
    if t in ops: #checking if t is an operator
      n1 = int(stack.pop()) #latest number pop, input is in string hence changing it into integer
      n2 = int(stack.pop()) #the second latest number pop, input is in string hence changing it into integer
      res = result(t,n1,n2) #calculating 
      stack.append(res) #putting the result in the stack
      
    else:
      stack.append(t) #pushing numbers into the stack
  return int(stack[0]) #at the end the stack is left with one element which is the result of the rpn given


#print(os.path.join(os.getcwd(),'input_RPN.txt'))
ops = ['+','-','*','/']
try :
	inputFile = open (os.path.join(os.getcwd(),'input_RPN.txt'), encoding = 'utf-8') #opening the input file which is present in the same directory as the python file
	for line in inputFile: #reading line by line
		rpn = line # one input = one line
		print (RPNcalc(rpn,ops)) #printing the final result

finally:
	inputFile.close() # file close