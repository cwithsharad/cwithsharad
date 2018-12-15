---
title: Write a program to calculate simple interest and amount. When P,R,T are given.
date: 2018-03-13 16:41:30 Z
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

int t;

float p,r,si,a;

clrscr();

printf(“enter the r principle,rate & time :“);

scanf(“%f%f%d”,&p,&r,&t);

si=p*r*t/100;

a=p+si;

printf(“s.i = %f and amount  = %f”,si,a);

getch();

}
```
