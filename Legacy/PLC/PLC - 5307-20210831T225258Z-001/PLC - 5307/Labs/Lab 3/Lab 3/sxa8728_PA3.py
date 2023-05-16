'''
Name - Srajan Ahuja
1000 number -  1001858728
Date - 30th April 2021
macOS Big Sur 11.2.3
Lab 3
'''
import os

def Execute(file): # function that checks for all constraints and prints
	checker = [] #stack to store opening braces
	nestCount = 0 #counts the nesting in the code by counting number of open '{'
	lineCount =  0 #to track the line of code which is being read
	commentCount = 0 #for handling block comments 0 = character is not in comment and 1 = the character is in comment
	quoteCountSingle = 0 # 0 = character not in single quotes, 1 = character is in single quotes
	quoteCountDouble = 0 # 0 = character not in double quotes, 1 = character is in double quotes

	for line in file:
		lastItem = "" #records the character in the last iteration
		lineCount += 1 #line count
		for word in line.strip(): # used the variable "word" for characters in the line
			#print (word)
			if word == "*" and lastItem == "/" : #if the current character is * and the previous character is / that means the block comment begins with /*
				commentCount += 1 # characters here on out are in block comments until we encounter */
			elif word == "/" and lastItem == "*": #if the current character is / and the previous character is * that means the block comment closes begins with */
				commentCount -= 1 # characters here on out are part of the java code and not the block comments
			if commentCount == 0 : # if the characters are part of the java code and not in block comments
				if word in quotes : # if the current character is a single quote or a double quote
					if word == '"':
						if quoteCountDouble == 0 :
							quoteCountDouble += 1 # the characters here on out are in double quotes
						else :
							quoteCountDouble -= 1 # the characters here on out are part of the java code

					else :
						if quoteCountSingle == 0 :
							quoteCountSingle += 1 # the characters here on out are in single quotes
						else :
							quoteCountSingle -= 1 # the characters here on out are part of the java code

				if quoteCountSingle == 0 and quoteCountDouble == 0: # the character is not part of quotes
					if word == "/" and lastItem == "/" : # if the single line comment symbol is encountered
						break #we break the loop and move on to the next line of the code as this is a single line comment
					if word in openBraces : #if the character is an open braces
						checker.append(word) #we put it in the stack
						current = word #temporary storage for the latest open braces encountered
						if current == "{" :
							nestCount += 1 #increasing the nesting count if character is {
					elif word in closeBraces: #if the character is a closing braces
						if not checker: #if open parenthesis stack is empty then the close parenthesis encountered should give an error
							print("Error : Unexpected %s encountered at line %d ." %(word,lineCount) ) #print error
							return False # no need to go further in the java code as there's an unmatches brace


						else: #there are elements in open parenthesis stack

							if current == "(" : #if the latest open parenthesis is (
								if word != ")" : #and the closing brace encountered is not ) then it should give error
									print("Error : Unexpected %s encountered at line %d ." %(word,lineCount)) #print error
									return False # no need to go further in the java code as there's an unmatches brace
								else : #closing brace matches with the opening brace
									checker.pop()  #pop the latest open brace from the stack as it's block is over now
									if checker: #if there are elements left in the stack
										current = checker[len(checker) - 1] #current becomes whichever is the last open brace encountered before the one we just popped
									else : #if the stack is empty that means one block of the code is over
										current = None #we set current to none so that if there's a brace error before we encounter the next open brace, it should account for that case
							elif current == "{" : #same as above, just for {} instead of ()
								if word != "}" :
									print("Error : Unexpected %s encountered at line %d ." %(word,lineCount))
									return False
								else :
									nestCount -= 1
									checker.pop()
									if checker:
										current = checker[len(checker) - 1]
									else:
										current = None
							elif current == "[" : #same as above, just for [] instead of {}
								if word != "]" :
									print("Error : Unexpected %s encountered at line %d ." %(word,lineCount))
									return False
								else :
									checker.pop()
									if checker:
										current = checker[len(checker) - 1]
									else:
										current = None
			lastItem = word #records the character in this iteration

		print ("%d "%(nestCount) +"\t"*nestCount+"%s"  %(line.strip())) #print nesting depth and put as many tabs as the nesting depth for proper indentation and then print the code


	if checker: #if there are still open braces left in the stack after traversing the entire java code
		#print(checker)
		print("Unexpected Braces Error") #give error
		return False
	return True #no errors with the braces, nesting depth and indentation




openBraces = ["{","(","["] #opening braces
closeBraces = ["}",")","]"] #closing braces
quotes = ['"',"'"] #quotes
inputFile = None
try :
	inputFile =  open (os.path.join(os.getcwd(),'input.txt'))

	id = Execute(inputFile)
	#print(id)

finally:
	inputFile.close() # file close