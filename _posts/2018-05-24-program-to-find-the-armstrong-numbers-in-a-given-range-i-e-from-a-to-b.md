---
title: PROGRAM TO FIND THE ARMSTRONG NUMBERS IN A GIVEN RANGE i.e. FROM a to b
date: 2018-05-24 17:55:36 Z
categories:
- ARRAY PROGRAMS
- BASIC PROGRAMS
- C LANGUAGE PROGRAMS
- C++ LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
void main()
{
int i,j,sum,a,b,rem,num;
printf("Enter the starting of range : ");
scanf("%d",&a);
printf("Enter the ending of range : ");
scanf("%d",&b);
printf("RANGE : %d to %d\nARMSTRONG NUMBERS : ",a,b);
for(i=a;i<=b;i++)
{
sum=0;
num=i;
while(num>0)
{
rem=num%10;
sum=sum+rem*rem*rem;
num=num/10;
}
if(sum==i)
printf("%d ",i);
}

return 0;
}
```
