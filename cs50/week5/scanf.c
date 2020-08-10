#include <stdio.h>

int main(void)
{
    int x;
    printf("x: ");
    scanf("%i", &x); // 스택 영역 안에 x가 저장된 주소로 찾아가서 사용자가 입력한 값을 저장.
    printf("x: %i\n", x);

    char s[5];
    printf("s: ");
    scanf("%s", s); // s를 크기가 5인문자열, 즉 크기가 5인 char 자료형의 배열로 정의했기때문에 그대로 s를 입력.
    printf("s: %s\n", s);
}