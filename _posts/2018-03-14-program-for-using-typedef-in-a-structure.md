---
title: PROGRAM FOR USING TYPEDEF IN A STRUCTURE.
date: 2018-03-14 16:45:36 Z
categories:
- C LANGUAGE PROGRAMS
- STRUCTURE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
#include<conio.h>
typedef struct student
{
char n[10];
int marks;
}status;
void main()
{
status record;
int i;
printf("Enter the name :");
scanf("%s",record.n);
printf("Enter the Marks : ");
scanf("%d",&record.marks);
printf("\nNAME\t\tMARKS\n");
printf("\n%s\t\t%d",record.n,record.marks);
getch();
}


**OUTPUT :- **


![STRUCT (2).PNG](https://cwithsharad.files.wordpress.com/2018/03/struct-2.png)
```
