# Name: Richa Pagare
# Student ID: 1001873138
# Due Date of Assignment: 04/26/2022
# OS and Python version: Windows, Python 3.10.4

# Importing os package, used in reading file path
import os

# Getting the path of input.txt file
input_path = os.path.realpath('input.txt')
# Opening the input file to get the Java code
file = open(input_path)

# Counts the depth of curly brackets
nesting_depth = 0
# To keep check when we encounter a closing curly bracket and have correct output displayed
closing_bracket_encounter = False
# Keep check if line is commented or not (initial value - False)
comments = False
# Keep check if characters are in a multi-line comment section
multiline_comment = False
# To check if next character is to be skipped or not (initial value - False)
skip_ch = False
# To check if character is in string or not (initial value - False)
ch_in_string = False
# To keep track when to update nesting_depth and when to not that's why initial value - True
update_nesting = True

# Loop to iterate till all the lines in input file is traversed
while True:
    # Reading input line by line using readline() function
    line = file.readline()
    # If we have reached EOF
    if not line:
        break
    # Converting each line into list of characters
    list_char = list(line)
    # Loop to iterate over each character in the list_char
    for ch in range(len(list_char)):
        # In case we need to skip a character we use this check
        if skip_ch == True:
            skip_ch = False
            continue
        # Now will check for characters at current, next and previous position to check for inline comments, multi-line comments, or character in string
        # First checking the current character of list
        ch_current = list_char[ch]

        # Checking if pointing to last position of list
        if ch == (len(list_char) - 1):
            ch_next = None
        else:
            ch_next = list_char[ch + 1]

        # Checking if pointing to initial position of list
        if ch == 0:
            ch_previous = None
        else:
            ch_previous = list_char[ch - 1]
        
        # First checking if line is already commented or not
        if comments == False:
            # If current and next characters are '/' and its not in a multi-line comments then assign comments to True
            if ch_current == '/' and ch_next == '/' and multiline_comment == False:
                comments = True

            # Checking if character is in string or not and, not in a multi-line comments. Also, checking if it consist of escape character in a string. So, we assign values to ch_in_string and update_nesting accordingly
            elif ch_current == '"' and ch_previous != "\\" and multiline_comment == False:
                ch_in_string = not ch_in_string
                update_nesting = not update_nesting
            
            # Checking if multi-line comments is starting or not. If it is starting then, update multiline_comment to True, skip_ch to True, as we will skip the next character as its already read and update_nesting to False, as we do not want the nesting depth in comments till it multi-line comments is closed
            elif ch_current == '/' and ch_next == '*' and ch_in_string == False:
                multiline_comment = True
                skip_ch = True
                update_nesting = False
            
            # Checking if multi-line comments is closed or not. If it is closed then, update multiline_comment to False, skip_ch to True, as we will skip the next character as its already read and update_nesting to True, as we want the nesting depth in comments after multi-line comments are closed
            elif ch_current == '*' and ch_next == '/' and ch_in_string == False:
                multiline_comment = False
                skip_ch = True
                update_nesting = True
        
        # Checking if update_nesting is True and comments and multiline_comments are False:
        if update_nesting == True and comments == False and multiline_comment == False:

            # If we encounter an opening curly bracket '{' then we increase the nesting_depth by 1
            if ch_current == '{':
                nesting_depth += 1
            # If we encounter a closing curly bracket'}' then we decrease the nesting_depth by 1 and assign True to closing_bracket_encounter
            elif ch_current == '}':
                nesting_depth -= 1
                closing_bracket_encounter = True

    # Checking if any closing bracket was encountered or not. If encountered then we add 1 to nesting_depth for only purpose of getting correct output and printing the output on console
    if closing_bracket_encounter == False:
        print(nesting_depth , " " , line)
    else:
        print(nesting_depth + 1 , " " , line)
        closing_bracket_encounter = False

# If we encounter nesting_depth is greater than 0 at the end of file, it means we need to closed the brackets which is equal to the value of nesting_depth.
# Error for identifying the issue of closing brackets and count of brackets needed to be closed
if nesting_depth > 0:
    print("Error: Reached EOF while parsing, Expected '}'")
    print("Number of brackets needed to be closed: ",nesting_depth)