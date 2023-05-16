# Name: Richa Pagare
# Student ID: 1001873138
# Date: 04/07/2022
# OS: Windows

import os
# Getting path of the input file 'input_RPN.txt'
input_path = os.path.realpath('input_RPN.txt')

# Reading input from text file one by one
with open(input_path) as input:
    lines = input.readlines()

# Using this loop to remove '\n' character from string
for i in range(len(lines)):
    lines[i] = lines[i].strip()

for input in lines:
    temp = input.split(" ")
    stack = []
    for ch in temp:
        # Checking if the character is a digit(not an operator) and then adding or appending it to the stack.
        if ch.isdigit():
            stack.append(int(ch))
        else:
            if ch == '+':
                var1 = stack.pop()#Popping the first element
                var2 = stack.pop()#Popping the second element
                res = var2 + var1# Perform addition and get result
                stack.append(res)# Push or append the result to stack
            #Repeating the same process whenever any operator is encountered.
            elif ch == '-':
                var1 = stack.pop()
                var2 = stack.pop()
                res = var2 - var1
                stack.append(res)
            elif ch == '*':
                var1 = stack.pop()
                var2 = stack.pop()
                res = var2 * var1
                stack.append(res)
            else:
                var1 = stack.pop()
                var2 = stack.pop()
                res = var2 / var1
                stack.append(res)
    print(stack[0])