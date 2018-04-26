# Bootstrap Translation Cheatsheet From Footbridge Flex

## Old Grid System Translation

To translate our old grid system, an example has been given below of our old Flex system and then how to do the same thing in Bootstrap.
```html
<div class="wrap">
	<div class="six">
		Content
	</div>
	<div class="six">
		Content
	</div>
</div>
```
Bootstrap V4.0
```html
<div class="row">
	<div class="col-6">
		Content
	</div>
	<div class="col-6">
		Content
	</div>
</div>
```
A positive to using Bootstrap is that we can control screen sizes much easier through classes. The example Bootstrap code above will make sure there are two columns taking half the container width. What if we want them to only do that on bigger screens, and be full width on mobile? Example below:
```html
<div class="row">
	<div class="col-12 col-md-6">
		Content
	</div>
	<div class="col-12 col-md-6">
		Content
	</div>
</div>
```
Notice how we've added "-md-" into the "col" class. This stands for "medium screens and up." Anything below that will use col-12, which will make the element expand the full width.

You can use col-NUM where "NUM" can be anywhere from 1-12.

**Bonus Note**

If you want all the child "div" elements in the row to be all to be the same width (even spacing and size) you can just use "col" like the following example shows:

```html
<div class="row">
	<div class="col">
		Content
	</div>
	<div class="col">
		Content
	</div>
</div>
```