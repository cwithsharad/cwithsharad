---
title: Write a program to find that the year is leap year or not.
date: 2018-03-13 16:49:16 Z
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

int year;

clrscr();

printf(“enter the year : “);

scanf(“%d”,&year);

if((year%4==0)&&(year%100!=0)||(year%400==0))

{

printf(“%d is a leap year”,year);

}

else

{

printf(“%d is not a leap year”,year);

}

getch();

}
```
