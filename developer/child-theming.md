# Child Themes #

A child theme is a theme that inherits the functionality of PageLines DMS and allows you to modify, or add to it' s functionality without the need to modify core files.

Developers can also publish their child themes to the PageLines Store.

## Theming ##

PageLines Framework provides a free base child theme which you can use to create your own child themes which is available from the PageLines Store.

### Child Theme Structure ###

A typical PageLines child theme will have the following structure.

**sections/**			- Bundle sections with your theme in this folder, each section in a seperate folder.  
**functions.php**		- All custom hooks and actions live here  
**info.txt**			- Provides long description for store, and changelog  
**page.example.php**	- Custom page template, check the file for syntax. This is autoloaded.  
**screenshot.png**		- Primary screenshot, logo or graphic for your extension item (300px by 225px).  
**screenshot-1.png**	- Additional screenshots -1 -2 -3 etc (optional).  
**setup.php**			- Loads the parent theme. Don't tamper with this.  
**splash.png**			- Artwork sized 750 x 350 - only needed for selling on the PageLines Store  
**style.css**			- Main theme style file.  
**style.less**			- All custom LESS and CSS should be added here.  
**thumb.png**			- Thumbnail image used in the store and on pagelines.com for your product.  

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