---
title: PROGRAM TO ENTER THE ID, NAME AND SALARY OF  N EMPLOYEES AND CALCULATE HRA,
  DA, TA AND THE NET SALARY. HRA, DA AND TA ARE TO BE GIVEN AT THE BEGINING.
date: 2018-03-16 17:22:38 Z
categories:
- ARRAY PROGRAMS
- C LANGUAGE PROGRAMS
- STRUCTURE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include
#include
float H,D,T;
float NET=0;
float nsal(int);
struct employee
{
char id[10];
char n[10];
float s;
float net;
};
struct employee e[10];
void main()
{
int i,n;
float H1,D1,T1;
printf("Enter the number of employees : ");
scanf("%d",&n);
printf("Enter HRA, DA, TA respectively : ");
scanf("%f%f%f",&H,&D,&T);
H1=H;
D1=D;
T1=T;
for(i=0;i<n;i++)
{
printf("Enter details of employee %d :\n",i+1);
printf("ID : ");
scanf("%s",&e[i].id);
printf("NAME : ");
scanf("%s",&e[i].n);
printf("SALARY : ");
scanf("%f",&e[i].s);
}
printf("\n\nID\t\tNAME\t\tSALARY\t\tHRA\t\tDA\t\tTA\t\tNET SALARY\n");
for(i=0;i<n;i++)
{
e[i].net=nsal(e[i].s);
printf("\n%s\t\t%s\t\t%.2f\t\t%.2f\t\t%.2f\t\t%.2f\t\t%.2f",e[i].id,e[i].n,e[i].s,H,D,T,e[i].net);
H=H1;
D=D1;
T=T1;
NET=0;
}
getch();
}
float nsal(int salary)
{
NET=NET+(salary/H);
H=salary/H;
NET=NET+(H/D);
D=H/D;
NET=NET+(D/T);
T=D/T;
NET=NET+salary;
return NET;
}


**OUTPUT :-**


![structure employess.png](https://cwithsharad.files.wordpress.com/2018/03/structure-employess.png)
```
