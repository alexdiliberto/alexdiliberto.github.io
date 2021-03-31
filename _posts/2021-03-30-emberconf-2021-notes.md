---
layout: post
title: "EmberConf 2021 Notes"
date: 2021-03-30
categories: ember emberconf
description: EmberConf 2021 list of highlights from my favorite talks
---

Here is a highlighted overview of the major points from some of my favorite EmberConf 2021 talks:


Conference
========


Opening Keynote, Part 1 <small>- Yehuda Katz</small>
--------

- 2011 Ember: A framework for 1️⃣0️⃣ years 🐹
- How did we do?
  - Started &ndash; before Ember 1.0, Ember Rails
  - Today &ndash; Ember 3.25, Octane, Native Classes, TypeScript
- Early Ember users: Heroku, Intercom, Square, LinkedIn, Tilde
- Embers approach to change is the reason why these early adopter apps are using modern Ember today
- Breaking changes are __BAD__ &ndash; it disrupts the ecosystem and kills momentum
- Progress and stability are two sides of a coin
- "For me, _shipping_ is the thing" -Jamie Zawinski
- Release cycle? 🛳️
  - Trunk-based development, feature flags, overlapping releases, experiments on canary, automation
  - Iterate everything on `master`
  - `master` is always ready to ship
  - No deadlines, no code freezes, just ship
- Evolution strategy
  - Brand new features? Release channels
  - Idiom transitions? Ember CLI
  - Future proofing? Declarative
- Disruptions are disruptive whether we cause it or not
- 🚅 Ride the train: Upgrading Ember upgrades your build tools, deprecations are an important migration tool
- When faced with a choice between today's popular solution and an equally expressive declarative solution, __pick the declarative solution.__
- Removal rules? Features may only be deprecated if a replacement is already available and enabled
- RFC Process
  - New APIs that would require a feature flag need RFCs
  - Removing an API that already landed on stable needs an RFC
  - RFC must be merged before its feature flag can be enabled
- React to the future?
  - 1-way data flow
  - Virtual DOM
  - DOM is the bottleneck
- Progress is important, but so is ending the constant cycle of writing and rewriting that plagues so many applications
- Slow and steady improvement
- Community momentum
- People underestimate non-contributors in their communities &rarr; Quest Issues
  - The more you commit to writing instructions, the better it works
- Glimmer 2: drop in replacement in Ember 2.10 (complete rewrite behind a feature flag) 😲
- We're instead going to lean on __small primitives and compatibility__ as our main mantra for how we do new feature design
- Coherence? [Editions](https://emberjs.com/editions/)
  - Collection of recommended features
- Staging

Opening Keynote, Part 2 <small>- Godfrey Chan</small>
--------

- Improvements 🎉
  - {% raw %}`{{page-title}}`{% endraw %}
  - `RouterService#refresh()`
  - `ember new --lang`
  - Prettier
  - `@ember/*` ES Modules
  - Better Error Messages
  - `<LinkTo>` works in integration tests
  - Modernized built-in components
  - Better component inspector
  - New lint rules and fixes
  - Unbundled `ember-source`
- Deprecations 👋
  - {% raw %}`{{attrs.*}}`{% endraw %}
  - `tryInvoke`
  - Ember Global
  - `getWithDefault`
  - Classic Edition optional features
  - `<LinkTo>` positional arguments
  - {% raw %}`{{#with}}`{% endraw %}
  - Legacy `classNameBindings` template syntax
  - `Ember.String` utilities
  - Implicit `this` property lookup
  - `hasBlock` and `hasBlockParams` magic variables
  - Old Browser support policy
- Octane &rarr; Polaris (Next Edition) ✨
- [Embroider](https://github.com/embroider-build/embroider)
- [Named Blocks](https://github.com/emberjs/rfcs/blob/master/text/0226-named-blocks.md)
  {% raw %}
  ```hbs
  <MyComponent>
    <:block>...</:block>
  </MyComponent>
  ```
  {% endraw %}
  {% raw %}
  ```hbs
  {{#if (has-block "thing")}}
    {{yield "one" "two" "three" to="thing"}}
  {{else}}
    Default content
  {{/if}}

  {{! ... }}

  <:thing as |first second third|>
    First: {{first}}
    Second: {{second}}
    third: {{third}}
  <:thing>
  ```
  {% endraw %}
  {% raw %}
  ```hbs
  {{#my-component}}
    Hello!
  {{else}}
    Bye!
  {{/my-component}}

  {{! Converts to this under the hood }}

  <MyComponent>
    <:default>Hello!</:default>
    <:else>Bye!</:else>
  </MyComponent>
  ```
  {% endraw %}
- Value Semantics: Contextual components, Helpers, Modifiers and more
  {% raw %}
  ```hbs
  <MyComponent @component={{component "some-component"}} />
  <MyComponent @modifier={{modifier "some-modifier"}} /> {{! NEW! }}
  <MyComponent @helper={{helper "some-helper"}} /> {{! NEW! }}

  {{! ... }}

  <f.Component @foo="bar" />
  <div {{f.modifier foo="bar"}}> ...</div> {{! NEW! }}
  {{#if (f.helper foo="bar")}}...{{/if}} {{! NEW! }}
  ```
  {% endraw %}
  {% raw %}
  ```js
  import Component from '@glimmer/component';
  import { SomeComponent, someModifier, someHelper } from 'some-addon';

  export default class MyComponent extends Component {
    SomeComponent = SomeComponent;
    someModifier = someModifier;
    someHelper = someHelper;
  }
  ```
  {% endraw %}
  {% raw %}
  ```hbs
  <this.SomeComponent @foo="bar" />
  <div {{this.someModifier foo="bar"}}> ...</div>
  {{#if (this.someHelper foo="bar")}}...{{/if}}
  ```
  {% endraw %}
- New Primitives
  - [`{% raw %}{{#in-element}}{% endraw %}`](https://github.com/emberjs/rfcs/blob/master/text/0287-promote-in-element-to-public-api.md)
  - [Destroyables](https://github.com/emberjs/rfcs/blob/master/text/0580-destroyables.md)
  - [Auto-Tracking Memoization](https://github.com/emberjs/rfcs/blob/master/text/0615-autotracking-memoization.md)
  - [`invokeHelper`](https://github.com/emberjs/rfcs/blob/master/text/0626-invoke-helper.md)
  - [Strict Mode Templates](https://github.com/emberjs/rfcs/blob/master/text/0496-handlebars-strict-mode.md)
  - [New Test Waiters](https://emberjs.github.io/rfcs/0581-new-test-waiters.html)
  - [Helper Manager](https://github.com/emberjs/rfcs/blob/master/text/0625-helper-managers.md)
  - [Tracked Storage](https://github.com/emberjs/rfcs/pull/669)
- Process Updates
  - [RFC Stages](https://emberjs.github.io/rfcs/0617-rfc-stages.html)
  - [Deprecation Staging](https://github.com/emberjs/rfcs/blob/master/text/0649-deprecation-staging.md)
  - [New Browser Support Policy](https://github.com/emberjs/rfcs/blob/master/text/0685-new-browser-support-policy.md)
  - Codemods
  - TypeScript Strike Team
  - Polyfills
  - Accessibility Working Group
  - Tooling

HTML-First Apps are the Future <small>- Jen Weber</small>
--------

- HTML is the key to building apps for devices you have not seen or can not imagine
- Web authors in the 90s didn't imagine their websites would be viewed on your phone
- [Core Accessibility API Mappings](https://www.w3.org/TR/core-aam-1.)
- When everything is a `<div>`, you miss out on some of the most powerful programming tools in history
- What does it mean to put HTML first? 🤔
  - Write valid, semantic HTML by default
  - Follow HTML-like patterns in non-HTML
  - Emphasize readability of templates over DRY-ness
  - Test for mistakes
- Ember's evolution
  - {% raw %}`{{outlet}}`{% endraw %} &rarr; {% raw %}`{{page-title "About"}}{{outlet}}`{% endraw %}
  - {% raw %}`{{input type="text" value=firstName}}`{% endraw %} &rarr; {% raw %}`<label>First Name
    <Input @type="text" @value={{this.firstName}} /></label>`{% endraw %}
- `ember-template-lint` to the rescue
  {% raw %}
  ```hbs
  {{! no-nested-interactive: https://github.com/ember-template-lint/ember-template-lint/blob/v3.2.0/docs/rule/no-nested-interactive.md }}
  <div {{on "click" @someClick}} class="my-button">
    Click here
  </div>
  ```
  {% endraw %}
- Custom date picker &rarr; Native date picker
- I don't now everything about what users need, even right now
- Our technological future must be creative, inclusive, and empathetic
- [HTML First Demos](https://github.com/jenweber/html-first-demos)

Building a Pinterest Clone <small>- Jordan Hawker</small>
--------

- Masonry layout
- Existing solutions?
  - [Library](https://github.com/desandro/masonry)
    - 2,500 LOC unminified and last update was nearly 3 years ago 😞
- Lightweight solutions?
- The Masonry Holy Grail™
  - Dynamic number of columns
  - No unused space
  - Fully responsive
  - Efficient reflow
- Pinterest uses explicit CSS `transform`
  - Noticeable delays during content reflow
  - Must recalculate the position of every element in the grid
  - Computationally heavy, JS is slow compared to HTML/CSS
- Enter [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - Fully responsive content reflow
  - Highly configurable
  - Great performance
  - Doesn't support masonry (...[yet](https://caniuse.com/?search=masonry))
- [Ember Photo Gallery](http://ember-photo-gallery.jhawk.co/)
  {% raw %}
  ```hbs
  {{! index.hbs }}
  <MasonryGrid
    @columns="auto"
    @columnWidth="210px"
    @columnGap="10px"
    @rowGap="5px"
    as |grid|
  >
    {{#each @model as |photo|}}
      <grid.Item @async={{true}} as |item|>
        <UnsplashPhoto @photo={{photo}} @onLoadImage={{item.onLoaded}}/>
      </grid.Item>
    {{/each}}
  </MasonryGrid>
  ```
  {% endraw %}
  {% raw %}
  ```hbs
  {{! components/masonry-grid.hbs }}
  <div
    class="masonry-grid"
    {{masonry-columns
      columns=@columns
      columnWidth=@columnWidth
      columnGap=@columnGap
    }}
  >
    {{yield (hash Item=(component 'masonry-item' rowGap=@rowGap))}}
  </div>
  ```
  {% endraw %}
  ```js
  import Modifier from 'ember-modifier';

  export default class MasonryColumnsModifier extends Modifier {
    resizeObserver;

    constructor() {
      super(...arguments);

      this.resizeObserver = new ResizeObserver(() => {
        this.organizeGridColumns();
      });
    }

    get columns() {
      let { columns } = this.args.named;
      let columnGap = parseFloat(this.args.named.columnGap);
      let columnWidth = parseFloat(this.args.named.columnWidth);

      if (columns === 'auto') {
        return Math.floor(
          (this.gridWidth + columnGap) / (columnWidth + columnGap)
        );
      }

      return parseFloat(columns);
    }
  }
  ```
  ```css
  .masonry-grid {
    display: grid;
    box-sizing: border-box;
    grid-auto-rows: 1px;
    justify-content: center;
  }
  ```
- [ember-resize-observer](https://github.com/elwayman02/ember-resize-modifier)

Keep It Local <small>- Chris Krycho</small>
--------

- What "reasoning about your code" really means
{% raw %}
```js
/*
  Instead of declaring all the variables at the top, declare your variables where they will be used
  This forces you to think about scope and makes refactors easy
*/
function doSomething(anArg) {
  let i, total = 0, max, min; // 😢
  max = getMax(anArg);
  min = max < 100 ? 0 : 100;
 
  for (i = min; i < max; i++) {
    total += i;
  }
}

// Converts to...

function doSomething(anArg) {
  let max = getMax(anArg);
  let min = max < 100 ? 0 : 100;
 
  let total = 0;
  for (let i = min; i < max; i++) {
    total += i;
  }
}

// And now refactor is very easy!

function doSomething(anArg) {
  let max = getMax(anArg);
  let min = max < 100 ? 0 : 100;

  let total = getTotal(min, max);
}
function getTotal(min, max) {
  let total = 0;
  for (let i = min; i < max; i++) {
    total += i;
  }
  return total;
}
```
{% endraw %}
- Rust: Two fundamental rules
  - 1️⃣ Data has __one owner__
  - 2️⃣ __No shared mutable data__
    - ​​infinite read access __OR__
    - exactly one write access
- Pure functional programming
- Purity: when a function
  - only has access to its __arguments__
    - no global state
    - no global functions (`console.log`)
  - __cannot mutate__ values
    - not its arguments
    - not other state (no access!)
- Benefits:
  - consistent results: same input &rarr; same output
  - no mutating arguments or global state
  - "referential transparency": ability to substitute the results for evaluating a function for the function itself
    - `2 + 5 = 7`
- Reasoning about your code? &rarr; Local Reasoning! &rarr; Shrink the radius of thought!
- [SOLID](https://en.wikipedia.org/wiki/SOLID)
  - Single Responsibility Principle
  - Open-Closed Principle
  - Liskov Substitution Principle
  - Interface Segregation Principle
  - Dependency Inversion Principle
- Types?
  - `describe(user: User)` has reasoning about a __whole class__ 😓
  - `describe(person: { name: string, age: number })` has reasoning about __structured data__ 🤗
  {% raw %}
  ```ts
  class User {
    constructor(
      name: string,
      age: number,
      email: string,
      state: State,
    ) {}
  }

  function describe(user: User): string {
    return `${user.name} is ${user.age} years old`;
  }

  // Converts to...

  function describe(person: { name: string; age: number }): string {
    return `${person.name} is ${person.age} years old`;
  }
  ```
  {% endraw %}
- Reactivity?
  - Observable-based systems (consumer-driven):
    - `computed()`, `get()/set()`, Two way binding
    - `observer()`, `didReceiveAttrs()`
    - Arbitrary further pushes
  - Autotracking (owner-managed):
    - `@tracked` root state
    - One way data flow
    - No observers
    - No arbitrary reactivity
    - No arbitrary pushes
  - Observable-based systems 😓 &rarr; reasoning about reactivity &rarr; Autotracking 🤗

Learning Ember in 2021 <small>- Lenora Porter</small>
--------

- Algebra Teacher &rarr; Product Designer &rarr; Developer
- The mindset of a beginner 👨‍💻
- Try &rarr; Fail &rarr; Learn &rarr; Repeat
- Your mindset can make or break your learning journey
- Stopping your limiting beliefs
- Moving from failure to failure __without losing your enthusiasm__ 💪
- 10,000 hours to master a skill
  - `40 hours x 52 weeks/year = 2,080 hours/year`
  - `10,0000 hours / 2,080 hours/year = ~5 years`
- Learning style?
- Creating your first curriculum
  - Plan 30 days
    - Where do I want to level up?
    - Mon - Fri: Tutorials & Learning at 5am one hour a day; Weekend: Break
    - Ember Core Concepts: Models/Routing/Services/Components/etc
    - Weekly Study Plan
- Mentors, Coaches, and Community
- What did you do during moments of defeat?
  - Try &rarr; Fail &rarr; Learn &rarr; Repeat!
- Join the community, say Hello and build out your curriculum
- If you are an Ember community leader, reach out to encourage newcomers when you can. Cultivate an inclusive environment

Building a Realtime App with Firebase and Ember M3 <small>- Chris Garrett</small>
--------

- What problem is M3 trying to solve? 🤔
- Thousands of models + nested fragments
- Solution: Generated models
  - No more issues keeping things in sync
  - Still shipping thousands of generated models and fragments to the clients
- M3: Mega Morphic Model
- [ember-m3](https://github.com/hjdivad/ember-m3)
  - Blob of JSON
  - Understands relationships
  - Deduplicates IDs
- Configured via M3 schema to work with any API
- Pros: Handles complex nested models, works well with strong APIs, less maintenance required to keep frontend and backend in sync, better performance with many models
- Cons: Frontend no longer has model definitions, can't work with bespoke APIs, relationships are sync (No promise API for loading a `belongsTo` or `hasMany` &ndash; you need to make sure that data is loaded ahead of time)
- [Firebase](https://firebase.google.com/) is a backend as a service
- DB is [Firestore](https://firebase.google.com/docs/firestore)
  - Data is not represented as tables, it is represented as JSON objects
- Pros: Can represent complex data models pretty easily, no need for 10 tables and 20 joins, application development more fluid
- Cons: Limited query capabilities, no concept of relationships
- Firestore &harr; M3
- No more models, but you can type your models with an interface `models/meal-plan.d.ts` instead
  {% raw %}
  ```ts
  import Recipe from './recipe';

  interface Meal {
    name: string;
    recipe: Recipe;
    servings: number;
  }

  interface Day {
    meals: Meal[];
  }

  interface MealPlan {
    name: string;
    days: Day[]
  }

  export default MealPlan;
  ```
  {% endraw %}
- [firestore-m3](https://github.com/pzuraq/firestore-m3)

Please Wait... Oh it didn't work! <small>- Tobias Bieniek</small>
--------

- Best practices
{% raw %}
```js
class HttpError extends Error {
  constructor(response) {
    let message = `HTTP request failed with: ${response.status} ${response.statusText}`;
    super(message);
    this.status = response.status;
  }
}

function isServerError(error) {
  return error instanceof HttpError && error.status >= 500;
}

function isNetworkError(error) {
  return error instanceof TypeError;
}

class LikeButton extends Component {
  @task *likeTask() {
    try {
      let response = yield fetch('/like', { method: 'POST' });
      if (!response.ok) {
        throw new HttpError(response);
      }
    } catch (error) {
      this.notifications.error('whoops...that did not work!');
      if (!isNetworkError(error) && !isServerError(error)) {
        Sentry.captureException(error);
      }
    }
  }
}
```
{% endraw %}
- Helpful test utilities
{% raw %}
```js
function setupFetchRestore(hooks) {
  let oldFetch;

  hooks.beforeEach(function() {
    oldFetch = window.fetch;
  });

  hooks.afterEach(function() {
    window.fetch = oldFetch;
  });
}

module('Component | LikeButton', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);
  setupFetchRestore(hooks);

  //...

  test('network error', function() {
    window.fetch = async function() {
      throw new TypeError(
        'NetworkError: when attempting to fetch resource.'
      )
    }

    await render(hbs`<LikeButton/>`);
    await click('button');
    await waitFor('button[disabled]');
    assert.dom('[data-test-notification-message="error"]')
      .hasText('whoops...that did not work!');
  });
});
```
{% endraw %}
- Use `defer()` to avoid race conditions and slow tests
{% raw %}
```js
test('loading state', function() {
  let deferred = defer();
  this.server.post('/like', deferred.promise);

  await render(hbs`<LikeButton/>`);

  click('button');
  await waitFor('button[disabled]');
  assert.dom('button')
    .isDisabled()
    .hasText('Please wait...');

  deferred.resolve({ likes: 5 });
  await settled();
  assert.dom('button')
    .isEnabled()
    .hasText('Like');
});
```
{% endraw %}
- Use a notification system
- Use an error reporting service
- Throw `HttpError` for HTTP error responses
- Only send unexpected errors to your error reporting service

Ending the Plague of Memory Leaks <small>- Steve Szczecina</small>
--------

- The Heap: a finite chunk of memory dedicated to a browser tab
- Memory allocation: Every object is automatically stored in the heap as your program runs
- Heap Snapshot Tool 🔧
- Garbage Collection: Used by the JS engine to free up memory by removing objects from the heap once they no longer referred
- Memory Allocation Timeline 🪛
- GC Root: Object in the heap that is not reachable from a GC root will be garbage collected (`window`/global object, DOM Tree)
- Memory Leak: Occurs when an unused object remains in the heap and is never garbage collected
- As the heap grows, GC will take longer to execute and will execute more frequently. Also, if the problem is bad enough, the heap can actually run out of memory completely.
- Long user sessions? Lots of time for memory issues to compound
- high priority + no reproduction = disaster
- [memory-leak-examples](https://github.com/ember-best-practices/memory-leak-examples)
- run test &rarr; open dev tools &rarr; take a heap snapshot &rarr; search the heap snapshot &rarr; change some code &rarr; rinse &rarr; repeat
- Ember's declarative template system lets us completely ignore a whole class of problems
- Ember's {% raw %}`{{on}}`{% endraw %} modifier automatically takes care of this as well
{% raw %}
```hbs
  <button {{on "click" this.doStuff}}>
    Hi!
  </button>

  {{! ... }}

  <div {{doDOMStuff}}>
    {{! ... }}
  </div>
```
{% endraw %}
- [Destroyables](https://api.emberjs.com/ember/release/modules/@ember%2Fdestroyable): A toolset of new APIs in Ember for managing lifecycle and teardown. Available since v3.22
- Common leaks:
  - event callbacks that are never cleaned up
  - storing state in module scope
  - putting non-primitives on object prototypes
  - async functions that never complete
  - unintended closures
  - babel transpilation of `let`/`const`
- [ember-cli-memory-leak-detector](https://github.com/steveszc/ember-cli-memory-leak-detector) ✨

Closing Keynote <small>- Edward Faulkner</small>
--------

- The fastest build tool is no build tool ❌
- Ember was one of the very first projects committing strongly to utilize a build tool
- Next? 🔮
- How far can we push minimizing the server?
```html
<!-- No web server --->
<script type="importmap">
  {
    "imports": {
      "lodash-es": "https://cdn.skypack.dev/lodash-es@^4"
    }
  }
</script>
<script type="module">
  import { capitalize } from 'lodash-es';
</script>
```
- Aghhh, but now we need a web server again
```html
<!-- Needs a web server --->
<script type="module" src="./app.js"></script>
```
- But what about incorporating a build tool? Hmmmmmmm...
```html
<script src="./please-understand-typescript.js"></script>
<script type="module" src="./app.ts"></script>
```
- Service worker to the rescue. Its actually an excellent place for DevTools
- Persists across page reloads
- Nothing is going to get stuff into the browser than the browser's own cache
- How to we bring this to Ember apps now? Embroider
- Ember App &rarr; Embroider Compat (compiler) &rarr; "Vanilla" (the spec) &rarr; Webpack &rarr; The Web
```js
// Follow web standards
export default setComponentTemplate(
  precompileTemplate("<YourTemplateHere/>"),
  class extends Component {
    // your component JS here
  }
);
```
- Webpack &harr; Snowpack
- Ship with a great out of the box experience, but it should be possible for the community to experiment
- [Mho](https://github.com/ef4/mho): Experimental service-worker based javascript build tool 🤯
  - Written in [Rust](https://www.rust-lang.org/)
  - Serves files
  - Serves a manifest of all files with versioning
  - mho client: Waits for the service worker and reload the page
  - Browser does all the work of discovering the files
  - `importmap.json`: basically a translation of `yarn.lock`
- Embroider is the Ember community's bridge into the future of Web build tools
- [Fun Fast Tools for Serious Work](https://eaf4.com/emberconf2021/)


Bonusconf
========


AMA with @rwjblue <small>- Robert Jackson</small>
--------

  - Best ways to solve state complexities when converting a classic app to octane?
    - `{% raw %}TODO{% endraw %}`, linting, introducing new best practices for new features
  - Status of major ecosystem projects like Fastboot, Embroider and Engines?
    - Fastboot: team resurgence as of recently (past 3-4 months), Rehydration opt-in &rarr; default behavior, head on over to the Discord `{% raw %}#fastboot{% endraw %}` channel weekly meeting
    - Embroider: redo of the build pipeline which backs Ember apps, addons testing against Embroider by default, Open PRs against [Ember CLI](https://cli.emberjs.com/release/) to make Embroider the default
    - Engines: Build-time/run-time isolation and bundling of individual assets and on-disk separation by having a logic root path for a subtree. Embroider should help eliminate some of the dependency on Engines (route subpath to lazily load/individually mount engines)
  - Will more focus be given to applications using Windows?
    - Embroider `{% raw %}master{% endraw %}` branch has all known Windows-related bug fixes which will land soon
  - Are there plans to go beyond Fastboot to a more integrated framework?
    - There's most likely a future state where Fastboot is integrated into the default Ember CLI [blueprint](https://github.com/ember-cli/ember-cli/tree/master/blueprints)
  - What are some things, current or future, where Ember has analyzed other frameworks and decided to either integrate or stay away from certain ideas?
    - Integrating: `{% raw %}import{% endraw %}` statements and leveraging standard JS packaging and bundling
    - Staying away: Imperative render functions
    - Both sides: React Hooks &mdash; instead opting integrating directly we can leverage some of the lower level primitives
  - Which initiatives and ideas have you most excited about the future of Ember and our community?
    - Spend lots of time working on the micro level but when I get a chance to look up at a high level it would be Embroider and template language improvements (modifiers/side-effects/etc)
  - Strategy to prevent burnout?
    - Helpful engineering manager who understands, stepping back very slightly to let others take on tasks
  - What do you think would increase the adoption of Ember?
    - We all need to be more comfortable with regards to our increase in productivity and be more vocal 🗣️ about it. People who put their heads down and just get their work done are unfortunately more often the ones who will shy away from speaking out about the exciting happenings in the Ember community. Marketing.
  - How do you see Ember fitting into the larger Frontend landscape?
    - Not doing our own special and bespoke things. Leveraging more of the work going in the greater JS community. [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) and [ember-try](https://github.com/ember-cli/ember-try) are some things that do not really exist outside of Ember and they are concepts and code that we can offer to the greater ecosystem, for example.
  - What would you say to people who haven't tried Ember yet or haven't tried Ember lately?
    - "Don't pick the tech, solve your problem."
    - Ember has iteratively changed and improved significantly since pre-octane days

Continuous Accessibility <small>- Melanie Sumner</small>
--------

  - Accessibility primer:
    - Inclusive websites so people with disabilities can use what we create
    - Accessibility === A11y
    - [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/glance/)
  - CD (Continuous Delivery) &rarr; CI (Continuous Integration) &rarr; CA (Continuous Accessibility)
  - [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint) release [v3.0.0](https://github.com/ember-template-lint/ember-template-lint/releases/tag/v3.0.0) delivers template linting in such a way to ensure our code has a path to accessibility by default
  - Audit reports and automation reported issues
  - 1️⃣ Automation
    - [Lighthouse](https://developers.google.com/web/tools/lighthouse)
    - [Microsoft Accessibility insights](https://accessibilityinsights.io/)
    - [ember-a11y-testing](https://github.com/ember-a11y/ember-a11y-testing)
    - [axe-core](https://github.com/dequelabs/axe-core)
    - [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint)
      - [TODO](https://blog.emberjs.com/how-to-todo-in-ember-template-lint/): instead of simply having `WARNING` and `ERROR`, `TODO` is time-based
      - New rule released -> Existing code -> Create `TODO`s and plan to fix
      - `{% raw %}ember-template-lint . --update-todo{% endraw %}`
      - `{% raw %}ember-template-lint . --include-todo{% endraw %}`
      - `{% raw %}ember-template-lint . --fix{% endraw %}`
  - 2️⃣ Audits
  - 3️⃣ User Reports
  - Metrics
    - Meaningful, Controllable, Actionable
    - _"When a measure becomes a target, it ceases to be a good measure"_ -Goodhart's Law 
    - Potential violation count: WCAG, Location legal standards, Failures identified by audit findings
    - [A11y Automation Tracker](https://a11y-automation.dev/)
    - Total bug count, Bug severity count, Time to fix, Violation frequency
    - Trend analysis 📈

Lint ALL The Things <small>- Bryan Mishkin</small>
--------

  - Linter: Rule-based static code analysis tool
  - Catching a real bug with linting
    ```js
    export default class MyComponent extends Component {
      // Missing a `return` statement
      get isAllCompleted() {
        return this.milestones.every((milestone) => {
          milestone.completed;
        }
      }
    }
    ```
  - Enforce and educate about best practices ✨
    ```js
    export default Component.extend({
      tagName: 'li'
    })
    ```
  - Tighten security
    {% raw %}
    ```hbs
    {{{post.body}}}
    ```
    {% endraw %}
  - Tools
    - [eslint](https://eslint.org/)
    - [eslint-plugin-ember](https://github.com/ember-cli/eslint-plugin-ember): Octane by default as of [v10.0.0](https://github.com/ember-cli/eslint-plugin-ember/releases/tag/v10.0.0)
    - [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
    - [eslint-plugin-qunit](https://github.com/platinumazure/eslint-plugin-qunit)
    - [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint)
    - [prettier](https://prettier.io/)
    - [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
  - Writing your own lint rule is very approachable: Implement a simplified `ember/no-get`
    - `this.get('myProperty')` &rarr; `this.myProperty`
    - [AST Explorer](https://astexplorer.net/)
    - Write tests &mdash; `allowed: [], disallowed: []`
    - Write your rule
      ```js
      CallExpression(node) {
        if (isViolation) {
          report(node, 'use ES5 getter' );
        }
      }
      ```
  - IDE highlighting and auto-fixing linting violations

Handling Images on the Web <small>- Marco Otte-Witte</small>
--------

  - Simple: `<img src="/images/my-image.jpg">`
  - More complex: `<picture>`, `<source>`, `<svg>`
  - Decisions we make around images have real impacts on the end-user's experience
  - 1️⃣ Images as essential UI
    - Icons, status indicators
    - Many but small
    - Dynamic
    - Must be present immediately (don't lazy load) ❗
    - Image URLs in CSS: A slight rendering delay
    ```css
    background-image: url('/images/contacts.png');
    ```
    - Base64 in CSS: CSS is a render-blocking resource; doing this bloats the CSS file size.
    ```css
    background-image: url('data:image/png:...');
    ```
    - Icon font: Bad for A11y, screen reader interprets as text
    - 🚀 SVG: Embed the SVG inline in the DOM and the icon is rendered instantly. Stylable and dynamic. However, JS is parser blocking; Many inline SVGs may bloat DOM and cause delay.
      - [ember-asset-sizes-action](https://github.com/simplabs/ember-asset-size-action): diffs the asset sizes of the `master` branch and the `PR` branch
    - SVG is generally best, just remember to avoid disproportionately growing your JS bundle with many inline SVGs
  - 2️⃣ Static images
    - Photos, illustrations
    - Few but big
    - Non-essential
    - No adaption to application state
    - Lazy load
    - Asynchronously decode image off the main thread
    - Show placeholder which displays immediately
    - Explicitly code image dimensions to prevent layout shift
    {% raw %}
    ```html
    <img
      src="/images/landing.jpg"
      loading="lazy"
      sizes="(max-width: 608px) 100vw, 1280px"
      srcset="/landing-608.jpg 608w, /landing-1280.png 1280w"
      decoding="async"
      style="background-size: cover; background-image: url('data:image/base64;...')"
      width="1280"
      height="400"
    >
    ```
    {% endraw %}
    - PNG, JPEG, [WebP](https://developers.google.com/speed/webp) (combines lossless + lossy encoding and transparency)
    {% raw %}
    ```html
    <!-- Fallback mechanism -->
    <picture>
      <source srcset="landing.webp" type="image/webp">
      <img src="landing.jpg">
    </picture>
    ```
    {% endraw %}
    - Real world example: PNG 201KB &rarr; WebP 25KB
    - [ember-responsive-image](https://github.com/kaliber5/ember-responsive-image)
  - 3️⃣ Images as data
    - Loaded as part of dynamic data from an API
    - Discovered at runtime
    - Similar to static images otherwise
    - One option: API response should include additional image information in order to apply all the optimizations from above
    {% raw %}
    ```html
    <!-- Fallback mechanism -->
    <picture>
      <source srcset={{@post.picture.url.small}} type="image/webp" media="(max-width: 608px)">
      <source srcset={{@post.picture.url.large}} type="image/webp" ...>
      <img src="landing.jpg">
    </picture>
    ```
    {% endraw %}
    - Another option: Preload the image in the Routes `model` hook (If the image is more critical to the application)
    {% raw %}
    ```js
    async model() {
      let posts = await this.store.findAll('post');
      await Promise.all(posts.map(p) => preloadImage(p.picture));
      return posts;
    }

    function preloadImage(src) {
      // ...
    }
    ```
    {% endraw %}

Technical Interviews Don't Have to Suck <small>- Kaitlin Jones-Muth</small>
--------

  - Be kind to people 😁
  - Plan ahead
  - Consistent questions from interview to interview
  - What does your team need?
  - Once you figure out what you want, how do you evaluate that?
  - Adjust as you go
  - You want the candidate to be at ease (and to leave feeling good)
  - Be conversational and welcoming
  - Talk about what to expect and what _not_ to expect
  - Coach candidates
    - "Let's say we want to add an interactive table to our page. What are some things we can do to make that table accessible?"
    - Stuck or less experienced candidate?
      - _Be more specific_: "What about someone who is visually impaired but isn't using a screen reader?"
      - _Pivot to a different skill_: "How would you approach a designer or stakeholder about making the page more accessible?"
    - Very experienced candidate?
      - _Make the problem more complex_: "What if the columns need to be resizable?"
    - Candidate is missing important details?
      - _Ask directly_: "What things would we want to use ARIA for, and when would we want to use semantic HTML instead?"
      - _Ask about personal experience_: "Have you had to deal with this before? What problems did you run into?"
  - Give useful feedback
  - Technical interviews are actually behavioral interviews: How we arrive at the answer is generally more important than the answer itself.

Introducing Template Imports <small>- Chris Garrett</small>
--------

  - Currently: Ember resolves template values using file system matching
  - In the future you will import explicitly using JS syntax 🌟
    - Better developer experience, integration with editors and tooling
    - More flexible file layout
    - Simplifies internals, better performance
  - Initial Ideas
  {% raw %}
  ```hbs
  ---
    import MyComponent from './my-component'
  ---
  ```
  {% endraw %}

  {% raw %}
  ```hbs
  <script>
    import MyComponent from './my-component'
  </script>
  ```
  {% endraw %}
  - Instead of pushing a final API immediately. We'll use Low level APIs first to develop the best available final API ✨
  {% raw %}
  ```js
  precompileTemplate()
  ```
  {% endraw %}
  - [ember-template-imports](https://github.com/ember-template-imports/ember-template-imports)
  - Using `<template>` tags and `.gjs` files
  - Defining values in the same file 💯
  {% raw %}
  ```js
  // hello.gjs
  import { helper } from '@ember/component/helper';
  import moment from 'moment';
  
  const Greeting = <template>
    Hello, {{@name}}!
  </template>
  
  const currentTime = helper(() => {
    return moment().format('h:mm:ss a');
  });
  
  <template>
    <Greeting @name={{@name}}/>!
  
    It is currently {{currentTime}}.
  </template>
  ```
  {% endraw %}
  - Using template literals with `hbs`
  - Assign the final template to the `static template` class property
  {% raw %}
  ```js
  // components/hello.js
  import Component from '@glimmer/component';
  import { hbs } from 'ember-template-imports';

  export default class Hello extends Component {
    name = 'world';

    static template = hbs`
      <span>Hello, {{this.name}}!</span>
    `;
  }
  ```
  {% endraw %}

Birds-eye Vue of Ember <small>- Gonçalo Morais</small>
--------

  - If you know [Vue](https://vuejs.org/), you know Ember as well
  - Core concepts
  - Command Line Interfaces
    - [Vue CLI](https://cli.vuejs.org/)
    - [Ember CLI](https://cli.emberjs.com/)
  - Single file components
    - Vue: by default
    - Ember: Can enable using [ember-template-imports](https://github.com/ember-template-imports/ember-template-imports)
  - Passing data into a component
    - Vue: `props`
    - Ember: `arguments`
  - Component state and reactivity
    - Vue: `watch`
    - Ember: `@tracked`
  - Native events
    - Vue: `<button v-on:click="count++">`
    - Ember: {% raw %}`{{on "click" this.handleClick}}`{% endraw %}
  - Directives (Vue)/Modifiers (Ember)
    - Vue: Directives
    - Ember: Modifiers
  - Slots (Vue)/Named Blocks (Ember)
  - Global state
    - Vue: [Vuex](https://vuex.vuejs.org/) for stores &rarr; provide/inject in Vue 3
    - Ember: Services and [ember-data](https://github.com/emberjs/data)
  - Routing
    - Vue: [Vue router](https://router.vuejs.org/)
    - Ember: `router.js` and `<LinkTo @route="about">`
  - Testing
    - Vue: Loose official guidance
    - Ember: Ships with tests and generators out of the box
  - Animations and Transitions
    - Vue: Applies CSS classes `.slide-fade-enter-active`
    - Ember: Not built-in with Ember but [ember-css-transitions](https://github.com/peec/ember-css-transitions) or [ember-animated](https://github.com/ember-animation/ember-animated)

Building Forms Mobile Users Will Love <small>- James Steinbach</small>
--------

  - Use semantic markup
  - Foundation: Input that renders correctly on every device
  {% raw %}
  ```html
  <label>
    Username
    <input type="text" />
  </label>
  ```
  {% endraw %}
  - Ember `unique-id` helper [RFC](https://emberjs.github.io/rfcs/0659-unique-id-helper.html)
  {% raw %}
  ```hbs
  {{#let (unique-id) as |usernameId|}}
    <label for={{usernameId}}>Username</label>
    <input id={{usernameId}} type="text" />
  {{/let}}
  ```
  {% endraw %}
  - Attributes
    - `type`: Semantically identifies the type of input content
    - `autocomplete`: Tells browsers what user data to offer as autocomplete options
    - `inputmode`: Suggests the ideal on-screen keyboard for mobile devices
  - Integrate password managers for a username field
  {% raw %}
  ```html
  <input
    type="text"
    autocomplete="username"
    autocorrect="off"
    autocapitalize="none"
    spellcheck="false"
  />
  ```
  {% endraw %}
  - Addresses
  {% raw %}
  ```html
  <input
    type="text"
    autocomplete="street-address"
  />
  ```
  {% endraw %}
  - Numbers
  {% raw %}
  ```html
  <input
    type="text"
    inputmode="decimal"
    pattern="[0-9]*"
  />
  ```
  {% endraw %}
  - Verification code
  {% raw %}
  ```html
  <input
    type="text"
    inputmode="decimal"
    autocomplete="one-time-code"
  />
  ```
  {% endraw %}
  - Dates
  {% raw %}
  ```html
  <fieldset>
    <legend>Start Date</legend>

    <label for="month">Month (MM)</label>
    <input id="month" type="text" inputmode="decimal" />

    <label for="day">Day (DD)</label>
    <input id="day" type="text" inputmode="decimal" />

    <label for="year">Year (YYYY)</label>
    <input id="year" type="text" inputmode="decimal" />
  </fieldset>
  ```
  {% endraw %}
  - CSS / Design 📍
    - Prevent iOS zoom with minimum `font-size` of `16px`
    - Use a single column layout
  - Resources 👇
    - [Input Builder](https://better-mobile-inputs.netlify.app/)
    - [`inputmode` Tester](https://inputmodes.com/)
    - [Mobile-friendly input CodePen examples](https://codepen.io/collection/AagvdL)