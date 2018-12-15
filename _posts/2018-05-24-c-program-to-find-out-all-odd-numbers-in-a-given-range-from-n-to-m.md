---
title: C++ PROGRAM TO FIND OUT ALL ODD NUMBERS IN A GIVEN RANGE FROM n TO m
date: 2018-05-24 17:32:03 Z
categories:
- BASIC PROGRAMS OF C++
- C++ LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<iostream>
using namespace std;
int main()
{
int odd,i,n,m;
cout<<"ENTER THE VALUE OF n and m :";
cin>>n>>m;
cout<<"ODD NUMBERS FROM "<<n<<" AND "<<m<<" ARE\n"<<endl;
for(i=n;i<=m;i++)
{
if(i%2!=0)
cout<<i<<"\t";
}
return 0;
}
```
