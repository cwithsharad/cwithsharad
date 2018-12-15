---
title: Write a program to calculate the average of five subjects marks and print fail
  if it is less than 35%.
date: 2018-03-13 16:44:15 Z
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
float a,b,c,d,e,f,avg;

clrscr();

printf(“enter the marks obtained in five subjects respectively : “);

scanf(“%f%f%f%f%f”,&a,&b,&c,&d,&e);

avg=(a+b+c+d+e)/5;

if(avg<35)

{

printf(“Average is %f student is fail.”,avg);

}

else

{

printf(“Average is %f student is pass.”,avg);

}

getch();

}
```
