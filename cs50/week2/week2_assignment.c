#include<stdio.h>

#include <string.h>
#define _CRT_SECURE_NO_WARNINGS

// �ν�Ʈ�ڵ�����ç���� week2 �̼�
// ������ �Է��ϸ� �ش� ������ �޴��� ����� �ִ� ���α׷�


int main(void)
{
    char food[10];
    char d1[10] = "������";
    char d2[10] = "ȭ����";
    char d3[10] = "������";
    char d4[10] = "�����";
    char d5[10] = "�ݿ���";
    char d6[10] = "�����";
    char d7[10] = "�Ͽ���";

    printf("������ �Է��ϼ���:");
    scanf("%s", food);
    if (!strcmp(food, d1))
    {
        printf("������ : û����\n");
    }
    else if (!strcmp(food, d2))
    {
        printf("ȭ���� : �����\n");
    }
    else if (!strcmp(food, d3))
    {
        printf("������ : �����\n");
    }
    else if (!strcmp(food, d4))
    {
        printf("����� : Į����\n");
    }
    else if (!strcmp(food, d5))
    {
        printf("�ݿ��� : �ø�\n");
    }
    else if (!strcmp(food, d6))
    {
        printf("����� : �ҺҰ��\n");
    }
    else if (!strcmp(food, d7))
    {
        printf("�Ͽ��� : ����Ұ��\n");
    }
    else
    {
        printf("�߸� �Է� �߽��ϴ�.\n");
    }
}
