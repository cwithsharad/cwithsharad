---
title: Write a program to swap two numbers without using third variable.
date: 2018-03-13 16:43:08 Z
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

printf(“Enter two numbers : “):

scanf(“%d%d”,&a,&b);

a=a+b;

b=a-b;

a=a-b;

printf(“numbers after swapping are :%d and %d”,a,b);

getch();

}
```
