---
title: Write a program to show the result of sizeof() operator.
date: 2018-03-13 16:51:22 Z
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

printf("enter any number :");

scanf("%d",&a);

b=sizeof(a);

printf("size of number is = %d",b);

getch();

}
```
