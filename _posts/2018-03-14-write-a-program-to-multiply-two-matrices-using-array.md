---
title: Write a program to multiply two matrices  using array.
date: 2018-03-14 12:00:43 Z
categories:
- ARRAY PROGRAMS
- C LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
#include<conio.h>
void main()
{
int a[10][10], b[10][10], c[10][10], r1, c1, r2, c2, i, j, k;
printf("Enter rows and column for first matrix: ");
scanf("%d %d", &r1, &c1);

printf("Enter rows and column for second matrix: ");
scanf("%d %d",&r2, &c2);

if(c1==r2)

{

printf("\nEnter elements of matrix A \n");
for(i=0; i<r1; i++)
for(j=0; j<c1; j++)
{
printf("A%d%d: ",i+1, j+1);
scanf("%d", &a[i][j]);
}

printf("\nEnter elements of matrix B \n");
for(i=0; i<r2; i++)
for(j=0; j<c2; j++)
{
printf("B%d%d: ",i+1, j+1);
scanf("%d",&b[i][j]);
}

for(i=0; i<r1; i++)
for(j=0; j<c2; j++)
{
c[i][j] = 0;
}

for(i=0; i<r1; i++)
for(j=0; j<c2; j++)
for(k=0; k<c1; k++)
{
c[i][j]+=a[i][k]*b[k][j];
}

printf("\nC =A X B\nC = \n");
for(i=0; i<r1; i++)
for(j=0; j<c2; j++)
{
printf("%d\t",c[i][j]);
if(j == c2-1)
printf("\n\n");
}
}
else
printf("These matrices cannot be multiplied since c1 is not equal to r2 .");
getch();
}


**OUTPUT:-**

 


![matmul](https://cwithsharad.files.wordpress.com/2018/03/matmul.png)

 ###OR


**ANOTHER CODE (EASIER) FOR CALCULATING MULTIPLICATION IS :**

#include<stdio.h>
#include<conio.h>
void main()
{
int a[10][10], b[10][10], c[10][10],i, j, k, s;
clrscr();
printf("\nEnter elements of matrix A \n");
for(i=0; i<3; ++i)
{
for(j=0; j<3; ++j)
{
printf("A%d%d: ",i+1, j+1);
scanf("%d", &a[i][j]);
}
}
printf("\nEnter elements of matrix B \n");
for(i=0; i<3; ++i)
{
for(j=0; j<3; ++j)
{
printf("B%d%d: ",i+1, j+1);
scanf("%d",&b[i][j]);
}
}
for(i=0;i<3;i++)
{
for(j=0;j<3;j++)
{
s=0;
for(k=0;k<3;k++)
{
s=s+a[i][j]*b[k][j];
}
c[i][j]=s;
}
}
for(i=0;i<3;i++)
{
for(j=0;j<3;j++)
{
printf("%d\t",c[i][j]);
}
printf("\n");
}
getch();
}


**OUTPUT:-**


![Capture](https://cwithsharad.files.wordpress.com/2018/03/capture.png)

 
```
