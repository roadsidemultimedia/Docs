# Using the Base Child theme #

The PageLines Base theme, is a free child theme available from the [PageLines Store](/getting-started/pagelines-store) which will never receive an update, as its been designed as a base for you to create your very own child themes, as well customizing PageLines DMS.

The Base child theme is considered the most professional method for customizations and here are a few reasons why:

* Supports custom CSS via the `style.css` file.
* Supports hooks via the `functions.php` file.
* Supports LESS with the creation of a `style.less` file.
* Supports the creation of a `language` folder for translations.
* Supports a custom `rtl.css` file, for customizing the default rtl styling.
* Supports custom/child sections.

For more information we recommend reading the following Wordpress codex articles [child themes](http://codex.wordpress.org/Child_Themes) and [theme development](http://codex.wordpress.org/Theme_Development).

## Structure ##

The PageLines Base child theme folder when in [installed](/configure/installing-store-products), can be located here **wp-content &rarr; themes &rarr; pagelines-template-theme**, containing the following folder and files.

<table class="table table-striped table-bordered">
  <thead>
    <tr>
      <th>File/Folder name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>sections/</strong></td>
      <td>Add custom/child sections here, contains an example child section of Simple Nav</td>
    </tr>
    <tr>
      <td><strong>functions.php</strong></td>
      <td>All custom hooks and actions live here.</td>
    </tr>
    <tr>
      <td><strong>info.txt</strong></td>
      <td>Provides long description for store, and changelog.</td>
    </tr>
    <tr>
      <td><strong>page.example.php</strong></td>
      <td>Custom page template, check the file for syntax. This is autoloaded.</td>
    </tr>
    <tr>
      <td><strong>screenshot.png</strong></td>
      <td>Primary screenshot, logo or graphic for your extension item (300px by 225px).</td>
    </tr>
    <tr>
    <tr>
      <td><strong>setup.php</strong></td>
      <td>Loads the parent theme. <strong>Don't tamper with this</strong>.</td>
    </tr>
    <tr>
      <td><strong>style.css</strong></td>
      <td>Main theme style file.</td>
    </tr>
    <tr>
      <td><strong>thumb.png</strong></td>
      <td>Thumbnail image used in the store and on pagelines.com for your product.</td>
    </tr>
  </tbody>
</table>

## Renaming the Base child theme ##

By default, the PageLines Base child theme is named Base Theme with all the files stored in the **pagelines-template-theme** diretory. However, at some point you may wish to change the name of the Base child theme.

Before proceeding with the following instructions, make sure the Base child theme is not the active theme (it can cause errors). Once the base child theme has been de-actived, using your FTP client, connect to your server and navigate to the following directory **wp-content &rarr; themes &rarr; pagelines-template-theme**.

Open the **style.css** file and you will see the following information.

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

Once you have replaced the default information with your own, save the **style.css** file. You have now successfully changed the name of Base child theme to your own!

You may also want to want to rename the **pagelines-template-theme** folder to match your child theme name. To do this, simply rename the folder inside your FTP client.


