#include <stdio.h>

int main(void)
{
  char *s = "EMMA";
  printf("%s\n", s); // %s 는 그 주소로 가서 계속 문자를 출력한다. 널종단 문자까지!
  printf("%p\n", s);
  printf("%p\n", &s[0]);
  printf("%p\n", &s[1]);
  printf("%p\n", &s[2]);
  printf("%p\n", &s[3]);
  printf("%c\n", *s);
  printf("%c\n", *(s+1));
  printf("%c\n", *(s+2));
  printf("%c\n", *(s+3));
}