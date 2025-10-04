---
date: "2015-03-20T00:00:00Z"
description: This is my simple development process describing how to setup each of your Ember applications against dedicated branches for Ember Release, Ember Beta, and Ember Canary
title: 'PSA: Test Your Ember Apps Against Beta and Canary'
categories: programming
tags:
  - ember
---

A couple of weeks ago, I returned home from another amazing week in Portland attending [EmberConf](https://www.emberconf.com/). This was my second straight year attending the conference and it lived up to each and every one of my high expectations set from last years experience. I cannot give enough praise to [Leah](https://github.com/wifelette) and the people behind the scenes who put in all the work to flawlessly assemble such a massive event.

Among all of the interactions, talks, and technical discussions, one of my biggest takeaways was actually something that turns out to be quite small but has paid off tremendously for all of my Ember applications. I was a developer who would simply live on the latest Ember Release build and just update as needed when the next minor release version was tagged.

My new development process involves a very simple system where I have a dedicated branch in git for each application set up against [Ember Release](https://emberjs.com/releases/), [Ember Beta](https://emberjs.com/releases/beta/), and [Ember Canary](https://emberjs.com/releases/canary/).

```bash
$ git branch
* my-app-ember-release
  my-app-ember-beta
  my-app-ember-canary
```

You may now setup your own syncing timetable for the three branches. At the end of the day or the end of the week simply sync changes up the chain from your Release branch into your Beta branch and finally into your Canary branch. Every branch of your project will contain the same code, with each newer branch containing all of the new and shiny toys specific to that version of Ember. For example, In my Beta branches, I went through and updated my templates to [Bound Attribute Syntax](https://blog.emberjs.com/ember-1-10-0-released/#toc_bound-attribute-syntax) all the things *(at the time of this writing - `1.11.0-beta.5`)*. Don't forget to keep your `bower.json` and `package.json` files up to date with the latest dependencies corresponding to each branch version.

This new setup not only helps me, but ends up helping the Ember community as a whole. Now I can see well ahead of time if there is anything coming down the Ember pipeline which will have any impact on my application. I can submit Pull Requests to my upstream dependencies regarding any breaking changes. I can also submit issue reports for any bugs or regressions that I encounter.

This is a PSA and a call to all Ember developers - Test your Ember applications against Beta and Canary. **A little extra effort by many will help us go a long way as a whole!**
