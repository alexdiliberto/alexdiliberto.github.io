---
layout: post
title: "Spotlight: Ember Closure Actions"
date: 2015-07-25
categories: ember
description: Overview of the new closure actions feature introduced in the Ember v1.13.0 release
---

I am really excited be spotlighting one of my favorite Ember features in a long time, [closure actions](http://emberjs.com/blog/2015/06/12/ember-1-13-0-released.html#toc_closure-actions).

Closure actions are brand new as of the current [Ember v1.13.0](https://github.com/emberjs/ember.js/releases/tag/v1.13.0) release. This feature creates a whole new action handling approach which simplifies the entire process in general, as well as allows for the new function-passing solution to replace the old action bubbling mechanism. Under the hood, the <code class="inline-code">{% raw %}{{action}}{% endraw %}</code> helper is now improved to allow for the creation of closed-over functions which pass the action handlers between components and controllers.

Here is a quick example highlighting the change:

{% highlight handlebars %}
{% raw %}
<button {{action "announce" on="click"}}>Winter is Coming</button>
{% endraw %}
{% endhighlight %}

This would be written using a closure action as follows:

{% highlight handlebars %}
{% raw %}
<button {{action (action "announce") on="click"}}>Winter is Coming</button>
{% endraw %}
{% endhighlight %}

Consider the old approach of passing in the action name as a "string" from a higher level scope to a lower level scope and then sending an action back up the chain to call the original action handler function:

{% highlight handlebars %}
{% raw %}
{{! app/templates/index.hbs }}
{{jon-snow action="swingSword"}}
{% endraw %}
{% endhighlight %}

{% highlight javascript %}
{% raw %}
// app/components/jon-snow.js
export default Ember.Component.extend({
  click() {
    this.sendAction();
  }
});
{% endraw %}
{% endhighlight %}

*Note: this old system of action bubbling quickly falls apart when attempting to pass an action through a nested hierarchy of components.*

With closure actions, the <code class="inline-code">(action)</code> helper wraps the action in the current scope and simply returns back the function. Now you will just call the passed-in action directly from the child component.

{% highlight javascript %}
{% raw %}
// app/controllers/index.js
export default Ember.Controller.extend({
  actions: {
    swingSword() {
      // Action
    }
  }
});
{% endraw %}
{% endhighlight %}

{% highlight handlebars %}
{% raw %}
{{! app/templates/index.hbs }}
{{jon-snow swing=(action "swingSword")}}
{% endraw %}
{% endhighlight %}

{% highlight handlebars %}
{% raw %}
{{! app/templates/components/jon-snow.hbs }}
{{longclaw-sword attack=attrs.swing}}
{% endraw %}
{% endhighlight %}

{% highlight javascript %}
{% raw %}
// app/components/longclaw-sword.js
export default Ember.Component.extend({
  click() {
    this.attrs.attack();
  }
});
{% endraw %}
{% endhighlight %}

Much more flexible and much cleaner! Here you see I am easily passing the closure action through a hierarchy of nested components.

Additionally, the closure actions approach allows you to <code class="inline-code">{% raw %}{{yield}}{% endraw %}</code> an action back up to a block. For example:

{% highlight handlebars %}
{% raw %}
{{! app/templates/index.hbs }}
{{#tyrion-lannister drink=(action 'haveGlass') as |drinkWine snark|}}
  {{! calls the tyrion-lannister component drinkWine attr }}
  {{!   --> calls the "haveGlass" action on the outer scope }}
  <button {{action drinkWine}}>Drink Wine</button>

  {{! calls the "snark" action from the tyrion-lannister component scope }}
  <button {{action snark}}>Make Snarky Comment</button>

  {{! calls the "cavort" action on the outer scope }}
  <button {{action "cavort"}}>Cavort</button>
{{/tyrion-lannister}}
{% endraw %}
{% endhighlight %}

{% highlight handlebars %}
{% raw %}
{{! app/templates/components/tyrion-lannister.hbs }}
{{yield attrs.drink (action 'snark')}}
{% endraw %}
{% endhighlight %}

{% highlight javascript %}
{% raw %}
// app/components/tyrion-lannister.js
export default Ember.Component.extend({
  actions: {
    snark() {
      // Action
    }
  }
});
{% endraw %}
{% endhighlight %}

These are just some of the cool features provided by the new Ember closure actions. Also, keep in mind this is not removing the existing usage of "string" based action handling. If you wish, you can continue to write actions using the old approach.

To get a taste of some of these awesome closure action capabilities working together in tandem, check out the following example. It combines several great features &mdash; block parameters, closure actions *(specifically yielding up an action to a block within a higher level scope)*, and the <code class="inline-code">{% raw %}{{component}}{% endraw %}</code> helper.

<a class="jsbin-embed" href="http://emberjs.jsbin.com/dejegu/2/embed?html,js,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.34.1"></script>
