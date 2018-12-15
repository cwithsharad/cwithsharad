---
title: PROGRAM TO CONVERT LOWER CASE STRING TO UPPER CASE.
date: 2018-05-24 16:43:43 Z
categories:
- BASIC PROGRAMS
- C LANGUAGE PROGRAMS
- STRING PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
#include<string.h>
int main()
{
char s[20];
int i,sum=0;
printf("Enter the string in lower case: ");
gets(s);
strupr(s);
printf("String in UPPER case is : %s ",s);
return 0;
}
```
