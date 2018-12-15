---
title: PROGRAM TO FIND THE H.C.F. OR G.C.D. OF TWO GIVEN NUMBERS USING RECURSION OF
  A FUNCTION.
date: 2018-05-24 16:56:03 Z
categories:
- BASIC PROGRAMS
- C LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
int max;
int hcf(int,int);
int main()
{
int a,b;
printf("Enter two numbers : ");
scanf("%d%d",&a,&b);
if(a>b)
max=a;
else
max=b;
printf("HCF of %d and %d is %d",a,b,hcf(a,b));
return 0;
}
int hcf(int x,int y)
{
if(x%max==0&&y%max==0) {
goto out; }
else
{
max--;
hcf(x,y); }
out:
return max; }
```
