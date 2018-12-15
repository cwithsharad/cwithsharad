---
title: Write a program to show the effect of increment operator as postfix.
date: 2018-03-13 16:48:43 Z
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

clrscr();

{
int a,z,x=10,y=20;

clrscr();

z=x*y++;

a=x*y;

printf(“THE VALUE PF Z AND A ARE %d and %d”,z,a);

getch();

}
```
