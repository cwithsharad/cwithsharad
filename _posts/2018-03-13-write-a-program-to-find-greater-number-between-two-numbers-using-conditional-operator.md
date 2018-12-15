---
title: Write a program to find greater number between two numbers using conditional
  operator
date: 2018-03-13 16:45:55 Z
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

printf("Enter two numbers : ");

scanf("%d%d",&a,&b);

printf("Greater no is = %d",(a>b)?a:b);

getch();

}
```
