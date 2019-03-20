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
      - Disambiguate be Properties and Attributes
      - Easier to scan visually 
    - ✨ Glimmer Components 
      - New modern and minimal base class
      - Explicit 1-way bindings
      - "Outer HTML" templates 
      - Explicit, immutable arguments
    - 🌟 Tracked Properties 
      - New change tracking
      - Fast, efficient updates 
      - "Just JavasScript" - No need for `this.set()` 
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
        - Wrap nested providers around entire app, which [leads to this](https://en.wikipedia.org/wiki/Pyramid_of_doom_(programming)) 😱
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





<!-- DAY 2
========


Dealing with Data in 2019 <small>- Igor Terzic</small>
--------

  - Test


The State of Community Documentation <small>- Kenneth Larsen</small>
--------

  - Test


Communication and Convention <small>- Julia Donaldson</small>
--------

  - Test


Ember is for Everyone <small>- Kenigbolo Meya Stephen</small>
--------

  - Test
  

Building Better Components <small>- Dianne Eramo</small>
--------

  - Test
  

Composable Concurrency Tasks <small>- Isaac Ezer</small>
--------

  - Test


New to Ember: What ARE All These Things? <small>- Jennifer Wong</small>
--------

  - Test


EmberConf MiniTalks
--------

  - Test
  

No Bad Legos: A Toy Box For Everybody <small>- Howie Bollinger</small>
--------

  - Test


Closing Keynote <small>- Sarah Allen</small>
--------

  - Test -->
