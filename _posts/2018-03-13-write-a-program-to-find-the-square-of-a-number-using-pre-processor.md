---
title: Write a program to find the square of a number using pre-processor.
date: 2018-03-13 16:51:46 Z
categories:
- BASIC PROGRAMS
- C LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>

#include<conio.h>

#define SQUARE(x) x*x

void main()

{

int a,b;

clrscr();

printf("enter the number to square : ");

scanf("%d",&a);

b=SQUARE(a);

printf("the square of %d is %d",a,b);

getch();

}
```
