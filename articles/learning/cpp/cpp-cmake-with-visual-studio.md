---
layout: page
title: "CMake with Visual Studio"
description: "A tutorial on how to generate Visual C++ solutions using CMake."
author: Nils Olsson
---
{% include JB/setup %}

# CMake with Visual Studio
In the few hours, before deciding to write this article, I learned from scratch how to use the CMake build tool to configure and generate visual studio solutions. The point of this being that source code, project configuration and building can all be separated: a huge bonus for cross-platform development, and especially developing across different environments (Windows, Linux, OS X).

## What is CMake?
> CMake is a family of tools designed to build, test and package software. CMake is used to control the software compilation process using simple platform and compiler independent configuration files. CMake generates native makefiles and workspaces that can be used in the compiler environment of your choice.

In layman's terms, a C++ software project with a single CMake instruction file can be made to compile across any number of operating system and any number of compiler environments.

## Example
Here we have the file structure for a project that simply prints "Hello, world!" in a terminal when run. The file `main.cpp` is the source file and the source file reside in the source directory `src`.

	.
	└── TestProject/
		├── src/
		│	└── main.cpp
		├── out/
		└── CMakeLists.txt

**main.cpp**
```
#include <cstdio>

int main(void)
{
	printf("Hello, world!\n");
	gethchar();
	return 0;
}
```
