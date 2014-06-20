### Only Follow these instructions if you want a clean and fully up-to-date setup:

https://github.com/hakimel/reveal.js/#full-setup

For our purposes, since I've moved all the reveal.js boilerplate library code into it's own directory `(talks/reveal.js)`, we'll just copy the last talk and doing some quick manual updates to the directory names and the `index.html`. Each talks directory really only needs an `img/` directory and an `index.html` file

### Create a new talk using the Reveal JS template:

1. Copy/Paste the latest talk directory and we'll just do manual updates from here because things like global CSS and themes are already setup

2. Update Title/Author/Description

    ```html
    <title>{{title}} | Alex DiLiberto</title>
    <meta name="description" content="{{description}}">
    <meta name="author" content="Alex DiLiberto">
    ```

3. Tweak the custom CSS block
    
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

4. Begin working on the slides content
