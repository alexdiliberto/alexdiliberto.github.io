### Don't forget when creating new slides

1. Update Title/Author/Description

```html
  <title>{{title}} | Alex DiLiberto</title>
  <meta name="description" content="{{description}}">
  <meta name="author" content="Alex DiLiberto">
```

2. Tweak the custom CSS block
    
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
