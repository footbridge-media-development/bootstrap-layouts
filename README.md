# Bootstrap Components and Blank Layout

This is the home of Footbridge Media's layout components. In the components folder you will find multiple layout folders which serve as different pieces of layout templates.


## Layout Creation Guide

1. Copy the `blank-layout` folder to the directory of your choosing to start.
2. In the `components` folder, you should see all of the necessary HTML and SCSS to start assembling your layout. 
3. The HTML contents should be pasted directly into your new layout folder's `index.html` file. 
4. The SCSS stylesheet should be added to your `styles` folder.
5. After adding the component's stylesheet, you need to include it in your `theme.scss` file. It should be under the comment that says `Custom Styles`.

## SimpleLightbox Plugin
To view the syntax for using this plugin, check out the test file [here](https://github.com/footbridge-media-development/bootstrap-layouts/blob/master/tests/lightbox/main.html).

On all new layouts, this plugin is already initialized. You do not have to load it in.

### Installing the jQuery-less SimpleLightbox on Existing Websites
1. Copy the SCSS source code for the plugin from the styles/dependencies/simple-lightbox/_simple-lightbox.scss file into your build. Then import it into your main SCSS file and compile the SCSS.
2. Copy the plugin source code from the js/lightbox/lightbox.js file into your current build and load it in your <head>.
3. Copy the js/init-lightbox.js file and load it in your <head> - make sure it is loaded after the lightbox.js source code.