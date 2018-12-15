---
title: Write a program to find that the numbers is Armstrong or not
date: 2018-03-13 16:59:12 Z
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

int number,a=0,rem,num;

clrscr();

printf("Enter the number : ");

scanf("%d",&number);

num=number;

while(number>0)

{

rem=number%10;

a=a+(rem*rem*rem);

number=number/10;

}

if(num==a)

printf("%d is an Armstrong number",num);

else

printf("%d is not an Armstrong number",num);

getch();

}
```
