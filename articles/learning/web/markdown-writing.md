---
layout: page
title: "Markdown"
header: "Markdown Introduction"
description: "An introduction on Markdown and how to use it."
tagline: "What it is, how to use it"
author: Nils Olsson
tags: [learning, web, markdown]
---
{% include JB/setup %}

When you click on a link to check a website, that website sends back HTML and your browser renders it. All content on the web is dispatched via HTML; it would be a major hassle to write all that content in HTML directly.

Thankfully there's many ways to not have to write HTML directly. One popular method is the Markdown language, and we can use it on this site to write content.

Markdown
--------

The underlying philosophy is that a Markdown (MD) file should be easy-to-read and publishable as is:
- is simple plain text
- not marked up with tags or formatting instructions
- just a text file
- uses punctuation for syntax (no tags)

A good example is the unordered list I just made. In HTML it would look like this:

```HTML
<ul>
	<li>is simple plain text</li>
	<li>not marked up with tags or formatting instructions</li>
	<li>just a text file</li>
	<li>uses punctuation for syntax (no tags)</li>
</ul>
```

...While  in Markdown looks like this:
```Markdown
- is simple plain text
- not marked up with tags or formatting instructions
- just a text file
- uses punctuation for syntax
```

Another good example are tables:

```Markdown
Description 	  | HTML			 | Markdown
:---			  | :---:			 | :---:
Header 1		  | <h1>			 | `=` underline OR
				  |					 | `#`
Header 2		  | <h2>			 | `-` underline OR
				  |					 | `##`
Header 3, 4, 5, 6 | <h3>, <h4>, etc. | `###`, `####`, etc.
```

The output can be seen below. I wont bother showing the HTML for this, half because its messy and half because personally I don't even know enough HTML to make this off the top of my head in HTML.

Here's table of a few HTML formatting tags and their Markdown equivalents:

Description 	  | HTML			 | Markdown
:---			  | :---:			 | :---:
Header 1		  | <h1>			 | `=` underline OR
				  |					 | `#`
Header 2		  | <h2>			 | `-` underline OR
				  |					 | `##`
Header 3, 4, 5, 6 | <h3>, <h4>, etc. | `###`, `####`, etc.
Italics			  | <i>				 | `*`
Bold			  | <b>				 | `**`
Underline 		  | <u>				 | `_`
Unordered list	  | <ul><li>		 | `-` OR `*` OR `+`
Ordered list      | <ol><li>		 | `1.`, `2.`, etc.
Blockquote		  | <blockquote>	 | `> `

For a full list of Markdown's formatting features you'll want to read over the [Daring Fireball: Mardown: Syntax](http://daringfireball.net/projects/markdown/syntax) page.

Hopefully this gives you a good idea of both the capabilities of Markdown and its convenience.

Markdown in Jekyll
------------------

This site uses Jekyll, a static website engine. Content on our website is served by converting Markdown files to HTML files, and to know what to convert Jekyll requires we use a YML header.

For example, the header for this page is:
```YML
---
layout: page
title: "Writing in Markdown"
description: "What Markdown is and how to create content with it."
tagline: "What it is, how to use it"
author: Nils Olsson
tags: [learning, web, site]
---
```

This tells the engine that it should convert it from Markdown to HTML, and tells it all of the pertinent information about the page. How to know what information to put in the header and what we can then do with that information is complicated, so for now just stick with an example header and include `layout: page`, `title: `, `description: `, *(optional)* `tagline: `, *(optional)* `author: `, *(doesn't do anything yet)* `tags: [ , ]`.
