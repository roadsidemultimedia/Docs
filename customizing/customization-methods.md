# Customization Methods #

PageLines has made available some of the easiest theme options for creating your site. It would be easy to add options for every little detail, but when trying to customize colors, layouts, text and size -- options aren’t always the best solution. Literally, you could have twenty options just to control one small block of text; so adding options for everything leads to an overly-complicated product.

That is why we give you the ability to add customization. If you have even limited knowledge of CSS, you can easily customize your site well beyond what’s available in the PageLines options. This allows you to create complex customizations with minimal work.

## Methods ##

There are three methods for adding customization to your website, these are using the **DMS toolbar &rarr; Customize options** , the **Base Child theme** and the **Customize plugin**. Each method has pros and cons, which we'll go through below.

### DMS ###

PageLines DMS has two customization options built-in allowing you to add custom LESS/CSS and scripts. If you wish to add a few custom scripts and/or basic CSS/LESS to your website and nothing more, then using DMS independently is the method for you.

However, you’re unable to customize further with hooks, as this would require editing the core `function.php` file (something we do not recommend or support), any edits made to this file will most certainly break PageLines DMS. If you wish to use hooks, either the **customize plugin** or the **base child theme** method is required.

### Customize Plugin ###

The Customize Plugin contains both `style.css` and `functions.php` files like a child theme, it also supports `style.less` and the use of hooks. However, the plugin doesn’t support the use of child sections.

The advantage of the Customize Plugin is that you can update the core files and a 3rd party child theme and still keep your customizations.

### Child Theme ###

A child theme is a theme that inherits the functionality of another theme, called the parent theme, and allows you to modify, or add to, the functionality of that parent theme. The PageLines Base Child theme, supports custom CSS/LESS, scripts, hooks and child sections.

The benefit of working with a child theme is that the child theme files are separate to the parent theme (in this case PageLines DMS). This means, when an update becomes available to the partent theme, your custom CSS/LESS, child sections and hooks, will not be overwritten upon update.

The disadvantage of using a Child theme, is that you can’t then install a 3rd party child theme through the store and update it, as you will lose your edits.

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
* Upload the `style.less` file here

#### Child Theme ####

* Once the **Base Child theme** has been installed/activated, open your favourite FTP client
* Connect to your server and navigate to the following directory:
	+ **wp-content &rarr; themes &rarr; child theme folder** (by default is named **pagelines-template-theme** )
* Upload the `style.less` file here