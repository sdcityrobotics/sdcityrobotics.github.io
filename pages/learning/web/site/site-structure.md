---
layout: page
title: "Site Structure"
description: "Introduction to the underlying site scafolding."
tagline: "The underlying site scafolding"
author: Nils Olsson
---
{% include JB/setup %}

Site structure

### \_includes
This folder contains partial content or code to be *included* by other files. Currently this folder houses all of the Jekyll Bootstrap templating elements and theme HTML layouts.

	.
	|-- _includes
		|-- css
		|-- JB
		|-- themes
			|-- sdcr
				|-- default.html
				|-- page.html
				|-- posts.html
				|-- settings.html
