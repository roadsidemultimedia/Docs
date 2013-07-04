# Internal Server Error #

There can be a number of reasons for an Internal Server Error. Here are some thing you can do to solve it:

* The most likely issue is a corrupted .htaccess file. Log in to your site root using FTP and rename your .htaccess file to .htaccess_old. Try loading your site to see if this has solved your problem. If it works, make sure to visit Settings > Permalinks and reset your permalinks. This will generate a new .htaccess file for you.
* Try deactivating all of your Plugins to see if it is a Plugin issue. If you are unable to access your WordPress Administration Screens, deactivate your Plugins via FTP by following these instructions.
* Increase the PHP Memory limit
* Try re-uploading the wp-admin and wp-includes folders from a fresh install of WordPress.