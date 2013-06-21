# Using the Base Child theme #

The PageLines Base Theme, is a un-styled child theme -- available free from the [PageLines Store](/getting-started/pagelines-store)  -- which will never receive an update, or add any styling of its own; designed as a platform for you to create your own child themes, as well customizing PageLines DMS.

For more information regarding child themes, we recommend reading these linked Wordpress codex articles -- [child themes](http://codex.wordpress.org/Child_Themes),  and [theme development](http://codex.wordpress.org/Theme_Development).

## Structure ##

The PageLines Base Theme (child) folder when [installed](/configure/installing-store-products), will be located here **wp-content → themes → pagelines-template-theme**, containing the subfolder and files found in the table below.

<pre>
<i class="icon-folder-open"></i> pagelines-template-theme/
  <i class="icon-folder-open"></i> sections/
  <i class="icon-file"></i> functions.php
  <i class="icon-file"></i> info.txt
  <i class="icon-file"></i> page.example.php
  <i class="icon-file"></i> screenshot.png
  <i class="icon-file"></i> setup.php
  <i class="icon-file"></i> style.css
  <i class="icon-file"></i> thumb.png
</pre>

## Renaming the Base child theme ##

By default, the PageLines child is named Base Theme with all the files stored in the **pagelines-template-theme** directory. However, at some point you may wish to change the name of the Base child theme.

Before proceeding with the following instructions, make sure the Base Theme is not the currently active theme (it can cause errors) by going to **Wordpress Admin Dashboard → Appearance → Themes** and clicking the **Activate link** for PageLines DMS.

Once the Base Theme has been deactived, open your FTP client, connect to your server and navigate to the following directory **wp-content → themes → pagelines-template-theme**.

Open the `style.css` file and you will see the following information.

~~~ .php
/*
Theme Name: Base Theme
Theme URL: http://www.pagelines.com/
Description: A starter child theme for PageLines.  Use this as a reference for building your own child themes for PageLines Store.
Version: 1.0.2
Author: PageLines
Author URI: http://www.pagelines.com
Tags: developer

Template: pagelines

*/
~~~

Edit any of these items, except for **Template: pagelines**, which tells Wordpress that this is a child theme of PageLines DMS.

~~~ .php
/*
Theme Name: ADD_YOUR_THEME_NAME_HERE
Theme URL: ADD_YOUR_WEBSITE_URL_HERE
Description: ADD_THE_DESCRIPTION_OF_YOUR_THEME_HERE
Version: 1.0.
Author: ADD_YOUR_NAME_HERE
Author URI: ADD_YOUR_WEBSITE_URL_HERE
Tags: developer

Template: pagelines

*/
~~~

Once you have replaced the default information with your own, save the `style.css` file. You have now successfully changed the name of Base Theme and made it into your own child theme!

You may also want to want to rename the **pagelines-template-theme** folder to match your child theme name. To do this, simply rename the folder inside your FTP client's Rename utility.

<div class="row-fluid">
  <div class="span12">
    <ul class="pager">
      <li class="pull-left"><a href="http://docs.pagelines.com/customize/dms-customize-options"><i class="icon-arrow-left"></i> PageLines Customize Plugin</a></li>
        <li class="pull-right"><a href="http://docs.pagelines.com/customize/base-child-theme">Store Child Themes <i class="icon-arrow-right"></i></a></li>
    </ul>
  </div>
</div>

