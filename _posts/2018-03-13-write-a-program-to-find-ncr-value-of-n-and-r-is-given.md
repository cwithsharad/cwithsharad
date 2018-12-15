---
title: Write a program to find nCr , Value of n and r is given.
date: 2018-03-13 16:58:49 Z
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

int n,x,r,f1=1,f2=1,f3=1,i=1,res;

clrscr();

printf("Enter the value of n : ");

scanf("%d",&n);

printf("Enter the value of r : ");

scanf("%d",&r);

x=n-r;

for(i=1;i<=n;i++)

{

f1=f1*i;

}

for(i=1;i<=r;i++)

{

f2=f2*i;

}

for(i=1;i<=x;i++)

{

f3=f3*i;

}

res=f1/(f2*f3);

printf("\n value of nCr = %d",res);

getch();

}
```
