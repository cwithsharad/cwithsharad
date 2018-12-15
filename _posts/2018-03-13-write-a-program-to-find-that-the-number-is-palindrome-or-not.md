---
title: Write a program to find that the number is palindrome or not
date: 2018-03-13 16:59:43 Z
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

int number,rev=0,rem,num;

clrscr();

printf(“Enter  the  number : ”);

scanf(“%d”,&number);

num=number;

while(number>0)

{

rem=number%10;

rev=(rev*10)+rem;

number=number/10;

}

if(rev==num)

printf(“\n %d is a Palindrome Number.”,num);

else

printf(“\n %d is not a Palindrome No.”,num);

getch();

}

 
```
