---
title: Write a program to print the series 1-2 3-4...n . n is given
date: 2018-03-13 17:00:04 Z
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

int n,i,a;

clrscr();

printf(“Enter the value of n : ”);

scanf(“%d”,&n);

for(i=1;i<=n;i++)

{

if(i%2==0)

printf(“ -%d ”,i);

else

printf(“ %d ”,i);

}

getch();

}
```
