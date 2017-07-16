---
layout: post
title: "Improved Web Font Loading with Font Events API"
date: 2015-04-26
assets:
  - /img/posts/2015-04-26-filmstrip-old.png
  - /img/posts/2015-04-26-filmstrip-new.png
categories: webfonts performance
description: Using the Font Load Events API to improve web font loading and eliminiate the dreaded Flash of Invisible Text
---

Last year when I created this site, I set out with the goal of performance as my top priority. Recently, I've noticed the dreaded ["Flash of Invisible Text"](https://css-tricks.com/fout-foit-foft/) (FOIT) when using certain browsers. I ran across Scott Jehl's article [Font Loading Revisited with Font Events](http://www.filamentgroup.com/lab/font-events.html) and decided to take his approach for a spin.

In the article, Scott mentions a few Font Load Event API polyfills. For my approach, I'm using Bram Stein's [FontFaceObserver](https://github.com/bramstein/fontfaceobserver) script.

```js
var OpenSans300 = new FontFaceObserver("Open Sans", { weight: 300 });
var OpenSans400 = new FontFaceObserver("Open Sans", { weight: 400 });
var OpenSans700 = new FontFaceObserver("Open Sans", { weight: 700 });

Promise.all([
  OpenSans300.check(),
  OpenSans400.check(),
  OpenSans700.check()
]).then(function() {
  document.documentElement.className += " fonts-loaded";
});
```

```scss
body {
  font-family: sans-serif;
}
.fonts-loaded body {
  font-family: 'Open Sans', sans-serif;
}
```

I tested with [WebPageTest](http://www.webpagetest.org/) in Chrome using a 3G connection from the Dulles, VA location. Here are the [before](http://www.webpagetest.org/video/compare.php?tests=150426_8B_PA9-r%3A1-c%3A0&thumbSize=200&ival=500&end=visual) and [after](http://www.webpagetest.org/video/compare.php?tests=150426_K4_PDX-r%3A1-c%3A0&thumbSize=200&ival=500&end=visual)
 results:

<div class="embed">
  <img src="{{ '/img/posts/2015-04-26-filmstrip-old.png' | prepend: site.baseurl }}" alt="Before: Web font loading with FOIT">
</div>

Here, on the slower 3G connection, you can clearly see the FOIT in the middle frames before the web font is loaded and rendered in the final frame.

<div class="embed">
  <img src="{{ '/img/posts/2015-04-26-filmstrip-new.png' | prepend: site.baseurl }}" alt="After: Improved web font loading without FOIT">
</div>

The web font is still rendered in the final frame but now the FOIT is all gone!
