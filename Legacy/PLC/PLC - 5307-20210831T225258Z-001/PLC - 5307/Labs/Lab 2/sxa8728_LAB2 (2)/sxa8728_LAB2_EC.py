"""
Name - Srajan Ahuja
1000 Number - 1001858728
April 6th 2021
macOS Big Sur Version 11.2.3
"""

#Extra Operators added are Modulo and Exponential

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
  elif op == '%':
    return num2%num1
  elif op == '^':
    return pow(num2,num1)
ops = {'+': (10), '-' : (10), '*':(11),'/':(11),'%':(11),'^':(14)} # keys = operators and values = operator priority
def OPcheck(t1): #function to check for operator
  if t1 in ops.keys():
    return 1
  else:
    return 0

def ConvertRPN (expression): #function to convert Algebraic expression into RPN
  expressionSplit = expression.split() #Separating the Input string
  opsStack = [] #Stack to process intermediate steps for operators
  rpn = [] #rpn output


  for t in expressionSplit: #t is a single element in the input 
    if t == '(': #if t is opening parenthesis
      opsStack.append(t) #inserts '(' goes into the stack
    elif t == ')': #if t is closing parenthesis
      while opsStack and opsStack[-1] != '(': #as long as the operator stack isn't empty and the top element isn't '(' the loop runs
        rpn.append(opsStack.pop()) #operator stack pops the top operator and it's inserted into the rpn output
      opsStack.pop() #pops '('
    elif OPcheck(t): #if t is an operator
      while opsStack and OPcheck(opsStack[-1]): #as long as the operator stack isn't empty and the top element of the operator stack is an operator(and not a parenthesis) the loop runs
          if ops[t]-ops[opsStack[-1]] <0: #if the incoming operator (t) has a lower priority than the operator at the top of stack
            rpn.append(opsStack.pop()) #then top of the stack operator pops and it's inserted into the rpn output
            continue #we continue to check with the next operator on top of the stack
          break # this means that the incoming operator has a higher priority than the top of the stack and the loop breaks for insertion into the operator stack
      opsStack.append(t) # if the operator stack is empty or the incoming operator has a higher priority than the top of stack, the incoming operator goes to the top of stack
    else:
      rpn.append(t) #the digit is inserted into the rpn output
  while opsStack: #after traversing all the elements in the input expression, the operator stack still might have some element/elements left
    rpn.append(opsStack.pop()) #inserting the left over elements from the operator stack into the rpn output

  return rpn

def RPNcalc(RPNlist): #RPN Calculator
  stack = [] #Stack to process intermediate steps
  for r in RPNlist:
    if OPcheck(r):
      n1 = int(stack.pop()) #latest number pop, input is in string hence changing it into integer
      n2 = int(stack.pop()) #the second latest number pop, input is in string hence changing it into integer
      res = result(r,n1,n2) #calculating 
      stack.append(res) #putting the result in the stack
    else:
      stack.append(r) #pushing numbers into the stack
  return int(stack[0])#at the end the stack is left with one element which is the result of the rpn given

try :
  inputFile = open (os.path.join(os.getcwd(),'input_RPN_EC.txt'), encoding = 'utf-8') #opening the input file which is present in the same directory as the python file
  for line in inputFile: #reading line by line
    expression = line # one input = one line
    RPN = ConvertRPN(expression)
    print ("RPN is : - ", RPN) #printing the RPN
    print ("Result of the RPN is - ",RPNcalc(RPN))

finally:
  inputFile.close() # file close



