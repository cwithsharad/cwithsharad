---
title: Write a program to print the number in reverse
date: 2018-03-13 16:57:40 Z
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

int n,rev=0,rem;

clrscr();

printf("Enter the number : ");

scanf("%d",&n);

while(n>0)

{

rem=n%10;

rev=(rev*10)+rem;

n=n/10;

}

printf("\nReverse of the number is : %d",rev);

getch();

}
```
