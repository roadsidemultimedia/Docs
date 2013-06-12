# Customization Methods #

PageLines has made available some of the easiest theme options for creating your site. It would be easy to add options for every little detail, but when trying to customize colors, layouts, text and size -- options aren’t always the best solution. Literally, you could have twenty options just to control one small block of text; so adding options for everything leads to an overly-complicated product.

That is why we give you the ability to add customization. If you have even limited knowledge of CSS, you can easily customize your site well beyond what’s available in the PageLines options. This allows you to create complex customizations with minimal work.

## Methods ##

There are three methods for adding customization to your website, these are using the **DMS toolbar &rarr; Customize options** , the **Base Child theme** and the **Customize plugin**. Each method has pros and cons, which we'll go through below.

### DMS ###

PageLines DMS has two customization options built-in allowing you to add custom LESS/CSS and scripts. If you wish to add a few custom scripts and/or basic CSS/LESS to your website and nothing more, then using DMS independently is the method for you.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/dms-customize-editor.jpg)

**Pros**

* Quickest method for adding CSS/LESS & scripts
* Custom CSS/LESS & scripts are safe from updates
* Is the method of choice if you wish to only add minor CSS/LESS changes

**Cons**

* Unable to customize further with hooks
* Doesn't support custom/child sections

### Customize Plugin ###

The Customize plugin emulates a child theme and includes a `style.css` and `functions.php` files. With the addition of the `functions.php` file, you're able to use hooks and therefore, is a slightly more advanced than the DMS customization method.

**Pros**

* Supports CSS via the **style.css** file
* Supports hooks via the **functions.php** file
* Supports LESS with the creation of a **style.less** file (see Creating a style.less file below)
* Can be used with both **DMS Customize Options** and **Base Child theme**
* Supports the creation of a **language** folder for translations.

Cons

* Doesn't support the creation of Custom/Child sections

### Child Theme ###

A child theme is a theme that inherits the functionality of another theme, called the parent theme, and allows you to modify, or add to, the functionality of that parent theme.

#### Base Child theme ####

The PageLines Base Child theme, is a free child theme available from the PageLines store which will never receive an update, as its been designed as a base for you to create your very own child themes, as well customizing PageLines DMS.

The Base child theme is considered the most professional method for customizating, as it supports custom CSS/LESS, scripts, hooks and custom/child sections.

#### PageLines Store Child themes ####

In order to customize a child theme purchased from the Store, such as iBlogPro 5 or any third party theme, it is best to use the PageLines Customize plugin for any CSS/LESS changes or additional hooks you may add. Editing any purchased child theme's core files, the edits are subject to being overwritten upon update. While child themes are not commonly updated, they may be, from time to time, and any customizations may be subject to loss. PageLines Customize plugin eliminates that risk.

**NOTE:** Always remember to back up your site; particularly modifications you've made.

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
			<th class="pref">Child Theme</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Supports LESS</td>
			<td class="center"><i class="icon-ok text-success"></i></td>
			<td class="center"><i class="icon-ok text-success"></i></td>
			<td class="center"><i class="icon-ok text-success"></i></td>
		</tr>
		<tr>
			<td>Safe from updates</td>
			<td class="center"><i class="icon-ok text-success"></i></td>
			<td class="center"><i class="icon-ok text-success"></i></td>
			<td class="center"><i class="icon-ok text-success"></i></td>
		</tr>
		<tr>
			<td>Supports Hooks</td>
			<td class="center"><i class="icon-remove text-error"></i></td>
			<td class="center"><i class="icon-ok text-success"></i></td>
			<td class="center"><i class="icon-ok text-success"></i></td>
		</tr>
		<tr>
			<td>Custom Sections</td>
			<td class="center"><i class="icon-remove text-error"></i></td>
			<td class="center"><i class="icon-remove text-error"></i></td>
			<td class="center"><i class="icon-ok text-success"></i></td>
		</tr>
	</tbody>
</table>


## Creating a style.less file ##

The `style.less` file is required in both the **Customize Plugin** and the **Base Child theme**, in order to add LESS CSS. The `style.less` file can be created using your favourite text editor (we recommend [Sublime Text 2](http://www.sublimetext.com/2)), the style.less file can be a blank file, all that is required is that the file is named **style.less**.

We have provided an example `style.less` file, which can be added to your preferred customization method which you can download, extract and then upload using your favourite FTP client, to the following locations, depending on your customization method.

<div class="center">
	<a href="https://dl.dropbox.com/s/zlu6s081lljcrr7/style.less.zip?dl=1" class="btn btn-large btn-primary"><i class="icon-download-alt"></i> Sample style.less</a>
</div>

### Installing the style.less file ###

#### Customize Plugin ####

* Once the **Customize Plugin** has been installed/activated, open your favourite FTP client
* Connect to your server and navigate to the following directory:
	+ **wp-content &rarr; plugins &rarr; pagelines-customize**
* Upload the `style.less` file to this directory

#### Child Theme ####

* Once the **Base Child theme** has been installed/activated, open your favourite FTP client
* Connect to your server and navigate to the following directory:
	+ **wp-content &rarr; themes &rarr; child theme folder** (by default is named **pagelines-template-theme** )
* Upload the `style.less` file to this directory