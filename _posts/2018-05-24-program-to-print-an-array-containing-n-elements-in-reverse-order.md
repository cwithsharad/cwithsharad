---
title: PROGRAM TO PRINT AN ARRAY CONTAINING n ELEMENTS IN REVERSE ORDER.
date: 2018-05-24 16:35:52 Z
categories:
- ARRAY PROGRAMS
- C LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
void main()
{
int i,n,a[20];
printf("Enter the value of n :");
scanf("%d",&n);
for(i=0;i<n;i++)
{
printf("Enter number %d : ",i+1);
scanf("%d",&a[i]);
}
printf("Numbers in reverse order are : ");
for(i=n-1;i>=0;i--)
{
printf("%d\t",a[i]);
}
return 0;
}
```
