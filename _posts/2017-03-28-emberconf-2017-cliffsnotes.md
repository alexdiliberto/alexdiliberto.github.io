---
layout: post
title: "EmberConf 2017 CliffsNotes"
date: 2017-03-28
categories: ember emberconf
description: EmberConf 2017 list of highlights from my favorite talks
---

Here is a highlighted overview of the major points from some of my favorite EmberConf 2017 talks:


DAY 1
========


Opening Keynote <small>- Yehuda Katz, Tom Dale</small>
--------

  + 5 Years of EmberConf!
    + [Announcing Amber.js](http://yehudakatz.com/2011/12/08/announcing-amber-js/) - Dec 8, 2011
  + New core team members
    + [Katie Gengler](https://github.com/kategengler), [Chat Hietala](https://github.com/chadhietala), [Ricardo Mendes](https://github.com/locks)
  + Ember 2.x Series
    + What didn't work:
      + Routable components
      + Deprecating controllers
      + `<angle-bracket>` components
      + Pods
    + What did work:
      + [Fastboot](https://ember-fastboot.com/)
      + [Engines](http://ember-engines.com/)
      + Glimmer / Glimmer 2.0 (~30% smaller download size and 2x app speed improvement)
    + Overall better experience
  + What have we learned?
    + Big up front design
    + Small Kernel &rarr; Addon
      + Fastboot - Ember simply landed the `App.visit()` [API](https://emberjs.com/blog/2016/01/15/ember-2-3-released.html#toc_code-visit-code-api) &rarr; ember-fastboot addon
    + Drop-in compatibility for new features
    + Experimentation is :key:
      + [ember-redux](http://www.ember-redux.com/)
      + [ember-concurrency](http://ember-concurrency.com/)
      + [ember-orbit](https://github.com/orbitjs/ember-orbit)
  + Glimmer 2.0
    + Pre Glimmer: Less modular than we thought - Ember + HTMLBars
    + Extract and rationalize - Ember view layer + Glimmer
    + 2.10 was a drop-in replacement for 2.9
    + Test suite runs on both the old engine and the new engine at the same time
    + Architecture: wire format
      + `[[11, 'div'], [11, 'span'][1, [33,'hello']...]`
      + Reduce "In-Browser" work
      + Take advantage of declarative nature
  + Glimmer VM
  + Web problem: Boot fast **AND** stay fast once booted
    + You can go the fastest if you don't care about updating
    + [The truth about traditional JavaScript benchmarks](http://benediktmeurer.de/2016/12/16/the-truth-about-traditional-javascript-benchmarks/)
  + [Ember Community Survey](https://emberjs.com/ember-community-survey-2017/)
  + [Glimmer.js](https://glimmerjs.com/)
    + Rendering engine used to power Ember &rarr; Now can be used standalone
    + Bind dynamic content from component to template without esoteric naming systems
    + TypeScript + Ember!
    + Computed property accessors
    + Decorators
    + "Just JS" actions
    + No more `.get` or `.set`
    + This is the component API we want for Ember's [Custom Component API RFC](https://github.com/emberjs/rfcs/pull/213)
  + [Module Unification RFC](https://github.com/emberjs/rfcs/pull/143) already merged - implementation has begun
    + Links the Ember and Glimmer worlds together
    + Write in Glimmer, drop into Ember app


Going Progressive with Ember <small>- Samanta de Barros</small>
--------

  + [Progressive Web Apps](https://addyosmani.com/blog/getting-started-with-progressive-web-apps)
    + Fast
    + Work offline
    + Install on the device
  + 69% of web traffic today comes from smartphone devices
  + Native vs. Web
    + Gap is rapidly shrinking
  + Web app manifest JSON
    + Currently, only chrome support
    + iOS needs custom `<meta>` tags in `<head>`
    + Windows needs an extra browser config file
  + [ember-web-app](https://github.com/san650/ember-web-app) - `ember install ember-web-app`
    + Generates all of these files for you and related `<meta>` tags
  + Service Worker
    + [is serviceworker ready?](https://jakearchibald.github.io/isserviceworkerready/)
    + Intercepts every request
    + Save assets on install event
    + Background sync
    + Push notifications API
    + [ember-service-worker](http://ember-service-worker.com/)
      + [Plugin approach](http://ember-service-worker.com/plugins.html)
    + [broccoli-serviceworker](https://github.com/jkleinsc/broccoli-serviceworker)
      + Generates SW based on config
  + Application cache
    + Works on all browsers
    + [broccoli-manifest](https://github.com/racido/broccoli-manifest)
  + User data offline?
    + Local storage, WebSQL, IndexedDB
    + [Local Forage](https://github.com/localForage/localForage) - Wraps all 3
    + [ember-localforage-adapter](https://github.com/genkgo/ember-localforage-adapter)
    + [ember-pouch](https://github.com/nolanlawson/ember-pouch)
  + First page render
    + [ember-cli-fastboot](https://github.com/ember-fastboot/ember-cli-fastboot)
  + [Lighthouse](https://developers.google.com/web/tools/lighthouse/) - [Chrome extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en)


A Neurobiologist's Guide to Mind Manipulation <small>- Casey Watts</small>
--------

  + [caseywatts.com/mindmanipulation](http://caseywatts.com/mindmanipulation) - Print items in purple
  + Cognitive restructuring
    + "In-moment" vs "Reflecting"
  + How the brain works
    + Inner vs Outer brain
    + Inner - Old, limbic system, fast ~ms
    + Outer - Cortex, thoughts, slow ~s
    + Brain as a system
      + Feedback loop: input &rarr; process &rarr; output
      + Autopilot: input &rarr; output (no process)
      + Automatic thoughts/feelings vs. Deliberate thoughts/feelings
  + CBT - Cognitive Behavioral Therapy
    + `npm install constant-introspection`
    + 0 Whoop (introspect)
    + &rarr; 1 Input (how did I get here?/current bodily state)
    + &rarr; 2 Emotions &amp; Thoughts ([expand emotional vocabulary](http://tomdrummond.com/leading-and-caring-for-children/emotion-vocabulary)/emotion processing techniques)
    + &rarr; 3 Response
  + [Unhelpful Thoughts](https://s-media-cache-ak0.pinimg.com/originals/cd/ab/af/cdabaf05001f1cef87a4072691bb3e39.png)
  + Other tools
    + Therapist
    + Book: [Feeling Good](https://www.amazon.com/Feeling-Good-New-Mood-Therapy/dp/0380810336) by David D. Burns
    + Headspace (app)
    + Joyable (webapp)
  + Psychological Safety
    + PsycSafe Group: current members feel safe
    + PsycSafe Traits: Communication &amp; Empathy
    + Making the team feel more PsycSafe &rarr; raise collective group IQ
  + Goal: Improving Team PsycSafety
    + Communication
      + Earned Dogmatism Effect: "I am experienced, therefore my idea is right"
        + Reveal there is information missing
      + Declare Unknowns: "We don't fully understand _X_ yet"
        + "We don't know how complicated auth will be!"
      + Framing: "learning opportunity" not "BAD WRONG BAD"
        + Server went down - learning opportunity to improve
      + Acknowledge Fallibility: "I make mistakes and I know it - tell me what you notice"
      + Model Curiosity: Ask many questions
    + Empathy
      + Propinquity: Social closeness
      + Task: "[potential issues]" vs. Relationship: "You aren't competent"
        + PEARLS - Partnership, Empathy, Acknowledgement, Respect, Legitimation, Support
      + Validation: Recognition and acceptance of another person's [thoughts, feelings, sensations, and behaviors] as **understandable** (even if you don't agree)
      + Depersonalize Ideas - "Idea A" not "Casey's Idea"
      + Vulnerability: Increases trust


Understanding JavaScript Performance <small>- Godfrey Chan</small>
--------

  + Hierarchy of Speed
    + Laws of Physics (base) &rarr; Hardware &rarr; Kernels &rarr; User-land &rarr; Human Factors (top)
    + Everything above builds on the layers below
  + Hierarchy of JS Performance
    + JS Engines (base) &rarr; Libraries &rarr; Your Code (top)
  + [`factoryFor` RFC](https://github.com/emberjs/rfcs/pull/150)
  + [Deprecate component `eventManger` RFC](https://github.com/emberjs/rfcs/pull/194)
  + Framework
    + Time Budget
      + 1,000ms initial render
      + JS Engines - nanoseconds (50 nanoseconds 10,000,000x)
        + `let obj = {}`
        + Written in C
        + JS - Everything is a dictionary
        + Hidden class "Shape" / "Map"
        + Tools
          + Native syntax - `node --trace_opt --trace_deopt --allow-natives-syntax my-script.js`
      + Libraries - microseconds (50 microseconds 10,000x)
        + `Ember.get()`
        + Written in JS, Called many times, Generic code
        + Tools
          + CPU Profiler, Flame graphs
      + Your Code - milliseconds ~ seconds (50ms 10x)
        + `{% raw %}{{my-component}}{% endraw %}`
        + Problems: Hidden loops
          + Big Data
            + Download time, Parse time, Compounding
          + Backtracking - Invalidating already flushed content
            + Error since Ember 2.10
        + Tools
          + Network tab, Timeline view (Chrome), User Timing API
        + Micro vs Macro
          + Macro: Do fewer things - improve this layer
            + Don't do the work, Reuse the work, Defer the work
          + Micro: Do faster things - help the next layer
            + Use helpers, `{% raw %}{{unbound}}{% endraw %}`, Custom components
  + [ember-bench](https://github.com/chancancode/ember-bench)
  + Big picture: 1000 paper cuts, lots of repeated work
  + Ember: Helps us do fewer things via better coordination with macro optimizations


Counter-spells and the Art of Keeping Your Application Safe <small>- Ingrid Epure</small>
--------

  + [Gifar image vulnerability attack](https://hackaday.com/2008/08/04/the-gifar-image-vulnerability/) ~2008
  + [Image EXIF embedding PHP code](https://websec.io/2012/09/05/A-Silent-Threat-PHP-in-EXIF.html) ~2012
  + First rule of web security: Never (EVER) trust user submitted data
  + Reflected XSS `GET http://myapp.com/list/all?search_term=<img """><script>alert(document.cookie)</script>">`
  + Ember:
    + HTML escaping
      + Ember escapes by default
      + To bypass use `Ember.String.htmlSafe()`
    + [Content Security Policy](https://content-security-policy.com/)
      + [ember-cli-content-security-policy](https://github.com/rwjblue/ember-cli-content-security-policy)
      + Whitelists "safe" scripts, fonts, images, etc.
      + `Content-Security-Policy "script-src 'self' static.mysite.com"`
      + Use CSP V2 and V3 only
      + hash-source and nonce-source for inline script support
  + Avoid `htmlSafe()`
    + Use only with proper sanitization
    + Never use directly on user input
    + Use [Ember Contextual Components](https://emberjs.com/blog/2016/01/15/ember-2-3-released.html#toc_contextual-components)
  + Good helpers - Let the browser worry about it
    + Use DOM to [create text nodes](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)
    + Set style attributes
    + Append child
  + Avoid Triple Curlies - `{% raw %}{{{foo}}}{% endraw %}`
  + Always use `rel="noopener noreferrer"` with `target=_blank`
    + [`target=_blank` vulnerability](https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/)
    + Built-in lint rules via [ember-cli-template-lint](https://github.com/rwjblue/ember-cli-template-lint)


Animate the Web with Ember.js <small>- Jessica Jordan</small>
--------

  + [Frame-by-Frame Animations](http://100photos.time.com/photos/eadweard-muybridge-horse-in-motion)
  + Image Sequence + Display Frequency
  + [Phi phenomenon](https://en.wikipedia.org/wiki/Phi_phenomenon)
  + Flash animations &rarr; HTML 5 animations
  + Why open web standards?
    + Open
    + Consistent
    + Available
  + HTML 5 `<canvas></canvas>`
    + Powerful Web API
    + Canvas context object - `bower install --save canvas-5-polyfill`
  + Sprite sheet + `ctx.drawImage()`
  + Ember &amp; Web Animations API
    + Web Animations API - animation of the future
    + [ember-web-animations-next-polyfill](https://github.com/BrianSipple/ember-web-animations-next-polyfill) - `ember install ember-web-animations-next-polyfill`
    + Keyframe effects
  + Multi-layer Components
    + Sub components `{% raw %}{{#each ...}}{{comic-layer}}{{/each}}{% endraw %}`


Data Loading Patterns with JSON API <small>- Balint Erdi</small>
--------

  + Why [JSON API](http://jsonapi.org/)?
    + Convention over Configuration for APIs
  + Ember Data Store: `this.store()`
    + `findRecord('band', 1);` - return from the store as well as trigger a reload over the wire
    + `findAll('band');`
    + `peekRecord('band', 1);` - `peek*` does not trigger a reload, simply returns what is in the store
    + `peekAll('band');`
  + [`shouldBackgroundReloadRecord`](https://emberjs.com/api/data/classes/DS.Adapter.html#method_shouldBackgroundReloadRecord) &amp; [`shouldBackgroundReloadAll`](https://emberjs.com/api/data/classes/DS.Adapter.html#method_shouldBackgroundReloadAll)
  + Fetching relationship data
    + Lazy fetching
      + Simple, just works, on demand data fetch
      + Might trigger `N` requests
    + Model hook `return Ember.RSVP.hash()` blocks rendering of template until the promise resolves and XHR is finished
      + Better UX but the `N` request issue persists
    + Compound document syncing (side-loading)
      + `this.store.findRecord('band', params.id, { include 'songs', reload: true });`
      + `/band/1?include=songs`
      + Leverage JSON API, explicit control over fetching relationship data
      + Delays rendering
  + [Ember Data Patterns](https://github.com/balinterdi/ember-data-patterns)
  + https://balinterdi.com/emberconf/


Higher Order Components <small>- Miguel Camba</small>
--------

  + [Higher Order functions](http://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK)
    + Functions that return functions
    + Create closures
  + Higher Order components
    + Components that return components
    + [`hash` helper](https://emberjs.com/blog/2016/01/15/ember-2-3-released.html#toc_hash-helper) used to explicitly define a Public API for the component
    + `{% raw %}{{yield (hash avatar=(component "user-avatar") image=user.pic size="big")}}{% endraw %}`
    + Now this is accessible as a variable in the block from the callee in the parent template - `{% raw %}{{t.avatar}}{% endraw %}`
  + API design is very important
    + Less options are better
    + Don't abuse bindings to communicate with parent
    + Minimize mandatory options with sensible defaults
    + Options are passed to the component that cares about them
    + A well crafted component should be easy to adapt to new uses
  + Initial approach: Bindings - `{% raw %}{{x-toggle checked=checked}}{% endraw %}`
  + Solution DDAU - `onChange=(action (mut checked))`
  + Now what if I want different colors and sizes and labels and images? :confounded:
  + [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) by Dan Abramov
  + [Contextual Components](https://emberjs.com/blog/2016/01/15/ember-2-3-released.html#toc_contextual-components)
    + Flexibility, composability and the right level of abstractions
  + Use `hasBlock` template helper to make the contextual component "Opt In"
    + Now just pass in non-block form for sensible defaults
