---
title: Write a program to find greater number between two numbers.
date: 2018-03-13 16:45:31 Z
categories:
- BASIC PROGRAMS
- C LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>

#include<conio.h>

void main()

{

int a,b;

clrscr();

printf(“enter any two numbers : “);

scanf(“%d%d”,&a,&b);

if(a>b)

{

printf(“%d is greater.”,a);

}

else

{

printf(“%d is greater.”,b);

}

getch();

}
```
