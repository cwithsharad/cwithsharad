---
title: Write a program to print odd numbers from 1 to n , n is given
date: 2018-03-13 16:56:06 Z
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

int i,n;

clrscr();

printf(“enter the value of n : “);

scanf(“%d”,&n);

for(i=1;i<=n;i=i+2);

{

printf(“%d”,n);

}

getch();

}
```
