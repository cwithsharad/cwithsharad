---
title: PROGRAM FOR COPYING THE CONTENTS OF ONE FILE INTO ANOTHER
date: 2018-05-24 17:59:21 Z
categories:
- C LANGUAGE PROGRAMS
- FILE HANDLING PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include <stdio.h>
#include <stdlib.h>
int main()
{
FILE *fp1, *fp2;
char f1_name[20],f2_name[20],char_temp;
printf("Enter the source file name : ");
scanf("%s", f1_name);
fp1 = fopen(f1_name, "r");
if (fp1 == NULL)
{
printf("FILE : %s NOT FOUND !",f1_name);
exit(0);
}
printf("Enter the target file name : ");
scanf("%s", f2_name);
fp2 = fopen(f2_name, "w");

if (fp2 == NULL)
{
printf("Cannot open file %s \n",f2_name);
exit(0);
}
char_temp=fgetc(fp1);
while (char_temp!= EOF)
{
fputc(char_temp, fp2);
char_temp = fgetc(fp1);
}
printf("\nContents of %s copied to %s \n\n",f1_name,f2_name);
fclose(fp1);
fclose(fp2);
return 0;
}
```
