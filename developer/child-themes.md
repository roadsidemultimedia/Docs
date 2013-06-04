# Child Themes #

A child theme is a theme that inherits the functionality of PageLines DMS and allows you to modify, or add to it' s functionality without the need to modify core files. For more information see the Wordpress codex article on [child themes](http://codex.wordpress.org/Child_Themes) or visit the [theme development](http://codex.wordpress.org/Theme_Development) codex.

Developers who have signed up for the [PageLines Junto](http://developer.pagelines.com/apply/) community can also publish their child themes to the PageLines Store.

## Theming ##

With PageLines DMS, we feel very confident we have provided the very best theming engine around which include both [Bootstrap](http://twitter.github.io/bootstrap/) and [LESS](http://lesscss.org/) libraries. Allowing for a fast and enjoyable designing experiencing.

Included is a base child theme which you can use to kickstart your own creations, the base theme is free and available from the [PageLines Store](http://www.pagelines.com/store).

### Child Theme Structure ###

A typical PageLines child theme will have the following structure.

<table>
  <thead>
    <tr>
      <th>File/Folder name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>sections/</strong></td>
      <td>Bundle sections with your theme in this folder, each section in a seperate folder.</td>
    </tr>
    <tr>
      <td><strong>functions.php</strong></td>
      <td>All custom hooks and actions live here.</td>
    </tr>
    <tr>
      <td><strong>info.txt</strong></td>
      <td>Provides long description for store, and changelog.</td>
    </tr>
    <tr>
      <td><strong>page.example.php</strong></td>
      <td>Custom page template, check the file for syntax. This is autoloaded.</td>
    </tr>
    <tr>
      <td><strong>screenshot.png</strong></td>
      <td>Primary screenshot, logo or graphic for your extension item (300px by 225px).</td>
    </tr>
    <tr>
      <td><strong>screenshot-1.png</strong></td>
      <td>Additional screenshots -1 -2 -3 etc (optional).</td>
    </tr>
    <tr>
      <td><strong>setup.php</strong></td>
      <td>Loads the parent theme. Don't tamper with this.</td>
    </tr>
    <tr>
      <td><strong>splash.png</strong></td>
      <td>Artwork sized 750 x 350 - only needed for selling on the PageLines Store.</td>
    </tr>
    <tr>
      <td><strong>style.css</strong></td>
      <td>Main theme style file.</td>
    </tr>
    <tr>
      <td><strong>style.less</strong></td>
      <td>All custom LESS and CSS should be added here.</td>
    </tr>
    <tr>
      <td><strong>thumb.png</strong></td>
      <td>Thumbnail image used in the store and on pagelines.com for your product.</td>
    </tr>
  </tbody>
</table>

### Edit Child Theme Info ###

* In your favourite text editor, open the **style.css** file

~~~ .php
/*  
Theme Name: Base Theme
Theme URI: http://www.pagelines.com/
Description: A starter child theme for PageLines.  Use this as a reference for building your own child themes for PageLines Store.
Version: 1.0.2
Author: PageLines
Author URI: http://www.pagelines.com
Tags: developer

Template: pagelines

*/
~~~

* Edit any of these items, except for **Template: pagelines**, which tells Wordpress that this is a child theme of PageLines DMS.


## Theming API ##

Design a child theme that completely changes the look and feel of a PageLines site. Set user options, add/enable them, totally customize the CSS and more.

Add more infor about the Theming API

### Bootstrap ###

PageLines has integrated the entire Bootstrap library. Bootstrap is a powerful front-end framework for faster and easier web development. It contains HTML and CSS-based design templates for typography, forms, buttons, charts, navigation and other interface components, as well as optional JavaScript extensions. Bootstrap was also programmed to support both HTML5 and CSS3.

We've made some modifications to fit inside DMS, so the markup of the grid is slightly different. All of your classes are still available, as are the colored variables. We haven't inclided the progress bar, or any other "app" type of CSS. If you want to see which libraries have been included visit the `/less` directory.

### LESS ###

As well as Bootstrap, PageLines has integration of LESS, LESS extends CSS with dynamic behavior such as variables, mixins, operations and functions.

We have a wide collection of variables ready for you to use, as well as a library of built-in mixins, outlined in our [LESS API](/less-api) documentation.

<p><span class="label label-info" style="margin-right:5px">Tip:</span>Disable the LESS caching system while working locally. Simpy add <code>define('PL_LESS_DEV',true);</code> to your **wp-config** file, and this will turn off the caching system. <strong><span class="str">DO NOT</span></strong> use this on a production site, or you'll face a nuclear melt-down. You have been warned!</p>

<p><span class="label label-success" style="margin-right:5px">Note:</span>Using PageLines LESS variables will seal a dynamic relationship between the users Color Controls in Wordpress admin. LESS variables can be used within the Custom CSS/LESS box in Wordpress admin, and within any style.less file. Example: <code>color:@pl-text;</code></p>

### Hooks ###



## Developer Tools ##

