#include <stdio.h>
#include <cs50.h>

//CS50 IDE

int main(int argc, string argv[])
{
    if (argc != 2)
    {
        printf("missing command-line argument\n");
        return 1;
    }

    printf("hello, %s\n", argv[2]);
    return 0;
}
