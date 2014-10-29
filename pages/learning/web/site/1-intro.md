---
layout: page
title: "Site Introduction"
description: "An introduction to the site content and structure."
tagline: "Site content and structure"
author: Nils Olsson
---
{% include JB/setup %}

This article serves as an introduction to those looking to contribute to this website, be it adding content, or making new or improving existing Liquid templates---whatever. Anyone looking to learning a thing or two about static website development should benefit. In this page we will go over some concepts and in later articles go over specific tutorials on writing posts and pages.

## Forward

Adding content to the site is as simple as writing a text file. The repository structure may look big and daunting, but trust me when I say it isn't that bad. You just write text files and put them in the right place.

## Site structure

The top level (root) directory looks like this (note that anything without a suffix is a directory):

	.
	|-- _drafts
	|-- _includes
	|-- _layouts
	|-- _plugins
	|-- _posts
	|-- assets
	|-- pages
	|-- index.md

- **\_posts**
This folder contains dynamic content/posts; essential blog posts. The naming format `YEAR-MONTH-DATE-title` is required (e.g. `2014-10-28-site-published.md`).

- **pages**
This folder contains article content/pages. Pages content are not dated and are for more static or informative content (about pages, tutorials, etc.).

- **\_drafts**
This folder contains posts without dates, those that are still being worked on and aren't to be published yet. I don't expect this to be of much use except for template club update report posts or something.

Site content is stored primarily across these three directories; the others are more about site configuration, templates and content styling. See the the next article ([site structure](2-structure.html)) for more detail on these other directories.

## Content

The content of this site is composed entirely of HTML (pure or compiled from Markdown files), CSS and JavaScript. This page that you are currently reading resides as a Markdown (`.md`) file in the pages directory and was compiled into this HTML page. There is no server-side configuration, programming or databases. This definitely reduces the workload of anyone maintaining the site and allows us to focus on producing the content for the site.

This this site, creating content is as simple as editing a text file and putting it in the right folder. The only caveat is that the entirety of this website, content and all, resides within a Git repository on the GitHub servers. Thus if we want to make changes to any part of the site, we must commit our changes through Git. Thankfully because it's GitHub, files can be edited directly in the browser.

### Writing a post (blog)

1. Go the the [site repository](https://github.com/sdcityrobotics/sdcityrobotics.github.io)
2. Navigate to the **\_posts** directory
3. Click the plus symbol to the right of the directory path for "Create a new file here"
4. Give the file a name with the format `YEAR-MONTH-DATE-title.md`
5. In the content of the file, add the following header:

Yeah

	---
	layout: post
	title: "Some title"
	description: "Some description"
	category: blog
	tags: [blog, some_tag]
	---
	{% include JB/setup %}

There should probably only be one category, but any number of tags can be specified.

### Writing an page (article)

1. Go the the [site repository](https://github.com/sdcityrobotics/sdcityrobotics.github.io)
2. Navigate to the **pages** directory
