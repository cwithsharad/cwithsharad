---
title: Write a program to show the result of bitwise LEFT SHIFT ( << ) operator
date: 2018-03-13 16:50:44 Z
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

printf(“enter the value of a and  b : ”);

scanf(“%d%d”,&a,&b);

c=a<<b;

printf(“value of c = %d”,c);

getch();

}
```
