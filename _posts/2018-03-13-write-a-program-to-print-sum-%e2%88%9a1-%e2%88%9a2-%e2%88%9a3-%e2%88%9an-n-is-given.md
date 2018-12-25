---
title: Write a program to print sum = √1 + √2 + √3 + . . . + √n , n is given
date: 2018-03-13 16:56:32 Z
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

int i,n;

float sum=0;

clrscr();

printf("Enter the value of n : ");

scanf("%d",&n);

for(i=1;i<=n;i++)

{

sum=sum+sqrt(i);

}

printf("Sum = %f",sum);

getch();

}
```
