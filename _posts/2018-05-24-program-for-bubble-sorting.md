---
title: PROGRAM FOR BUBBLE SORTING
date: 2018-05-24 17:02:24 Z
categories:
- ARRAY PROGRAMS
- C LANGUAGE PROGRAMS
- STRING PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
void swap(int*,int*);
void main()
{
int i,j,n,a[20];
printf("Enter the value of n :");
scanf("%d",&n);
for(i=0;i<n;i++)
{
printf("Enter number %d : ",i+1);
scanf("%d",&a[i]);
}
printf("\nArray before sorting are : ");
for(i=0;i<n;i++)
{
printf("%d ",a[i]);
}

for (i = 0; i < n-1; i++)
{
for (j = 0; j < n-i-1; j++)
{
if (a[j] > a[j+1])
swap(&a[j], &a[j+1]);
}
}

printf("\nArray after sorting are : ");
for(i=0;i<n;i++)
{
printf("%d ",a[i]);
}
return 0;
}
void swap(int *x,int *y)
{
int temp;
temp=*x;
*x=*y;
*y=temp;
}
```
