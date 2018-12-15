---
title: PROGRAM TO PRINT A STRING IN REVERSE ORDER USING malloc FUNCTION.
date: 2018-05-24 16:41:34 Z
categories:
- C LANGUAGE PROGRAMS
- DYNAMIC MEMORY ALLOCATION PROGRAMS
- POINTER PROGRAMS
- STRING PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
#include<string.h>
#include<malloc.h>
main()
{
char *s,*s2;
int n,i,j;
s=(char*)malloc(1*sizeof(char));
s2=(char*)malloc(1*sizeof(char));
printf("Enter the string : ");
gets(s);
printf("\nSize of %s is %d\n",s,strlen(s));
j=0;
i=strlen(s)-1;
while(s[i]!='\0')
{
s2[j]=s[i];
i--,j++;
}
printf("\nString in reverse is : ");
for(i=0;i<strlen(s);i++)
{
printf("%c",s2[i]);
}
return 0;
}
```
