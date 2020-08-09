#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string s = get_string("s: ");
    string t = get_string("t: ");


    if(s == t) // 주소 값을 비교한다.
    {
        printf("Same\n");
    }
    printf("Different\n");

    printf("%p\n", s);
    printf("%p\n", t);
}