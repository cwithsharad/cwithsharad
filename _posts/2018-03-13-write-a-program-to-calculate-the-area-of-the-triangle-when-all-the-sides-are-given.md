---
title: Write a program to calculate the area of the triangle when all the sides are
  given.
date: 2018-03-13 16:45:09 Z
categories:
- BASIC PROGRAMS
- C LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>

#include<conio.h>

#include<math.h>

void main()

{
float a,b,c,s,temp,area;

clracr();

printf(“enter the sides of the triangle :”);

scanf(“%f%f%f”,&a,&b,&c);

s=a+b+c/2;

temp=((s*(s-a)*(s-b)*(s-c)));

area=sqrt(temp);

printf(“area is = %f”,area);

}
```
