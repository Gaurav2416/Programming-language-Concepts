import os
def find_dir_size(path):
# Initialize size as 0
    size = 0
# os.listdir provides list of all the items inside directory including sub-folders and files in array format
    all_items = os.listdir(path)
    for i in range(len(all_items)):
        item = os.path.join(path, all_items[i])
# As per discussion with Professor MacOS creates ".DS_Store" file which needs to be excluded from calculation, thus continuing code on its occurance.
        if (all_items[i] == '.DS_Store'):
            continue
# If the current item is a sub-folder then call same function again else add size to defined variable.
        size += find_dir_size(item) if os.path.isdir(item) else os.path.getsize(item)
    return size

# os.getcwd() gives path of the current directory
print('Current directory size is: ', find_dir_size(os.getcwd()), ' Bytes')

