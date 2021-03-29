---
layout: post
title: "EmberConf 2021 Notes"
date: 2021-03-29
categories: ember emberconf
description: EmberConf 2021 list of highlights from my favorite talks
---

Here is a highlighted overview of the major points from some of my favorite EmberConf 2021 talks:


Conference
========


Opening Keynote, Part 1 <small>- Yehuda Katz</small>
--------

Opening Keynote, Part 2 <small>- Godfrey Chan</small>
--------

HTML-First Apps are the Future <small>- Jen Weber</small>
--------

Launching at Scale During a Pandemic <small>- Regina Galieva</small>
--------

Building a Pinterest Clone <small>- Jordan Hawker</small>
--------

Keep It Local <small>- Chris Krycho</small>
--------

Learning Ember in 2021 <small>- Lenora Porter</small>
--------

Building a Realtime App with Firebase and Ember M3 <small>- Chris Garrett</small>
--------

Typed Ember Extends Confidence <small>- Krystan Huffmenne</small>
--------

Please Wait... Oh it didn't work! <small>- Tobias Bieniek</small>
--------

Ending the Plague of Memory Leaks <small>- Steve Szczecina</small>
--------

Modernizing a Massive Monolith <small>- Audrey Knudson</small>
--------

Fast-track Ember with Fastboot + Embroider <small>- Suchita Doshi, Thomas Wang</small>
--------

Closing Keynote <small>- Edward Faulkner</small>
--------


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
    import MyComponent from './my-component
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