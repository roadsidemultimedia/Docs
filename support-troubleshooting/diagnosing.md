# Diagnosing #

This page lists instructions that can assist in diagnosing your issue(s) which you should follow before creating a topic on our support forums.

## Browsers ##

PageLines DMS utilties the latest web technology and therefore, is only compatible with browsers that support HTML5 and CSS3. If you or your clients are using a legacy browser such as Internet Explorer 7, we highly recommend you update to the latest version, as we do not support legacy browsers. For more information about the latest version of browsers, see [BrowseHappy](http://browsehappy.com/).

## Up-To-Date

To improve security and compatibility, always keep Wordpress, DMS, store products and plugins up-to-date. We can not provide support to users who have out-of-date products.

## Plugins ##

All of the PageLines products are built according to WordPress API standards and do work with the majority of plugins out there. However, not all plugins follow the Wordpress API standards or are maintained by their author, which can lead to errors.

If you encounter an error on your website and you're using the latest version of your preferred browser, please follow the steps below.

1. Disable all active plugins and see if your issue persists.
2. If the issue has been resolved, it is related to one of your installed plugins.
3. Activate your plugins one at a time, and check to see if the issue has returned. If the issue hasn't returned, move onto the next plugin, repeat this process until you locate the culprit.
4. Once the plugin causing the issue has been indentified, you have two options, disable the plugin for the time being, then contact the author and wait for assistance or remove the plugin from your website and find an alternative. Our support staff may be able to offer alternatives.

If you have a cache plugin installed such as WP Super Cache or W3 Total Cache, flush the cache before disabling the plugin.

If disabling all active plugins didn't resolve your issue, then please move onto the next step, as your issue may be server related.

## Server Configuration ##

We try to ensure that PageLines DMS will work with any modern and secure server environment.

* [PHP](http://php.net/) version 5.2.4 or greater (5.3 recommended)
* [MySQL](http://www.mysql.com/) version 5.0 or greater

That said, we can’t test every possible environment, this is why PageLines DMS includes a debugging tool which can be useful when investigating issues you may have. For more information see our [debug](http://docs.pagelines.com/support-troubleshooting/debug) page.

### PHP Info ###

Because every system is setup differently, `phpinfo()` is commonly used to check configuration settings and for available predefined variables on a given system. It is also a valuable debugging tool as it contains all EGPCS (Environment, GET, POST, Cookie, Server) data.

<ul>
<li> To create a phpinfo file, create a new file in your code editor, add the following lines, click save and name the file `phpinfo.php`:</li>
</ul>

~~~ .php
<?php phpinfo(); ?>
~~~

<ul>
<li>Upload the `phpinfo.php` file to your server. You should upload your file to the exact directory you want to test. Typically, this will be the root directory, where you have Wordpress installed `/home/username/domains/example.com/html/`.</li>

<li>Visit the page in your browser. If you uploaded it to your root directory, you should now visit `http://www.example.com/phpinfo.php`, replacing `example.com` with your own domain name.</li>

<li>Once loaded, you will now be able to view all of the information about PHP for your server for that particular directory.</li>
</ul>

## Next Step ##

By following these guidelines you may indentify the cause of your issue yourself. If this isn't the case, don't panic, by providing this information when creating your forum topic, you will greatly help our support staff identify the cause of your error(s).