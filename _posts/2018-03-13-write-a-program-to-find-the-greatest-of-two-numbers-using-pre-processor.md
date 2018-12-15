---
title: Write a program to find the greatest of two numbers using pre-processor.
date: 2018-03-13 16:52:04 Z
categories:
- BASIC PROGRAMS
- C LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>

#include<conio.h>

#define max(p,q) ((p>q)?(p):(q))

void main()

{
clrscr();

printf(“maximum = %d “,max(5,3));

getch();

}
```
