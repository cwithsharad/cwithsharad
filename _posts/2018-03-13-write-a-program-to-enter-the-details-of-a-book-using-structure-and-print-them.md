---
title: WRITE A PROGRAM TO ENTER THE DETAILS OF A BOOK USING STRUCTURE AND PRINT THEM.
date: 2018-03-13 17:28:43 Z
categories:
- C LANGUAGE PROGRAMS
- STRUCTURE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
#include<conio.h>
void main()
{
struct p
{
char title[20];
int price;
};
struct p book[10];
int i;
for(i=0;i<10;i++)
{
printf("Enter the title of BOOK %d : ",i+1);
scanf("%s",book[i].title);
printf("\nEnter the price : ");
scanf("%d",&book[i].price);
}
for(i=0;i<10;i++)
{

printf("\nBOOK NAME\t\tPRICE\n");
printf("%s\t\t%d\n",&book[i].title,book[i].price);
}
getch();

}
```
