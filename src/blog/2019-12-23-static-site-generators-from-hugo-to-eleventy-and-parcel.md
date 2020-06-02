---
slug: static-site-generators-from-hugo-to-eleventy-and-parcel
title: "Static Site Generators: from Hugo to Eleventy and Parcel"
---
For years, Hugo was my go-to static site generator. Lately, however, I have been experimenting with Eleventy and Parcel. I ended up liking this quite a bit, so much so that this blog is now officially powered by Eleventy and Parcel.
<!-- excerpt -->

## [Hugo]
This site, as well as my hibernating travel blog [markmyjourney.com][1] have relied on Hugo for years. Over time, Hugo matured and now offers an extremely fast and powerful static site generator. With recent releases adding support for a basic asset pipeline, Hugo is a one-stop-shop.

However, as a JavaScript enthusiast, I am used to Node.js and its npm ecosystem. Hugo, written in Go, does not shine when it comes to adding custom functionality. Therefore, I was often left frustrated that I wasn't able to achieve something as easy as I was used to in JavaScript.

For example, Hugo lacks _multiple_ template inheritance. Out of the box, Hugo relies on Go's [html/template][2], and its implementation is limited to extending a single master template. For a site using different layouts for different pages, this quickly becomes a problem. Hugo does support other templating options, like Ace and Amber, but neither has seen any updates in two years. Using a different templating library, assuming it's written in or ported to Go, is not possible out of the box.

## [Eleventy] and [Parcel]
My desire to move my static sites back to Node.js never really went anywhere; I tried post-processing Hugo with [webpack], but its lack of support for HTML as entry points did make this very cumbersome. There's a [GitHub issue][3] going back 5 years, so I'm not holding my hopes up too high this will be resolved any time soon.

Then, I ran into Eleventy: <cite>a simpler static site generator</cite> that is rapidly increasing in popularity. I started playing around, and indeed, it is pretty simple. It does not offer any asset pipeline but does allow you to customize a whole bunch. And thanks to the npm ecosystem, it's as easy as adding a module to your project, writing a filter or plugin, and off you go.

That's great, but that still left one big part of the puzzle unsolved: how do I nicely bundle, hash, and minify my assets? Enter Parcel: <cite>a zero configuration web application bundler</cite> (although Parcel 2, currently in beta, does seem to have configuration options).

By taking the content generated using Eleventy, and post-processing it with Parcel, my static sites are generated entirely using Node.js, and any images, styles, and scripts are optimized using Parcel. It is a bit tricky to get Eleventy and Parcel to play nice in a development set-up, and therefore I created [eleventy-parcel-boilerplate][4], a GitHub template repository.

## What's next?
It's not all sunshine and rainbows; Parcel's watcher often gets [overwhelmed][5] with the number of file changes, causing the development server to hang. Parcel 2 supposedly fixes this issue, so I'm slowly exploring options to use its beta version.

Going forward I will move over all my static sites to Eleventy and Parcel. Both projects are actively maintained, and therefore I expect to see great things in the future. And, if it comes to it, the barrier to open a PR against upstream is a little lower given these projects are written using JavaScript rather than Go.

[Eleventy]: https://www.11ty.dev/
[Hugo]: https://gohugo.io/
[Parcel]: https://parceljs.org/
[webpack]: https://webpack.js.org/
[1]: https://www.markmyjourney.com/
[2]: https://golang.org/pkg/html/template/
[3]: https://github.com/webpack/webpack/issues/536
[4]: https://github.com/vseventer/eleventy-parcel-boilerplate
[5]: https://github.com/parcel-bundler/parcel/issues/2727
