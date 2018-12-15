---
title: PROGRAM FOR FINDING OUT NUMBER OF LINES IN A FILE
date: 2018-05-24 17:58:15 Z
categories:
- C LANGUAGE PROGRAMS
- FILE HANDLING PROGRAMS
layout: post
---

#### PROGRAM CODE


```c
#include <stdio.h>
int main()
{
FILE *fp;
int count=0;
char fname[20],c_store;
printf("Enter the file name : ");
scanf("%s",fname);
fp = fopen(fname, "r");
if (fp==NULL)
{
printf("Cannot open file %s \n", fname);
exit(0);
}
c_store = getc(fp);
while (c_store != EOF)
{
if (c_store == '\n')
{
count++;
}
c_store = getc(fp);
}
fclose(fp);
printf("\nFILE NAME :%10s \nNUMBER OF LINES : %3d\n", fname, count);
return 0;
}
```
