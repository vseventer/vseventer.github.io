---
slug: static-site-generators-eleventy-and-webpack-part-2
title: "Static Site Generators: Eleventy and webpack (Part 2)"
---
[Previously][blog-part-1], I wrote about moving this very blog from Hugo to Eleventy and Parcel. Now that I've had a few months to experiment, I have decided to move away from Parcel and go with good ol' webpack instead.

[blog-part-1]: {% link "blog/2019-12-23-static-site-generators-from-hugo-to-eleventy-and-parcel.md" %}
<!-- excerpt -->

## I tried, Parcel, I tried
[Parcel] advocates being a <cite>a zero configuration web application bundler</cite>. However, the project appears to be in limbo between versions 1 and 2, neither of which are currently working to my satisfaction. The first does not receive any feature additions anymore, yet the latest beta for version 2 dates back to November 2019.

Parcel 1 is unusable to me given its unstable watcher which, when paired with Eleventy's watcher, constantly breaks down. I tried relying on Parcel's beta version but found it far from being feature-complete. I might get back on this train when Parcel 2 implements and offers:

* Source maps for non-JavaScript assets,
* More than just the default custom resolvers and namers,
* Responsive image support.

Yes, I get it, I'm pretty demanding. However, as I am planning to build a couple of static websites in the near future, I want to set myself up for success, and not be irritated by my boilerplate all the time.

## Getting back to webpack
I mentioned in [part 1][blog-part-1] I attempted to use [webpack] to process HTML files back in the day. However, contrary to Parcel, webpack does actually have a somewhat consistent release schedule. And since I first experimented with webpack, a lot has changed.

By combining webpack's html-, extract-, and file-loader, I was able to get things up and running pretty smoothly. I ran into some issues with webpack aliases, but nothing a [PR or two](https://github.com/peerigon/extract-loader/pulls?q=is%3Apr+author%3Avseventer) can't fix. After figuring out how to spawn my JavaScript assets separately from webpack's bundle, the foundation was all set.

From here, adding loaders for fonts and images, plugins for optimizations, and adapting the asset build name pattern a little bit I end up with a pretty solid build system: **[eleventy-webpack-boilerplate](https://github.com/vseventer/eleventy-webpack-boilerplate)**.

## The One Constant: Eleventy
This whole post didn't mention [Eleventy] once. That is because, ever since I started using it, it has been nothing but bliss. Everything works as expected, is documented properly, and is dead-easy to customize by adding a module or two. And with recent additions, like its [Navigation Plugin](https://www.11ty.dev/docs/plugins/navigation/), things couldn't be better.

I am really looking forward to building more complex static sites with my current set-up. I am curious to see how things will work together once I am storing assets on a CDN, edit my content in [Forestry](https://forestry.io/), and deploy using [Netlify](https://www.netlify.com/) or the like.

[Eleventy]: https://www.11ty.dev/
[Parcel]: https://parceljs.org/
[webpack]: https://webpack.js.org/
