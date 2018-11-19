---
layout: posts
title: "Contributing using github"
catagotries: [tutorial, code]
---

In order to contribute to Zoidberg code it is first necessary to get a Github account. This is simple to do at [Github](http://github.com/). This tutorial covers version control using the program git, which is a command line tool. There are other tools to to do the same thing which use a GUI, but they may use other workflows which could mess up the repository.

## Fork and Pull workflow

To get a better understanding of Git and the process we'll be using, check out these guides on the Fork and Pull workflow.

- [general GitHub guides](https://guides.github.com/)
- [a good rundown on the Fork and Pull workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962). This is the source of much of the information on this page.
- [Git stash](https://git-scm.com/book/en/v1/Git-Tools-Stashing)

The key points are used from these guides. In all cases the web page repository is used as an example, though this should work for any code repository with minor changes in names. Additionally, the dummy account *newuser* is used as a place holder. After you get your own github account, use your own account name in place of *newuser*.

## Fork the repository

- Do not work directly on the main code repository. This is any code owned by
  the username *sdcityrobotics*, i.e. [https://github.com/sdcityrobotics/sdcityrobotics.github.io](https://github.com/sdcityrobotics/sdcityrobotics.github.io)

- To edit code on the main repository, first fork the repo onto your own github
  account. Navigate to the code repository page that you are interested in. (Same link as above). Fork the repo (click the Fork button on the web page).

- After forking, there is a new repository in your github account. It is now
  possible to navigate to this new repository. *i.e.* [https://github.com/newuser/sdcityrobotics.github.io](https://github.com/newuser/sdcityrobotics.github.io)

- Clone your Fork onto your local computer, somewhere you can work on it. Where this
  is is a matter of choice, the user home folder is used in this example. The URL used in this example is found on *your* new repository web page. This is found by clicking on the **clone or download** button on this web page. The SSH version of this url is used in this example instead of the default HTTPS link, because it is simple to set up security keys and then no longer need to log in each time to commit code.

```
cd ~
git clone git@github.com:newuser/sdcityrobotics.github.io.git
```

This will create a new folder, sdcityrobotics.github.io, in the home folder. navigate into the new folder before doing anything else!

- Add the main repository as the upstream repository

```
# Add 'upstream' repo to list of remotes
git remote add upstream git@github.com:sdcityrobotics/sdcityrobotics.github.io.git

# Verify the new remote named 'upstream'
git remote -v
```

## Keeping your fork up to date

Before doing anything with your fork, it is important to make sure that it is up-to date. This is done by fetching from the upstream repository

```
# Fetch from upstream remote
git checkout master
git fetch upstream
git rebase upstream/master

# push these changes to you local repository
git push origin

# View all branches, including those from upstream
git branch -va
```

## Create a branch
From [Chaser324 guide](https://gist.github.com/Chaser324/ce0505fbed06b947d962):

> Whenever you begin work on a new feature or bug fix, it's important that you create a new branch. Not only is it proper git workflow, but it also keeps your changes organized and separated from the master branch so that you can easily submit and manage multiple pull requests for every task you complete.

- Check out a branch:

```
git -b checkout BRANCH_NAME upstream/master
git push --set-upstream origin BRANCH_NAME
```

It is really important to remember to work on the latest code (fetch from upstream) and create a branch before programming.

## Hacking time

You are free to hack away. It is nice if you can keep the things you work on to a minimum for each branch, *i.e* fix one problem on one branch, and add a new feature on another. Once you have begun to work on things it is harder to keep up with others work, and so this leads to the need for git stash.

- commit and push your changes:

```
# This shows you a list of all the changes made. If a new file is added, or if
# the name of a file has been changed, it is necessary to use the git add
# command
git status

git commit -am "COMMENT OF WHAT YOU DID"

git push origin
```

- Once you have pushed to your Fork, you'll go to GitHub and do a Pull Request so
that your code can be reviewed and then merged into the main project
