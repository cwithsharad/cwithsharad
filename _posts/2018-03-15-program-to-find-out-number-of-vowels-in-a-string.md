---
title: PROGRAM TO FIND OUT NUMBER OF VOWELS IN A STRING.
date: 2018-03-15 15:21:07 Z
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
    char s[20];
    int i,sum=0;
    printf("Enter the string : ");
    gets(s);
    for(i=0;i<20;i++)
    {
        if(s[i]=='a' || s[i]=='A' || s[i]=='i' || s[i]=='i' || s[i]=='E' || s[i]=='e' || s[i]=='O' || s[i]=='o' || s[i]=='U' || s[i]=='u')
            sum++;
    }
    printf("Number of vowels in %s are %d",s,sum);
    getch();
}
```
