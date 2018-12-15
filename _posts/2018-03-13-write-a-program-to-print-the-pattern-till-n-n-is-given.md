---
title: Write a program to print the pattern   - till n . n is given
date: 2018-03-13 17:00:44 Z
categories:
- BASIC PROGRAMS
- C LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
**1**



**1 2**



**1 2 3**



**1 2 3 4**


 

#include<stdio.h>

#include<conio.h>

void main()

{

int i,n,j;

clrscr();

printf(“Enter the value of n : ”);

scanf(“%d”,&n);

for(i=1;i<=n;i++)

{

for(j=1;j<=i;j++)

{

printf(“%d“,j);

}

printf(“\n”);

}

getch();

}
```
