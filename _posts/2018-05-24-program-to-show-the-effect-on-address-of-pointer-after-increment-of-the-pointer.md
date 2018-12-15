---
title: PROGRAM TO SHOW THE EFFECT ON ADDRESS OF POINTER AFTER  INCREMENT OF THE POINTER.
date: 2018-05-24 16:49:50 Z
categories:
- C LANGUAGE PROGRAMS
- POINTER PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
int main()
{
int n,*p;
printf("Enter the value of n : ");
scanf("%d",&n);
p=&n;
printf("Address of p before incrementing is %u",p);
p++;
printf("\nAddress of p after incrementing is %u",p);
return 0;
}
```
