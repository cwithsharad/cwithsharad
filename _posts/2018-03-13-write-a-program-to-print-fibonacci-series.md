---
title: Write a program to print Fibonacci series.
date: 2018-03-13 16:56:54 Z
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

int first=0,second=1,number,n,i;

clrscr();

printf("Enter the value of n : ");

scanf("%d",&n);

for(i=1;i<=n;i++)

{

number=first+second;

printf("%d",first);

first=second;

second=number;

}

getch();

}
```
