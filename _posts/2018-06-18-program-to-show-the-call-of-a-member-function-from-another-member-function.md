---
title: PROGRAM TO SHOW THE CALL OF A MEMBER FUNCTION FROM ANOTHER MEMBER FUNCTION
date: 2018-06-18 14:24:56 Z
categories:
- BASIC OOPS PROGRAMS
- C++ LANGUAGE PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include<iostream>
class test
{
int x;

public:
void funs(void)
{
tell();
}
void tell(void)
{
std::cout << "hello fun in fun" << '\n';
}

};
test t;
int main(int argc, char const *argv[]) {
t.funs();
return 0;
}
```
