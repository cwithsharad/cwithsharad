---
title: PROGRAM TO FIND THE NUMBER OF TIMES A CHARACTER IS PRESENT IN A STRING USING
  malloc() FUNCTION.
date: 2018-05-24 16:38:46 Z
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
int main()
{
char *s,c;
int i,sum=0;
s=(char*)malloc(1*sizeof(char));
printf("Enter the string : ");
gets(s);
fflush(stdin);
printf("Enter the character : ");
scanf("%c",&c);
for(i=0;i<strlen(s);i++)
{
if(c==s[i])
{
sum++;
printf("\nFound same Character at %d place",i+1);
}
}
printf("\nThe character : %c REPEATED %d time.",c,sum);
return 0;
}
```
