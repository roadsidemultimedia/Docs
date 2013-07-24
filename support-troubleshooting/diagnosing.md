<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/support-troubleshooting">Support & Troubleshooting</a> <span class="divider">/</span></li>
  			<li class="active">Diagnosing</li>
		</ul>
	</div>
</div>

# Diagnosing #

Here are some instructions to assist in diagnosing your issue(s) which you should evaluate and attempt before creating a topic on our support forums.

## Browsers ##

PageLines DMS utilizes the latest web technology and therefore, is only compatible with browsers that support HTML5 and CSS3. If you or your clients are using a legacy browser such as Internet Explorer 7, we highly recommend you update to the latest version, as we do not support legacy browsers. We understand that's not always possible, though there's little we're able to do to fix outdated systems.

For more information about the latest version of browsers, see [BrowseHappy](http://browsehappy.com/).

## Up-To-Date

To improve security and compatibility issues, always keep Wordpress, DMS, store products and plugins current with the latest versions and releases. We cannot provide support to those who have out-of-date products.

## Plugins ##

All of the PageLines products are built according to WordPress API standards and do work with the majority of plugins out there. However, not all plugins follow the Wordpress API standards or are properly maintained by their author, which can lead to errors.

If you encounter an error on your website and you're using the latest version of your preferred browser, please follow the steps below.

1. Disable all active non-Pagelines plugins and see if your issue persists.
2. If the issue has been resolved, it is related to one of your installed plugins.
3. Re-activate your plugins one at a time, and check to see if the issue has returned. If the issue hasn't returned, move on to the next plugin, repeat this process until you locate the culprit.
4. Once the plugin causing the issue has been identified, you have two options, disable the plugin for the time being, then contact the author and wait for assistance or, remove the plugin from your website and find an alternative. Our support staff may be able to offer or recommend alternatives.

Please be aware, if you have a cache plugin installed such as WP Super Cache or W3 Total Cache, please flush the cache before disabling the plugin.

If disabling all active plugins didn't resolve your issue, then please move onto the next step, as your issue may be server related.

## Server Configuration ##

We try to ensure that PageLines DMS will work with any modern and secured server environment.

* [PHP](http://php.net/) version 5.2.4 or greater (5.3 recommended)
* [MySQL](http://www.mysql.com/) version 5.0 or greater

That said, we can’t test every possible environment, this is why PageLines DMS includes a debugging tool which can be useful when investigating issues you may have.

### Debug Mode ###

Should you experience problems with your website, you might need to enable the DMS debug mode. This will provide the support team with additional information about your site and can help in troubleshooting. This information includes your server setup, PHP and MySql version, Operating System and currently installed plugins.

To enable the Pagelines Debug mode, click on the global icon in the DMS control panel and select the advanced tab from the menu. In the debug panel, select the checkbox and then republish your page so the changes take effect. To view your debug information, navigate to the admin shortcuts tab and click the view debug information button.

If you're unsure about the details provided, don't worry, provide this information to our support team and they will be able to determine if there your issue is server related.

Note: the view debug information button will only appear if debug mode is enabled. 

### PHP Info ###

Because every system is setup differently, phpinfo() is commonly used to check configuration settings, and for available predefined variables on a given system. It is also a valuable debugging tool as it contains all EGPCS (Environment, GET, POST, Cookie, Server) data.

<ul>
<li>To create a phpinfo file, create a new file in your code editor, add the following lines, click save and name the file `phpinfo.php`:</li>
</ul>

~~~ .php
<?php phpinfo(); ?>
~~~

<ul>
<li>Upload the `phpinfo.php` file to your server. You should upload your file to the exact directory you want to test. Typically, this will be the root directory, where you have Wordpress installed `/home/username/domains/example.com/html/`.</li>

<li>Visit the page in your browser. If you uploaded it to your root directory, you should now visit `http://www.example.com/phpinfo.php`, replacing `example.com` with your own domain name.</li>

<li>You will now be able to view all of the information about PHP for your server for that particular directory.</li>
</ul>

## Next Step ##

By following these guidelines you may indentify the cause of your issue yourself. If this isn't the case, don't panic. Providing this information when creating your forum topic, will greatly help our support staff identify the cause of your error(s).

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/support-troubleshooting/getting-support">&larr; Getting Support</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/support-troubleshooting/memory-allocation-error">Memory Allocation Error &rarr;</a></li>
		</ul>
	</div>
</div>