# Child Themes #

A child theme is a theme that inherits the functionality of PageLines DMS and allows you to modify, or add to it' s functionality without the need to modify core files.

You may wish to develop PageLines DMS child Themes for personal use, for a client project or to submit to the PageLines store for other PageLines users. Developers who have signed up for the [PageLines Junto](http://developer.pagelines.com/apply/) community can also publish their child themes to the PageLines Store.

For more information we recommend reading the following Wordpress codex articles [child themes](http://codex.wordpress.org/Child_Themes) and [theme development](http://codex.wordpress.org/Theme_Development).

## Theming ##

With PageLines DMS, we feel very confident we have provided the best theming engine around which includes both [Bootstrap](http://twitter.github.io/bootstrap/) and [LESS](http://lesscss.org/) libraries. Allowing for a fast and enjoyable designing experiencing.

Included is a base child theme which you can use to kickstart your own creations, the base child theme is freely available from the [PageLines Store](http://www.pagelines.com/store).

### Child Theme Structure ###

A typical PageLines child theme will have the following structure.

<table class="table table-striped table-bordered">
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

### Editing Child Theme Info ###

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

There may come a time during your development process where you require functionality that isn't possible "out of the box" with PageLines DMS, this is where hooks can be especially useful. Modifiying both Wordpress and PageLines DMS core files is a big no-no, so whenever you want to change existing functionality or create new functionality, you will have to turn to hooks.

PageLines DMS has hooks at stategic points through the framework, such as before the header and at the start of the footer, for more information see our [Hooks Reference](/hooks-reference) and [Hook Examples](/hook-examples) documentation.

If you're new to hooks and need an guidance, see the following articles:

* [Action & Filter Hooks](http://codex.wordpress.org/Plugin_API#Hooks.2C_Actions_and_Filters)
* [Introduction to Hooks - By WPCandy](http://wpcandy.com/teaches/how-to-use-wordpress-hooks/)
* [PHP Functions](http://www.w3schools.com/php/php_functions.asp)


## Developer Tools ##

Below are a number of recommended tools.

### Local Development ###

Local development refers to the process of building a website from the comfort of a own computer, and not needing to be connected to the internet in order to run PHP and MySQL. By using applications such as the ones listed below you can essentially turn your computer into a web server.

* [MAMP](http://www.mamp.info/en/index.html) - Both a free version and Pro version are available. (MAC OSX)
* [XAMPP](http://www.apachefriends.org/en/xampp.html) - Available for free for both MAC OS X and Windows.

<div class="row-fluid">
	<div class="span12">
		<table class="table table-striped table-bordered">
  			<thead>
    			<tr>
      				<th>MAC OS X</th>
      				<th>Windows</th>
    			</tr>
  			</thead>
  			<tbody>
    			<tr>
      				<td><a href="http://www.mamp.info/en/index.html">MAMP</a></td>
      				<td><a href="http://www.wampserver.com/en/">WAMP</a></td>
  				</tr>
  				<tr>
      				<td><a href="http://www.apachefriends.org/en/xampp-macosx.html">XAMPP</a></td>
      				<td><a href="http://www.apachefriends.org/en/xampp-windows.html">XAMPP</a></td>
    			</tr>
    			<tr>
      				<td><a href="http://www.zend.com/en/products/server-ce/">Zend Server Community Edition</a></td>
      				<td><a href="http://www.zend.com/en/products/server-ce/">Zend Server Community Edition</a></td>
				</tr>
      				<td></td>
      				<td><a href="http://www.easyphp.org/">EasyPHP</a></td>
    			</tr>
  			</tbody>
		</table>
	</div>
</div>

For installation support, please view the documentation for each application.

### Version Control ###

Very briefly, version control is a way to keep a backup of changing files, to store a history of those changes, and most importantly to allow other people in a collaboration to make changes to the same files concurrently.

### Code Editor ###

All code starts with some type of code editor. The best editors strike a balance between usability, package syntax, and "get out of my way" editing. These are a couple that we use.

* [SubLime Text 2](http://www.sublimetext.com/2) - What we use! (MAC OS X/Windows)
* [Coda 2](http://panic.com/coda/) - (MAC OS X)
* [TextMate](http://macromates.com/) - (MAC OS X)
* [Notepad++](http://notepad-plus.sourceforge.net/) - (Windows)

### Git Clients ###

Git Clients are like the vehicle to transport the code to it's destination. We use Tower for Mac, although there are many out there available. Mostly Mac based.

* [Tower](http://www.git-tower.com/) - What we use! (MAC OS X)
* [GitBox](http://gitboxapp.com/) - (MAC OS X)
* [SourceTree](http://www.sourcetreeapp.com/) - (MAC OS X/Windows)
* [Tortoise Git](http://code.google.com/p/tortoisegit/) - (Windows)

### Beanstalk ###

[Beanstalk](http://beanstalkapp.com/) is a premium service, that serves as a Git repo, with the added bonus of auto-deployment to your server. This service takes FTP out of the equation completely, not to mention that your code is now tracked with the option to rollback. Using [Tower](http://www.git-tower.com/), together with Beanstalk, means one-click deployment.

![Version Control with Beanstalk](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/version-control-beanstalk.png "Version Control with Beanstalk")

## Theme Kit ##

We want you to build beautiful themes (then sell them on the PageLines Store), so we've built a full custom child theme built with all kinds of great stuff so you can get a full hands-on experience with what it feels like to develop using LESS and PageLines.

Add link here for Theme Kit, when created!
