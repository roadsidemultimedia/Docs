# Memory Allocation Error #

The reason why this error shows up is because you exceed your default Memory Limit. There are numerous solutions for it, but the most common reason for this error is caused by a plugin(s).

The error will look similar to this:

~~~ .html
Fatal error: Allowed memory size of 3353552 bytes exhausted (tried to allocate 2348957 bytes) in /home/username/public_html/wp-includes/plugin.php on line X
~~~

The simplest method in attempting to resolve this issues is to,fFirst open your `wp-config.php` which is located in the root WordPress directory. Then add the following line inside the main php tag:

~~~ .php
define('WP_MEMORY_LIMIT', '64M');
~~~

With this line of code, we may have just increased the memory limit to 64M. If you still encounter the error after applying this fix, you will need to contact your web host provider. Inform them of the issue and ask if it is possible for them to increase the memory limit.