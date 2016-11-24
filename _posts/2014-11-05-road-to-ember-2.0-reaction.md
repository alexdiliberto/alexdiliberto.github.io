---
layout: post
title: "Road to Ember 2.0 Reaction"
date: 2014-11-05
categories: ember
description: This is my instant reaction to some of the highlights and changes proposed for Ember 2.0
---

<iframe
  width="178" height="24" style="border:0px"
  src="https://mixonic.github.io/ember-community-versions/2014/11/05/road-to-ember-2.0-reaction.html">
</iframe>

So I just finished reading the [Road to Ember 2.0 RFC](https://github.com/emberjs/rfcs/pull/15) which highlights the latest proposed updates for the next major version release - Ember 2.0. For those unfamiliar, the Ember <abbr title="Request For Comments">RFC</abbr> process is intended to provide a controlled pipeline for new features to enter the framework. This is vital tool where the entire community comes together to provide important and transparent feedback for individual feature proposals.

It is extremely refreshing to have a clear direction on the future of the framework with detailed transition instructions. The overarching theme here is *"Simplicity"* and *"Stability without Stagnation"* as opposed to *"Gigantic Sweeping Changes"*. The goal is to have development teams be able to easily port their applications over to 2.0 incrementally and without much fuss.

I am really excited about so many of the upcoming changes. On the surface, this brings a higher-level polish to the API. The HTMLBars updates *(not really breaking news)* are fantastic. [Ember CLI](http://www.ember-cli.com/) and [ES6 modules](http://jsmodules.io/) are promoted to first class citizens for the framework. I like the move to HTML-based component syntax to align with web standards. The "Block Parameters" feature give the templates a extra splash of Ruby flavor.

There are a couple of items noted that do concern me:

  **1. The plan is to not remove support for most of the old syntaxes in Ember 2.0**

While I understand the thinking behind this, I would personally rather see the old syntax support be dropped to maintain a level of consistency. This would hold true especially for developers jumping on new projects and new teams where they would "just know" how a code base syntax is laid out by the version of Ember which is adopted.

  **2. Routable components**

This still feels awkward to me. Initially, routing is handled through Ember via:

```text
  Route > Controller > View/Template
```

In Ember 2.0, routes will route straight to a component instead. For me, The removal of that controller blurs some lines concerning the representation of application state. Perhaps it's the name itself that is still making me scratch my head. When I think component, I think modular and reusable chunk of code. The name could lend itself to some confusion for newer developers.

I give applause to all the hard work the core team and contributors have put into the project. I can't wait to see how these features and ideas will be iterated upon in the upcoming releases.
