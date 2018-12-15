---
title: PROGRAM TO FIND LARGEST ELEMENT IN AN ARRAY.
date: 2018-05-24 16:52:59 Z
categories:
- ARRAY PROGRAMS
- BASIC PROGRAMS
- C LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
int main()
{
int i,n,largest,a[20];
printf("Enter the value of n : ");
scanf("%d",&n);
for(i=0;i<n;i++)
{
printf("Enter %d element : ",i+1);
scanf("%d",&a[i]);
}
largest=a[0];
for(i=1;i<n;i++)
{
if(largest<a[i])
{
largest=a[i];
}
}
printf("Largest element is %d ",largest);
getch();
}
```
