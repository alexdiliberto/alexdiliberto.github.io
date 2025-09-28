<p align="center">
  <a href="https://alexdiliberto.com"><img src="https://raw.githubusercontent.com/alexdiliberto/alexdiliberto.github.io/main/static/android-chrome-192x192.png" alt="alexdiliberto.com website favicon"></a>
</p>

<h1 align="center">Alex's Personal Website &amp; Blog</h1>

<p align="center">
  <a href="https://gohugo.io/"><img src="http://img.shields.io/badge/Built%20with-Hugo-blue.svg" alt="Built with Jekyll"></a>
  <a href="http://en.wikipedia.org/wiki/MIT_License"><img src="http://img.shields.io/badge/license-MIT-blue.svg" alt="License MIT"></a>
</p>

<p align="center">
  <a href="https://alexdiliberto.com">Homepage</a>&nbsp;|
  <a href="https://x.com/alex_diliberto">X</a>&nbsp;|
  <a href="https://github.com/alexdiliberto">GitHub</a>&nbsp;|
  <a href="https://www.linkedin.com/in/alexdiliberto">LinkedIn</a>&nbsp;|
  <a href="mailto:hello@alexdiliberto.com">Email</a>
</p>

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## Configuration

### HTTPS

HTTPS is now configured with [Cloudflare](https://www.cloudflare.com/a/overview/alexdiliberto.com)

### Email

Email Forwarding is handled using [MailGun](https://app.mailgun.com)

### Caching

##### Cloudflare Cache

CDN caching is currently enabled. Cache is purged after each commit to main using the [Cloudflare Purge Cache](https://github.com/marketplace/actions/cloudflare-purge-cache) GitHub Action.

If, for some reason, you need to manually purge the cache, Login to Cloudflare and click ["Purge Everything"](https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/#step4cacheallthethings) after successfully deploying a new post or as needed.

#### Service Worker Cache
Don't forget to increment the `sw.js` Service Worker cache value after publishing new content

#### Facebook Open Graph

Fetch new [Facebook Scrape Information](https://developers.facebook.com/tools/debug/og/object/)
