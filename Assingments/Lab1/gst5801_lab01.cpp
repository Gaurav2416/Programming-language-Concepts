#include <iostream>
#include <windows.h>
#include <string>
using namespace std;
string getCurrentDir() {
    char buff[MAX_PATH];
    GetModuleFileName( NULL, buff, MAX_PATH );
    string::size_type position = string( buff ).find_last_of( "\\/" );
    return string( buff ).substr( 0, position);
}
__int64 TravelgivenDir(string path_name)
{
    WIN32_FIND_DATA data_reqd;
    __int64 size = 0;
    string f_name = path_name + "\\*.*";//to find file name from corr. path name.
    HANDLE h1 = FindFirstFile(f_name.c_str(),&data_reqd);
    if(h1 != INVALID_HANDLE_VALUE)//to see if we encounter any unwanted or say invalid value.
    {
        do {
            if( (data_reqd.dwFileAttributes & FILE_ATTRIBUTE_DIRECTORY) )
            {
                // we skip "." and "..".  because we use strcmp here
                if( strcmp(data_reqd.cFileName,".") != 0 &&strcmp(data_reqd.cFileName,"..") != 0)
                {
                    // sub-directory encountered:get the files in it also
                    f_name = path_name + "\\" + data_reqd.cFileName;
                    // recurrsionnnnnnnnn
                    size += TravelgivenDir(f_name);
                }

            }
            else
            {
                LARGE_INTEGER sz;
                // what we get here is the file size.
                // file sizes can be larger than 2 gigs therefore the size is written as two objects of DWORD type.
                // they combine to make 64 bit integer values.
                sz.LowPart = data_reqd.nFileSizeLow;
                sz.HighPart = data_reqd.nFileSizeHigh;
                size = size+ sz.QuadPart;

            }
        }while( FindNextFile(h1,&data_reqd) != 0);//until we reach the end i.e. no more files are left
        FindClose(h1);

    }
    return size;
}

//in main we take input as command line arguments
int main()
{
    __int64 size = 0;
    
    // string path_name = fs::current_path();
     size = TravelgivenDir(getCurrentDir());//entering the device file location
     cout << "\n\nThe Directory/Folder Size is = " << size << "\n";
    return 0;
}
// #include <iostream>
// #include <filesystem>
// namespace fs = std::filesystem;
// int main()
// {
//     std::cout << "Current path is " << getCurrentDir() << '\n'; // (1)
//     fs::current_path(fs::temp_directory_path()); // (3)
//     std::cout << "Current path is " << fs::current_path() << '\n';
// }