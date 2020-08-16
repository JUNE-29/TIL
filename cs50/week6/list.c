#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    // int 자료형 3개로 이루어진 list라는 포인터를 선언하고 메모리 할당
    int *list = malloc(3 * sizeof(int));
    if (list == NULL)
    {
        return 1;
    }

    list[0] = 1;
    list[1] = 2;
    list[2] = 3;

    // int 자료형 4개 크기의 tmp라는 포인터를 선언하고 메모리 할당
    int *tmp = malloc(4 * sizeof(int));
    if (tmp == NULL)
    {
        return 1;
    }

    // Copy integers from old array into new array
    // 오래된 배열에서 새로운 배열로 정수를 복사한다.
    for (int i = 0; i < 3; i++)
    {
        tmp[i] = list[i];
    }

    // tmp배열의 네 번째 값 저장
    tmp[3] = 4;

    // list의 메모리를 초기화
    free(list);

    // list가 tmp와 같은 곳을 가리키도록 지정
    list = tmp;

    for (int i  = 0; i < 4; i++)
    {
        printf("%i\n", list[i]);
    }
}