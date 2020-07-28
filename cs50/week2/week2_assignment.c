#include<stdio.h>

#include <string.h>
#define _CRT_SECURE_NO_WARNINGS

// 부스트코딩뉴비챌린지 week2 미션
// 요일을 입력하면 해당 요일의 메뉴를 출력해 주는 프로그램


int main(void)
{
    char food[10];
    char d1[10] = "월요일";
    char d2[10] = "화요일";
    char d3[10] = "수요일";
    char d4[10] = "목요일";
    char d5[10] = "금요일";
    char d6[10] = "토요일";
    char d7[10] = "일요일";

    printf("요일을 입력하세요:");
    scanf("%s", food);
    if (!strcmp(food, d1))
    {
        printf("월요일 : 청국장\n");
    }
    else if (!strcmp(food, d2))
    {
        printf("화요일 : 비빔밥\n");
    }
    else if (!strcmp(food, d3))
    {
        printf("수요일 : 된장찌개\n");
    }
    else if (!strcmp(food, d4))
    {
        printf("목요일 : 칼국수\n");
    }
    else if (!strcmp(food, d5))
    {
        printf("금요일 : 냉면\n");
    }
    else if (!strcmp(food, d6))
    {
        printf("토요일 : 소불고기\n");
    }
    else if (!strcmp(food, d7))
    {
        printf("일요일 : 오삼불고기\n");
    }
    else
    {
        printf("잘못 입력 했습니다.\n");
    }
}
