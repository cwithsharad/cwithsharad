---
title: Write a program to find greater number between three numbers.
date: 2018-03-13 16:46:58 Z
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

int a,b,c;

clrscr();

printf(“enter any three numbers : “);

scanf(“%d%d%d”,&a,&b,&c);

if(a>b)

{

if(a>c)

{

printf(“%d is greatest number”,a);

}

else

{

printf(“%d is the greatest number”,c);

}

}

else if(b>a)

{

if(b>c)

{

printf(%d is the greatest number”,b);

}

else

{

printf(“%d is the greatest number”,c);

}

}

getch();

}
```
