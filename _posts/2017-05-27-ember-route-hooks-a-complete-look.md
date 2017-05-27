---
layout: post
title: "Ember Route Hooks &mdash; A Complete Look"
date: 2017-05-27
categories: ember routes
description: A deeper dive outlining each of the most important lifecycle hooks for Ember's internal routing structure
---

If you are like me and want to get your hands on something to hack around, I created this [Ember Twiddle](https://ember-twiddle.com/d65fd3522359c0c6299d7af16cbfd5e5) embedded below. Play around with it to get a better feel for Ember's route hook order. Add your own custom logging, transitions, nested routes and other things.


<div class="embed no-print" style="position: relative; height: 0px; overflow: hidden; max-width: 100%; padding-bottom: 56.25%;"><iframe src="https://ember-twiddle.com/d65fd3522359c0c6299d7af16cbfd5e5?fullScreen=true" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"></iframe></div>


The route hook lifecycle in Ember can be broken up into two distinct phases: the **validation phase** and the **setup phase**. These two phases are surrounded by two separate actions that get triggered within the context of the route: [`willTransition()`](https://www.emberjs.com/api/classes/Ember.Route.html#event_willTransition) at the beginning and [`didTransition()`](https://www.emberjs.com/api/classes/Ember.Route.html#event_didTransition) at the end after a successful transition.

Please note that I will simply describe the _most general_ route transition case. Additionally, I will outline, in call order, the major routing hooks which will be triggered for the route transition lifecycle. I'm not including _all_ hooks, only those which I believe are the most useful to understand.

### Starting the Route Transition
Given that you will begin inside of a specific route within your Ember application and take one of the following actions to perform a route transition: click on a `{% raw %}{{#link-to}}{% endraw %}` Handlebars helper or click on a UI element which performs a programmatic [`transitionTo()`](https://www.emberjs.com/api/classes/Ember.Route.html#method_transitionTo) or [`replaceWith()`](https://www.emberjs.com/api/classes/Ember.Route.html#method_replaceWith) call to navigate into another route.

#### 1. willTransition
Now, Ember begins to construct the route transition. The [`willTransition()`](https://guides.emberjs.com/v2.13.0/routing/preventing-and-retrying-transitions/#toc_preventing-transitions-via-code-willtransition-code) event gets fired with the `transition` argument on the currently active routes. This is probably one of the best places to [prevent the transition](https://guides.emberjs.com/v2.13.0/routing/preventing-and-retrying-transitions/#toc_preventing-transitions-via-code-willtransition-code) from occurring. For example, imagine your user is currently filling out some form data but clicks on a header navigation link by accident. In this hook you could perform a quick analysis for the non-submitted data and show a modal prompt for a much better user experience.

If the transition was not terminated then we proceed to the validation phase.

### Validation Phase
The purpose of this phase is to resolve all model promises for new routes. You may also use these hooks as a great opportunity to redirect the user to a different route. Keep in mind, if any of these hooks return a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) then the transition will pause until that promise either fulfills or rejects. If the project rejects, an [`error()`](https://guides.emberjs.com/v2.13.0/routing/loading-and-error-substates/#toc_the-code-error-code-event) event will trigger with the `error` and `transition` arguments from the current route context and will bubble up the entire router hierarchy.

#### 2. beforeModel
The [`beforeModel()`](https://www.emberjs.com/api/classes/Ember.Route.html#method_beforeModel) hook gets called with a single `transition` argument. This hook is best used as a place to redirect to another route _before_ needing to execute the current route's `model()` hook &mdash; if you don't need any information that is contained within that model. Also, this is a great place to fire some asynchronous operations before the current model is resolved.

_NOTE:_ The [`transition`](https://www.emberjs.com/api/classes/Transition.html) argument here and with each of the following hooks can be used to [abort](https://www.emberjs.com/api/classes/Transition.html#method_abort) the current transition (e.g. an unauthenticated user accesses an authenticated route). You can also save this argument as a chunk of application state inside a service and use it again at a later point in time to [`retry`](https://www.emberjs.com/api/classes/Transition.html#method_retry) the previously aborted transition (e.g. deep-linking a user).

#### 3. model
The [`model()`](https://www.emberjs.com/api/classes/Ember.Route.html#method_model) hook is called with the `params` and `transition` arguments and generally has one purpose to convert the URL into the model for this current route context. This usually means reaching into the Ember Data store to retrieve your model data.

```js
// app/routes/post.js
import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model(params/*, transition*/) {
    return this.store.findRecord('post', params.post_id);
  }
});
```

_NOTE:_ If you transition into a route via a dynamic route segment through a transition and a model context is already provided &mdash; this hook is _not_ called. A model context does not include a primitive string or number, which _does_ cause the model hook to be called.

#### 4. afterModel
The [`afterModel()`](https://www.emberjs.com/api/classes/Ember.Route.html#method_afterModel) hook gets triggered next with the `resolvedModel` and `transition` arguments immediately after this route's model has been resolved. This hook &mdash; along with the next hook &mdash; is best suited for performing any logic that must take place using information and data from this current model.

#### 5. redirect
The [`redirect()`](https://www.emberjs.com/api/classes/Ember.Route.html#method_redirect) hook is nearly identical to it's predecessor `afterModel()` and gets called with the `model` and `transition` arguments. The  important distinction here between these two hooks is simply that once you have reached the `redirect()` hook in the lifecycle, the current route would now be considered _"active"_ or _"fully validated"_.

```js
// app/router.js
Router.map(function() {
  this.route('posts', function() {
    this.route('post', { path: '/:post_id' });
  });
});
```

For example, if your current router hierarchy looks like the snippet above and we are currently in the context of the `redirect()` hook of the `posts` route. This means that if you now redirected into the child `post` route, the `beforeModel()`, `model()`, and `afterModel()` hooks for the `posts` route will **NOT** be triggered again within the new redirecting transition &mdash; as opposed to actually being triggered again if you had instead redirected from the previous `afterModel` hook in the `posts` route.

Once we have completely resolved the prior `redirect()` hook then we can begin to move forward and perform the setup phase.

### Setup Phase
The purpose of this phase is to finally exit all of the previous routes and enter all of the new routes.

#### 6. exit (private method)
The `exit()` hook is actually a private method but I have found it useful to help me visualize when creating a mental model about how all of these pieces fit together. The only internal work done here would be to immediately trigger the next `deactivate()` event as well as do some work to teardown views.

#### 7. deactivate
The [`deactivate()`](https://www.emberjs.com/api/classes/Ember.Route.html#method_deactivate) event is called with no arguments and it is executed when the router completely exits a route. Note that this hook will _not_ execute when the model for the current route changes (e.g. going from `post/1` to `post/2`). `deactivate()` is best used as place do any work immediately before leaving a certain route (e.g. tracking page leave analytics).

#### 8. enter (private method)
The `enter()` hook is a private method as well; however, it's still useful to help gain a better understaning for the big picture. The only thing this hook does is immediately trigger the next `activate()` event.

#### 9. activate
The [`activate()`](https://www.emberjs.com/api/classes/Ember.Route.html#method_activate) event is called with no arguments and it is executed when the router enters the new route. In the past, similar to `deactivate()`, I have found this to be a great place to trigger various analytics handlers.

#### 10. setupController
The [`setupController()`](https://www.emberjs.com/api/classes/Ember.Route.html#method_setupController) hook is called with the `controller` (controller for the current route) and `model` arguments. This sole job of this hook internally within Ember is to set the `model` property of the controller to the Handlebars property named `model`.

I strongly avoid using this hook whenever possible because it has personally come back to bite me with some [nightmare debugging scenarios](https://www.mutuallyhuman.com/blog/2017/02/17/debugging-your-assumptions-ember-edition). If I want to do something like [alias my model name](https://github.com/DockYard/styleguides/blob/master/engineering/ember.md#alias-your-model), then I will do this inside of the Controller instead.

_WARNING:_ As with all Ember hooks, if you decide to implement the `setupController()` hook inside your route, it will prevent the default behavior. To save yourself some headaches, remember to preserve that behavior you must make sure to always call `this._super(...arguments)`.

#### 11. renderTemplate
The [`renderTemplate()`](https://www.emberjs.com/api/classes/Ember.Route.html#method_renderTemplate) hook gets called with the same `controller` and `model` arguments from the above `setupController()`. Internally, this hook is used to render the template for your current route. By default, it renders your route's template, configured with the current controller for the route.

Once again, I do strongly avoid using this hook whenever possible. In the past, I have done some complex custom rending logic here for multiple templates and transitions &mdash; it can become a pain to debug and refactor when you start to really hijack the things Ember does so well under the hood. A great rule of thumb here is to just follow the _"Ember Way"_ as much as possible. These hooks are very powerful tools and with all of that power comes some big responsibilities.

### Finishing the Route Transition
Finally the route transition has completed and Ember's internal transition promise has successfully resolved.

#### 12. didTransition
Last but not least, the [`didTransition`](https://www.emberjs.com/api/classes/Ember.Route.html#event_didTransition) event gets fired with no arguments once the transition has successfully completed. This event is best used for some more analytics handing or setting/resetting state within the application.

Additionally, here are some great follow up resources to learn and play more with these concepts to help gain a more complete understanding:

* [Ember's Routing Guide](https://guides.emberjs.com/v2.13.0/routing/)
* [Ember Diagonal](http://alexspeller.com/ember-diagonal/route/posts) by Alex Speller
