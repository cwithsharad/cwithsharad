---
title: PROGRAM TO SWAP TWO NUMBERS USING POINTERS
date: 2018-03-13 17:20:08 Z
categories:
- C LANGUAGE PROGRAMS
- POINTER PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>

void s(int,int);

void main()

{

int x,y;

scanf("%d%d",&x,&y);

s(&x,&y);

printf("Value of x and y after swapping is %d and %d ",x,y);

getch();

}

s(int *p,int *q)

{

int temp; temp=*p; *p=*q; *q=temp;

}
```
