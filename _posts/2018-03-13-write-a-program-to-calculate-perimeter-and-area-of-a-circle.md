---
title: Write a program to calculate perimeter and area of a circle
date: 2018-03-13 16:40:30 Z
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

float r,p,a,pi=3.1416;

clrscr();

printf(“enter the radius of the circle: “);

scanf(“%f”,&r);

p=2*pi*r;

a=pi*r*r;

printf(“parimeter = %f and area = %f”,p,a);

getch();

}
```
