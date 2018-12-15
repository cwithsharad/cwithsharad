---
title: Write a program that takes operands and one operator and perform the operation
  and print the result using switch statement or case.
date: 2018-03-13 16:54:45 Z
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
char oper;

int c,a,b;

clrscr();

printf(“Enter two numbers :”);

getch(“%d%d”,&a,&b);

printf(“Enter the operation to be performed : “);

scanf(“%c”,&oper);

switch (oper)

{

case ‘+’:

{

c=a+b;

printf(“ADDITION = %d”,c);

break;

}

 

 

case ‘-’:

{

c=a-b;

printf(“SUBSTRACTION = %d”,c);

break;

}

case ‘*’:

{

c=a*b;

printf(“MULTIPLICATION = %d”,c);

break;

}

case ‘/’:

{

c=a/b;

printf(“DIVISION = %d”,C);

break;

}

default:

{

printf(“Wrong choice.”);

}

getch();

}
```
