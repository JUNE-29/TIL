#include <stdio.h>

int main(void)
{
    int n = 50;
    int *p = &n; // 변수 n의 주소를 저장한다.
    printf("%p\n", p);
    printf("%i\n", *p); // p가 가리키는 변수의 값, 즉 변수의 n의 값을 출력한다.
}