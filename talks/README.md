### Create a new talk

https://github.com/hakimel/reveal.js#installation

1. Clone reveal.js `git clone https://github.com/hakimel/reveal.js.git`

2. Install dependencies `yarn`

3. Update Title/Author/Description

```html
  <title>{{title}} | Alex DiLiberto</title>
  
  <meta name="description" content="{{description}}">
  <meta name="author" content="Alex DiLiberto">
```

4. Update to use the `night` CSS theme

```html
<link rel="stylesheet" href="css/theme/night.css">
```

5. Tweak the custom CSS block

```html
  <!-- Alex's Global CSS -->
  <style>
    .slides { font-size: 75% !important; }
    blockquote > footer { text-align: right }
    .bg-white { background-color: white !important; }
    .cf:before, .cf:after { content: " "; display: table; }
    .cf:after { clear: both; }
    .emphasis { color: #e7ad52; }
    ul ul { font-size: .8em !important; }
    .references { font-size: .6em !important; }
    .embed-svg { display: inline-block; background-color: white; }
    .reveal section img .h-center { display: block; margin: auto; }
  </style>

  <!-- Presentation Specific CSS -->
  <style>
    .slide-3 ul { margin-bottom: 2em; }
    .slide-3 .img-tux { position: absolute; right: 20px; top: 20px; }
  </style>
```

6. Serve the presentation and monitor source files for changes `yarn start`
