<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/advanced/less-css">&larr; LESS CSS</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/advanced/custom-sidebars">Custom Sidebars &rarr;</i></a></li>
		</ul>
	</div>
</div>

# Override Sections #

There may come a point during your design process where a section doesn't provide a specific function you require in your design, such as header tag being a `h3` and you wish to use `h2`. This is where override sections or child sections come in and in PageLines DMS overriding sections is a very straight forward process.

## How to Override Sections ##

To begin, we first need to make sure we are using the **Base Theme** customization method, as this is the only method which supports overriding sections.

Once we have determined that the **Base Theme** is our customization method, we need to download a fresh copy of DMS from the PageLines Launchpad . Once download, extract the `pagelines.zip` and navigate to **pagelines &rarr; sections**, here you will find multiple folders each representing the core sections included with PageLines DMS.

Locate the section in which you wish to override or customize, for this example we will be overriding the **iBox** section. Now open your FTP client, connecting to your server and navigate to the following directory: `wp-content/themes/pagelines-template-theme/sections/`.

Upload the **iBox** section folder to the Base Themes `wp-content/themes/pagelines-template-theme/sections/` folder and like magic, we have a child section of **iBox**, read for us to override. You can override the section by opening the `section.php` file in your code editor.

## Support Scope ##

Please be aware that our support team will be able to provide limited support to child sections, as this is considered user created code. If you have any issues or errors related to your own custom code, we recommend contacting one of the [PageLines Pros]()

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/advanced/less-css">&larr; LESS CSS</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/advanced/custom-sidebars">Custom Sidebars &rarr;</i></a></li>
		</ul>
	</div>
</div>