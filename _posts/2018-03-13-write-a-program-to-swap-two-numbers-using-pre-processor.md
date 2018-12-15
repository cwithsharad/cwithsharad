---
title: Write a program to swap two numbers using pre-processor.
date: 2018-03-13 16:52:29 Z
categories:
- BASIC PROGRAMS
- C LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
#include<conio.h>

#define SWAP(a,b) {a=a+b;b=a-b;a=a-b;}

void main()

{

int x,y;

clrscr();

printf(“enter any two numbers : “);

scnaf(“%d%d”,&x,&y);

printf(“numbers before swapping were %d and %d”,x,y);

SWAP(x,y);

printf(“\n numbers after swapping are : %d and %d”,x,y);

getch();

}
```
