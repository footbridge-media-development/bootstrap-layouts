Markdown editor: https://dillinger.io/

# Bootstrap v4.1.0 Layouts

Current version: v1.0.0

This is the home of Footbridge Media's Bootstrap layouts. In the layouts folder you will find multiple HTML files which serve as different layout templates. 

## v1.0.0 and Forward Theming

The SCSS files for Bootstrap are now imported in the /css/site-theme/main-theme.scss file. This file can be used to properly theme Bootstrap for individual layouts. Please use this file and import custom utility files (such as _breadcrumbs.scss or _images.scss) to customize a layout while being consistent with Bootstrap call names (for instance, bg-primary).

In the main-theme.scss file, to change all **primary** colors, you can override the $theme-colors like so:

```scss
$theme-colors:(
    "primary":#0000ff
);
```

Which would make all primary-based classes (bg-primary, text-primary, btn-primary, etc) use #0000ff instead of the default Bootstrap color.
