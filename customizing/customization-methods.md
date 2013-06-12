# Customization Methods #

In order to customize colors, layouts, text and size -- settings options aren't always the best solution.  Customization on an individual basis for your site may work best.  Here are some of your options to achieve the site you want most.

## Methods ##

There are three principle methods for adding customization to your website, these are: the DMS **toolbar → Customize options**; the **Base Child theme**, and, the **PageLines Customize plugin**. Each method has pros and cons, which we'll go through below.

### DMS ###

PageLines DMS has two built-in options for customization, allowing you to add custom LESS/CSS, and some scripts. If you wish to add a few custom scripts and/or basic CSS/LESS to your website and nothing more, then using DMS independently is the method for you.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/pagelines-dms-thumb.png)

However, you’re unable to customize by this method with **hooks**, as this would require editing the core `function.php` file (something we strongly discourage and do not support), any edits made to this file will most certainly break PageLines DMS and your site. If you wish to use hooks, either the PageLines Customize Plugin or the Base Theme (a child theme) method is required.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/dms-customize-editor.jpg)

**Pros**

* Quickest method for adding CSS/LESS & scripts
* Custom CSS/LESS & scripts are safe from updates
* Is the method of choice if you wish to only add minor CSS/LESS changes

**Cons**

* Unable to customize further with hooks
* Doesn't support custom/child sections

### PageLines Customize Plugin ###

The Customize Plugin contains both `style.css` and `functions.php` files like a child theme, it also supports `style.less` and the use of hooks. However, the plugin doesn’t support the use of child sections.  Localizations and language file options are added to this plugin.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/pagelines-customize-thumb.png)

**Pros**

* Supports CSS via the **style.css** file
* Supports hooks via the **functions.php** file
* Supports LESS with the creation of a **style.less** file (see Creating a style.less file below)
* Can be used with both **DMS Customize Options** and **Base Child theme**
* Supports the creation of a **language** folder for translations.

**Cons**

* Doesn't support the creation of Custom/Child sections

### Child Theme ###

A child theme is a theme that inherits the functionality of another theme, called the parent theme, and allows you to modify, or add to, the functionality of that parent theme.

#### Base Child theme ####

The PageLines Base Theme, is a free child theme available from the PageLines Store which will never receive an update, as its been designed as a base for you to create your very own child themes, as well customizing PageLines DMS.

The Base child theme is considered the most professional method for customizing, as it supports custom CSS/LESS, scripts, hooks and custom/child sections.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/pagelines-template-theme-thumb.png)

#### PageLines Store Child themes ####

When customizing a child theme purchased via our Store, such as iBlogPro5 or any third-party theme, it is best to use the **PageLines Customize plugin** (free in the Store) for any CSS/LESS changes, or additional hooks you may wish to add.

Third-party child themes may be subject to updates by their developers, placing customizations within the theme at risk of being overwritten.  Using the Customize plugin eliminates any risk of loss due to updates.

<p class="zmt zmb"><small><span class="label label-info" style="margin-right: 5px;">Note:</span> Always remember to back up your site; particularly modifications you've made.</small></p>

**Pros**

* Supports CSS via the **style.css** file
* Supports hooks via the **functions.php** file
* Supports LESS with the creation of a **style.less** file (see Creating a style.less file below)
* Can be used with both **DMS Customize Options** and **Base Child theme**
* Supports the creation of a **language** folder for translations.
* Supports Custom/Child sections

**Cons**

* Child themes purchased from the PageLines store, should not be customized without the use of the PageLines Customize plugin, as these edits will be overwritten upon update.

<table class="table table-striped table-bordered table-condensed">
	<thead>
		<tr>
			<th></th>
			<th>DMS</th>
			<th>Customize Plugin</th>
			<th>Child Theme</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Safe from updates</td>
			<td class="center"><i class="icon-ok text-success"></i></td>
			<td class="center"><i class="icon-ok text-success"></i></td>
			<td class="center"><i class="icon-ok text-success"></i></td>
		</tr>
		<tr>
			<td>CSS/LESS</td>
			<td class="center"><i class="icon-ok text-success"></i></td>
			<td class="center"><i class="icon-ok text-success"></i></td>
			<td class="center"><i class="icon-ok text-success"></i></td>
		</tr>
		<tr>
			<td>Hooks</td>
			<td class="center"><i class="icon-remove text-error"></i></td>
			<td class="center"><i class="icon-ok text-success"></i></td>
			<td class="center"><i class="icon-ok text-success"></i></td>
		</tr>
		<tr>
			<td>Custom/Child Sections</td>
			<td class="center"><i class="icon-remove text-error"></i></td>
			<td class="center"><i class="icon-remove text-error"></i></td>
			<td class="center"><i class="icon-ok text-success"></i></td>
		</tr>
	</tbody>
</table>

## Creating a style.less file ##

In order to The `style.less` file is required in both the **PageLines Customize Plugin** and the **Base Child theme**, in order to add LESS CSS. You can create the file using your favourite text editor (we recommend [Sublime Text 2](http://www.sublimetext.com/2)). The file can remain blank for the time being, all that is required is that the file is named **style.less**. Once create you're free to start adding your custom CSS/LESS.

We have provided an example `style.less` file, which can be added to your preferred customization method which you can download, extract and then upload using your favourite FTP client, to the following locations, depending on your customization method.

<div class="center">
	<a href="https://dl.dropbox.com/s/zlu6s081lljcrr7/style.less.zip?dl=1" class="btn btn-large btn-primary"><i class="icon-download-alt"></i> Sample style.less</a>
</div>

### Installing the style.less file ###

#### PageLines Customize Plugin ####

* Once the **PageLines Customize Plugin** has been installed/activated, open your favourite FTP client
* Connect to your server and navigate to the following directory:
	+ **wp-content &rarr; plugins &rarr; pagelines-customize**
* Upload the `style.less` file to this directory

#### Child Theme ####

* Once the **Base Child theme** has been installed/activated, open your favourite FTP client
* Connect to your server and navigate to the following directory:
	+ **wp-content &rarr; themes &rarr; child theme folder** (by default is named **pagelines-template-theme** )
* Upload the `style.less` file to this directory