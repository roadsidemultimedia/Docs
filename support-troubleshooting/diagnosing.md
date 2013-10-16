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

## Plugin Compatibility ##

Some plugins may not be compatible with DMS due to conflicts in code. In order to diagnose if a plugin is causing an error, navigate to your **Wordpress Administrator Dashboard &rarr; Plugins**.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/wp-dash-plugins.jpg)

1. Deactivate **ALL** plugins
2. Re-visit your website and check to see if the issue persists

If the issue does not persist, one (or more) of your plugins is causing a conflict with PageLines DMS. To determine which plugin(s) is causing the conflict, follow these steps:

1. Activate each plugin one by one
2. Check to see if the issue returns after each plugin is activated

## Javascript Error(s) ##

If you're experiencing issues with DMS functionality this may be due to JavaScript errors or conflicts. 
For example, the DMS Visual Editor may be broken, or your sections don't drag and drop. Diagnosing JavaScript 
errors/conflicts can usually be found in your browsers built-in web developer tools. 

1. In Google Chrome go to the page where you are experiencing the error and navigate to **View &rarr; Developer &rarr; JavaScript Console**.

2. The error console will open. If you don't see any errors try reloading the page. The error may be generated when the page loads.

The console will provide you with the error type, the location of the error and the line number

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/js-error.jpg)

**Note:** If you prefer to use another browser, you can find instructions on how to identify JavaScript errors from the [Wordpress Codex](http://codex.wordpress.org/Using_Your_Browser_to_Diagnose_JavaScript_Errors)

## PHP Errors ##

If you encounter a white screen of death (WSOD) or receive a PHP error message preventing your from accessing your site,
this may be due to a PHP error. Debugging PHP errors is made simple as WordPress comes with specific debug systems designed 
to simplify the process.

1. Open the **wp-config.php** file.
2. Located the following line of code `define('WP_DEBUG', false);`
3. Replace `false`with `true` like so `define('WP_DEBUG', true);`

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/php-error.jpg)

Enabling WP_DEBUG will cause all PHP errors, notices and warnings to be displayed, like the image above.

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
