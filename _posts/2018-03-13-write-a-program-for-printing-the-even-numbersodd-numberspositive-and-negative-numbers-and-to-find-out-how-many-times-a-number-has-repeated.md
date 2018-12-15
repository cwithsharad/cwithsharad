---
title: WRITE A PROGRAM  FOR PRINTING THE EVEN NUMBERS,ODD NUMBERS,POSITIVE AND NEGATIVE
  NUMBERS, AND TO FIND OUT HOW MANY TIMES A NUMBER HAS REPEATED.
date: 2018-03-13 17:22:49 Z
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
int a[100],large,i,n,number=0,sum=0;
printf("Enter the limit : ");
scanf("%d",&n);
//LOOP 1 IS FOR SCANINING THE NUMBERS
//LOOP 1 STARTED
for(i=0;i<=n-1;i++)
{
printf("Enter number %d :",i+1);
scanf("%d",&a[i]);
} //LOOP 1 ENDS

//LOOP 2 IS FOR PRINTING THE EVEN NUMBERS
//LOOP 2 STARTED
printf("\n\nTHESE NUMBERS ARE EVEN :-");
for(i=0;i<=n-1;i++)
{
if(a[i]%2==0)
printf(" %d ",a[i]);
}
//LOOP 2 ENDS

//LOOP 3 IS FOR PRINTING THE ODD NUMBERS
//LOOP 3 STARTED
printf("\n\nTHESE NUMBERS ARE ODD :-");

for(i=0;i<=n-1;i++)
{
if(a[i]%2!=0)
printf(" %d ",a[i]);
}
//LOOP 3 ENDS

 

//LOOP 4 IS FOR PRINTING THE POSITIVE NUMBERS
//LOOP 4 STARTED
printf("\n\nTHESE NUMBERS ARE POSITIVE :-");

for(i=0;i<=n-1;i++)
{
if(a[i]>=0)
printf(" %d ",a[i]);
}
//LOOP 4 ENDS

//LOOP 5 IS FOR PRINTING THE NEGATIVE NUMBERS
//LOOP 5 STARTED
printf("\n\nTHESE NUMBERS ARE NEGATIVE :-");

for(i=0;i<=n-1;i++)
{
if(a[i]<0)
printf(" %d ",a[i]);
}
//LOOP 5 ENDS

//NOW THE LOOP 6 BELOW IS FOR PRINTING THE LARGEST NUMBER AMONG ALL THE NUMBERS ENTERED IN THE ARRAY
//LOOP 6 STARTS
large=a[0]; //HERE 1ST ELEMENT OF ARRAY IS SUPPOSED AS THE LARGEST NUMBER.
for(i=1;i<=n-1;i++)
{
if(large<a[i]) // IN THE LOOP WE WILL CHECK THAT IS ANY NUMBER IS GREATER THAN THE LARGEST NUMBER WHICH IS SUPPOSED BEFORE THE STARTING OF LOOP
{
large=a[i];
}
} //LOOP 6 ENDS
printf("\n\n%d is largest number among all.",large);

//LOOP 7 IS FOR CHECKING HOW MANY TIMES A NUMBER IS REPEATED IN THE LOOP
printf("\n\nEnter a number to search how many times it's repeated :");
scanf("%d",&number);
for(i=0;i<=n-1;i++) //LOOP 7 STARTS
{
if(number==a[i])
sum++;
} //LOOP 7 ENDS
printf("\n%d is repeated %d times.",number,sum); // PRINTING THE NUMBER AND THE NUMBER OF TIMES IT IS REPEATED
getch();
}
```
