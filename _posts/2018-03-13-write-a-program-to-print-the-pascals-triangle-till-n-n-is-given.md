---
title: Write a program to print the Pascal’s   - Triangle till n . n is given
date: 2018-03-13 17:02:03 Z
categories:
- BASIC PROGRAMS
- C LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
**       1**



**     1  1**



**   1   2   1**



** 1   3   3   1**


#include<stdio.h>
#include<conio.h>
void main()
{
int x,y,n,a,z,s;
clrscr();
/* x, y are for loop control and n is to store the input limit*/
printf("Enter the value of n or limit: ");
/*limit implies number second from edge in Pascal's tringle*/
scanf("%d",&n);
printf("\n\n");
s=n;
for(x=0; x=0; z--)
printf(" ");
s--;/* s is for printing the space*/
for(y=0; y<=x; y++)
{
printf("%d ",a);
a=(a*(x-y)/(y+1));
}
printf("\n");
}
getch();
}
```
