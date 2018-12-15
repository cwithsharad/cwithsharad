---
title: WRITE A PROGRAM TO ENTER NAME, MARKS AND PERCENTAGE OF A STUDENT USING STRUCTURE
  AND PRINT THEM.
date: 2018-03-13 17:26:09 Z
categories:
- C LANGUAGE PROGRAMS
- STRUCTURE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
#include<conio.h>
struct a
{
char n[10];
int m;
float p;
};
struct a k[2];
void main()
{
int i;
for(i=0;i<2;i++)
{
printf("Enter the name :");
scanf("%s",k[i].n);
printf("Enter the Marks : ");
scanf("%d",&k[i].m);
printf("Enter the percentage : ");
scanf("%f",&k[i].p);
}
printf("\nNAME\t\tMARKS\t\tPERCENTAGE\n");
for(i=0;i<2;i++)
{
printf("\n%s\t\t%d\t\t%2.2f",k[i].n,k[i].m,k[i].p);
}
getch();
}
```
