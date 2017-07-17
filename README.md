<p align="center">
  <a href="https://alexdiliberto.com"><img src="https://github.com/alexdiliberto/alexdiliberto.github.io/raw/master/favicon-192x192.png" alt="alexdiliberto.com website favicon"></a>
</p>

<h1 align="center">Alex's Personal Website &amp; Blog</h1>

<p align="center">
  <a href="https://jekyllrb.com/"><img src="http://img.shields.io/badge/Built%20with-Jekyll-blue.svg" alt="Built with Jekyll"></a>
  <a href="http://en.wikipedia.org/wiki/MIT_License"><img src="http://img.shields.io/badge/license-MIT-blue.svg" alt="License MIT"></a>
</p>

<p align="center">
  <a href="https://alexdiliberto.com">Homepage</a>&nbsp;|&nbsp;
  <a href="https://twitter.com/alex_diliberto">Twitter</a>
</p>

### Lighthouse Score

![alexdiliberto.com lighthouse score](https://raw.githubusercontent.com/alexdiliberto/alexdiliberto.github.io/master/lighthouse-score.png)

### Instructions to begin local development:

```sh
$ gem install jekyll jekyll-sitemap jemoji
$ jekyll new myblog
$ cd myblog
$ bundle install
~/myblog $ bundle exec jekyll serve -w -D -I

# => Now browse to http://localhost:4000
```

### Instructions to test local environment on a mobile device:

```sh
~/myblog $ bundle exec jekyll serve --host=0.0.0.0

# => Now on the mobile device, browse to http://192.168.#.#:4000
```

### Configuration

#### HTTPS

HTTPS is now configured with [Cloudflare](https://www.cloudflare.com/a/overview/alexdiliberto.com)

#### Email

Email Forwarding is handled using [MailGun](https://app.mailgun.com)

#### Caching

CDN caching is currently enabled. Don't forget to ["Purge Everything"](https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/#step4cacheallthethings) after successfully deploying a new post.

#### Facebook Open Graph

Fetch new [Facebook Scrape Information](https://developers.facebook.com/tools/debug/og/object/)

### Help

https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/
