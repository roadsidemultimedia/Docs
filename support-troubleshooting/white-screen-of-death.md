# The White Screen of Death #

PHP errors, as well as database errors can manifest as a white screen, a blank screen with no information, in the Wordpress community this is commonly known as the White Screen of Death.

There are a number fo reasons for the white screen of death:

## Plugins ##

If you can access the Wordpress administrator dashboard try deactivating all of your Plugins and then reactivating them one by one and see ifthis resolves the issue.

If you are unable to access your Wordpress administrator dashboard, log in to your website via FTP. Locate the folder `/wp-content/plugins` and rename the Plugin folder `plugins_old`. This will deactivate all of your Plugins.

## WP_DEBUG ##

If disabling all plugins didn't resolve the issue, you can also use the WordPress debug function. `WP_DEBUG` is a PHP constant (a permanent global variable) that can be used to trigger the "debug" mode throughout WordPress. It is false by default and can be set to true in the `wp-config.php` file.

~~~ .php
// Replace false
define('WP_DEBUG', false);

// with true, to enable debug mode
define('WP_DEBUG', true;
~~~

Once added, the blank screen may now have errors, warnings, or notices. These may be able to help you determine the root cause.