<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/getting-started">Getting Started</a> <span class="divider">/</span></li>
  			<li class="active">Demo Content</li>
		</ul>
	</div>
</div>

# The PageLines Demo #

</p>We are going to import some data to recreate the demo for DMS. You can see the current demo by clicking <a target="_blank"  href="http://themes.pagelines.com/dms/?dobar=1">here</a>.<br />
At the end of this mini tutorial you should have a site looking almost exactly the same making it easier to see how all the cool stuff in DMS works!</p>
<div class="bs-callout bs-callout-info">
	<h4>Plugins needed</h4>
	<p>To fully recreate the demo content you will need a couple of plugins, installing them is easy!<br />
		<ul>
			<li><a target="_blank" href="http://wordpress.org/plugins/woocommerce/">WordPress Importer</a> (needed) This imports all the posts/pages and media needed to recreate the demo.</li>
			<li><a target="_blank" href="http://wordpress.org/plugins/wordpress-importer/">Woocommerce</a> (optional) The excellent ecommerce solution for WordPress, not strictly needed, but if you plan on selling products on your site you can check out what it will look like with the demo data</li>
		</ul>
		To install them go to the admin area of your new WordPress site and in the left hand menu under plugins click 'Add New' then in the search box enter the name of the plugin then install it, after its installed click 'Activate', this it.. simple.
	</p>
</div>

<h3>Lets get started!</h3>
<p>Now we have the plugins in place its time to get the data imported into your install of WordPress. You will need to download the two config files.
<ul>
	<li><a href="http://themes.pagelines.com/configs/demo-dms.xml">WordPress XML</a> This is the file used by the WordPress importer.</li>
	<li><a href="http://themes.pagelines.com/configs/pl-config_2014-04-24_17-43-20.json">DMS config file</a> The DMS config file contains all the section and template data.</li>
</ul>	
</p>
<h4>Step 1: Import the WordPress Data</h4>
<p>
	<ol>
		<li>In the WordPress menu, click on Tools and Import. You will be presented with a series of importer tools, at the bottom you will see WordPress, thats the one you installed, click that.</li>
		<li>You should see the WordPress Import page with a 'Choose File' dialog, click the button and navigate to the demo-dms.xml file you saved previously.</li>
		</li>Now click 'Upload File and Import'</li>
		<li>The importer will now ask you if you want to assign users or create your own. Its safe to just let it do what it wants here, dont worry the user 'Ray' will be created with a random password</li>
		<li>Check the box that says 'Download and import file attachments' and click 'Submit'</li>
	</ol>
At this point WordPress will download all the media attachments from the DMS demo and import them into your site, takes a few seconds or a couple of minutes depending on the bandwidth available.
</p>

