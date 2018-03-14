---
layout: post
title: "EmberConf 2018 Notes"
date: 2018-03-13
categories: ember emberconf
description: EmberConf 2018 list of highlights from my favorite talks
---

Here is a highlighted overview of the major points from some of my favorite EmberConf 2018 talks:


DAY 1
========


Opening Keynote <small>- Yehuda Katz, Tom Dale</small>
--------

  + Ember turns 7 in April :birthday:
    + 5th anniversary of EmberConf!
  + [Melanie Sumner](https://github.com/MelSumner) is joining the core team :star:
  + Huge ecosystem of addons
  + Future: Don't change the fundamentals, just build a better Ember :construction_worker:
    + This will be the focus of the 3.x series
      + Fewer Concepts
      + Latest JS
      + Optimize of Success
  + Ember features :sparkles:
    + New file system layout
      + Related files colocated (`template.hbs`, `component.js`)
    + Optional jQuery
      + 30kB filesize after minification and gzip
      + Drops out of the box Ember size by 1/5 :fire:
    + Simplified testing
      + `async` and `await`
      + Use custom [codemods](https://github.com/facebook/codemod) to fully automate the heavy lifting for the conversion
      + [Mocha](https://mochajs.org/) integration 1st class
    + [JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
      + Only import the modules you need
      + Use codemods to fully automate this conversion process
      + Treeshaking
    + Editor integration
    + Object model
      + Computed properties
    + [JS classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
      + [`@decorators`](https://tc39.github.io/proposal-decorators/) allows us to implement computed properties and services inside JS classes
    + [JS Class fields](https://github.com/tc39/proposal-class-fields)
      + Declare and initialize properties within the JS class body
    + [TypeScript](https://www.typescriptlang.org/)
    + Fragment components
      + Remove the wrapping `<div>` elements on components without `tagName: ''` hack
    + Setters
      + `@tracked` properties
      + Automatically infers dependencies on other Properties
      + No more dependent keys `@tracked get slug() { }`
    + Component arguments
      + `this.args`
      + `{% raw %}{{@post.body}}{% endraw %}`
  + All of the above features are on Release, Beta, or Canary channels **today!** :trophy:
  + [Request for Comments](https://github.com/emberjs/rfcs) (RFCs) :speech_balloon:
    + [Angle bracket components](https://github.com/emberjs/rfcs/blob/AngleBracketInvocation/text/0000-angle-bracket-invocation.md)
      + single word component names
    + [Named blocks](https://github.com/emberjs/rfcs/blob/master/text/0226-named-blocks.md)
      + Pass in more than 1 block into a single component
  + Ember &rarr; GlimmerJS
  + LinkedIn created [two versions of the list route in Preact and GlimmerJS](https://engineering.linkedin.com/blog/2018/03/how-we-built-the-same-app-twice-with-preact-and-glimmerjs)
    + Glimmer performed slightly better
  + Improving Glimmer VM
    + Binary bytecode: `.hbs` &rarr; `.gbx` bytecode
    + SSR (Server Side Rendering)
    + Async rendering
    + Repairing rehydration [Ember Schedule App](https://schedule.emberconf.com)
  + [WebAssembly](http://webassembly.org/) (WASM)
    + Run code at native speed in browsers :dash:
    + In the process of converting low level code in Glimmer into WASM
    + [Ember Schedule App in WASM](https://schedule-wasm.emberconf.com/)
    + [WASM2ASM](https://github.com/WebAssembly/binaryen/blob/master/src/wasm2asm.h) for continued IE11 support
  + Ember has never been more technically advanced than it has been at this moment :zap:


Ambitious for All: Accessibility in Ember <small>- Melanie Sumner</small>
--------

  + Accessibility: Making your web apps usable by people of all ability levels in the way it was designed to be used
  + [Web Standards](https://www.w3.org/standards/)
  + [WAI-ARIA](https://www.w3.org/WAI/intro/aria)
  + [WCAG](https://www.w3.org/WAI/intro/wcag)
    + A, AA, & AAA conformance levels
  + [#a11y](https://twitter.com/search?q=%23a11y)
  + [Microsoft Azure video indexer](https://azure.microsoft.com/en-us/services/cognitive-services/video-indexer/)
    + Adjust the language model
  + [Image descriptions](https://webaim.org/techniques/alttext/)
  + [Ember A11y Project](https://github.com/ember-a11y)
  + "Ship it now and we'll fix it later" :no_entry_sign:
  + Challenges in Ember :suspect:
    + Route transitions
    + Modals and popups
      + Track the focus within the modal
      + Shouldn't be able to navigate outside of the modal
    + `aria-*` attribute support
    + Click all the things
      + Whatever you can do with a click, you should be able to do with a keyboard
      + [Nested interactive elements](https://github.com/rwjblue/ember-template-lint/blob/v0.8.14/docs/rule/invalid-interactive.md) :no_entry:
    + Passwords
  + The "easy" wins
    + Use semantic [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
    + Link vs. Button
      + Links for routes
      + Buttons for actions
    + Keyboard arrow-key navigation :arrow_up: :arrow_down: :arrow_left: :arrow_right:
    + Color contrast
    + Image `alt` attributes
  + [ember-component-attributes](https://github.com/mmun/ember-component-attributes) addon if you don't want to go in and change your existing components


Everything they didn’t tell you about the Ember Community <small>- Jessica Jordan</small>
--------

  + Lots of identity around specific sub-cultures we create for ourselves :family:
  + The Emberista sub-culture :hamster:
    + Group within the larger JS community, often having beliefs or interests at variance with those of the larger culture
  + Ember NPM downloads fairly stable over the last year *(~300K/month)*
  + CLIs in other JS sub-cultures have a larger variance over the last year
  + Addons for any use case
    + Niche &mdash; [Ember Pell](https://github.com/PoslinskiNet/ember-pell)
    + Large scale &mdash; [Ember Power Select](http://ember-power-select.com/)
  + RFCs :speech_balloon:
    + Ember helped inspire [React to implement RFC](https://github.com/reactjs/rfcs) in December 2017
  + [Ember Status Board](https://emberjs.com/statusboard/)
  + [Ember Slack Community](https://embercommunity.slack.com/)


The Next Generation of Testing <small>- Tobias Bieniek</small>
--------

  + Async `andThen()` helper is no longer used :x:
    + 5 years old & unintuitive API
    + Replace with the promised based `async` / `await` :fire:
  + [ember-native-dom-helpers](https://github.com/cibernox/ember-native-dom-helpers) uses native DOM API's without jQuery
  + `ember-native-dom-helpers` &rarr; `@ember/test-helpers`
  + Both [Mocha](https://mochajs.org/) and [QUnit](https://qunitjs.com/) allow nested modules inside tests
  + [Grand Testing Unification](https://github.com/rwjblue/rfcs/blob/42/text/0000-grand-testing-unification.md)
    + Scope was initially way too big
    + Core team extracted several smaller scoped RFCs out of these core ideas
    + [RFC 232](https://github.com/emberjs/rfcs/blob/master/text/0232-simplify-qunit-testing-api.md)
      + `moduleFor('x-foo')` and `moduleForComponent('x-foo')` &rarr; `module('x-foo')` + `setupTest(hooks);`
    + [RFC 268](https://github.com/emberjs/rfcs/blob/master/text/0268-acceptance-testing-refactor.md)
      + `moduleForAcceptance('Acceptance | login')` &rarr; `module('Acceptance | login')` + `setupApplicationTest(hooks);`
  + 4 main types of tests
    + :one: Plain QUnit test
      + Not Ember specific
    + :two: "Container" tests
      + For Controllers, Routes, Services...
      + Previously your unit tests
      + The [ember-qunit](https://github.com/emberjs/ember-qunit) `setupTest(hooks)` allows for APIs like `this.owner` inside the `test()`
    + :three: Rendering tests
      + Previously your component integration tests
      + `setupRenderingTest(hooks)`
        + Actually uses `setupTest(hooks)` under the hood
    + :four: Application tests
      + Previously your Acceptance tests
      + `setupApplicationTest(hooks)`
  + [`ember-cli-qunit`](https://github.com/ember-cli/ember-cli-qunit) > `v4.2.0` allows you to use the new APIs
  + How to migrate all of my tests?
    + Migrate to `async` / `await`
    + Use `ember-native-dom-helpers`
      + [ember-native-dom-helpers-codemod](https://github.com/simonihmig/ember-native-dom-helpers-codemod)
    + [ember-qunit-codemod](https://github.com/rwjblue/ember-qunit-codemod)
    + Rename `ember-native-dom-helpers` imports &rarr; `ember/test-helpers`
      + [ember-test-helpers-codemod](https://github.com/simonihmig/ember-test-helpers-codemod)
  + Mocking
  {% raw %}
  ```hbs
  this.owner.register('service:cookies', Service.extend({}))
  this.owner.lookup('service:features')
  ```
  {% endraw %}
  + Loading States
    + First, `let promise = click('.submit')` **Notice:** no `await click()`
    + Next, `await waitFor('.loading-spinner')`
      + Now you can do your assertions
    + Finally, `await promise` to finish the click
  + Custom test helpers
    + export async function addContact() { await FIllIn(); await click(); }
  + Test selectors
    + Use data attributes `[data-test-title]` instead of `h2`
    + `ember-test-selectors` uses AST transform to strip test selectors out of productions builds
    + [qunit-dom](https://github.com/simplabs/qunit-dom)
      + Very readable assertions
      + `assert.dom('input').exists({ count: 3 })`


Say More <small>- Jamie White</small>
--------

  + Make your tests say more :mega:
  + Ember's testing toolkit is incredible
    + Great tools so it's even more important to ask questions of them
  + What if we could impose access via accessibility through our UI testing
  + [Rule of least power](https://www.w3.org/2001/tag/doc/leastPower.html)
    + A less powerful and more constrained language
  + `fillIn('input[name=title]')` &rarr; `fillIn('Title')`
  + Test: Ensure the user wouldn't have to tab backwards to get to the submit button
  + Test: Ensure clicking submit works with a keyboard
    + `await click()` &rarr; `await keyboardClick()`
  + Test: Ensure the application made 1 atomic network request after clicking "Submit"


Who Moved My Cheese? Ember's New Filesystem Layout <small>- Matthew Beale</small>
--------

  + Ember project is pretty good at big changes :star2:
    + Deprecations
    + Codemods
    + Optional features
    {% raw %}
    ```bash
    ember install @ember/optional-features
    ember feature:list
    ember feature:enable someFeature
    ember feature:disable someFeature
    ```
    {% endraw %}
  + How will core ship the new filesystem layout :question:
    + RFC &rarr; Canary &rarr; Feature "Go" &rarr; convert addons &rarr; convert apps &rarr; deprecate
  + Module Unification - Ember's new file system layout :sparkles:
    + Co-location for related files
    + Improved isolation for single-use components and helpers
    + Improved isolation of addon APIs
  + `app.js` &rarr; `main.js`
  + `app/` &rarr; `src/`
  + Tests can be colocated in the file system `src/data/models/user/model-test.js`
  + Styles can be colocated in the file system `src/ui/routes/sign-in/style.scss`
  + `src/ui/routes/${name}/route.js` &harr; `src/ui/routes/${name}.js`
  + Local lookup
    + Only able to access certain components for a specific file if they are nested in the file system layout
    + Create a private interface
    + Great for contextual components
  + Addon Namespaces
    {% raw %}
    ```hbs
    {{gadget-tools::gadget-list}}
    {{gadget-tools::list}} {{! shorthand }}
    {{gadget-tools}} {{! shorthand with `gadget-tools/src/ui/components/main/` filesystem }}
    ```
    {% endraw %}
    + double colon symbol means to now reference a helper or component from within the namespace
  + Addon migration strategy
    + Module Unification addons will play nice with Classic apps
    + `fallback-resolver`
  + Must run canary CLI today to generate a new layout application
    {% raw %}
    ```bash
      npm install -g ember-cli/ember-cli
      MODULE_UNIFICATION=true ember new my-app
    ```
    {% endraw %}
  + [ember-module-migrator](https://github.com/rwjblue/ember-module-migrator) to migrate an existing app to the new layout


Mastering the Art of Forms <small>- Danielle Adams</small>
--------

  + Forms are everywhere :page_facing_up:
  + Might be the first thing your user will see
  + Component Patterns / Data Management / User Experience / Accessibility
  + Design questions :question:
    + What field type is this?
    + Is this required?
    + Is it dependent on another component?
    + Does it supply functionality, UI elements, or both?
  + Component Patterns
    + Strategy: Combining your `label` and `input` into a single custom component
      + `<label>Thing</label><input> ` &rarr; `{% raw %}{{input/text-field}}{% endraw %}`
      + Standardizes your API of the form elements
      + Standardizes the UI of the various form elements across the app
    + Strategy: Contextual component form group
      {% raw %}
      ```hbs
      {{yield
          (hash
              questionText=(t 'radio-button-group.feeling-lucky')
              radioButtonGroup=(component 'radio-button-group
                  options=radioOptions)
              luckyNumberInput=(component 'input/number-value'
                  id='input.lucky-number'
                  value=model.luckyNumber)
          )
      }}
      ```
      {% endraw %}
      {% raw %}
      ```hbs
      {{#form-group/lucky-number model=human as |formGroup|}}
        {{formGroup.questionText}}
        {{formGroup.radioButtonGroup}}
        {{formGroup.luckyNumberInput}}
      {{/form-group/lucky-number}}
      ```
      {% endraw %}
      + Same benefits as the first Strategy
      + Reusable without being bound to their initial layout
    + Components should fit together like a game of Tetris
  + Data Management :bar_chart:
    + Data required by the view should not hold up a page from rendering
    + The component *can* be responsible for fetching data
      + `willRender()`
    + Handle retries from the component
      + [ember-concurrency](http://ember-concurrency.com/)
    + User is able to interact with the app sooner
    + Relative data is scoped within the component itself
    + Validate data from the component level
      + [ember-cp-validations](https://github.com/offirgolan/ember-cp-validations)
    + Is the element an `input`? You can probably use 2-way bindings
  + User Experience & Web Accessibility :computer:
    + Always label your inputs with the `for` attribute `<label for="foo"><input id="foo">`
    + Use logical tabbing order


How To Build A Bonfire: On Training and Hiring New Devs <small>- Taylor Jones</small>
--------

  + Ember isn't exactly the first thing developers are running towards these days :snowflake:
  + Unfortunately, Stability without stagnation doesn't create a buzz
  + How do you convince people outside of our bubble to come join us
  + "We've gotta hire somebody!!!" :cold_sweat:
    + :raising_hand: "Well why don't you just hire more engineers?"
    + It's not always that easy... :no_good:
  + First takeaway &mdash; Start small when developing a culture of teaching and learning
  + How do we scale it?
    + Foundations vs. Features
    + How do we move on to helping our whole team become **skilled** at Ember?
      + Newbies
        + Teach JavaScript fundamentals along side Ember fundamentals
        + Should be limited in exposure until they actually dive into Ember
      + Veterans
        + You may have a hard time ushering in Ember's way of thinking
        + Less impressionable and likely more opinionated
  + :raising_hand: "But I'm used to React..."
    + Emphasize common threads around the ideas of  Components and the React Router
    + Ember's design patterns are much more structured
    + No more webpack
  + :raising_hand: "But I'm used to Angular..."
    + Explaining the consistency of Ember vs the drastic deprecations of Angular
    + Shared ideas around Controllers, Routers, and Services
  + :raising_hand: "Well I used Ember 5 years ago..."
    + A lot of Ember has stayed the same but a lot has changed and there are many new best practices
    + Can be tempted to fall back on old knowledge of the framework
  + The structure and opinions that Ember presents can be really hard for folks to adjust to
  + Everyone isn't going to love Ember as much as you do...and that's ok!


Living Animation <small>- Edward Faulkner</small>
--------

  + Animation is actually kind of hard :rage2:
  + There's overhead and cost associated with having to animate on-screen elements
  + Using animations to teach and help guide your user's attention
    + Software developers are actually all teachers :mortar_board:
    + Teaching your users how to effectively use your app
    + OS X minimization animation
    + Ember Concurrency [task documentation](http://ember-concurrency.com/docs/task-concurrency) examples
  + You don't always need a library to animate
    + CSS is very expressive for many use cases
  + CSS transitions and animations
    + [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
    + [`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
  + [liquid-fire](https://github.com/ember-animation/liquid-fire)
  + Looking into "game-engine-inspired" principles
    + Strong separation between app logic and animation layers
    + Establish *rules* and let the motions *emerge*
  + [Ember Animated](https://github.com/ember-animation/ember-animated)
    + "Glimmerization" of Liquid Fire
    + `{% raw %}{{#animated-each}}{% endraw %}` &rarr; `{% raw %}{{#animated::each}}{% endraw %}`
    + `{% raw %}{{#animated-if}}{% endraw %}` &rarr; `{% raw %}{{#animated::if}}{% endraw %}`
    + `{% raw %}{{#animated-value}}{% endraw %}`
  + Asymmetric easing functions
    + `easeOut` when moving on screen (decelerate in)
    + `easeIn` when moving off screen (accelerate out)
  + Animated value
    {% raw %}
    ```hbs
    {{#animated-container}}
      {{#animated-value counter rules=rules duration=1000 as |v|}}
        <span>{{v}}</span>
      {{/animated-value}}
    {{/animated-container}}
    ```
    {% endraw %}
  + Once we get docs, we can go live and push for v1.0


DAY 2
========


The Future of Data in Ember <small>- Dan Gebhardt</small>
--------

  + The future of data in Ember is __________? :confused:
    + Web standards?
    + Ahead of standards?
    + Realtime?
    + RESTful?
    + Graph-based?
    + Operational?
    + Offline?
    + Ember needs to meet you where you are and get you where you need to be :star2:
    {% raw %}
    ```md
    GET /api/v1/contacts
    GET /api/v1/contacts/:contact:id
    ```
    {% endraw %}
  + Lets build an app...Original plan: `fetch` + JSON
    + `return this.fetch('api/v1/contacts')`
  + A new requirement comes in... work offline
    + Service workers
    + [ember-service-worker](https://github.com/DockYard/ember-service-worker)
    {% raw %}
    ```bash
    ember install ember-service-worker
    ember install ember-service-worker-index
    ember install ember-service-worker-asset-cache
    ember install ember-service-worker-cache-fallback
    ```
    {% endraw %}
    + Offline works now
  + Next Step: A new requirement comes in... add admin pages to edit
    + Now update data layer to use Ember data
      + `return this.get('store').findAll('contact')`
      {% raw %}
      ```bash
      GET /api/v2/contacts/
      GET /api/v2/contacts/:contact_id
      POST /api/v2/contacts/
      PATCH /api/v2/contacts/:contact_id
      DELETE /api/v2/contacts/:contact_id
      ```
      {% endraw %}
  + Final Step: A new requirement comes in... everything needs to work offline
    + [ember-orbit](https://github.com/orbitjs/ember-orbit)
  + How do we allow apps to evolve with less friction?
    + Augment capabilities incrementally
    + Only increase complexity with an increased need for capabilities
  + [JSON API](http://jsonapi.org/)
    + 50+ client libraries
    + 14 languages
    + HTTP compliant basic CRUD &rarr; compound documents, sparse data sets &rarr; operations, local identities, profiles (v1.1)
  + Composable, well-defined interfaces
  + Monolithic full stack solution &rarr; interchangeable components
  + Ember Data: Serve the needs of 80% of all Ember apps
    + Evergreen behavior
    + composability + interchangeability
  + Currently &mdash; Tight coupling: Store &harr; Model
  + [Ember Data Record RFC](https://github.com/emberjs/rfcs/pull/293)
    + Formalize interface between Store and Model
  + Store, models, basic CRUD &rarr; partial records, embedded records, changesets &rarr; offline, store forking, optimistic UIs
  + [Orbit](http://orbitjs.com/) - Data access and synchronization library
    + Offline (Optimistic UI)
    + Pluggable sources :electric_plug:
    + Data synchronization :arrows_counterclockwise:
    + Editing contexts
    + Undo/Redo
  + How does Orbit fit with Ember Data? :worried:
    + `Orbit : Ember Data :: Glimmer : Ember`
    + Ember Data can provide Orbit's capabilities in a convention-driven package
    + Orbit and it's ecosystem can provide a laboratory for experimentation
  + Future? :alien:
    + GraphQL usage will continue to grow... Apollo will continue to innovate
    + REST+ solutions, like JSON API v1.1 will also grow
    + Static analysis will improve runtime efficiency
    + Immutable data structures will see increased *internal* usage (under the hood)
    + Demand for offline PWAs will grow in order to compete with native apps
    + Orbit will see continued growth across the frontend and in Node


Smartphone Symphony <small>- Gavin Joyce</small>
--------

  + [ember-present](https://github.com/GavinJoyce/ember-present) - addon for creating presentations where the slides are ember components
  + [bit.ly/emberconf](bit.ly/emberconf) :iphone: :notes: :musical_note: :notes:


Reuse, Recycle: One Team’s Journey from Projects to Products <small>- Sarah Bostwick</small>
--------

  + Coming tomorrow...

Deep Dive on Ember Events <small>- Marie Chatfield</small>
--------

  + Coming tomorrow...

Building a Memex in Ember <small>- Andrew Louis</small>
--------

  + Coming tomorrow...

Prying Open the Black Box <small>- Godfrey Chan</small>
--------

  + Coming tomorrow...

EmberConf MiniTalks
--------

  + Coming tomorrow...

Creating fluid app-like experiences with Ember <small>- Nick Schot</small>
--------

  + Coming tomorrow...
