#Contribution Guide

If you're a member of SDCR and would like to contribute to the project, 
please make sure you understand the basics of the Github Fork and Pull workflow, 
as well as how Jekyll sites are set up. 

##Git Process

To get a better understanding of Git and the process we'll be using, check out these guides:

https://guides.github.com/ - general GitHub guides
https://gist.github.com/Chaser324/ce0505fbed06b947d962 - a good rundown on the Fork and Pull workflow

We will be using the Fork and Pull workflow. While you should read the guides, the key points are:

- Fork the repo (click the Fork button)
- Clone your Fork onto your local computer, somewhere you can work on it. Assuming you have git, 
in your terminal/command window, navigate to the folder you'd like to use, then type:

```
git clone YOUR_FORK_URL FOLDER_NAME
```

- Check out a branch:

```
git -b checkout BRANCH_NAME
```

Do NOT work on master - you won't harm anything because you'll have to do a pull request to merge 
it with the live site, but it's best to get in the habit of making a new branch and working off that.

- Make your changes in an editor (I prefer VSCode, but there are tons of good ones out there)
- Add and commit your changes:

```
git add . 
git commit -m "COMMENT OF WHAT YOU DID"
```

- Push your changes:

```
git push origin BRANCH_NAME
```

- Once you have pushed to your Fork, you'll go to GitHub and do a Pull Request so 
that your code can be reviewed and then merged into the main project

##Jekyll

https://jekyllrb.com/docs/home/ 

You'll need to install Ruby before installing Jekyll. Jekyll is a static site generator 
that works wonderfully with GitHub Pages. If you install it, you can make your own projects 
to really get a feel for it before diving into ours. You'll need to install it if you want to 
actually test your changes to our project as you make them. Once installed, use terminal to 
navigate to the project folder (cloned above using Git), then type 

```jekyll serve``` 

to launch your local server.
