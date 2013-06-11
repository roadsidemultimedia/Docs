# Customization Methods #

PageLines has made available some of the easiest theme options for creating your site. It would be easy to add options for every little detail, but when trying to customize colors, layouts, text and size -- options aren’t always the best solution. Literally, you could have twenty options just to control one small block of text; so adding options for everything leads to an overly-complicated product.

That is why we give you the ability to add customization. If you have even limited knowledge of CSS, you can easily customize your site well beyond what’s available in the PageLines options. This allows you to create complex customizations with minimal work.

## Methods ##

There are three methods for customising your website, these are using the **DMS toolbar &rarr; Customize options** , the **base child theme** or the **customize plugin**. Each method has pros and cons, which we'll go through below.

### DMS ###

PageLines DMS has two customization options built-in allowing you to add custom LESS/CSS and scripts. If you wish to add a few custom scripts and/or basic CSS/LESS to your website and nothing more, then using DMS independently is the method for you.

<p><small><span class="label label-info" style="margin-right: 5px;">Note:</span> You’re unable to customize DMS further with hooks, as this would require editing the core `function.php` file (something we do not recommend or support), any edits made to this file will most certainly break PageLines DMS. If you wish to use hooks, we recommend using either the customize plugin or the base child theme.</small></p>

### Customization Plugin ###

The Customization plugin contains both `style.css` and `functions.php` files like a child theme, it also supports `style.less`. However, the plugin doesn’t support the creation of child sections.

The advantage of the Customize Plugin is that you can update the core files and a 3rd party child theme and still keep your customizations.

### Child Theme ###

A child theme is a theme that inherits the functionality of another theme, called the parent theme, and allows you to modify, or add to, the functionality of that parent theme. The PageLines Base Child theme, allows you to add custom CSS/LESS, scripts and hooks.

One of the many benefits of working with a child theme is that the child themes files are separate and therefore, all your customizations such as LESS/CSS, hooks are protected and will not be overwritten upon a PageLines DMS update.

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

<p class="zmt zmb"><small><span class="label label-info" style="margin-right: 5px;">Note:</span> In order to use LESS CSS on both the Customization plugin and Child theme, you will need to create a `style.less` file. We have provided you with a sample `style.less` file which you can download from our [LESS doc](/less).</small></p>