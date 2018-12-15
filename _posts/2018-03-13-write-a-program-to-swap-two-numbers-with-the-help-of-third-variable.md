---
title: Write a program to swap two numbers with the help of third variable.
date: 2018-03-13 16:42:32 Z
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

int a,b,c;

clrscr();

printf(“Enter two numbers : “);

scanf(“%d%d”,&a,&b);

c=a;

a=b;

b=c;

printf(“numbers after swapping are :%d and %d”,a,b);

getch();

}
```
