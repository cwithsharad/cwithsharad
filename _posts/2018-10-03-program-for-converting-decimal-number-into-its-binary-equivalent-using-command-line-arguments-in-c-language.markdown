---
title: Program for converting decimal number into its binary equivalent using COMMAND
  LINE ARGUMENTS in C Language
date: 2018-10-03 15:55:00 Z
layout: post
---

Command line argument is a parameter supplied to the program when it is invoked. Command line argument is an important concept in C programming. It is mostly used when you need to control your program from outside.

Command line arguments are passed to the main() method.

```c
// Syntax of main()
main(int argc, char *argv[])
```

#### PROGRAM

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

#### OUTPUT

```
C:\Users\Sharad Raj>binary.exe 4
Binary equivalent :
100
```
