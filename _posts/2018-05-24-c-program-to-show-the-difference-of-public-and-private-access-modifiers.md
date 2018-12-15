---
title: C++ PROGRAM TO SHOW THE DIFFERENCE OF PUBLIC AND PRIVATE ACCESS MODIFIERS
date: 2018-05-24 17:43:16 Z
categories:
- BASIC OOPS PROGRAMS
- C++ LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
**private**
 - Only the current class will have access to the field or method.


**protected**
 - Only the current class and subclasses (and sometimes also same-package classes) of this class will have access to the field or method.


**public**
 - Any class can refer to the field or call the method.


**SYNTAX:-**

#include<iostream>
using namespace std;
class tenth
{
private:
string name;
public:
void setname(string x)
{
name = x;
}
string getname()
{
return name;
}
};
int main()
{
tenth ob1,ob2;
ob1.setname("hello");
cout<<ob1.getname();
}
```
