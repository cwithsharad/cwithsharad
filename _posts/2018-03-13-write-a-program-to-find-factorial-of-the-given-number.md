---
title: Write a program to find factorial of the given number.
date: 2018-03-13 16:58:01 Z
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

int  fact=1,num,i;

clrscr();

printf("Enter the number : ");

scanf("%d",&num);

for(i=1;i<=num;i++)

{

fact=fact*i;

}

printf("The factorial of %d is %d",num,fact);

getch();

}
```
