# How To Contribute

## Install and serve locally

```sh
$ gem install jekyll jekyll-sitemap jemoji
$ git clone git@github.com:alexdiliberto/alexdiliberto.github.io.git
$ cd alexdiliberto.github.io
$ bundle install
$ bundle exec jekyll serve -w -D -I

# => Open [http://localhost:4000](http://localhost:4000)
```

### Test locally on a mobile device

```sh
$ bundle exec jekyll serve --host=0.0.0.0

# => Open on your mobile device http://192.168.X.X:4000
```

### Update `github-pages` dependencies

https://github.com/github/pages-gem#updating

```sh
$ bundle update github-pages
```

### Help

Basic `rbenv` troubleshooting:
https://github.com/rbenv/rbenv/issues/938#issuecomment-285342541

For more information about how to setup you local development environment, visit:
https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/
