# How to Customize #

In this tutorial we'll show you how to start customizing PageLines DMS, using one of three methods, and recommend which tools you'll need to learn to make minor or advanced modifications.

## Choosing the right Customization Method ##

There are three methods for adding customization to your website, these are: the **DMS toolbar → Customize options**; the **Base Child theme**, and, the **PageLines Customize plugin**.  Each method applies to individual levels of skill -- based on your comfort level and proficiency, which we'll go through below.

For example, if you're **new** to using DMS, you may with to stick to DMS Customization Options, where selecting things to change or customize is by settings only.

Someone with **moderate** skills with customization may wish to use our **Customize Plugin** and some tools to achieve more unique results.

**Advanced users** -- those with stronger technical abilities -- may wish to customize the **Base Theme** to create their very own child themes, as well customizing PageLines DMS.

### DMS ###

PageLines DMS has two built-in options for customization, allowing you to add custom LESS/CSS, and scripts. If you wish to add a few custom scripts and/or basic CSS/LESS to your website and nothing more, then using DMS independently is the method for you.

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

The Customize Plugin contains both style.css and functions.php files like a child theme, it also supports style.less and the use of hooks. However, the plugin doesn’t support the use of child sections. Localizations and language file options are also supported with the creation of a **language** folder.

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

The Base Theme is a free child theme available from the PageLines Store which will never receive an update, as its been designed as a base for you to create your very own child themes, as well customizing PageLines DMS.

The Base Theme is considered the most advanced and professional method for customizing, as it supports custom CSS/LESS, scripts, hooks and the ability to override sections. Localizations and language file options are also supported with the creation of a **language** folder.

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

## Web Developer Tools ##

When customizing PageLines DMS we highly recommend using Google Chrome's Web developer tools. Other browsers like FireFox, Opera or Safari include similar built-in functionalities. Using these tools allows you to easily inspect the styles used in PageLines DMS and locate them in the CSS files. As well as testing your own CSS styles right in your browser and seeing these changes live.


### Editing CSS styles ###

Bring up Google Chrome's deveolper tools by right-clicking on any element and choosing **"Inspect Element"**. On the left side you see the html-structure of your website (make sure you have the Elements tab active). Here you have the ability to add and edit attributes and their values. Just double-click parts of the code to edit them.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/customize-chrome-tools.jpg)

On the right side you see all the CSS styles for the selected element, if you want to edit something, double click the property and enter your new value, press **enter** when you're done. You will notice that a new empty line appears, you can edit existing styles but also add new ones.









