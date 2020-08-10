#include <stdio.h>

int main(int argc, char *argv[])
{
     if(argc != 2)
     {
         return 1;
     }

     FILE *file = fopen(argv[1], "r"); // 입력받은 파일명(argv[1])을 '읽기(r)'모드로 불러온다.

     if (file == NULL)
     {
         return 1;
     }

     unsigned char bytes[3];
     fread(bytes, 3, 1, file); // 첫 3바이트를 읽어온다.
     // fread 함수의 인자는 (배열, 읽을 바이트 수, 읽을 횟수, 읽을 파일)을 의미한다.

     if(bytes[0] == 0xff && bytes[1] == 0xd8 && bytes[2] == 0xff)
     {
         printf("Maybe\n");
     }
     else
     {
         printf("No\n");
     }
     fclose(file);
}