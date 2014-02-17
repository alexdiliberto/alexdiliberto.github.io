Follow these instructions:

https://github.com/hakimel/reveal.js/#full-setup


Updates:

1. Update Title/Author/Description

```html
<title>Alex DiLiberto | {{title}}</title>
<meta name="description" content='Presentation by Alex DiLiberto - "{{title}}"'>
<meta name="author" content="Alex DiLiberto">
```

2. Add custom CSS block

```html
    <!-- Alex's Global CSS -->
    <style>
      blockquote > footer { text-align: right }
      .bg-white { background-color: white !important; }
      .cf:before, .cf:after { content: " "; display: table; }
      .cf:after { clear: both; }
      .emphasis { color: #e7ad52; }
      ul ul { font-size: .8em !important; }
      .references { font-size: .6em !important; }
    </style>

    <!-- Presentation Specific CSS -->
    <style>
      .slide-3 ul { margin-bottom: 2em; }
      .slide-3 .img-tux { position: absolute; right: 20px; top: 20px; }
    </style>
```

3. Set my Theme

```html
<link rel="stylesheet" href="css/theme/night.css" id="theme">
```

4. Update Reveal initialization with my customizations

```js
    <script>

      // Full list of configuration options available here:
      // https://github.com/hakimel/reveal.js#configuration
      Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,
        rollingLinks: true,

        theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
        transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

        // Parallax scrolling
        // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
        // parallaxBackgroundSize: '2100px 900px',

        // Optional libraries used to extend on reveal.js
        dependencies: [
          { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
          { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
          { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
          { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
          { src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
          { src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
        ]
      });

    </script>
```

5. Remove unnecessary files

```sh
rm -rf .git LICENSE .travis.yml
```
