Markdown editor: https://dillinger.io/

# 🎭 Bootstrap v4.4.1 Layouts

Current version: v1.3.0

This is the home of Footbridge Media's Bootstrap layouts. In the layouts folder you will find multiple HTML files which serve as different layout templates. 

## 🍹 v1.0.0+ and Forward Theming

The SCSS files for Bootstrap are now imported in the /css/site-theme/main-theme.scss file. This file can be used to properly theme Bootstrap for individual layouts. Please use this file and import custom utility files (such as _breadcrumbs.scss or _images.scss) to customize a layout while being consistent with Bootstrap call names (for instance, bg-primary).

In the main-theme.scss file, to change all **primary** colors, you can override the $theme-colors like so:

```scss
$theme-colors:(
    "primary":#0000ff
);
```

Which would make all primary-based classes (bg-primary, text-primary, btn-primary, etc) use #0000ff instead of the default Bootstrap color.

## Using Google Material Ripples

The layouts have the ability to include a ripple JS library by **appending** the following to the head:

```html
<script defer src="/js/ripple/ripple.min.js"></script>
```

To use it, here is a code sample:

```html
<a class="btn btn-primary" href="#">
    Click for Ripple Effect
    <div class="rippleJS"></div>
</a>
```

## Using the isInView jQuery Plugin

Please read the readme at this repository (it's short): https://github.com/nox7/jQuery-inView-Plugin

## Change Log
```
- 1.3.0
-- Removed Bootstrap bundle JS map
-- Upgraded Bootstrap from 4.3.1 to 4.4.1
- 1.2.0
-- jQuery removed from navigation
-- Redundant Font-Awesome webfont folders removed and some font families using old FA directives fixed in _goldylox
```
