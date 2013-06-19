# How to Customize #

In this tutorial we'll show you how to start customizing PageLines DMS, using one of three methods, and recommend which tools you'll need to learn to make minor or advanced modifications.

## Customization Method ##

There are three methods for adding customization to your website, these are: the **DMS toolbar → Customize options**; the **Base Child theme**, and, the **PageLines Customize plugin**.  Each method applies to individual levels of skill -- based on your comfort level and proficiency, which we'll go through below.

### DMS Customize Options ###

The PageLines DMS method is recommended to **new** users or users with limited HTML/CSS knowledge. PageLines DMS has two built-in options for customization, allowing you to add custom LESS/CSS, and scripts. If you wish to add nothing more than a few custom scripts and/or basic CSS/LESS to your website, then using DMS independently is the method for you.

<table class="table table-striped table-bordered table-condensed">
	<thead>
		<tr>
			<th>Safe from updates</th>
			<th>CSS/LESS</th>
			<th>Hooks</th>
			<th>Override Sections</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><i class="icon-ok text-success"></td>
			<td><i class="icon-ok text-success"></td>
			<td><i class="icon-remove text-error"></td>
			<td><i class="icon-remove text-error"></td>
		</tr>
	</tbody>
</table>


For more information about Customize Options in DMS, please click here.

### PageLines Customize Plugin ###

The PageLines Customize Plugin is recommended for users who have moderate knowledge customizing sites using HTML/CSS and PHP. The plugin contains both style.css and functions.php files like a child theme, it also supports style.less, hooks and localizations with the creation of a **language** folder.

However, you're unable to override sections with the Customize Plugin, if you wish to do so, see The Base Theme method below.

<table class="table table-striped table-bordered table-condensed">
	<thead>
		<tr>
			<th>Safe from updates</th>
			<th>CSS/LESS</th>
			<th>Hooks</th>
			<th>Override Sections</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><i class="icon-ok text-success"></td>
			<td><i class="icon-ok text-success"></td>
			<td><i class="icon-ok text-success"></td>
			<td><i class="icon-remove text-error"></td>
		</tr>
	</tbody>
</table>

For more information about PageLines Customize plugin please click here.

### The Base Theme ###

The Base Theme is considered the most advanced and professional method for customizing, as it supports custom CSS/LESS, scripts, hooks and the ability to override sections. Localizations and language file options are also supported with the creation of a **language** folder.

The Base Theme is a free child theme available from the PageLines Store which will never receive an update, as its been designed as a base for you to create your very own child themes, as well customizing PageLines DMS.

<table class="table table-striped table-bordered table-condensed">
	<thead>
		<tr>
			<th>Safe from updates</th>
			<th>CSS/LESS</th>
			<th>Hooks</th>
			<th>Override Sections</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><i class="icon-ok text-success"></td>
			<td><i class="icon-ok text-success"></td>
			<td><i class="icon-ok text-success"></td>
			<td><i class="icon-ok text-success"></td>
		</tr>
	</tbody>
</table>

For more information about the Base theme, please click here.

## Learn the Basics ##

Theme customization is no easy task, especially if you're new to web programming. However, if you invest some time, you'll soon pick up the basics and things will start to do what you expect them to. You don't necessarily need a profound knowledge of web programming, but you will need to know the fundamentals of HTML and CSS to begin with.

We have compiled a list of websites to get you started:

* [W3Schools HTML Introduction](http://www.w3schools.com/html/html5_intro.asp)
* [Mozilla's HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/html)
* [HTML Dog - HTML Beginners Tutorial](http://www.htmldog.com/guides/html/)
* [W3Schools CSS Introduction](http://www.w3schools.com/css/default.asp)
* [W3C CSS](http://www.w3.org/Style/CSS/)
* [HTML DOG - CSS Beginners Tutorial](http://www.htmldog.com/guides/css/)

## Adding Code ##

Depending on your choice of customization method, adding custom CSS/LESS and scripts will vary. 

For example, the **DMS Customize Options** doesn't require any edits to files to add custom code. Instead, custom code is added to the options. 

![]()

Adding code to both the **PageLines Customize Plugin** and Base Theme requires editing the style.css, style.less and functions.php files.

![]()

For a more detailed explanation, click the link below which represents your selected customization method.

* [DMS Customize Options](/customize/dms-customize-options)
* [PageLines Customize Plugin](/customize/pagelines-customize-plugin)
* [The Base Theme](/customize/base-child-theme)

## Tools & Resources ##

Here are some useful tools and resources which will assist you in customizing PageLines DMS:

### Local Development ###

Local development refers to the process of building a website from the comfort of a own computer, and not needing to be connected to the internet in order to run PHP and MySQL. By using applications such as the ones listed below you can essentially turn your computer into a web server.

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

For installation support and further explanation, please view the documentation for each application.

### Code Editor

All code starts with some type of code editor. The best editors strike a balance between usability, package syntax, and "get out of my way" editing.

![]()

These are a couple we recommend.

* [SubLime Text 2](http://www.sublimetext.com/2) - What we use! (MAC OS X/Windows)
* [Coda 2](http://panic.com/coda/) - (MAC OS X)
* [TextMate](http://macromates.com/) - (MAC OS X)
* [Notepad++](http://notepad-plus.sourceforge.net/) - (Windows)

### Web Developer Tools ###

When customizing PageLines DMS using web developer tools are essential and come bundled with most modern web browsers. One of the included tools, allows you to inspect the HTML structure accompanied by the CSS rules used. The Web developer tools also give you the ability to add/edit the CSS rules on the fly.

Below are some useful resources to get you started with the web developer tools:

* [Chrome Developer Tools](http://code.google.com/chrome/devtools/)
* [FireFox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools)
* [Firebug for FireFox](http://getfirebug.com/faq/)
* [Safari Developer Tools](http://developer.apple.com/library/safari/#documentation/AppleApplications/Conceptual/Safari_Developer_Guide/1Introduction/Introduction.html#//apple_ref/doc/uid/TP40007874-CH1-SW1)
* [Opera Developer Tools](http://www.opera.com/dragonfly/documentation/)

We also highly recommend you check out the discover dev tools free course provided by [Code School](http://discover-devtools.codeschool.com/).

### Online Training ###

There are a growing number of online courses teaching web programming in the comfort of your browser. We highly recommend signing up and take advantage of these services which offer training, video lessons, coding challenges, and screencasts.

* [Code School](http://www.codeschool.com/)
* [Codecademy](http://www.codecademy.com/)
* [Treehouse](http://teamtreehouse.com/)
* [Lynda](http://www.lynda.com/)











