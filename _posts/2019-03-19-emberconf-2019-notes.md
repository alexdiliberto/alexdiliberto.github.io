---
layout: post
title: "EmberConf 2019 Notes"
date: 2019-03-19
categories: ember emberconf
description: EmberConf 2019 list of highlights from my favorite talks
---

Here is a highlighted overview of the major points from some of my favorite EmberConf 2019 talks:


DAY 1
========


Opening Keynote <small>- Yehuda Katz, Tom Dale</small>
--------

  - Ember turns 8 years old in April 🎂
    - _A Brief History of Ember from IE6 to ES2018_ -Dr. Tomster 📖
    - Staying true to our values, not chasing trends
  - Climb the mountain together 🏔
    - Shared tools that work when you're starting out and scale up
    - Shipping features is more important than tinkering with config files 🚢
    - Avoid having to stop and rewrite you application 
  - [The Celery Test](https://medium.com/@goestoes/the-celery-test-a-simple-framework-for-making-decisions-70115eafe8df)
    - What decisions we make will communicate to the world what we really believe 
    - Before taking external advice, make decisions based on our values 
  - What we did ✅
    - Ember CLI, Templates, 6-week release cycle, RFC process, Code Mods, Engage with Standards, Community, Ember Addons
  - What we did not do ❌
    - `<script>` tag, Web Components, Framework reboot, Ember Native 
  - Stability ↔ Progress (The tension between Stability and Progress)
  - Aggressive Changes (Community Fragmenting 🙈) &rarr; Cautious Changes (Falling Behind 🙉) &rarr; Aggressive Changes (Community Fragmenting 🙈)
    - **Aggressive Changes:** Ember 1.13 - DDAU, Many deprecations, Big foundational updates, Ecosystem churn
    - **Cautious Changes:** Ember 2.x - Less notable features, more stabilization
    - Ember 3.x - Find a balance between shipping things incrementally and keeping an eye towards coherence
  - `this.get('firstname'); this.set('firstname')` &rarr; `this.firstname; this.set('firstname')`
    - In 2.x this probably would not have shipped because of the asymmetric nature of the change 
    {% raw %}
    ```hbs
    {{user-avatar user=currentUser}}
    ```
    {% endraw %}
    ⬇⬇⬇
    {% raw %}
    ```hbs
    <UserAvatar @user={{this.currentUser}} />
    ```
    {% endraw %}
  - Unless you pay attention to every RFC and every PR how would you know when to adopt new features 🤷‍♀️
  - Where we are &rarr; (incremental changes) &rarr; Pit of Incoherence &rarr; (incremental changes) &rarr; Where we want to be
  - Shipping relentlessly in the past year 🛳
  - Ember Editions 🔥
    - Bend of the curve of tradeoffs
    - Points of maximum coherence 
    - Polished feature set
  - Ember Octane 🚀🎉
    - Allocate a sprint to use the new features
    - ❌ No [jQuery](https://jquery.com/) required: Ember(128Kb) - jQuery(29Kb)
    - 🤩 [JS Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
      - Standard syntax and tooling integration
      - Works with [TypeScript](https://www.typescriptlang.org/)
      - [Decorators](https://github.com/tc39/proposal-decorators) and [Class Fields](https://github.com/tc39/proposal-class-fields)
      - Simply a syntax change: `import { X } from Y` will work the same in both Classic invocation and Modern invocation 
    - ⭐ Angle Bracket Invocation
      - Disambiguate between Properties and Attributes
      - Easier to scan visually 
    - ✨ Glimmer Components 
      - New modern and minimal base class
      - Explicit 1-way bindings
      - "Outer HTML" templates 
      - Explicit, immutable arguments
    - 🌟 Tracked Properties 
      - New change tracking
      - Fast, efficient updates 
      - "Just JavaScript" - No need for `this.set()` 
      - One Simple Rule 📌: **"If you change a class field and want the DOM to update, make it tracked"** 
      - Mutation is no longer a dangerous thing that you need to think about
      - Migrate slowly, all underlying primitives seamlessly work together 📈
      - Use them anywhere, even with Native JS Classes
      {% raw %}
      ```js
      import { tracked } from "@glimmer/tracking"
    
      export default class Person {
        @tracked firstName;
        @tracked birthYear;
        
        constructor(firstName, birthYear) {
          this.firstName = firstName;
          this.birthYear = birthYear;
        }
        
        randomizeAge() {
          this.birthYear = //...
        }
      }
      ```
      {% endraw %}
    - `HTML` &rarr; `Template` &rarr; `DOM Output` all share the same structure
  - [Ember Octane Preview](https://emberjs.com/editions/octane/) available today! 📣🔥🚀
  - So...what's coming next ⁉
    - New file system layout
    - Template imports
    - "Embroider"
      - Next generation build pipeline for Ember apps 
      - Asset optimization 
      - Built on [JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
      - [Beta Ember Observer](https://beta.emberobserver.com/)
        - Ember app built with [Webpack](https://webpack.js.org/) running in production


Building a UI Styleguide in Ember <small>- Frédéric Soumaré</small>
--------

  - Why build your own Styleguide?
    - Because you can... 😏
  - It has never been easier to build extensible clean layouts with CSS
    - Flex
    - Grid
  - 4 Concepts: UI Elements &rarr; UI-Kit &rarr; UI StyleGuide &rarr; Design System
  - Work on your app, start to realize a pattern of components being used on many pages
  - Split your apps...now how do I use these components between both ❓
    - Ember Addons 🚀
    - `ember addon my-ui-kit --yarn`
    - `ember g component x-button`
    - Addon `/app` directory will merge with the namespace of the consumers `/app` directory
    - Dev tips 🙌
    {% raw %}
    ```bash
    cd <ui-kit-addon>
    yarn link
    cd <ember-app>
    yarn link my-ui-kit
    ```
    {% endraw %}
  - [ember-cli-addon-docs](https://ember-learn.github.io/ember-cli-addon-docs/)
    - Snippets, Live Demos, Docs ⭐
  - SASS color palette &rarr; JSON export
    - `my-ui-kit/index.js`
    - `preprocessTree()` hook
  - [ember-styleguide](https://ember-styleguide.netlify.com/)
  - Designers ↔ Developers


Your Desktop, the Studio <small>- Kate Ruggeri</small>
--------

  - Just completed one full year as a professional Ember Developer 🎊
  - How to become a better programmer (...or artist):
    - 1️⃣ Practice
    - 2️⃣ Critique
    - 3️⃣ Reading Theory
    - 4️⃣ Look at the Masters
      - Looking is demystifying and be a powerful experience 🕵
      - How to steal?
      - _"Oh, I can do that too!"_
  - Masters are around you ❗
  - Learn to ask questions, developers love to share their secrets 🤝
  - Art studio is private, organized...Just like your office workspace
  - Things can get overwhelming 😩
    - 😓 You're looking at a huge code base 
    - 🥵 You have lots of responsibilities and deadlines 
    - 😌 But...Your tools create a sense of control
  - Junior Dev === Investment
    - Carving time out on the clock to learn your tools
  - Masters know and configure their tools 🛠
  - Pretty things are easier to understand
    ```
    git log
    ```
    vs.
    ```
    git log --pretty=format:%C(green)%h\ %C(yellow)[%ad]%Cred%d\ %Creset%s%Cblue\ [%cn] --decorate --date=relative
    ```
  - Look outside of your field
  - Surround yourself with things that inspire you
    - _"Keep it weird"_
    - _"Have fun"_


Comparing Patterns in React and Ember <small>- Preston Sego</small>
--------

  - [React](https://reactjs.org/) needs decisions around tooling and patterns 😕
  - React is just components
    - Simplicity of only having to work with 1 concept (sort of...)
  - Ember comes with battle-tested abstractions ⚔
  - React vs Ember
    - App creation
      - React: Webpack
      - React: `npx create-react-app my-react-app`
        - No testing out of the box 😭
        - Errors have syntax highlighting 🤗
    - Components 
      - Presentational
      - Contextual
      - Container (Renderless)
        - Higher-Order (React-only)
    - State management
      - Where does business logic go?
        - Local state 
        - Context Provider/Consumer (React)
      - Services manage the state in Ember 
      - React would need to create a state management system
        - [Redux](https://redux.js.org/)
        - Wrap nested providers around entire app, which [leads to the Pyramid of Doom](https://en.wikipedia.org/wiki/Pyramid_of_doom_(programming)) 😱
      - Data Down, Actions Up (React/Ember)
        - Prop-drilling :frowning:
    - Concurrency 
      - [Redux-Saga](https://redux-saga.js.org/) (React)
      - [ember-concurrency](http://ember-concurrency.com/docs/introduction/) (Ember)
    - Authentication 
      - [ember-simple-auth](http://ember-simple-auth.com/) 👍
    - Testing
      - Stubbing context's in React (unDRY, hacky) 🤢
    - Routing 
      - Ember: `ember g route my-route` does all of the heavy lifting
      - React: Most people use [React Router](https://reacttraining.com/react-router/)
    - API / Remote Data 
      - Ember: Promise-aware `model()` lifecycle hooks
      - React: No model hooks, `useEffect()`, no canonical way of fetching data
    - APIs with Relational Data 
      - React: Custom `fetch` requests, Apollo GraphQL
    - Query Params
      - React: Easy to grab of the `location` object
      - Ember: Big pain point right now ☠
        - [ember-query-params-service](https://github.com/NullVoxPopuli/ember-query-params-service) hopes to address these issues


Typed Ember: Strong Types for Better Apps <small>- James C. Davis</small>
--------

  - [Open Science Framework](https://osf.io/) - 100% TypeScript, 100% Open Source, 100% Ember
    - [ember-osf-web](https://github.com/CenterForOpenScience/ember-osf-web)
  - Why TypeScript?
    - "Automatic" documentation with type annotations 🔥
    - Reduce run-time errors
    - Helps with refactoring
  - What's a type?
    - `string`, `number`, `boolean`
    - A type is just a shape
    ```js
      type Person = {
        name: string;
        height: number;
        birthday: Date;
        isMarried: boolean;
      }
    ```
  - TypeScript is compiled to JavaScript
    - Will not affect how JS works
  - [ember-cli-typescript](https://github.com/typed-ember/ember-cli-typescript)
    - Build-time type checking
    - Break the build if you want when types do not check
    - Sets up the basic type definitions you'll need for Ember framework objects
    - Blueprints
    - Produce a nice syntax highlighted Type Error
  - FAQs ❓
    - Do I have to convert everything at once? Nope! ✅
    - Where do I start?
      - Models
      - Services
      - Shared Components
    - What about addons?
      - Precompile to JS so consuming apps don't need to use TypeScript 🔁
      - Include type definition file as well
    - Pain Points
      - New syntax and new concepts to learn
      - Type definitions for third-party addons
        - [@definitely-typed](https://github.com/DefinitelyTyped/DefinitelyTyped)
      - Type definitions for Ember and Ember Data
    - Learn more at `#e-typescript` on the [Ember Community Discord](https://discordapp.com/invite/zT3asNS)


Crafting Web Comics with Ember <small>- Jessica Jordan</small>
--------

  - [The Glasgow Looking Glass](https://en.wikipedia.org/wiki/The_Glasgow_Looking_Glass) (1826)
  - Japan: 12th / 13th century &rarr; [Hokusai Sketches](https://www.metmuseum.org/art/collection/search/40011) (1814)
  - ⏩ 1990's &rarr; Comics go to the Web
  - Artists using the Web to share comics experiences 🎨
    - [Nedroid](http://nedroid.com/)
    - [@rubyetc](https://twitter.com/rubyetc)
  - What if I just use Ember?
  - Anatomy of a comic
    - Comic pages
      - Defining pages as routes
    - Comic panels
      - Motion through sequence 🧠💭
  - Java Applets
  - Flash
  - [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
    - Evergreen browsers + [Polyfill](https://github.com/web-animations/web-animations-js)
    ```js
    let opts = { duration: 3000 };
    let keyframeSet = [
        { transform: 'translate(250px)' },
        { transform: 'translate(0)' }
    ];
    let keyframes = new KeyframeEffect(element, keyframeSet, opts);
    ```
    - [Steps timing function](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function#The_steps()_class_of_timing_functions) - `easing: steps(5)`
    - `this.animation.play()`
  - Why Ember?
    - Clear separation of concerns
    - Only load data where it should be loaded
    - Composable
    - Conventions
    - Community
  - [ember-in-viewport](https://github.com/DockYard/ember-in-viewport)
  - Safety measures :warning:
    - ["Pokémon Shock" incident](https://en.wikipedia.org/wiki/Denn%C5%8D_Senshi_Porygon) - Japan (1997) 😨
    - Photosensitive users
    - Keyboard accessibility
    

Anatomy of an Addon Ecosystem <small>- Lisa Backer</small>
--------

  - [ember-service-worker](https://github.com/dockyard/ember-service-worker)
    - Provides a framework for managing [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) code
  - What is a Plugin? 🔌
    - Bundle that adds functionality to a host application through a well-defined architecture for extensibility
    - An Addon is a Plugin
  - Configuration (Start with Docs)
  - [Ember CLI hooks](https://ember-cli.com/api/classes/Addon.html)
  - [Ember Observer code search](https://www.emberobserver.com/code-search) feature
  - Time to dive into the code 🏊
    - `ember-service-worker/index.js`
    - `treeForVendor`
  - [Broccoli](https://github.com/broccolijs/broccoli) Trees/Nodes 
    - Set of files that can be transformed by Plugins
    - A `build()` function is called on each Plugin ⚒
  - `package.json` keyword naming convention to create a collections of `ember-service-worker` Plugins
    ```json
    "keywords": [
      "ember-addon",
      "ember-service-worker-plugin"
    ],
    ```
  - Implement a plugin architecture?
    - [Babel](https://babeljs.io/)
    - [Rollup](https://rollupjs.org/)
  - Testing
    - Not like testing a normal Ember application
    - Testing the **build** of an application
    - Unit tests for core functionality
    - [broccoli-test-helper](https://github.com/broccolijs/broccoli-test-helper)


Developing an Ember Test Strategy <small>- Todd Jordan</small>
--------

  - Ember :two_hearts: Tests
  - How do I prevent my tests from becoming a burden?
  - Speed and feedback loops
  - [Deming Cycle](https://www.balancedscorecard.org/BSC-Basics/Articles-Videos/The-Deming-Cycle) 🔄
    - Plan &rarr; Execute &rarr; Analyze &rarr; Adjust
    - Influenced Toyota (Continuous improvements, Tight feedback loops)
    - [Implementing Lean Software Development](https://www.goodreads.com/book/show/349417.Implementing_Lean_Software_Development) 📖
  - [Boehm's Law](https://cs.stackexchange.com/questions/75/time-spent-on-requirement-and-its-effect-on-project-success-and-development-time)
    - The later you find a missed requirement/bug, the more expensive it is
    - The earlier you find and fix your bugs, the more successful your project will be
  - [Agile Manifesto](https://agilemanifesto.org/) 📜
    - Describe testing in an [Agile](https://en.wikipedia.org/wiki/Agile_software_development) environment
  - How to distribute your tests? 🤷‍♀️
    - UI (🚶‍♀️💰💰💰💰💰) ↔ Service ↔ Unit (🏃‍♀️💰)
    - Ember Application Test (33 min/1000 tests) ↔ Ember Rendering Test ↔ Ember Unit Tests (1.7 min/1000 tests)
    - 40%/50%/10% Test type distribution for a sweet spot 
  - Push scenarios as far down the test pyramid as you can
  - Avoid duplication between test types
  - Don't be afraid to delete tests that are not beneficial (Long running, etc)
  - Test Workflow
    - Test &rarr; Write code to make the test pass &rarr; Refactor
  - [Growing Object-Oriented Software, Guided by Tests](https://www.goodreads.com/book/show/4268826-growing-object-oriented-software-guided-by-tests) 📖
  - Keep an eye on your feedback loops
  - Test in a methodical way that drives Design
  - Thought and discipline are faster than quickly cranking out code


Don't Break The Web <small>- Melanie Sumner</small>
--------

  - 1990s: Write code &rarr; Save file &rarr; FTP to server &rarr; Check in browser &rarr; Repeat
  - Much easier now: `ember new my-app; ember deploy production;` 🤗
  - [Web Accessibility analysis on the top million web pages](https://webaim.org/projects/million/)
    - 97.8% of websites had accessibility errors 😱
    - The presence of a JS Framework indicated a higher number of accessibility errors
    - 85% - Low contrast 
    - 68% - Missing alt text
    - 58% - Empty links
    - 100% of these issues are preventable
  - Are we focused on the right things? 😕
  - Too many excuses we tell ourselves for avoiding accessibility in our apps
    - "But...Our clients didn't ask for accessibility"
      - You didn't ask for sugar in your cookie 🍪
    - "But...Implementing accessibility is just too hard"
    - "But...This just isn't an Ember issue"
  - [ember-optional-features](https://github.com/emberjs/ember-optional-features)
    - `ember feature:disable application-template-wrapper`
    {% raw %}
    ```html
    <body>
      <header> <!-- --> </header>
      <main> <!-- --> </main>
      <footer> <!-- --> </footer>
    </body>
    ```
    {% endraw %}
  - Visibly support accessibility efforts

<br />

DAY 2
========


Dealing with Data in 2019 <small>- Igor Terzic</small>
--------

  - Been working with Ember for entire professional life
    - Working on Ember, Ember Data and Ember-related libraries for the past 8 years
  - 2011: Java Swing app 😨 &rarr; CoffeeScript, GruntJS, Ember 😩
  - Made some bets that worked out really well and built trust 🤝
    - Programming Model: Separation of concerns
    - Isolated the Model Layer with a schema
    {% raw %}
    ```
    // component
    model.save();

    // template
    {{model.isSaving}}
    ```
    {% endraw %}
    - [ember-cli-mirage](https://www.ember-cli-mirage.com/) - Now because you have a schema, mirage automatically knows how to configure your backend
    - Isolated Serializer Layer
    - [Fastboot](https://ember-fastboot.com/) - Easy inter-op
  - Embracing the consistency
  - [JSON API](https://jsonapi.org/) - Minimal amount of configuration necessary to play nicely with Ember
  - Identity Map
  - Relationship consistency: `belongsTo()`, `hasMany()`
  - A framework for **ambitious** web developers. 😑
  - 2019 &rarr; 2025
  - Advanced data fetching, caching and mutating
  - [Dan Gebhardt: Give Apps Online Superpowers by Optimizing them for Offline](https://www.youtube.com/watch?v=hr135pFCLU8)
  - Developer experience and visibility
  - Productivity Tricks
  - "Not doing work beats doing work in the fastest possible way, every time"
  - Dynamic schema: [ember-m3](https://github.com/hjdivad/ember-m3) &rarr; Ember Data core :question:
  - [ember-data-storefront](https://github.com/embermap/ember-data-storefront)
    ```js
    export default PostsRoute extends Route {
      async model() {
        await this.get('store').loadRecords('post');
        return this.get('store').peekAll('post');
      }
    }
    ```
  - Goal: All Ember Data addons &rarr; No Private APIs


The State of Community Documentation <small>- Kenneth Larsen</small>
--------

  - Documentation is generally the first encounter you'll have with any Ember project
  - We're all responsible for documentation 👨‍👩‍👧‍👦
  - `README.md` 
    - Should serve a nice and concise introduction to your project
    - Should not answer every single question :-1:
    - Badges :+1:
    - Generally too cluttered and filled with code examples 😢
  - Blueprint documentation needs some adjustment
  - Extract out to [`CONTRIBUTING.md`](https://help.github.com/en/articles/setting-guidelines-for-repository-contributors#adding-a-contributing-file) ✨
    - Github prompts doc changes
  - Unhelpful phrasings
    - "Simply run the tests. Just type `npm test`"
    - "Just write your own compiler, then it simply works"
    - Just, Simply, Simple, Actually, Easy, Easily, Obviously... :-1:
  - Inconsiderate Writing ❌
  - Cultural differences are everywhere
  - [ember-cli-addon-docs](https://ember-learn.github.io/ember-cli-addon-docs/) to the rescue! 🦸‍♂️
  - [Alex](https://alexjs.com/) and [ember-cli-alex](https://github.com/yohanmishkin/ember-cli-alex): linter to help catch inconsiderate writing


Communication and Convention <small>- Julia Donaldson</small>
--------

  - So...why Ember?
  - But that learning curve though... 😩
    - **Everything** has a learning curve `#realtalk`
  - Ember is not _really_ about productivity
  - Previously a Fashion Designer 👠
    - As a user, I should be able to move my arms and feet 
    - Creative solutions within a set of requirements (..just like Software)
  - Fashion Designer &rarr; Code Bootcamp
  - The "right" words
    - Communication is a skill...a skill that can be learned
  - Ideas 💡
    - The tools we choose, are simply vessels for our ideas
    - [Art and Fear](https://www.goodreads.com/book/show/187633.Art_and_Fear) by David Bayles 📖
    - To bring our ideas into the world, we need to be able to communicate them
  - How do I communicate my thoughts in a way that is productive?
    - Talking about code is hard
  - Ember &rarr; Gives a vocabulary to frame my ideas 😃
  - Democratize the Language
  - Communication 🔁 Confidence 🔁 Participation
  - Web development is not about the individual anymore
  - The tools we choose should connect us
  - "Opens up someone elses React app..." 😲😱😵
  - Communication that scales
  - Ember's structure spawns creativity
  - How do we define ambition?
    - "Ambition is a dream with a V8 engine." -Elvis Presley


Ember is for Everyone <small>- Kenigbolo Meya Stephen</small>
--------

  - [Code Afrique](https://codeafrique.com/)
    - A group of software developers giving back to people under-represented in our industry
  - People learn differently 💻
    - Theres no guaranteed way of ensuring people grasp the concepts
  - Process: Variables &rarr; Object &rarr; Functions
    - Don't need to learn about traversing a binary tree
  - Problems that come with teaching JavaScript
    - Framework, Framework, Framework :exclamation:
  - Typical pitfalls?
    - Lazy loading
    - Too many Computer Science concepts
    - Seems to be a frontend framework designed for a backend developer
    - Not just designed for beginners
  - Ember Power 🦸‍♀️
    - Routers
    - Templates
    - Convention
  - Simplify concept explanations 👨‍🏫
    - Explain to beginners without technical phrases


Building Better Components <small>- Dianne Eramo</small>
--------

  - "The ratio of time spent reading vs writing is well over 10 to 1. [...] Making it easy to read makes it easy to write" 📖✍
  - Keep Things Manageable :star2:
    - [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle): Each component should be responsible for 1 concept
    - [Don't Repeat Yourself Principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself): Eliminate duplication
    - Don't prematurely abstract your code
  - Ember Component Patterns 🔥
    - Reusable Component Pattern: DDAU, don't mutate data the component doesn't own
    - Single Purpose Component Pattern
      - Has a single clearly defined use case
      - Context aware
      - Pass in entire model as an argument
      - Directly mutates data
      - Reusable (Addons) ↔ Single Purpose (Forms)
    - Provider (Renderless) Component Pattern
      - Only concerned with how things work (load data)
      - Does not render HTML or CSS
      {% raw %}
      ```hbs
      <PercentageComplete
          @completed={{this.completed}}
          @total={{this.totalFields}} as |percent|>
        <ProgressBar @percentCompleted={{percent}} />
      </PercentageComplete>
      ```
      {% endraw %}
    - Presentational Component
    - Contextual Component Pattern
      - Makes relationships between related components explicit
      - Provides default behavior for consumers
      {% raw %}
      ```hbs
      // components/templates/modal.hbs
      {{yield (hash
        header=(component "modal/header" closeModal=(action "closeModal"))
        body=(component "modal/body" style={{bodyStyles}})
        footer=(component "modal/footer" closeModal=(action "closeModal"))
      )}}

      // templates/form.hbs
      <Modal @onClose={{onClose}} as |M|>
        <M.header @title="Edit User Application" />
        <M.body>
          <EditUserForm @user={{provider.user}} @saveUser={{provider.saveUser}} />
        </M.body>
      </Modal>
      ```
      {% endraw %}
  - Write the Component Interface 🔌
    - Expose the bare minimum that you know will be needed
    - Every property provided is a feature that can break when you make changes
    - Small component interface :+1:
  - Manage UI state with declarative rendering
    - Declare all component state inside the component file
    - Never rely on the DOM for you state :warning:
    - Ensure component re-renders whenever any of the state changes (Computed Properties, `this.set()`)


Composable Concurrency Tasks <small>- Isaac Ezer</small>
--------

  - [ember-concurrency](http://ember-concurrency.com/docs/introduction/)
  - Generators `function* ()`
    - A function which can `yield` intermediate values and pause/resume execution
    - `for...of` loop
    - Directed graph iteration with Generators: `N x N` adjacency matrix
    - [Browser support](https://caniuse.com/#feat=es6-generators)
  - Ember Concurrency 🙌
    - Removes the need for manual state tracking and `isDestroyed` checks
    - Simply yield intermediate promises
    - Derived state `myTask.lastSuccessful.value`
    - Maked "chained" promises cancelable by being able to abort task execution at each `yield`
  - Higher Order Ember Concurrency Tasks
    - "Wrapping ember concurrency tasks"
    - [ember-concurrency-test-waiter](https://github.com/bendemboski/ember-concurrency-test-waiter): Notify our test runner that a Task is in flight
    - [ember-concurrency-retryable](https://github.com/maxfierke/ember-concurrency-retryable): Task exponential backoff


New to Ember: What ARE All These Things? <small>- Jennifer Wong</small>
--------

  - The ABC's of Ember
  - [Rock & Roll with Ember.js](https://balinterdi.com/rock-and-roll-with-emberjs/)
  - A &rarr; [`A()`](https://api.emberjs.com/ember/3.8/functions/@ember%2Farray/A)
  - B &rarr; [`{% raw %}{{#basic-dropdown}}{% endraw %}`](https://github.com/cibernox/ember-basic-dropdown)
  - C &rarr;
    - [ember-can](https://github.com/minutebase/ember-can)
    - [Computed Property](https://guides.emberjs.com/release/object-model/computed-properties/)
    - [ember-changeset](https://github.com/poteto/ember-changeset)
  - D &rarr;
    - [`DS`](https://api.emberjs.com/ember-data/release/classes/DS.Store)
    - [ember-decorators](https://github.com/ember-decorators/ember-decorators)
  - E &rarr; [Ember: The Documentary](https://videos.honeypot.io/emberjs-documentary-2019/)
  - F &rarr; [ember-cli-flash](https://github.com/poteto/ember-cli-flash)
  - G &rarr; [Glimmer.js](https://glimmerjs.com/) ✨
  - H &rarr; 
    - [Helpers](https://guides.emberjs.com/v3.8.0/templates/built-in-helpers/) 
    - [ember-composable-helpers](https://github.com/DockYard/ember-composable-helpers)
    - [ember-truth-helpers](https://github.com/jmurphyau/ember-truth-helpers)
  - I &rarr; [`{ inject as service }`](https://guides.emberjs.com/v3.4.0/applications/services/#toc_accessing-services)
  - J &rarr; [JSON API Adapter](https://api.emberjs.com/ember-data/release/classes/DS.JSONAPIAdapter)
  - K &rarr; [`Ember.K`](http://mcdowall.info/what-the-hell-is-ember-k/)
  - L &rarr; [`{% raw %}{{link-to}}{% endraw %}`](https://guides.emberjs.com/release/templates/links/)
  - M &rarr; 
    - [ember-cli-mirage](https://www.ember-cli-mirage.com/)
    - [`(mut)`](https://api.emberjs.com/ember/3.8/classes/Ember.Templates.helpers/methods/mut?anchor=mut)
  - N &rarr; Naming Conventions
  - O &rarr; [`{% raw %}{{outlet}}{% endraw %}`](https://guides.emberjs.com/release/routing/rendering-a-template/)
  - P &rarr; [`ember-power-select`](https://github.com/cibernox/ember-power-select)
  - Q &rarr; 
    - [QUnit](https://qunitjs.com/)
    - [ember-qunit](https://github.com/emberjs/ember-qunit)
  - R &rarr; [RSVP](https://github.com/tildeio/rsvp.js/)
  - S &rarr; [`ember s`](https://ember-cli.com/)
  - T &rarr; [`task()`](http://ember-concurrency.com/docs/introduction)
  - U &rarr; [Utils](https://api.emberjs.com/ember/release/modules/@ember%2Futils)
  - V &rarr; [View](https://api.emberjs.com/ember/2.8/classes/Ember.View)
  - W &rarr; [ember-wormhole](https://github.com/yapplabs/ember-wormhole)
  - X &rarr; [emberx-select](https://github.com/thefrontside/emberx-select)
  - Y &rarr; [`{% raw %}{{yield}}{% endraw %}`](https://api.emberjs.com/ember/3.8/classes/Ember.Templates.helpers/methods/yield?anchor=yield)
  - Z &rarr; [Zoey](https://emberjs.com/mascots/)


EmberConf MiniTalks
--------

### How to Grow or Save Your Favorite Open Source Project <small>- Jen Weber</small>

  - All volunteers are selfish
  - Few people act out of true altruism for very long
  - The happiest volunteers get something in return
  - Reciprocity
  - Commitment & Consistency
  - Always say "Thank You" to other volunteers

### How I Learned to Stop Worrying and Love the Mono Repo <small>- Hassan Abdel-Rahman</small>

  - What is a Mono Repo? Single repository with multiple node modules 
  - Code cannot get out of sync with itself 🔁
  - Atomic changes across multiple modules
  - Testing
  - Issue management
  - [Yarn Workspace](https://yarnpkg.com/lang/en/docs/workspaces/)
    - Single shared `node_modules`
  - How to Mono?
    - `ember g addon` for each `in-repo` addon
    - [Move boilerplate addons into `packages/` directory](https://github.com/habdelra/yarn-workface/commit/19170de682e209d94d06233add171eab73fc3af0)
    - [Convert to use Yarn Workspaces](https://github.com/habdelra/yarn-workface/commit/21dc798ec920145dae2ba211bc43d05f8f17e294)
    {% raw %}
    ```json
    {
      "private": true,
      "workspaces": ["workspace-a", "workspace-b"]
    }
    ```
    {% endraw %}
  - [Ember Mono Repo example app](https://github.com/habdelra/yarn-workface)
  - [Lerna](https://lernajs.io/) for publishing

### From Mainframe to Mainstream: A Case Study in Emberification <small>- Ryan Mark</small>

  - Rewrite a major Fortune 500 company's core application including Testing and Deployment
  - Mainframe terminals suck
  - ember-cli-deploy, Spring, Jenkins
  - `#winning`
  - Productivity &rarr; Adoption &rarr; Success

### How to Build a Blog Engine in 15m With Ember and NodeJS <small>- Chris Manson</small>

  - [empress-blog](https://github.com/empress/empress-blog)
    - Quick way to bootstrap a new Blog with Ember 🔥
  - How do I get setup?
  ```bash
  ember new super-blog
  cd super-blog
  ember install empress-blog empress-blog-casper-template
  ```

### What's Behind Ember Observer's Scores? <small>- Katie Gengler</small>

  - Can you score based on accessibility? ❌😣
  - Can you score if addons are "Octane Ready" or not? ❌😣
  - Solution: Math ➗
  - Weighted Average
  - Smarter checks, New checks and Partial scores

### Broccoli Update <small>- Oli Griffiths</small>

  - [Broccoli.js](https://broccoli.build/) 🥦
  - In the beginning: [ember-app-kit](https://github.com/stefanpenner/ember-app-kit)
  - [Grunt](https://gruntjs.com/) 😞
  - Why Broccoli?
    - Simple API
    - Flexible
  - Broccoli 2.0 🥦✨
    - `tmp/` directory moved outside of the project and more
    - Update to 32% faster builds
  - Just update to Ember CLI 3.5+ and you'll see these updates
  - Broccoli now supports [ECMAScript modules](https://github.com/standard-things/esm) syntax
  - Adopting TypeScript

No Bad Legos: A Toy Box For Everybody <small>- Howie Bollinger</small>
--------

  - Component Driven Development
  - But what about accessibility? 🤷‍♂️
  - CEO, Stakeholders, Product Owner, QA, Designers, Developers, Customer Experience
  - Everything is awesome, __because__ you're part of a team
  - Accessibility is not just a [checklist](https://webaim.org/standards/wcag/checklist)
  - [WCAG 2.1](https://www.w3.org/TR/WCAG21/)
  - [AXE Accessibility Engine](https://github.com/dequelabs/axe-core)
    - Chrome + [AXE Extension](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)
    - "Why can't this be automatic?"
  - Are you there, Axe? It's me, Ember.
  - [ember-a11y-testing](https://github.com/ember-a11y/ember-a11y-testing)
  - What does this mean for developers and testing?
    - `assert.ok(find('img').getAttribute('alt'))'` :weary:
    - `await a11yAudit('img');` :heart_eyes:


Closing Keynote <small>- Sarah Allen</small>
--------

  - What does it mean to be heroic? 🦸‍♂️❓
    - We choose our heros
    - Saved the project! Worked nights and weekend! Last minute fix!!!
    - But what about the team that quietly ships without fuss?
  - Reality is broken
  - Change the rules
  - Abstraction
    - Mechanism which permits the expression of relevant details and the suppression of irrelevant details
    - "I wanted to make it easy for people to write good programs" -Liskov
    - Recognize when your abstraction is wrong
  - Perception !== Reality
  - We can't assess things accurately without the passage of time 🕑
  - What we hold to be true is only our closest approximation at the **moment**
  - What is relevant?
  - [Just-World Fallacy](https://en.wikipedia.org/wiki/Just-world_hypothesis)
    - The general belief that the world is morally ordered, such that people generally get what they deserve
  - Simply holding meritocracy as a value seems to promote discriminatory behavior
  - [Apophenia](https://en.wikipedia.org/wiki/Apophenia): Seeing patterns where they don't actually exist
  - Iterate. Celebrate.
  - "Focus on something you can fix"