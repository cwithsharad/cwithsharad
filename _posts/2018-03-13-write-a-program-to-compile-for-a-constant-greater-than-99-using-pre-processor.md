---
title: Write a program to compile for a constant greater than 99 , using pre-processor.
date: 2018-03-13 16:53:17 Z
categories:
- BASIC PROGRAMS
- C LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>

#include<conio.h>

#define MAX 100

void main()

{

#if MAX>99

printf(“compiled for array greater than 99.”);

#else

printf(“compiled for small array’”);

#endif

getch();

}
```
