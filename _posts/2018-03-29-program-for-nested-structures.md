---
title: PROGRAM TO ENTER THE TOTAL NUMBER OF CLASSES IN A SCHOOL AND THEN ENTER THE
  STRENGTH OF CLASS AND THE ENTER THE ROLL NUMBER AND NAME OF STUDENTS AND PRINT THEM,
  USING NESTED STRUCTURES.
date: 2018-03-29 14:15:08 Z
categories:
- C LANGUAGE PROGRAMS
- STRUCTURE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
#include<conio.h>
struct school
{
int s;       
//For declaring the number of classes in the school that is equal to tc.s
struct class
{
int strength;     
//For declaring the number of students in the respective class
struct students     
//structure for the details of tc.no[i].strength of students
{
char name[20];
int r;
}s[100];    
 //structure variable for s[tc.no[i].strength] of students
}no[15];
};
struct school tc;
void main()
{
int i,j;
printf("Enter the total no. of classes : ");
scanf("%d",&tc.s);
for(i=0;i<tc.s;i++)
{
printf("\nEnter the number students in class %d : ",i+1);
scanf("%d",&tc.no[i].strength);
printf("\n");
for(j=0;j<tc.no[i].strength;j++)
{
printf("Enter the roll no of student %d : ",j+1)
scanf("%d",&tc.no[i].s[j].r);
printf("Enter the name of student %d : ",j+1);
scanf("%s",&tc.no[i].s[j].name);
}
}
for(i=0;i<tc.s;i++)
{
printf("DETAILS OF STUDENTS OF  CLASS %d ARE \n\n",i+1);
printf("\tROLL NO\t\t\tNAME\n");
for(j=0;j<tc.no[i].strength;j++)
{
printf("\t%d\t\t\t%s\n",tc.no[i].s[j].r,&tc.no[i].s[j].name);
}
printf("\n");
}
getch();
}

 


![structnest.png](https://cwithsharad.files.wordpress.com/2018/03/structnest.png)

 
```
