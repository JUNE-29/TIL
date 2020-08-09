#include <stdio.h>

int main(void)
{
    int n = 50;
    printf("%i\n", n);
    printf("%p\n", &n); // &은 '~의 주소' , 16진법으로 표현된 메모리의 주소 값을 얻을 수 있다.
    printf("%i\n", *&n); // 그 메모리 주소에 있는 실제 값을 얻을 수 있다.
    //n의 주소를 얻고, 또 다시 그 주소에 해당하는 값을 얻어 출력한 것.
}