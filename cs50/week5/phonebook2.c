#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    // Open file
    // fopen 함수를 이용하면 파일을 FILE이라는 자료형으로 불러올 수 있다.
    FILE *file = fopen("phonebook2.csv", "a");

    // Get strings from user
    char *name = get_string("Name: ");
    char *number = get_string("Number: ");

    // Print (write) strings to file
    fprintf(file, "%s,%s\n", name, number);

    // Close file
    fclose(file);
}