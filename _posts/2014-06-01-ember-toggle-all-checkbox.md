---
layout: post
title: "Ember 'Toggle All' Checkbox"
date: 2014-06-01
categories: ember
description: Quick tutorial regarding a common UI pattern for Ember using checkboxes to display a list of items with a 'Toggle All' checkbox for the list.
---

<iframe
  width="178" height="24" style="border:0px"
  src="https://mixonic.github.io/ember-community-versions/2014/06/01/ember-toggle-all-checkbox.html">
</iframe>

I recently read an interesting article by Mark Przepiora titled [Ember.js Recipes: Checkboxable Index Pages Using itemController](http://codeflip.przepiora.ca/blog/2014/05/22/ember-js-recipes-checkboxable-index-pages-using-itemcontroller/). Mark makes several good points regarding the logical separation between controllers and models in Ember. He shows how to identify use cases when it's appropriate to leverage an `itemController` to wrap each item in a collection. Here is his demo which shows a simple implementation for a UI structure with a list of checkbox items and a delete button.

<div class="embed no-print" style="position: relative; height: 0px; overflow: hidden; max-width: 100%; padding-bottom: 56.25%;"><iframe src="https://ember-twiddle.com/98db39c9da13f2d48060a96c3be04493?fullScreen=true" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"></iframe></div>

I thought this would be a fun starting point for a quick post of my own, so I took Mark's idea and slightly expanded upon it by adding a *"Toggle Select All"* checkbox. Below I'll show my demo and highlight some of the more interesting bits of code. Check it out.

<div class="embed no-print" style="position: relative; height: 0px; overflow: hidden; max-width: 100%; padding-bottom: 56.25%;"><iframe src="https://ember-twiddle.com/3de32b1404d8852665ef7d7af2c44950?fullScreen=true" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"></iframe></div>

The templates are pretty straightforward, as I only made a few small changes from the original example. First, I'm setting the `itemController` inside the `{% raw %}{{#each}}{% endraw %}` helper rather than inside the controller. Second, I'm using an `{% raw %}{{else}}{% endraw %}` block helper to render some content when there are no checkboxes remaining.

{% raw %}
```hbs
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
```
{% endraw %}

Here's where things get a little more fun. You can see my `App.IndexController` with comments describing each of the main code blocks and properties.

```js
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
```

Finally, you can see my `App.ColorController` which acts as an `itemController` for each object in the model array.

```js
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
```
