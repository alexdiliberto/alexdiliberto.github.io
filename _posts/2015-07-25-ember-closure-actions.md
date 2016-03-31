---
layout: post
title: "Spotlight: Ember Closure Actions"
date: 2015-07-25
categories: ember
description: Overview of the new closure actions feature introduced in the Ember v1.13.0 release
---

<iframe
  width="178" height="24" style="border:0px"
  src="https://mixonic.github.io/ember-community-versions/2015/07/25/ember-closure-actions.html">
</iframe>

I am really excited be spotlighting one of my favorite Ember features in a long time, [closure actions](http://emberjs.com/blog/2015/06/12/ember-1-13-0-released.html#toc_closure-actions). The goal of this blog post is to get you familiar, at a high level, with some of the basic closure action behaviors and help establish a solid foundational understanding.

Closure actions are brand new as of the current [Ember v1.13.0](https://github.com/emberjs/ember.js/releases/tag/v1.13.0) release. This feature creates a whole new action handling approach which simplifies the entire process in general, as well as allows for the new function-passing solution to replace the old action bubbling mechanism. Under the hood, the <code class="inline-code">{% raw %}{{action}}{% endraw %}</code> helper is now improved to allow for the creation of closed-over functions which pass the action handlers between components and controllers.

Here is a quick example highlighting the change:

{% highlight handlebars %}
{% raw %}
{{! old action handling approach }}
<button {{action "announce" on="click"}}>Winter is Coming</button>
{% endraw %}
{% endhighlight %}

This would be rewritten using a closure action, utilizing the native `onclick` [DOM event](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers) in *attribute context* as follows:

{% highlight handlebars %}
{% raw %}
{{! now we have a closure action }}
<button onclick={{action "announce"}}>Winter is Coming</button>
{% endraw %}
{% endhighlight %}

Used this way, the resulting template render logic would be constructed as follows in plain javascript:

{% highlight javascript %}
{% raw %}
var btn = document.createElement('button');
var actionFunction = (function(context) {
  return function() {
    return context.actions.announce.apply(context, arguments);
  };
})(context);
btn.onclick = actionFunction;
{% endraw %}
{% endhighlight %}

Under the hood, you can see there is no crazy magic happening. Ember is simply attaching a function to a click handler for a DOM node using <code class="inline-code">{% raw %}btn.onclick = actionFunction;{% endraw %}</code>. That function just calls the name of the action plucked off the <code class="inline-code">actions</code> hash within the current context.

Closure actions may also be invoked via *Handlebars value* context:

{% highlight handlebars %}
{% raw %}
{{! two invocations using Handlebars value context}}
{{got-input focus-out=(action "sendRaven")}}
{{yield (action "gatherBannermen")}}
{% endraw %}
{% endhighlight %}

Consider the old approach of passing down the action name as a "string" from a higher level scope to a lower level scope and then sending an action back up the chain to call the original action handler function:

{% highlight handlebars %}
{% raw %}
{{! old approach }}
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

With closure actions, the <code class="inline-code">(action)</code> [helper](http://emberjs.com/api/classes/Ember.Templates.helpers.html#method_action) simply wraps the action in the current scope and returns back that function &mdash; as discussed previously. Now you will execute the passed-in action function directly from the child component.

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

Additionally, the closure actions approach allows you to <code class="inline-code">{% raw %}{{yield}}{% endraw %}</code> an action back up to a block. [For example](https://ember-twiddle.com/358e8020419d6c861db348f77c6429cf?fileTreeShown=false&openFiles=templates.application.hbs%2C):

{% highlight handlebars %}
{% raw %}
{{! app/templates/index.hbs }}
{{#tyrion-lannister drink=(action "haveGlass") as |drinkWine snark|}}
  {{! calls the tyrion-lannister component `drinkWine` yielded attr }}
  {{!   --> calls the "haveGlass" action on the outer scope }}
  <button onclick={{action drinkWine}}>Drink Wine</button>

  {{! calls the yielded "snark" action from the tyrion-lannister component scope }}
  {{#my-button doSnark=(action snark)}}Make Snarky Comment{{/my-button}}

  {{! calls the "cavort" action on the outer scope }}
  <button onclick={{action "cavort"}}>Cavort</button>
{{/tyrion-lannister}}
{% endraw %}
{% endhighlight %}

{% highlight handlebars %}
{% raw %}
{{! app/templates/components/tyrion-lannister.hbs }}
{{yield attrs.drink (action "snark")}}
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

These are just some of the cool features afforded by closure actions. Also, keep in mind this is not removing the existing usage of "string" based action handling. If you wish, you can continue to write actions using the old approach. Please recognize that I have not touched on slightly move advanced features such as currying arguments in this post &mdash; just know that the ability to wield powerful behaviors are unlocked with this new action handling mechanism.

To get a taste of some of these awesome closure action capabilities working together in tandem, check out the following example. It combines several great features &mdash; block parameters, closure actions *(specifically yielding up an action to a block within a higher level scope)*, and the <code class="inline-code">{% raw %}{{component}}{% endraw %}</code> helper.

<div class="embed">
  <a class="jsbin-embed" href="http://emberjs.jsbin.com/dojutujeqe/3/embed?html,js,output">Ember Closure Actions Demo</a><script src="http://static.jsbin.com/js/embed.min.js?3.34.1"></script>
</div>