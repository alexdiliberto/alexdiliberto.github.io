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

  + 5 Years of EmberConf! :birthday:
    + [Announcing Amber.js](http://yehudakatz.com/2011/12/08/announcing-amber-js/) - Dec 8, 2011
  + New core team members :star:
    + [Katie Gengler](https://github.com/kategengler), [Chat Hietala](https://github.com/chadhietala), [Ricardo Mendes](https://github.com/locks)
  + Ember 2.x Series
    + What didn't work: :-1:
      + Routable components
      + Deprecating controllers
      + `<angle-bracket>` components
      + Pods
    + What did work: :+1:
      + [Fastboot](https://ember-fastboot.com/)
      + [Engines](http://ember-engines.com/)
      + Glimmer / Glimmer 2.0 (~30% smaller download size and 2x app speed improvement)
    + Overall better experience
  + What have we learned? :book:
    + Big up front design
    + Small Kernel &rarr; Addon
      + Fastboot - Ember simply landed the `App.visit()` [API](https://emberjs.com/blog/2016/01/15/ember-2-3-released.html#toc_code-visit-code-api) &rarr; ember-fastboot addon
    + Drop-in compatibility for new features
    + Experimentation is key :key:
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
    + Fast :zap:
    + Work offline :x:
    + Install on the device :iphone:
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

  + [Gifar image vulnerability attack](https://hackaday.com/2008/08/04/the-gifar-image-vulnerability/) ~2008 :floppy_disk:
  + [Image EXIF embedding PHP code](https://websec.io/2012/09/05/A-Silent-Threat-PHP-in-EXIF.html) ~2012 :floppy_disk:
  + First rule of web security: Never (EVER) trust user submitted data :closed_lock_with_key:
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
  + Avoid `htmlSafe()` :x:
    + Use only with proper sanitization
    + Never use directly on user input
    + Use [Ember Contextual Components](https://emberjs.com/blog/2016/01/15/ember-2-3-released.html#toc_contextual-components)
  + Good helpers - Let the browser worry about it
    + Use DOM to [create text nodes](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)
    + Set style attributes
    + Append child
  + Avoid Triple Curlies - `{% raw %}{{{foo}}}{% endraw %}` :x:
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
      + Simple, on demand data fetch
      + Might trigger `N` requests, flicker
    + Pre-loading: `model()` hook `return Ember.RSVP.hash()`
      + Moves relationship data to route's `model()` hook - blocks rendering of template
      + Better UX but the `N` request issue persists, `RSVP.hash()` is a model hook anti-pattern
    + Compound document syncing (side-loading)
      + `this.store.findRecord('band', params.id, { include 'songs', reload: true });`
      + `/band/1?include=songs`
      + Leverage JSON API, explicit control over fetching relationship data
      + Delays rendering of the child template
  + [Ember Data Patterns](https://github.com/balinterdi/ember-data-patterns)
  + https://balinterdi.com/emberconf/
  + [Slides](https://speakerdeck.com/balint/data-loading-patterns-with-json-api)


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
  + API design is very important :art:
    + Less options are better
    + Don't abuse bindings to communicate with parent
    + Minimize mandatory options with sensible defaults
    + Options are passed to the component that cares about them
    + A well crafted component should be easy to adapt to new uses
  + Initial approach: Bindings - `{% raw %}{{x-toggle checked=checked}}{% endraw %}`
  + Solution DDAU - `onChange=(action (mut checked))`
  + Now what if I want different colors and size :confounded:
  + [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) by Dan Abramov
  + [Contextual Components](https://emberjs.com/blog/2016/01/15/ember-2-3-released.html#toc_contextual-components)
    + Flexibility, composability and the right level of abstractions
  + Use `hasBlock` template helper to make the contextual component "Opt In"
    + Now just pass in non-block form for sensible defaults


DAY 2
========


Empowering the Next Million Creators <small>- Edward Faulkner</small>
--------

  + How do we grow to empower wider audiences of people?
  + Continuum from small applications with less features &rarr; bigger application with more features
    + `npm install` your way up from [Glimmer.js](https://glimmerjs.com/) to Ember
    + Small: Glimmer.js
    + Medium: Ember.js
    + Big: Drupal, Wordpress
  + Glimmer.js - Flexible, Expandable Modern-web platform
  + The web is about HTML
    + Good level of power for the task it is assigned
    + Fairly easy to learn and pick up
    + Templates in Ember are just a superset of HTML - Flexible (Ember strength)
  + Addon ecosystem
    + Drupal: You need your site up and running. Problem: developers are very expensive
      + Focus on a few unique tasks &rarr; offload the rest on to the community
    + A community that invests in shared standards
  + **NEW** :rotating_light::rotating_light::rotating_light:: [Card stack application architecture](http://cardstack.io/) Drop-in tools to give you a WYSIWYG editor for your Ember components (Big on the continuum scale)
    + `ember install @cardstack/cardstack-tools`
    + `{% raw %}{{#cardstack-tools}}{{outlet}}{{#cardstack-tools}}{% endraw %}`
    + [`ember install squishable-container`](https://github.com/cardstack/squishable-container) - simple component that takes it's initial size and is able to scale itself
    + `{% raw %}{{#cardstack-tools}}{{#squishable-container}}{{outlet}}{{squishable-container}}{{#cardstack-tools}}{% endraw %}`
    + [`ember-toolbars`](https://github.com/cardstack/ember-toolbars)
    + `{% raw %}{{cardstack-content}{% endraw %}}`
    + `ember install @cardstack/core-types` - I'm NPM installing my way to my final app state
    + `ember install @cardstack/mobiledoc` - Rich text editing on the web
  + [ember-overlays](https://github.com/ef4/ember-overlays)
  + `@cardstack/hub` - layer that bridges together all sources of data your application needs, into a single source that follows the same authentication and configures to your application standards
  + Authentication &amp; Authorization

SVG Animation and Interaction in Ember <small>- Jen Weber</small>
--------

  + SVG - images made of code
  + SVG Basics
    + [SVG elements can be transformed with CSS](https://css-tricks.com/svg-animation-on-css-transforms/)
    + Simply style using CSS
      + `outline` &rarr; `stroke`
      + `background-color` &rarr; `fill`
    + Follows paint order, not `z-index`. Lowest in DOM order forms top layer visible to the user
    + `<g>` group wrapper
  + Using SVGs in Ember
    + Easily add actions to SVGs
    + Binding attributes and classes
  + Avoiding pitfalls
    + `<rect class="temperature {% raw %}{{tempStatus}}{% endraw %}" width="117.6" height={% raw %}{{thermHeight}}{% endraw %} />` Doesn't always work (height goes down instead of up!)
    + Top left corner is `0,0`
    + Shapes are positioned using x and y coordinates within the SVG `viewBox`
    + Elements can be spinned, stretched, squished, etc.
    + `<rect class="temperature {% raw %}{{tempStatus}}{% endraw %}" width="117.6" height={% raw %}{{thermHeight}}{% endraw %} transform="rotate(180 365 710)"/>` Fixes the issue by essentially rotating the axis of the rectangle so the height eases up instead of down
    + Default Ember component `<div>` wrapper inside SVG === bad. Use [`tagName='g'`](https://emberjs.com/api/classes/Ember.Component.html#property_tagName) instead
    + Paint order Problems: Use `Ember.computed.sort()` so data with the lowest `y` coordinate gets rendered first
    + Upgrade app > Ember v1.8.0
  + Use computed properties in the model to manipulate plotted/transformed SVG data &amp; coordinates
  + [Accessible SVG](https://www.sitepoint.com/tips-accessible-svg/)
  + [SVG Optimization Tools](https://sarasoueidan.com/blog/svgo-tools/)

Mastering Ember from the Perspective of a N00b <small>- Madison Kerndt</small>
--------

  + [Dreyfus model](https://en.wikipedia.org/wiki/Dreyfus_model_of_skill_acquisition)
    + Novice &rarr; Advanced Beginner &rarr; Competent &rarr; Proficient &rarr; Expert
    + Biggest shift: Proficient &rarr; Expert
      + Proficient developer sees all the details and complexities in the **Tree**
      + Expert developer sees all of the details and complexities in the **Forrest**
      + Intuition: ability to understand something without the need for conscious reasoning
  + [Adriaan de Groot](https://en.wikipedia.org/wiki/Adriaan_de_Groot)
    + Neuroscience and psychology research using Chess
    + [Can you remember the pieces?](https://www.mheducation.ca/blog/series-classic-learning-science-expertise-and-expert-performance-in-chess/)
    + In order to retain information, we have to organize it in a way that is meaninful &rarr; Intuitiion
  + Zone of Proximal Development - What a learner can do with and without help
  + Optimal pacing is challenging people just beyond their learning ability level
  + Mental Model
    + Router &rarr; Route &rarr; Model &rarr; Parent Template &rarr; Component
  + [`{% raw %}{{outlet}}{% endraw %}`](https://guides.emberjs.com/v2.12.0/routing/rendering-a-template/) - lets you specific where a child route should render inside of a template


State, Time, and Concurrency <small>- Alex Matchneer</small>
--------

  + **State** is the data in your app that changes over time
  + **Concurrency** is when you have more than one state change operation occurring at the same time.
  + [ember-concurrency](http://ember-concurrency.com/)
  + :warning: Error: Calling set on destroyed object
  + No `isSubmitting` flag
  + No `isDestroyed` check
  + No "Am I Still Running?" checks
  + No `.set()` calls necessary at all
  + Task
    + Better syntax for expressing async operations
    + Allows for cancellation
    + Declarative API
    + Derived State
  + Task Modifiers
    + `.drop()`
    + `.enqueue()`
    + `.restartable()`
  + Task Groups
  + Derived State: Helpful "out-of-the-box" state
    + `<TaskInstance>.isRunning`
    + `<TaskInstance>.performCount`
    + `<TaskInstance>.concurrency`
  + Anti-Pattern: Manual state tracking
    + `this.set('isShipping', true); yield asyncTask(); this.set('isShipping', false);`
    + Redundant, Point of easy failure, Error-prone
  + Respect the 4th Dimension :clock:
  + When you `.perform()` a *Task* it creates a *TaskInstance*
  + [Essential State vs Accidental State](http://shaffner.us/cs/papers/tarpit.pdf)
    + Solution: Derived State (Computed Properties)
  + Declarative APIs > Imperative APIs
  + [Slides](https://machty.s3.amazonaws.com/emberconf2017/index.html)


Confessions of an Ember Addon Author <small>- Lauren Elizabeth Tan</small>
--------

  + ~3.5k addons out there today
  + What makes an addon good?
    + #1. Solve an interesting problem
    + #2. Straightforward to setup and use (docs and examples)
    + #3. API needs to be deliberate
    + #4. Reliable (tests)
    + EX: [ember-power-select](http://www.ember-power-select.com/), [ember-concurrency](http://ember-concurrency.com/), [liquid-fire](https://ember-animation.github.io/liquid-fire/), [ember-cli-deploy](http://ember-cli-deploy.com/), [ember-cli-mirage](http://www.ember-cli-mirage.com/)
  + DDD - Documentation Driven Development
    + If it's not documented, it **doesn't exist**
    + First class citizen
    + [JSDoc](http://usejsdoc.org/), [YUIDoc](https://yui.github.io/yuidoc/)
  + Any successful project requires two things
    + Solve a problem
    + Convince people to use your addon
  + Project doesn't end after you type `npm publish`
  + Addon Anatomy
    + Folder structure looks very similar to regular Ember App
    + Certain folders in Ember-land, certain folders in Node-land
    + `/addon` doesn't get merged into consuming app's tree
    + Allow for overriding
    + Be deliberate about what get's merged into consuming app
    + :warning: Addon internals are not actually private :warning:
      + There are still ways for consuming apps to access :unlock:
    + Blueprints
    + Addon hooks in `index.js` are really powerful
      + [ember-test-selectors](https://github.com/simplabs/ember-test-selectors) - Removes itself from the application during a prod build
      + [ember-composable-helpers](https://github.com/DockYard/ember-composable-helpers) - Whitelist/Blacklist specific helpers from your application `filterHelpers()`
      + ember-cli-deploy - Augments ember-cli with custom commands
  + One Weird Trick
    + Tell a story - Write great docs
    + What is the Public API? - [Ramda documentation](http://ramdajs.com/docs/) is a great example
    + Show don't tell - [ember-burger-menu](https://offirgolan.github.io/ember-burger-menu/)
    + Testing your addon - [ember-try](https://github.com/ember-cli/ember-try)
    + Test with a real browser
  + Configuration
    + [ember-metrics](https://github.com/poteto/ember-metrics) - allows different behaviors based on configuration found in `config/environment.js`
    + ember-cli-build.js
  + [ember-factory-for-polyfill](https://github.com/rwjblue/ember-factory-for-polyfill)
  + [Dash](https://kapeli.com/dash) offline documentation
  + Always [SemVer](http://semver.org/)


EmberConf MiniTalks
--------

  + [Ember Beta Docs](https://emberjs.com/api-beta)
  + QUnit-CLI - `npm install -g qunitjs; qunit --help;`
  + `QUnit.todo();` - Expects failures but report Green to test reporters
  + `QUnit.begin();` &rarr; `QUnit.on('runStart');`
  + [Heimdall](https://github.com/heimdalljs/heimdalljs-lib)
    + Reduce/Reuse/Recycle :recycle:
    + `ember install ember-perf-timeline`
    + `ember install ember-heimdall`
    + Timeline integration
    + Stripped from prod code


Spin Me a Yarn <small>- Serena Fritsch</small>
--------

  + NPM released in 2010
  + 11k packages published per week
  + [Yarn](https://github.com/yarnpkg/yarn) - Fast, reliable, and secure dependency management
  + Package :package:: Piece of software that can be downloaded; may depend on other packages
  + Multiple levels of dependencies (nested)
    + Allows us to install packages with different versions
  + [So you want to write a package manager](https://medium.com/@sdboyer/so-you-want-to-write-a-package-manager-4ae9c17d9527) by Sam Boyer
  + Install phase:
    + Dependency Resolution :mag:
    + Fetching Packages :truck:
    + Linking Packages :link:
  + `package.json`: "What I want" vs. `yarn.lock`: "What I had"
  + NPM === Nondeterministic
  + Always `git commit` your `yarn.lock` file
  + Ember CLI 2.13 onwards is "yarn aware"


An Animated Guide to Ember Internals <small>- Gavin Joyce</small>
--------

  + Classic action vs Closure action
  + Boot:
    + [Journey through Ember.js Glue: Booting Up](https://www.youtube.com/watch?v=BEteW2srG0w) by Mike North
    + 27 events handled by default and triggered on body
  + Initial Render:
    + Handlebars template &rarr; Wire format
    + Compilation step: Wire format &rarr; Op Codes
    + Op Codes are then executed at runtime
  + Glimmer VMs
    + Append VM - Run initially
    + Update VM - Run on update
