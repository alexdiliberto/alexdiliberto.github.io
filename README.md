[![Built with Jekyll](http://img.shields.io/badge/Built%20with-Jekyll-blue.svg)](http://jekyllrb.com/)
[![License MIT](http://img.shields.io/badge/license-MIT-blue.svg)](http://en.wikipedia.org/wiki/MIT_License)
![alexdiliberto.com favicon](/favicon.ico) alexdiliberto.com
=================

### Information

* Source: [https://github.com/alexdiliberto/alexdiliberto.github.io](https://github.com/alexdiliberto/alexdiliberto.github.io)
* Homepage: [https://alexdiliberto.com](https://alexdiliberto.com)
* Twitter: [@alex_diliberto](http://twitter.com/alex_diliberto)

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

### HTTPS

HTTPS is now configured with Cloudflare 

https://www.cloudflare.com/a/overview/alexdiliberto.com

### Purge Cache

"Purge Everything" After successfully deploying a post 

https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/#step4cacheallthethings

### Fetch new Facebook Scrape Information

https://developers.facebook.com/tools/debug/og/object/

### Help

https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/
