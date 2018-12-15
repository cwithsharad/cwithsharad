---
title: PROGRAM TO FIND OUT PERFECT NUMBERS IN A GIVEN RANGE.
date: 2018-03-15 15:23:16 Z
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
int i,j,a,b,p,sum=0;
printf("Enter the starting of range : ");
scanf("%d",&a);
printf("Enter the ending : ");
scanf("%d",&b);
printf("\n\nRANGE : %d to %d\nPERFECT NUMBERS : ",a,b);
for(i=a; i<=b;i++)
{
p=1;
while(p<=(i/2))
{
if(i%p==0)
sum=sum+p;
p++;
}
if(sum==i)
printf("%d\t",i);
sum=0;
}
getch();
}
```
