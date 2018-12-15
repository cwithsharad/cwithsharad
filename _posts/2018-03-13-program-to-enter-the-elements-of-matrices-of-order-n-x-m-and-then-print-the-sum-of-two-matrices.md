---
title: PROGRAM TO ENTER THE ELEMENTS OF MATRICES OF ORDER n x m and then PRINT THE 
  SUM OF TWO MATRICES
date: 2018-03-13 17:24:32 Z
categories:
- ARRAY PROGRAMS
- C LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
void main()
{
int a[5][5],a2[5][5],i,j,l,m,L,M;
printf("Enter the number of rows and column respectively in 1st matrix : ");
scanf("%d%d",&l,&m);
printf("\nEnter the number of rows and column respectively in 2nd matrix : ");
scanf("%d%d",&L,&M);
if(l==L&&m==M)
{
printf("\nFOR FIRST MATRIX A\n\n");
for(i=0;i<=l-1;i++)
{
for(j=0;j<=m-1;j++)
{
printf("A%d%d = ",i+1,j+1);
scanf("%d",&a[i][j]);
}
}

printf("\n\nFOR SECOND MATRIX B\n\n");
for(i=0;i<=L-1;i++)
{
for(j=0;j<M;j++)
{
printf("B%d%d = ",i+1,j+1);
scanf("%d",&a2[i][j]);
}
}

printf("\nMATRIX A IS\n\n");
for(i=0;i<=l-1;i++)
{
for(j=0;j<=m-1;j++)
{
printf("\t%d",a[i][j]);
}
printf("\n");
}

printf("\nMATRIX B IS\n\n");
for(i=0;i<=L-1;i++)
{
for(j=0;j<=M-1;j++)
{
printf("\t%d",a2[i][j]);

}
printf("\n");
}
printf("\nC = A + B\n\nC = ");
for(i=0;i<=L-1;i++)
{
for(j=0;j<=M-1;j++)
{
printf("\t%d",a[i][j]+a2[i][j]);

}
printf("\n");
}
}
else
printf("THESE MATRICES CANNOT BE ADDED");

getch();

}
```
