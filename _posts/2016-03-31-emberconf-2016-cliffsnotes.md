---
layout: post
title: "EmberConf 2016 CliffsNotes"
date: 2016-03-31
categories: ember emberconf
description: EmberConf 2016 list of highlights from my favorite talks
---

Here is an overview for some of the major points from some of my favorite Emberconf 2016 talks:


DAY 1
========


Opening Keynote <small>- Yehuda Katz, Tom Dale</small>
--------

  + Community momentum
    + 1000 conference attendees
    + Zoey Tomster
    + Huge ember-cli adoption (332,000 installs last month alone)
  + Community survey
    + Over 1800 participants
    + 76% using Ember 2.x
    + 36% using Ember 1.13
  + Lessons learned from 1.13
    + [RFC 56](https://github.com/emberjs/rfcs/blob/master/text/0056-improved-release-cycle.md)&nbsp;- Refining the Release Process
      + LTS Releases - Bug fixes for 36 weeks, Security fixes for 60 weeks, Every 4 releases
    + Subteams - Need centralization for leadership, but at the same time, we don't want too much bottleneck on the core team
      + Core Team
      + Ember Data Team
      + Ember CLI Team
      + Learning Team
  + Community
    + Smoke and Mirrors
    + Ember Observer
    + Ember Concurrency
    + Angular adopted Ember CLI as it's CLI platform
  + Mobile
    + Painful currently to click a pinterest link from Twitter to the actual Native app
    + Many of the native features are now available to web applications
      + Service Worker / Add to Home Screen / Web Workers / Geolocation / IndexedDB / Animation / Camera
    + How to deliver native-caliber features without giving up "instant"
    + Improving load time
      + Fast Boot - [ember-fastboot](http://www.ember-fastboot.com/)
        + SEO and server-side rendering
        + Shipping ember-fastboot@1.0 with Ember v2.7.0
      + Project Svelte - Tree shaking to eliminate unused modules
      + Engines
      + String Loading -Ship JS Modules as strings to only pay evaluation cost for modules that are being used
      + Service Worker
      + App Cache - Reliable
  + Glimmer 2.0
    + DBMON Example - 2x speed boost
      + Ember 2.4 12FPS
      + Glimmer 2.0 22 FPS
    + Uptime Boxes Example - 3x speed boost
    + Initial Render - Canary + Glimmer 2.0 1.5-2x faster
    + Glimmer 2.0 Templates are 5x smaller than HTMLBars
    + Written in Typescript
  + The way we build web applications is changing
    + Ember - an SDK for the web
    + [bit.ly/emberconfapp](bit.ly/emberconfapp)


Using Service Workers in Ember <small>- John Kleinschmidt</small>
--------

  + Not eveyrone in the world is as "connected" as we are here in the United States
  + Service Workers
    + Bootstrapping for web applications offline
    + Only works with HTTPS URLs currently
    + [isserviceworkerready?](https://jakearchibald.github.io/isserviceworkerready/)
    + Developer tools make it easy for debugging
  + [broccoli-serviceworker](https://github.com/jkleinsc/broccoli-serviceworker)
    + Update app/config/environment.js file with cache URLs, etc. to precache the entire application
    + Toolbox API support to go network first/fallback to cache or cache first (networkFirst/cacheFirst)
  + Using service worker to alter network requests based on network type. 2G Networks get smaller payloads for example
  + Safari browser support doesn't look good at the moment. Using App Cache as fallback for a much wider browser support story


Selecting Good Ember Patterns <small>- Brenna O'Brien</small>
--------

  + Select element is 2 way bound by default
  + <code class="inline-code">{% raw %}{{view "select"}}{% endraw %}</code> has since been deprecated
  + DDAU approach
  + Actions Up: <code class="inline-code">{% raw %}onchange={{action "selectDidChange"}} value="target.value"}}{% endraw %}</code>
  + Data Down: <code class="inline-code">{% raw %}selected={{is-equal language selectedLanguage}}{% endraw %}</code>
  + Closure actions for better nested component action handling
  + Dynamic key lookup, use <code class="inline-code">{% raw %}{{get}}{% endraw %}</code> helper
  + <code class="inline-code">{% raw %}{{mut}}{% endraw %}</code> helper for 2 way binding. <code class="inline-code">{% raw %}onchange=(action (mut selectedFruit)){% endraw %}</code>
  + <code class="inline-code">{% raw %}{{ted-select}}{% endraw %}</code> [http://tedconf.github.io/ember-ted-select](http://tedconf.github.io/ember-ted-select)


Building Desktop Apps with Ember and Electron <small>- Felix Rieseberg</small>
--------

  + Electron - Chromium + Node + Native APIs (Atom, Slack, MS Visual Studio)
  + Electron is simply a Node process that spins up Chrome windows. Communication happens through IPC to handle messages.
  + [ember-electron](https://github.com/felixrieseberg/ember-electron) (based on ember-cli-nwjs and ember-cli-remote-inspector)
    + CLI TDD and server-mode tests
    + Build/run workflow with live reload
    + <code class="inline-code">ember install ember-electron</code> - installs prebuilt electron binaries
  + Run <code class="inline-code">ember electron</code> instead of <code class="inline-code">ember server</code> to spin-up a new desktop app
  + Can use ember inpsector remotely over web sockets to debug. You have access to Node APIs as well
  + <code class="inline-code">ember election:test</code>
  + <code class="inline-code">ember electron:package --platform darwin</code>


Building Mobile Applications with Ember <small>- Alex Blom</small>
--------

  + Cordova vs PhoneGap
    + PhoneGap implements Cordova
    + PhoneGap is Adobe's proprietary service built on top of Cordova
  + Good Code === Good Hybrid
    + Desktop lets us be lazier
    + JS ecosystem is littered with bad/leaky code
  + <code class="inline-code">ember-cli-cordova</code> -> <code class="inline-code">ember-cordova</code>
  + <code class="inline-code">ember new mobile-project; ember install ember-codova</code>
  + Splash screen handling via <code class="inline-code">SplashScreenMixin</code> (hides on afterModel hook)
  + Platform service <code class="inline-code">platform: inject.service("device/platform")</code>
    + <code class="inline-code">if (platform.get('isIOS'))</code>
  + Cordova service <code class="inline-code">cordova: inject.service()</code>
    + <code class="inline-code">onVolumeUp</code>
  + Keyboard service <code class="inline-code">keyboard: inject.service("cordova/keyboard")</code>
    + Viewport changes when keyboard is on the screen
  + Performance
    + Crosswalk - Built by intel
    + Package with Cordova
    + Specifically for Android (20mb filesize)
    + ~5x-10x speed improvement on older devices (Especially 4.x)
    + Consistent browser environment for stuff like CSS
  + Know your WebView - WKWebView is more performant
  + Using too much memory has negative implications
  + Memory Leaks
    + Garbage Collection: 2 types (Young Generation & Old Generation)
    + Old Generation collection is **very** expensive
    + Don't create variables you don't need
    + <code class="inline-code">null</code> out references to unused DOM fragments (willDestroyElement hook)
    + Profiles > Take Heap Snapshot
    + Containment View > Detached Nodes (these are bad and just hogging resources)
  + <code class="inline-code">window.performance</code>
  + <code class="inline-code">window.performance.mark('foo')</code>
  + Manage Reflows
    + Resizing browser window
    + Computed styles in JS
    + Adding/removing elements from the DOM
    + Changing an elements classes
  + Use CSS Transforms
  + Use <code class="inline-code">visibility:hidden</code> to avoid reflow
  + Animations - Use [Velocity JS](http://julian.com/research/velocity/)


Warp Speed Memory Management <small>- Kelly Senna</small>
--------

  + Why memory management?
    + User experiences are not equal
    + Browsers are not free from performance concerns
  + Memory life cycle: Allocate > Use > Release
  + Garbage collection
    + Young - Initial memory allocation is collected here
    + Old - moved to this queue from Young when the garbage collector notices these memory allocations are still referenced
  + Gotchas
    + Misued variables
    + DOM Changes - Batch operations for better memory support
    + Dangling callbacks


Dissecting an Ember CLI Build <small>- Estelle DeBlois</small>
--------

  + Ember without CLI is like Peanut Butter without Jelly
  + Broccoli used within Ember CLI to manage the build pipeline using a Tree primitive
    + Tree: Directory of files
  + Entire build pipeline can be represented as a DAG (directed graph)
  + <code class="inline-code">BROCCOLI_VIZ=true ember build</code>
  + <code class="inline-code">dot -Tpng graph.<version>.dot > out.png</code>
  + <code class="inline-code">broccoli-stew</code> for easy debugging


DAY 2
========


Ember CLI The Next Generation <small>- Stefan Penner</small>
--------

  + ember-cli being adopted by angular-cli and react-cli
  + Migrating away from Bower to NPM
  + Move bower support to <code class="inline-code">ember-cli-bower</code> addon
  + Big apps are a sign of success
  + Engines are a great solution of large apps and app.js files


Idiomatic Ember: Sweet Spot of Performance and Productivity <small>- Lauren Tan</small>
--------

  + "All good ideas will eventually end up in Ember" - Yehuda
  + Move actions that deal with data into the Route
  + Use declarative helpers in your templates for easy composability without side effects
    + Be very wary to not overuse this power
  + Helpers are better suited for UI and presentational logic in contrast to CP's which are highly coupled to data
  + <code class="inline-code">ember-composable-helpers</code>
  + CP's should be used to express business logic
    + Reusable
    + React to changes
    + Changes can be implicit
  + Helpers (simple functions/class based)
    + Pure and free of side effects
    + Generic utility function and UI logic
    + Think functional programming
    + Composable
    + Can be used as an action
  + Component Hooks
    + Dealing with side effects
    + Can cause infinite loops (`didRender` -> side effect of rendering again)
  + Don't use observers


Immutability is for UI, You, and I <small>- Charles Lowell</small>
--------

  + Break component out into two pieces: Content & Player
    + Forms a movie - Immutable UI architecture
    + Extract the Model into its own object
    + Replace the *entire model* with *every* change
  + POJOs are powerful
    + Logging "just works"
    + Bye-Bye computed properties
      + Replace with ES5 getters
  + Unambiguous causality - No doubt as to which event gave rise to which state
    + 1 event = 1 state
  + Undo/Redo becomes possible (similar to browser back/forward button in your Ember app today)
  + [ember-impagination](https://github.com/thefrontside/ember-impagination)


How to Build a Compiler <small>- James Kyle</small>
--------

  + Babel, 6-to-5, etc.
  + Compiler transforms source code from a higher level language into a lower level source language
  + Low Level: Binary, Machine Code, CPU Architecture, Assembly
  + Source Code: Abstraction to allow humans to understand whats happening, and be productive when writing code
  + Compiler: Takes the Source Code -> Lower Level code
    + Parsing
      + Lexical Analysis - Tokens
      + Syntactic Analysis - AST (Abstract Syntax Tree)
    + Transformation - Manipulates AST nodes
      + Tree Traversal
    + Code Generation - Stringify AST
      + Recursively calls itself to print nested nodes