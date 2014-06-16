---
layout: post
title: 'Ember "Toggle All" Checkbox'
date: 2014-06-01
categories: ember
description: Quick tutorial regarding a common UI pattern for Ember using checkboxes to display a list of items with a "Toggle All" checkbox for the list.
---

I recently read an interesting article by Mark Przepiora titled [Ember.js Recipes: Checkboxable Index Pages Using itemController](http://codeflip.przepiora.ca/blog/2014/05/22/ember-js-recipes-checkboxable-index-pages-using-itemcontroller/). Mark makes several good points regarding the logical separation between controllers and models in Ember. He shows how to identify use cases when it's appropriate to leverage an {% i %}itemController{% ei %} to wrap each item in a collection. Here is his JS Bin demo which shows a simple implementation for a UI structure with a list of checkbox items and a delete button.

<a class="jsbin-embed" href="http://emberjs.jsbin.com/kiwijowe/9/embed?output">Mark's JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

I thought this would be a fun starting point for a quick post of my own, so I took Mark's idea and slightly expanded upon it by adding a *"Toggle Select All"* checkbox. Below I'll show my demo JS Bin and highlight some of the more interesting bits of code. Check it out.

<a class="jsbin-embed" href="http://emberjs.jsbin.com/coliwiwa/2/embed?output">Alex's JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

The templates are pretty straightforward, as I only made a few small changes from the original example. First, I'm setting the {% i %}itemController{% ei %} inside the {% i %}{% raw %}{{#each}}{% endraw %}{% ei %} helper rather than inside the controller. Second, I'm using an {% i %}{% raw %}{{else}}{% endraw %}{% ei %} block helper to render some content when there are no checkboxes remaining.


{% highlight html linenos %}
{% raw %}
<!-- index.hbs -->
{{#if model}}
  ...
  {{#each model itemController="color"}}
    <li>...</li>
  {{/each}}
  </ul>
{{else}}
  <strong>Please Add A Color...</strong>
{{/if}}
{% endraw %}
{% endhighlight %}

Here's where things get a little more fun. You can see my {% i %}App.IndexController{% ei %} with comments describing each of the main code blocks and properties.

{% highlight javascript linenos %}
App.IndexController = Ember.ObjectController.extend({
  /**
   Simply a placeholder array for each child `itemController`
  */
  toggles: function(){ return Ember.A([]) }.property(),
  
  /**
   This computed property acts as both a setter and a getter. Check 
   out the docs for more information on this type of computed property:
     http://emberjs.com/guides/object-model/computed-properties/#toc_setting-computed-properties
     http://emberjs.com/guides/getting-started/toggle-all-todos/
  */
  allChecked: function(key, value){
    if (arguments.length === 1) /* get */ { 
      /* Executes `if` block on get when the user toggles any of the individual `itemController` checkboxes */
      var toggles = this.get('toggles');
      return toggles && toggles.isEvery('isChecked')
    } else /* set */ {
      /* Executes `else` block on set when the user toggles the actual "Toggle Select All" checkbox */
      this.get('toggles').setEach('isChecked', value);
      return value;
    }
  }.property('toggles.@each.isChecked'),
  
  /* Get the total number of selected checkboxes */
  allSelectedItems: Ember.computed.filterBy('toggles', 'isChecked', true),
  totalSelectedCount: Ember.computed.alias('allSelectedItems.length'),
  
  actions: {
    /* Called when each child `itemController` is initialized (initial state/dynamically added) */
    registerToggle: function(toggle) {
      this.get('toggles').addObject(toggle);
    },
    /* Called when each child `itemController` is deleted and destroyed from the view render tree */
    deregisterToggle: function(toggle) {
      this.get('toggles').removeObject(toggle);
    },
    add: function() {
      var color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.get('model').pushObject({color: color, id: ID++}); 
    },
    remove: function() {
      var allSelectedItems = this.get('allSelectedItems').mapBy('content');
      this.get('model').removeObjects(allSelectedItems);
    }
  }
});
{% endhighlight %}

Finally, you can see my {% i %}App.ColorController{% ei %} which acts as an {% i %}itemController{% ei %} for each object in the model array.

{% highlight javascript linenos %}
App.ColorController = Ember.ObjectController.extend({
  isChecked: false,
  
  colorId: function() {
    return 'checkbox' + this.get('id');
  }.property('id'),
  
  /**
   When a checkbox is initially or dynamically added, this declarative init handler will register the checkbox on its `parentController`
  */
  registerOnParent: function() {
    this.send('registerToggle', this);
  }.on('init'),

  /**
   When a checkbox is deleted, this hook will be called to deregister on the `parentController`
  */                                              
  willDestroy: function() {
    this.send('deregisterToggle', this);
  }
});
{% endhighlight %}
