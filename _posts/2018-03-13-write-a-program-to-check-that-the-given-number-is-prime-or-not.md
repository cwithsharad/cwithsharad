---
title: Write a program to check that the given number is prime or not.
date: 2018-03-13 16:58:25 Z
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

int number,x;

clrscr();

printf("Enter the number : ");

scanf("%d",&number);

for(x=2;x<=number-1;x++)

{

if(number%x==0)

{

printf("\n %d is not a prime number.",number);

break;

}

}

if(x==number)

printf("\n %d is a prime number.",number);

getch();

}
```
