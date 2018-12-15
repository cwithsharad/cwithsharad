---
title: PROGRAM TO COPY ONE STRING TO ANOTHER AND THEN PRINT THE LENGTH OF COPIED STRING.
date: 2018-05-24 16:31:11 Z
categories:
- C LANGUAGE PROGRAMS
- STRING PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
#include<string.h>
void main()
{
char s1[20],s2[20];
printf("Enter first string : ");
gets(s1);
printf("Enter second string : ");
gets(s2);
strcpy(s1,s2);
printf("\nString second copied into first string\n");
printf("\nString second is now : %s",s2);
printf("\nLength of second string is %d",strlen(s2));
return 0;
}
```
