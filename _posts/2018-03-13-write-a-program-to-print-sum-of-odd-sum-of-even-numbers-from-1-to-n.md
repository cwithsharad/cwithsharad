---
title: Write a program to print sum of odd & sum of even numbers from 1 to n.
date: 2018-03-13 16:57:20 Z
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

int even_sum=0,odd_sum=0,n,i;

clrscr();

printf("Enter the value of n : ");

scanf("%d",&n);

for(i=1;i<=n;i++)

{

if(i%2==0)

even_sum=even_sum+i;

else

odd_sum=odd_sum+i;

}

printf("\nSum of even numbers : %d",even_sum);

printf("\nSum of odd numbers : %d",odd_sum);

getch();

}
```
