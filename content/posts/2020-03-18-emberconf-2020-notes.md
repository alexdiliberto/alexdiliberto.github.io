---
date: "2020-03-18T00:00:00Z"
description: EmberConf 2020 list of highlights from my favorite talks
title: EmberConf 2020 Notes
categories: programming
tags:
  - ember
  - emberconf
---

Here is a highlighted overview of the major points from some of my favorite EmberConf 2020 talks:


DAY 1
========


Opening Keynote {{< span class="u-small" >}}&ndash; Yehuda Katz, Jen Weber, Godfrey Chan{{< /span >}}
--------

  - First ever all-virtual [EmberConf](https://emberconf.com/) 💻 ⚡ 🎉
  - There's more to software than the number of lines of code you write
  - Value sustainability
  - Innovating on Community 🤝 👪
  - [Ember 1.13](https://blog.emberjs.com/2015/06/12/ember-1-13-0-released.html) had a large number of [deprecations](https://deprecations.emberjs.com/v1.x/)
    - Technically followed [SemVer](https://semver.org/), but created lots of chaos...😰
    - SemVer doesn't tell the whole story of ecosystem stability 
  - [RFC Process](https://github.com/emberjs/rfcs) (Started 2014 📅)
    - Driven by the community
    - Aid the core team with many perspectives
    - Collect constraints
    - Build relationships
    - Provide structure for implementation
    - Record history and rationale
  - [RFC](https://github.com/emberjs/rfcs/pull/345): Slack &rarr; Discord 🌟
  - [RFC](https://github.com/emberjs/rfcs/pull/425): Website Redesign ✨
    - [But where's the Tomster?](https://github.com/emberjs/rfcs/pull/425#issuecomment-449557079) - Drives conversation and solutions
  - Core teams &rarr; Diverse leadership
  - Together™
  - 2017: Ember framework began to feel like it was falling behind
  - [_Surviving the Framework Hype Cycle_](https://www.youtube.com/watch?v=9zc4DSTRGeM) by Brandon Hays 📺
    - Settlers and Pioneers
    - Shipping features as low-level primitives and let the pioneers finalize the APIs
      - Stable 🧱
      - Give pioneers the tools and leave the settlers alone
      - `visit()` API &rarr; [Fastboot](https://ember-fastboot.com/)
      - Component Manager &rarr; [`@glimmer/component`](https://github.com/glimmerjs/glimmer.js/tree/master/packages/%40glimmer/component)
      - Modifier Manager &rarr; [`ember-modifier`](https://github.com/ember-modifier/ember-modifier)
    - But when do settlers adopt?
  - 2019: [Ember Editions](https://emberjs.com/editions/)
    - Collection of features
    - ...and the settlers keep on working
  - [Ember Octane](https://emberjs.com/editions/octane/)
    - Fresh look for a new user 🎊
      - :one: HTML-First Framework 
        - Core of Ember is HTML and CSS
        - No special Ember-specific tweaks...Just copy paste :scissors:
        - Components can simply be a natural extension of HTML &rarr; Driven by HTML and Templates
          - Template only components (Improved performance, no `this` in template) 🏎️
      - :two: Integrating JavaScript
        - Old: Managing DOM 😭 👎 &rarr; New: Managing Data 😆 👍
        - JS file co-located next to your existing Template
        - Native JS syntax and idioms
        - `this.args`
        - `get shareURL() { //... }` &rarr; `{{this.shareURL}}` (JustWorks™ in the template)
          - [Autotracking](https://guides.emberjs.com/release/in-depth-topics/autotracking-in-depth/): Auto-updates the getter if any passed-in `this.args` properties used in `shareURL` change
            - [`@tracked`](https://github.com/emberjs/rfcs/blob/master/text/0410-tracked-properties.md) properties
            - Even works on Native JS classes
      - :three: Working with the DOM
        - [Element modifiers](https://guides.emberjs.com/release/components/template-lifecycle-dom-and-modifiers/)
        ```hbs
        <button {{on "click" this.toggleSize}}></button>
        
        {{#if this.isLarge}}
          Large code...
        {{else}}
          Small code...
        {{/if}}
        ```
        ```js
        import Component from '@glimmer/component';
        import { tracked } from '@glimmer/tracking';

        export default class MyComponent extends Component {
          @tracked isLarge = true;

          @action toggleSize() {
            this.isLarge = !this.isLarge;
          }
        }
        ```
        - Powerful, intuitive
        ```hbs
        <input {{autofocus}} />
        ```
        ```js
        export default class AutofocusModifier extends Modifier {
          didInstall() {
            this.element.focus();
          }
        }
        ```
        - [ember-ref-modifier](https://github.com/lifeart/ember-ref-modifier)
    - Syntax and mental model overhaul
      - [Shipped](https://blog.emberjs.com/2019/12/20/octane-is-here.html) Dec 2019
      - Don't have to rewrite apps to begin using features
      - Linting out of the box
      - Updated defaults when generating apps
      - Zero config builds
      - [Refreshed guides](https://guides.emberjs.com/release/)
    - Create a new app &rarr; `ember new`
    - Paste in HTML and CSS &rarr; `application.hbs`
    - Fast deploy &rarr; [Netlify](https://www.netlify.com/)
    - Incrementalism
    - Backwards compatibility
    - Interoperability between new and old paradigms
    - Codemods
    - [Ember 2019-2020 Roadmap RFC](https://github.com/emberjs/rfcs/pull/519)
      - Invest in Octane
      - Modernize [build system](https://github.com/embroider-build/embroider)
      - Better accessibility by default
      - Share Octane outside our community
    - Building Ember Together 🤝
    - [ember-inspector](https://github.com/emberjs/ember-inspector) - Octane certified 🥇
    - [Ember Twiddle](https://ember-twiddle.com/) - Octane certified 🥇

FastFlood: The Story of a Massive Memory Leak in FastBoot Land {{< span class="u-small" >}}&ndash; Sergio Arbeo{{< /span >}}
--------

- [Fastboot](https://ember-fastboot.com/): Render Ember apps on the server
- Memory leak: piece of data which should have been garbage collected ♻️
- But Why❓
  - A reference is being kept somewhere
- Chrome Developer tools 🛠️
  - Object memory graph - All objects in memory 📊
    - Distance - Distance from GC root
    - Shallow size - Size of the object itself
    - Retained size - Size we would free if we freed the object reference
  - Heap profile - Capture memory state at a point in time
    - Three snapshot technique to find the problem areas
      - :one: Warmup the application - Create baseline objects
      - :two: First snapshot
        - Now, do the suspected memory leak action
      - :three: Second snapshot
        - Now, repeat the action
      - :four: Third snapshot
- Timeline tool
- Step 0: Reproduce locally on a production-ish build (no uglification)
- Step 1: Find the leak 🔎
  - Run the server [with debugging enabled](https://nodejs.org/en/docs/guides/debugging-getting-started/)
  - Make one request
  - Start timeline
  - Make a few requests
  - Inspect
    ```js
    class LeakDetect {
      constructor() {
        Object.assign(this, attrs);
      }
    }
    ```
- Step 2: Find the dominator (retainer we need to remove so the leak is gone) 🔎
- [`Container`](https://github.com/emberjs/ember.js/blob/v3.17.0/packages/@ember/-internals/container/lib/container.ts#L73): used to instantiate and cache objects, associated with a `Registry`
- Look for Owner leaking (public API of the `Container`)
- Problem:
  ```js
  export default Adapter.extend({
    headers: computed(function() {
      return {
        Authorization: `Bearer ${something.here}`;
      }
    })
  })
  ```
- Fix:
  ```js
  export default Adapter.extend({
    get headers() {
      return {
        Authorization: `Bearer ${something.here}`;
      }
    }
  })
  ```

Octane: A Paradigm shift in EmberJS {{< span class="u-small" >}}&ndash; Suchita Doshi{{< /span >}}
--------

- The Journey of Ember 🏃‍♀️
  - Ember 1.x
    - Convention over configuration
    - Built-in routing
    - [Ember Data](https://github.com/emberjs/data)
    - View driven architecture
    - Two way bindings 🔁
    - Attribute bindings
  - Ember 2.x
    - Component driven architecture
    - Glimmer rendering engine adoption
    - Better binding with properties
    - Improved template scoping
    - "Data Down, Actions Up" approach
    - Roadmap for further improvements
  - Ember 3.x
    - Road to Octane
    - Cleanup
    - Remove IE9, IE10, PhantomJS and Bower
    - Native Classes
    - Angle Brackets
    - Lots of documentation
- Evolution of Ember
- Edition: Shift in programming model due to new framework features ✨
- [Native Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
  - Increased performance
  - Smooth learning curve
  - More aligned with JS community
- [Glimmer Components](https://guides.emberjs.com/release/upgrading/current-edition/glimmer-components/)
  - Simple, Ergonomic, Declarative 💪
  - Fewer lifecycle hooks and properties to learn
  - Removed the implicit component wrapper
  - Namespaced arguments
- Templating in Octane
  ```hbs
    {{!-- Old --}}
    {{employee-details
      name=employeeName
      empId=employeeId
      addEmployee=(action "addEmployee")}}
    
    {{!-- New --}}
    <EmployeeDetails
      @name={{this.employeeName}}
      @empId={{@employeeId}}
      @addEmployee={{this.addEmployee}}
    />
  ```
- Tracked Properties
  - No more `this.set()`
  - Reduce complexity
- Modifiers and Decorators
- [`ember-codemods`](https://github.com/ember-codemods)
- [Ember Atlas](https://www.notion.so/The-Ember-Atlas-4094f81c86c34badb4a562ed29414ae1)


AST: the Secret Weapon to Transform a Codebase {{< span class="u-small" >}}&ndash; Sophia Wang{{< /span >}}
--------

- How do I bulk edit syntax at scale?
  - Example: Wrap all requests with a global error handler
  - But we have a problem... Hundreds of requests scattered around the codebase
    - Update manually? 🤔😢 Tedious and time consuming
    - Update with RegEx? 🤔😢 Too inefficient for so many unique changes
    - Update with Codemods? 🤔😆
- Understanding the grammar behind a language
  - Apple === Noun
- :one: Tools 🛠️
  - [ESLint](https://eslint.org/)
    - Disallow unreachable code
      ```js
      function foo() {
        let retVal = 1;
        return retVale;
        returnValue = 2; // <-- Unreachable code detected ts(7027)
      }
      ```
  - [Codemod](https://github.com/facebook/codemod): Bulk edit syntax
  - [Babel Transpiler](https://babeljs.io/): Write modern JS &rarr; Transpile &rarr; Run in any browser
    ```js
    // Convert this
    [1, 2, 3].map((n) => n + 1);

    // To this
    [1, 2, 3].map(function(n) {
      return n + 1;
    });
    ```
- :two: What is an Abstract Syntax Tree (AST)? 🌳
  - A Tree structure highlights the most important syntax of a language
  - Tree: Nodes connected by Edges
  - Heap Tree
  - Parse Tree
  - AST: Best parts of a Parse Tree (Structure) but only highlights the most important information
    - Remove extraneous information, Simpler
- :three: How does syntax transformation work?
  - Parsing
    - Lexical analysis (Scanning/Tokenization)
    - Syntax analysis - [AST Explorer](https://astexplorer.net/) (Includes Glimmer parser ✨)
  - Transformation
  - Code Generation

Taming the Beast: Managing a *really* ambitious codebase {{< span class="u-small" >}}&ndash; Luke Deniston{{< /span >}}
--------

- But **this time** I will build things the right way...
- The Beast === Complexity
- When we write code, we're telling a story
  - Audience: Developers, Computers
- Strategies for dealing with complexity
  - Abstracting
  - Subdividing (Systems &rarr; Subsystems)
- Codebase v1: Coffeescript, Rails, Ember 😑
  - Regressions with each upgrade
  - Performance degradation
- Codebase v2: Shared addon and micro front ends 😑
  - Solved some issues but full page refreshes when navigating from app to app
  - In-repo engines? Repo-mageddon
  - Fix bug in shared addon &rarr; 5-6 different cascading pull requests
- Codebase v3: Mono repo - [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) with [Ember Engines](https://github.com/ember-engines/ember-engines) 🥳
  - Workspaces: 1 repo, many packages
    - Packages can import each other
      ```js
      {
        "private": true,
        "workspaces": ["packages/*"]
      }
      ```
    - Pro tip: Make individual package folder with the same name as the `package.json` name field
  - Engines: Mini application, built and booted by the host application
    - Optional lazy loading
    - Code isolation
    - Routable engine
      ```js
      Router.map(function() {
        this.mount('super-blog');
      })
      ```
    - Routeless engine
      ```hbs
      {{mount "super-blog"}}
      ```
    - Tests: Use the correct resolver `ember-engines/test-support/engine-resolver-for`
    - Sharing services
- Controversial Tips⁉️
  - `Replace this with your real tests` &rarr; Treat this as a bug!
  - Use the last argument in tests `.assert()` to describe the test
  - Use [Prettier](https://prettier.io/) and ESLint
  - Be careful with Addons (Actively maintained? File size bloat?)
  - Use [TypeScript](https://www.typescriptlang.org/)
  - Use [Tailwind](https://tailwindcss.com/)

Lessons Learned from Changing Careers {{< span class="u-small" >}}&ndash; Kara Luton{{< /span >}}
--------

- Your past experiences make you the developer you are today 🥇
- A non-traditional background is a feature, not a bug
- What did I want in a new career?
- [Codecademy](https://www.codecademy.com/)
- Get a CS degree, self teach or go to a bootcamp?
- [The Iron Yard](https://www.bloc.io/learn-to-code/bc/the-iron-yard) bootcamp
- Overwhelming amount of information about HTML, CSS, and JS
- Job rejections &rarr; Judged for not having experience 😩
- Lessons learned along the way (Ballerina &rarr; Music Publicist &rarr; Developer) 👩‍🎓
  - Practice doesn't make perfect, it makes progress 📈⬆️
  - Pay attention to the small details
  - Accepting feedback and not taking it personally
  - My writing skills &rarr; Code commenting! 💪
  - How to work well with others
  - How to stand out amongst the crowd
  - Interviewing skills
- Community is important
- 37.6% of developer who have a college degree did **NOT** major in Computer Science
- Look back on your own past experiences

Ember as Song {{< span class="u-small" >}}&ndash; James C. Davis{{< /span >}}
--------

- How best to compare building an app with composing a song?
- Programming and Songwriting are very similar 🎶 ⌨️
- Song: composed of sections
- Section: composed of instruments, notes, parts, measures, phrases
  - Section &rarr; Route
  - Instrument &rarr; Service
  - Part &rarr; Component
  - Notes &rarr; Contextual Components
- Other globals: tempo, master volume, playing state, where are we in the timeline
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API): Powerful but low level. Provides primitives for making sounds
- [Tone.js](https://tonejs.github.io/): Built on top of the Web Audio API. Provides primitives for making music
- Scale: string of notes, one after another


Democratizing Frameworks Through Developer Experience {{< span class="u-small" >}}&ndash; Sarah Yu{{< /span >}}
--------

- Reach: Engineering apprenticeship program at LinkedIn
- [`ember-m3`](https://github.com/hjdivad/ember-m3): alternative model implementation to `DS.model`
- What is developer experience (DX)?
  - Things that make developers' lives easier
- DX is often not prioritized 😞
  - Involves people 👩‍🦰👨‍🦰
  - Metrics can be hard to measure 📝
  - Much easier to just say you reduced the build size by `n` Bytes
- _It's a bug it that happens_ -Yehuda Katz
- When should you contribute to DX?
  - Beginner: Getting started guides
  - Intermediate: Advanced APIs
  - Advanced: Self-documenting source code
- Where can you contribute?
  - `README.md`
  - Ember Learning
  - Debugging tools
  - Source code comments

Why JS is Coming to Ember Templates {{< span class="u-small" >}}&ndash; Matthew Beale{{< /span >}}
--------

- _"No more unification RFCs"_ 😨
- `<Welcome />` could live anywhere since resolvers are a runtime concern
- Local maximum &rarr; Global maximum
- Matt's resolving Ember Microlib
  ```js
  const template = [
    [0, 'To you I say:'],
    [1, 'welcome']
  ]
  setup();
  render(template);
  ```
- [rollup.js](https://rollupjs.org/guide/en/)
- [terser](https://github.com/terser/terser)
- Dynamic resolution vs. static linking
  ```js
  import { welcome } from './components'
  const template = [
    [0, 'To you I say:'],
    [1, welcome]
  ]
  render(template);
  ```
- How can we bring the benefits of a statically linked system into Ember ❓
- Handlebars Strict Mode 💪
- What are the constraints in strict mode?
  - No implicit `this` fallback
  - No resolution. `{{foo-bar}}` is only ever a variable
  - No dynamic resolution. `{{component foo}}`
  - No partials
- Need a static solution for getting other components into template scope.
- `createTemplateFactory({ "scope": () => [OtherComponent] })`
- Template imports
  - You can import a default of named export into your template
  - The right side of an import, the path, works just like it does in any system using Node.js resolution.
  - Adopt ES Modules syntax module syntax into templates
    ```hbs
    ---
    import Quote from './quote';
    import { titleize} from '@ember/template-helpers';
    import { animatedEach } from 'ember-animated/helpers';
    ---
    {{#animatedEach @greetings as |myGreeting|}}
      To {{titleize this.subjectName}} I say: <Quote>{{myGreeting}}</Quote>
    {{/animatedEach}}
    ```
- Next steps:
  - Get Handlebars Strict Mode into Final RFC and land the primitives
  - Build an addon for template imports so we can experiment
  - Start a design for what the ES module API is for built-ins like `<LinkTo>` or `<Input>`
- Performance + Payload size benefits
- Explicit templates
- [Strict mode for templates RFC](https://github.com/emberjs/rfcs/pull/496)

Solving Problems for African Soil {{< span class="u-small" >}}&ndash; Ridhwana Khan{{< /span >}}
--------

- [Kasi Maths](http://kasimaths.org/)
- Why should you care?
- Outline of challenges
  - Power/Electricity: Loadshedding and power outages (Rolling blackouts) 🔌
    - Plant breakdowns 🏭
    - Poor cellphone reception
  - Basic digital literacy 💻
    - Reduced access to computers in public school and at home
  - High data costs 💰
  - Low end smartphones
  - Bandwidth speed
- First Paint (Is it happening?) &rarr; First Contentful Paint &rarr; First Meaningful Paint (Is it useful?) &rarr; Time to Interactive (Is it usable?)
- How can I help?
  - :one: Reduce Bundle Size
    - Minifying & concatenating JS
    - Code splitting
    - Tree shaking
    - Measure
      - [Lighthouse](https://developers.google.com/web/tools/lighthouse)
      - [ember-cli-bundle-analyzer](https://github.com/kaliber5/ember-cli-bundle-analyzer)
      - [Bundlephobia](https://bundlephobia.com/)
  - :two: Server/Static Rendering
    - Fastboot and [Prember](https://github.com/ef4/prember)
  - :three: [Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers)
    - Caching and offline
    - [ember-service-worker](https://github.com/DockYard/ember-service-worker)
    - [ember-pouch](https://github.com/pouchdb-community/ember-pouch)
  - :four: Other Performance Tips
    - Optimizing images
    - Optimizing the JSON
    - Adaptive loading

Shift Left {{< span class="u-small" >}}&ndash; Melanie Sumner{{< /span >}}
--------

- Where did you start: Hobbyist? Computer Scientist degree? Coding Bootcamp? Self-taught?
- Change is the constant we can rely on 👈
- Continuous learning is a must
- Assistive technology is not included is most curriculums
- Find your niche and grow
- Think beyond
  - Enjoyable UX
  - No vision
  - Keyboard-only
  - Low vision
  - Accessibility settings
  - High contrast mode
- What does a typical pattern look like? 🧩
  - Basic examples
  - Variations
  - Rendered code 
  - Copy & paste
- Too many DOM nodes can crash screen readers
- Patterns should also include anti-patterns
- [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint)
- [ember-a11y-testing](https://github.com/ember-a11y/ember-a11y-testing)
- It's ok to not know everything. Lean on tooling
- Shift Left mindset: Intent matters
  - Accessible interfaces can used the way they were intended to be used
- Don't wait for the audit, move accessibility into the design workflow
- Elevate the quality of your code
- [Technical Accessibility Issues for New Ember Apps RFC](https://github.com/emberjs/rfcs/issues/595)


DAY 2
========


Autotracking: Reactivity and State in Modern Ember {{< span class="u-small" >}}&ndash; Chris Garrett{{< /span >}}
--------

- Reactivity: How apps update when things change
- Autotracking is a form of reactivity
- TodoMVC
- How do we let the template know to when to update?
  - `this.rerender()` 😭
  - `this.rerenderItem()` 😭
- Annotation overhead: All the extra thought that has to go into doing things the way the framework wants you to do them
  - Grows combinatorially with the size of our application 😨😨
  - jQuery
- Reactivity can solve this by linearly increasing rate instead of exponentially increasing rate
- **Declarative** programming model for updating based on changes to **state**
- Declarative: "What, not how" ❗
  - HTML (Derived State)
- State: All the things that can change in your app
  - Variables
  - Properties
  - User inputs
- Root State
  ```js
  firstName = 'Liz';
  ```
- Derived State
  ```js
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  ```
- Observable - [RxJs](https://rxjs.dev/)
  - Observable &rarr; Events &rarr; Transform &rarr; Subscriber (Push-based)
  - Similar to classic Ember - `set()`, `pushObject()`
    ```js
    allTodos = Observable.of([
      {
        title: 'Code',
        completed: false
      },
      {
        title: 'Plan EmberConf talk',
        completed: true
      }
    ]);
    ```
  - Performance++ / Ergonomics--
- Virtual DOM - [React](https://reactjs.org/)
  - "Where did the state change occur?" (Pull-based)
  - Tree: Dirty &rarr; Rerender
  - Class based components
    ```js
    state = {
      allTodos: [
        {
          title: 'Code',
          completed: false
        },
        {
          title: 'Plan EmberConf talk',
          completed: true
        }
      ]
    }

    this.setState({ allTodos }); // Specifically communicates "What" to the framework
    ```
  - Hooks
    ```js
    let [allTodos, setTodos] = useState({
      allTodos: [
        {
          title: 'Code',
          completed: false
        },
        {
          title: 'Plan EmberConf talk',
          completed: true
        }
      ]
    });

    this.setState({ allTodos }); // Specifically communicates "What" to the framework
    ```
  - Performance--
  - `useMemo` / `shouldComponentUpdate` (manual optimization) &rarr; Scalability ⬇️ &rarr; Complexity ⬆️
- Can we bend the curve? Performance++ and Annotation overhead--
- Autotracking: Use the JS state model (Pull-based)
  - Focus on root state: Push to array, Add to object
    ```js
    allTodos = new TrackedArray([
      {
        title: 'Code',
        completed: false
      },
      {
        title: 'Plan EmberConf talk',
        completed: true
      }
    ]);
    @tracked displaying = 'all';
    ```
  - Performance++ / Ergonomics++
  - Root State &rarr; Output
  - Memoization: Return a previously computed value if nothing changed
    ```js
    memoizedRender(...args) {
      if (deepEqual(lastArgs, args)) {
        return lastResult;
      }

      lastResult = render(...args);
      lastArgs = args;

      return lastResult;
    }
    ```
  - Clock: state v0 &rarr; state v1 ... &rarr; ... state v15156;
  - Did the clock increment? Update
  - Tag: `myClass.trackedProp` &harr; state v15156 (last known clock when this was changed)
  - Simple / Performant
    - Dirty: Increment a number
    - Validate: Array.map + Math.max
    - Lazy (only checked on demand)
    - Only need to annotate root state
  - This is what bending the curve looks like
  - What's next? 🔮
    - Libraries, patterns, common abstractions - [tracked-built-ins](https://github.com/pzuraq/tracked-built-ins)
    - Tooling - Ember Inspector state timeline
    - Extract to be used anywhere

An Octane-Powered JAM Stack {{< span class="u-small" >}}&ndash; Chris Manson{{< /span >}}
--------

- JAM? **J**avaScript, **A**PIs, **M**arkup
- Fast sites delivered by prerendering files and serving from CDN (Serverless)
- Created by Netlify
- Evolution of some of the things we were already doing
- JAM Spectrum 🍓
- Server-side Rendering 🏎️
- Pre-rendering: [Prember](https://github.com/ef4/prember)
- JAM Lifecycle: Serve HTML &rarr; Load JS
- [Gatsby](https://www.gatsbyjs.org/) - $15M Funding 💰
- [VuePress](https://vuepress.vuejs.org/)
- [Empress](https://github.com/empress?type=source)
  - Stable 🧱
    - [empress-blog](https://github.com/empress/empress-blog) - Shallow fork of Casper theme from Ghost
    - [Guidemaker](https://github.com/empress/guidemaker) - Powers EmberJS guides
    - [Field Guide](https://github.com/empress/field-guide) - Ember website redesign
  - Beta
    - [open-slide](https://github.com/empress/open-slide)
    - [training-buddy](https://github.com/empress/training-buddy)
  - Alpha
    - [rfc-process](https://github.com/empress/rfc-process)
- `empress-blog` Architecture
  - Host App (Ember) &harr; empress-blog (Broccoli) + empress-blog-template (Handlebars/CSS)
    ```bash
    npm uninstall empress-blog-casper-template
    npm install empress-blog-attila-template
    ```

A11y First and Everyone Wins {{< span class="u-small" >}}&ndash; Ava Wroten{{< /span >}}
--------

- Adding Functionality with Composable Components
- Equitable & Discoverable UX
- Automation Testing
- 15% of the world lives with some form on disability 🌍
- Degrees of disabilities 🐕‍🦺
  - Limited mobility, Muscle slowness, Tremors, Low vision, Color blindness, Partial hearing loss
- W3C Pattern [Rearrangable Listbox](https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-rearrangeable.html)
- [ember-sortable](https://github.com/adopted-ember-addons/ember-sortable)
  - `<SortableGroup>` &rarr; `<SortableGroupAccessible>` (wrapper)
  - `<SortableItem>` &rarr; `<SortableItemAccessible>` (wrapper)
- [Splattributes](https://github.com/emberjs/rfcs/pull/435)
  ```hbs
  <SortableGroupAccessible
    tabIndex="0"
    class="border focus:border-teal-400"
  />
  ```
  ```hbs
  <div ...attributes>
    {{yield}}
  </div>
  ```
- Modifiers
  ```hbs
  <div {{key-up this.handleArrowUp key="ArrowUp"}}></div>
  ```
- [`@ember/test-helpers`](https://github.com/emberjs/ember-test-helpers)
  - `triggerEvent` and `triggerKeyEvent`
  - Test reordering and key events 🙌
  ```js
  test('it can listen for specific key up events', async function() {
    this.keyUp = ({ key }) => {
      assert.equal(key, 'Enter');
      assert.step('key up');
    }
    await render(hbs`
      <div {{key-up this.keyUp data-test-id="keyup"}}></div>
    `)
    let selector = '[data-test-id=keyup]';
    await triggerKeyEvent(selector, 'keyup', 'Enter');
    assert.verifySteps(['key up']);
  });
  ```
  ```js
  assert.dom(findAll('[data-test-id=item]')[0]).hasText('Item 1');
  assert.dom(findAll('[data-test-id=item]')[1]).hasText('Item 2');

  // Reorder
  await triggerEvent('[data-test-id=group]', 'focus');
  await click('[data-test-id=sort-down]');

  assert.dom(findAll('[data-test-id=item]')[0]).hasText('Item 2');
  assert.dom(findAll('[data-test-id=item]')[1]).hasText('Item 1');
  ```
- Quick feedback loop

EmberQuest: Building an Octane Role Playing Game {{< span class="u-small" >}}&ndash; Dan Monroe{{< /span >}}
--------

- `ember new emberquest` 🎮
- Hex tiles
- Pathfinding
- [WebGL](https://get.webgl.org/)
- [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Web Audio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [ember-concurrency](http://ember-concurrency.com/docs/introduction/)
  ```js
  @task 
  *reloadHealth() {
    // ...
  }
  ```
- [Phaser](https://phaser.io/) 🕹️
- [ember-phaser](https://github.com/DanMonroe/ember-phaser)
  - `ember install ember-phaser`
  - `ember generate phaser-scene tomster`
  - `ember generate service game`
  - `ember generate component gameboard`

An Ember Dev's Guide to CSS Grid {{< span class="u-small" >}}&ndash; James Steinbach{{< /span >}}
--------

- Grid: Responsive CSS-only layout method
- Column / Row / Gap control 🤝
- Grid properties & values: `grid-template-columns`, `grid-template-rows`, `fr`, `max-content`, `grid` 😱😨
  ```css
    display: grid;
    grid-template-columns: 1fr 40em 20em 1fr;
    grid-template-areas:
      "header header header  header"
      ".      body   sidebar .     "
      "footer footer footer  footer";
    gap: 12px 16px;
  ```
- `grid-template-columns`: Set the proportions for tracks along the **inline axis** of the grid container
  - 30% 150px 30%;
- `grid-template-rows`: Set the proportions for tracks along the **block axis** of the grid container
  - 50px repeat(10, 100px);
- 🚨 Warning 🚨 Fixed heights cause overflow
  - Better: `auto`, `min-content`, `max-content`
- Logical properties
  - `inline`: start to end of a **line** of text **in** the block
  - `block`: start to end of the **block** of text
- `dir=rtl` and `writing-mode: vertical-lr` support for free
- `grid-template-areas`: assign names to grid areas
  - One rectangle, adjacent cells, strings (not integers)
- `grid-template`: assign rows, columns, and areas as a shorthand
  - Every row ends with its height
  - Every column ends with its width
  ```css
    grid-template:
      "header header header  header" auto
      ".      body   sidebar .     " auto
      "footer footer footer  footer" auto /
      1fr     40em   20em    1fr;
  ```
- `gap`: Creates gaps between columns and rows
- Grid container values
  - `fr`: 1 fraction of the grids **fr**ee space
    - Calculated after non-`fr` space is used
    - Based on the total number of `fr` in the row or column
  - `repeat(<count>, <length>)`
  - `repeat(12, 1fr)` === 12 column Bootstrap
- `grid-area`: A `grid-template-areas` name from the parent
- Center an item
  ```css
    display: grid;
    justify-content: center;
    align-items: center;
  ```
- Gotchas
  - Images sizes: `img` obeys a the grid-cell size &rarr; `object-fit: cover`
  - Animating grids: Some browsers animate, can't animate between areas
  - IE 11 😨

Stronger App Architecture Using Maps {{< span class="u-small" >}}&ndash; Matt Gardner{{< /span >}}
--------

- GIS (Geographic Information System) Mapping technology
- [NYC Planning](https://labs.planning.nyc.gov/) 📍
- Changing expectation about how governments deliver digital services
- We use maps every day 🗺️
- [ZoLa](https://zola.planning.nyc.gov/)
  - Making data easy to consume
  - Where can we build Housing?
- A brief history of maps
  - John Snow: [London Cholera outbreak map](https://www.theguardian.com/news/datablog/2013/mar/15/john-snow-cholera-map)
  - [Florence Kelley](https://www.womenshistory.org/education-resources/biographies/florence-kelley): Income map by residential block
- Basemap: Static data, always present
- Data Layers: Polygons, Lines, Points
- Enter...The Tile: Avoid triggering a fullpage reload when navigating
- Dynamic interactions 🖱️
- How are tiles made?
  - Cylindrical map projection
  - Assume that the world is a square 🟦
- [GeoJSON](https://geojson.org/): Opinionated JSON format for storing spatial data
  - Best for most use cases
- [Leaflet](https://leafletjs.com/)
- [ember-leaflet](https://github.com/miguelcobain/ember-leaflet)
- [mapbox-gl-accessibility](https://github.com/mapbox/mapbox-gl-accessibility)
- [ember-mapbox-gl](https://github.com/kturney/ember-mapbox-gl)
- Test Stubs &rarr; Dependency Injection
- How to lie with maps 🤥
  - "Map users seldom, if ever, question these authorities, and they often fail to appreciate the map's power as a tool of deliberate falsification or subtle propaganda."
  - Spatial correlation !== Meaningful data relationship

The Power of Debugging {{< span class="u-small" >}}&ndash; Samanta de Barros{{< /span >}}
--------

- Challenges
  - :one: Dev vs Prod
    - Sources tab
    - Breakpoints
    - Pretty print formatting for minified JS
  - :two: External Libraries
    - Stack trace ⛔
    - Don't be afraid to step in 🚶‍♀️
    - Addon vs NPM library code location
  - :three: Not My Code
    - Use the Ember Inspector
    - Find the function location

Talking to Your Dog with Ember {{< span class="u-small" >}}&ndash; Robert Wagner{{< /span >}}
--------

- [wuf.plus](https://wuf.plus/) 🐶
- Web Audio API
  - `fftSize` (Fast Fourier Transform) and `frequencyBinCount`
  - `getByteFrequencyData()`
  - `getByteTimeDomainData()`
- Determining dog bark types 🐕
  - ~1000-2000 Hz range and between ~80-90 dB (decibels)
  - Finding db spikes
  - Types: Alert, Greeting/Playful, Distress
- Deciphering audio data 🔊
  ```js
    @action
    async startRecording() {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      });
      const options = { mimeType: 'audio/webm' };
      this.mediaRecorder = new MediaRecorder(stream, options);

      this.mediaRecorder.addEventListener('dataavailable', e => {
        this.args.uploadAudioVideo({ blob: e.data });
      });

      this.mediaRecorder.start();
    }
  ```
- Integration with Ember 🐹
  - [ember-service-worker](https://ember-service-worker.com/)
  - [ember-web-app](https://zonkyio.github.io/ember-web-app/)
- Future work
  - Add more bark types
  - Refine frequency ranges
  - Add "Talk Back" feature

The Moderate Programmer {{< span class="u-small" >}}&ndash; Derek Gavey{{< /span >}}
--------

- Moderate: Avoiding extremes of behavior
- The moderate programmer names things appropriately
  - 3 words or less 
  - Avoid jargon and metaphors `factory`, `object`, `class`
  - Use plurals where appropriate
  - For booleans, prefix with `is`, `has`, `can`
  - For functions, user a verb then noun
- The moderate programmer writes small functions
  - Function does one thing
  - Beware of flags in arguments
  - Beware of too many arguments
  - Components are functions too
- The moderate programmer writes tests
  - Write your tests immediately (or you won't write them)
  - Integration tests are your best bet
  - You have diminishing returns after `n%` code coverage
- The moderate programmer refactors
  - [RailsConf 2014 - All the Little Things](https://www.youtube.com/watch?v=8bZh5LMaSmE) -Sandy Metz
  - ["Duplication is far cheaper than the wrong abstraction"](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction)
  - Write ugly code!
  - Rule of 3 (abstract on your third duplication)
  - Will future me/teammates understand this better?
  - Weight the costs of the refactor
- The moderate programmer gives up
  - Give up and ask for help
  - Give up and take a break 🧘
  - Give up and throw out your code...it's ok

Why Contributing Seems Scary {{< span class="u-small" >}}&ndash; Anne-Greeth van Herwijnen{{< /span >}}
--------

- Contributing 🙋‍♂️
  - Everyone sees this differently
  - Add / Remove code
  - Setting up a meetup
  - Code review
  - Ideas
- Motivation &rarr; Social Norms &rarr; Community
- Motivation: Intrinsic / Extrinsic
- Social Norms: Ask ⁉️ &harr; Encouragement 😆
- Community: Psychological sense of community &rarr; Commitment
- What can we learn?
  - Thank every contributor 🤗🍻
  - Ask people to contribute where their strengths are

Octane Octopus: The Multi-Faceted Migration {{< span class="u-small" >}}&ndash; Jordan Hawker{{< /span >}}
--------

- Why is the migration experience important?
  - Past migration pains
  - Stability
  - Productivity
- Can continue building new Octane feature while you're migrating
- Unlock new features quickly
- Reduce manual refactoring costs
- Minimize overhead of learning new patterns
- Many features are polyfilled and stable back to 3.8
- Recommendations
  - Phase 1: Upgrade to Ember 3.16 LTS
    - Enable Octane features
    - [ember-cli-update](https://github.com/ember-cli/ember-cli-update)
  - Phase 2: Codemods
    - [ember-codemods](https://github.com/ember-codemods)
  - Phase 3: Prepare for Glimmer
    - [ember-classic-decorator](https://github.com/emberjs/ember-classic-decorator)
    - Remove classic Ember patterns
    - Template-only components
  - Phase 4: Adopt Glimmer
    - Preliminary component refactors
      - Empty `tagName`
      - Migrate `classNames`, `classNameBindings`, `attributeBindings`
      - `{{on "click" (fn this.foo 'bar')}}` event handlers
      - Modifiers
    - Finish Glimmer conversion
      - `computed() / this.set()` &rarr; `@tracked`
      - Convert lifecycle hooks
- [Classic vs Octane Cheat Sheet](https://ember-learn.github.io/ember-octane-vs-classic-cheat-sheet/)
- [Ember Atlas Recommended Migration Order](https://www.notion.so/Recommended-Migration-Order-a22f948a7cce4e01896d674f727bee74)