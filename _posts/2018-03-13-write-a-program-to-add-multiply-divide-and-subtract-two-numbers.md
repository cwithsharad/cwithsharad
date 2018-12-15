---
title: Write a program to add, multiply, divide and subtract two numbers
date: 2018-03-13 16:36:55 Z
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

float x,y,m,a,s,d;

clrscr();

printf(“enter any two numbers : ”);

scanf(“%f%f”,&x,&y);

a=x+y;

d=x/y;

m=x*y;

s=x-y;

printf(“\n Addition = %f \nSubstraction of %f-%f = %f\n Multiplication = %f\nDivision = %f”,a,x,y,s,m,d);

getch();

}
```
