---
title: Write a program to print the name of the day using the switch statement.
date: 2018-03-13 16:53:51 Z
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
int day;

clrscr();

printf(“Enter the number of day : “);

scanf(“%d”,&day);

switch (day)

{

case 1:

{

printf(“SUNDAY”);

break;

}

case 2:

{

printf(“MONDAY”);

break;

}

 

case 3:

{

printf(“TUESDAY”);

break;

}

case 4:

{

printf(“WEDNESDAY”);

break;

}

case 5:

{

printf(“THURSDAY”);

break;

}

case 6:

{

printf(“FRIDAY”);

break;

}

case 7:

{

printf(“SATURDAY”);

break;

}

 

default:

{

printf(“Wrong choice.”);

}

getch();

}
```
