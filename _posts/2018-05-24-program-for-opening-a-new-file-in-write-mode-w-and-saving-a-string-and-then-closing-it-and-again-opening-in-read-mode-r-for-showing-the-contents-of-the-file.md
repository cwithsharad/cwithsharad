---
title: PROGRAM FOR OPENING A NEW FILE IN WRITE MODE (w) AND SAVING A STRING AND THEN
  CLOSING IT AND AGAIN OPENING IN READ MODE (r) FOR SHOWING THE CONTENTS OF THE FILE
date: 2018-05-24 18:02:20 Z
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
#include <stdlib.h>
int main()
{
FILE *fp1;
char new_file[20],old_file[20],string[30];
printf("Enter the file name to create the file : ");
scanf("%s",&new_file);
fp1=fopen(new_file,"w");
if (fp1==NULL)
{
printf("\nCannot open file %s \n", new_file);
exit(0);
}
printf("\nEnter any string: ");
fscanf(stdin,"%s",&string);
fprintf(fp1,"%s\n",string);
fclose(fp1);
fflush(stdin);
printf("\nFile pointer was closed and reopened in read mode!");
printf("\n\nEnter the name of the file to open :");
scanf("%s",&old_file);
fp1=fopen(old_file,"r");
if (fp1==NULL)
{
printf("\nCannot open file %s \n", old_file);
exit(0);
}
printf("\nCONTENTS OF FILE ARE \n\n");
fscanf(fp1,"%s",&string);
fprintf(stdout,"%s\n",string);
fclose(fp1);
return 0;
}
```
