---
title: PROGRAM TO FIND OUT PRIME NUMBERS IN A GIVEN RANGE.
date: 2018-03-15 15:22:20 Z
categories:
- BASIC PROGRAMS
- C LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include
#include
void main()
{
    int i,j,sum,a,b;
    printf("Enter the starting of range : ");
    scanf("%d",&a);
    printf("Enter the ending of range : ");
    scanf("%d",&b);
    printf("RANGE : %d to %d\nPRIME NUMBERS : ",a,b);
    for(i=a;i<=b;i++)
    {
        sum=0;
        for(j=2;j<=i/2;j++)
    {
        if(i%j==0)
        {
        sum++;
        break;
        }
    }
        if(sum==0&&i!=1)
        printf("%d ",i);
    }

    getch();
}
```
