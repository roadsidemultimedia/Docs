# Customization Methods #

In order to customize colors, layouts, text and size -- settings options aren't always the best solution.  Customization on an individual basis for your site may work best.  Here are some of your options to achieve the site you want most.

## Methods ##

There are three principle methods for adding customization to your website, these are: the DMS <strong>toolbar → Customize options</strong>; the <strong>Base Child theme</strong>, and, the <strong>PageLines Customize plugin</strong>. Each method has pros and cons, which we'll go through below.

### DMS ###

<div class="row-fluid">
	<div class="span7">
PageLines DMS has two built-in options for customization, allowing you to add custom LESS/CSS, and some scripts. If you wish to add a few custom scripts and/or basic CSS/LESS to your website and nothing more, then using DMS independently is the method for you.

However, you’re unable to customize by this method with <strong>hooks</strong>, as this would require editing the core `function.php` file (something we strongly discourage and do not support), any edits made to this file will most certainly break PageLines DMS and your site. If you wish to use hooks, either the PageLines Customize Plugin or the Base Theme (a child theme) method is required.

<img src="https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/dms-customize-editor.jpg">

<strong>Pros</strong>
<ul>
	<li>Quickest method for adding CSS/LESS & scripts</li>
	<li>Custom CSS/LESS & scripts are safe from updates</li>
	<li>Is the method of choice if you wish to only add minor CSS/LESS changes</li>
</ul>

<strong>Cons</strong>
<ul>
	<li>Unable to customize further with hooks</li>
	<li>Doesn't support custom/child sections</li>
</ul>
	</div>
	<div class="span5">
		<img src="https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/pagelines-dms-thumb.png">
	</div>
</div>


### PageLines Customize Plugin ###

<div class="row-fluid">
	<div class="span7">
The Customize Plugin contains both `style.css` and `functions.php` files like a child theme, it also supports `style.less` and the use of hooks. However, the plugin doesn’t support the use of child sections.  Localizations and language file options are added to this plugin.

<strong>Pros</strong>
<ul>
	<li>Supports CSS via the <strong>style.css</strong> file</ul>
	<li>Supports hooks via the <strong>functions.php</strong> file</ul>
	<li>Supports LESS with the creation of a <strong>style.less</strong> file (see Creating a style.less file below)</ul>
	<li>Can be used with both <strong>DMS Customize Options</strong> and <strong>Base Child theme</strong></ul>
	<li>Supports the creation of a <strong>language</strong> folder for translations.</ul>
</ul>
<strong>Cons</strong>

<li>Doesn't support the creation of Custom/Child sections
	</div>
	<div class="span5">
		<img src="https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/pagelines-customize-thumb.png">
	</div>
</div>

### Child Theme ###

<div class="row-fluid">
	<div class="span7">
A child theme is a theme that inherits the functionality of another theme, called the parent theme, and allows you to modify, or add to, the functionality of that parent theme.

#### Base Child theme ####

The PageLines Base Theme, is a free child theme available from the PageLines Store which will never receive an update, as its been designed as a base for you to create your very own child themes, as well customizing PageLines DMS.

The Base child theme is considered the most professional method for customizing, as it supports custom CSS/LESS, scripts, hooks and custom/child sections.
	</div>
	<div class="span5">
		<img src="https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/pagelines-template-theme-thumb.png">
	</div>
</div>

<div class="row-fluid">
	<div class="span12">
#### PageLines Store Child themes ####

When customizing a child theme purchased via our Store, such as iBlogPro5 or any third-party theme, it is best to use the <strong>PageLines Customize plugin</strong> (free in the Store) for any CSS/LESS changes, or additional hooks you may wish to add.

Third-party child themes may be subject to updates by their developers, placing customizations within the theme at risk of being overwritten.  Using the Customize plugin eliminates any risk of loss due to updates.

<p class="zmt zmb"><small><span class="label label-info" style="margin-right: 5px;">NOTE:</span> Always remember to back up your site; particularly modifications you've made.</small></p>

<strong>Pros<strong>
<ul>
	<li>Supports CSS via the <strong>style.css</strong> file</li>
	<li>Supports hooks via the <strong>functions.php</strong> file</li>
	<li>Supports LESS with the creation of a <strong>style.less</strong> file (see Creating a style.less file below)</li>
	<li>Can be used with both <strong>DMS Customize Options<strong> and <strong>Base Child theme</strong></li>
	<li>Supports the creation of a <strong>language</strong> folder for translations.</li>
	<li>Supports Custom/Child sections</li>
</ul>

<strong>Cons</strong>

<li>Child themes purchased from the PageLines store, should not be customized without the use of the PageLines Customize plugin, as these edits will be overwritten upon update.
	</div>
</div>

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

In order to The `style.less` file is required in both the <strong>PageLines Customize Plugin</strong> and the <strong>Base Child theme</strong>, in order to add LESS CSS. You can create the file using your favourite text editor (we recommend [Sublime Text 2](http://www.sublimetext.com/2)). The file can remain blank for the time being, all that is required is that the file is named <strong>style.less</strong>. Once create you're free to start adding your custom CSS/LESS.

We have provided an example `style.less` file, which can be added to your preferred customization method which you can download, extract and then upload using your favourite FTP client, to the following locations, depending on your customization method.

<div class="center">
	<a href="https://dl.dropbox.com/s/zlu6s081lljcrr7/style.less.zip?dl=1" class="btn btn-large btn-primary"><i class="icon-download-alt"></i> Sample style.less</a>
</div>

### Installing the style.less file ###

#### PageLines Customize Plugin ####
<ul>
	<li>Once the <strong>PageLines Customize Plugin</strong> has been installed/activated, open your favourite FTP client</li>
	<li>Connect to your server and navigate to the following directory:</li>
		<ul>
			<li><strong>wp-content &rarr; plugins &rarr; pagelines-customize</strong></li>
		</ul>
	<li>Upload the `style.less` file to this directory</li>
</ul>

#### Child Theme ####

<ul>
	<li>Once the <strong>Base Child theme</strong> has been installed/activated, open your favourite FTP client
	<li>Connect to your server and navigate to the following directory:
		<ul>
			<li><strong>wp-content &rarr; themes &rarr; child theme folder</strong> (by default is named <strong>pagelines-template-theme</strong> )</li>
		</ul>
	<li>Upload the `style.less` file to this directory</li>
</ul>