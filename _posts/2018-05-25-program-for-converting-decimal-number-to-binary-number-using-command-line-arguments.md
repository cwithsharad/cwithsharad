---
title: PROGRAM FOR CONVERTING DECIMAL NUMBER TO BINARY NUMBER USING COMMAND LINE ARGUMENTS.
date: 2018-05-25 09:38:07 Z
categories:
- C LANGUAGE PROGRAMS
- COMMAND LINE ARGUMENTS PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
#include<string.h>
int main(int argc[],char *argv[])
{
int num[20],rem,x,i=0,binary[20],count=0;
x=atoi(argv[1]);
while(x!=0)
{
rem=x%2;
x=x/2;
num[i]=rem;
i++;
}
i=i-1;
printf("Binary equivalent : \n");
while(i>=0)
{
printf("%d",num[i]);
i--;
}
return 0;
}
```
