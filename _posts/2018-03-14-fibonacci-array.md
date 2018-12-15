---
title: WRITE A PROGRAM TO PRINT THE FIBONACCI SERIES TILL n. USING ARRAY.
date: 2018-03-14 12:27:42 Z
categories:
- ARRAY PROGRAMS
- C LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
#include<conio.h>
void main()
{
int n,i;
double a[100];
clrscr();
printf("Enter the value of  n : ");
scanf("%d",&n);
printf("FIBONACCI SERIES : ");
for(i=0;i<=n;i++)
a[i]=i;
for(i=0;i<=n;i++)
{
a[i+2]=a[i+1]+a[i];
printf("%.0lf\t",a[i]);
}
getch();
}


**OUTPUT : - **


![fib](https://cwithsharad.files.wordpress.com/2018/03/fib.png)
```
