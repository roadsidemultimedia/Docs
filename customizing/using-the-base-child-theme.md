# Using the Base Child theme #

The PageLines Base theme, is a free child theme available from the PageLines Store which will never receive an update, as its been designed as a base for you to create your very own child themes, as well customizing PageLines DMS.

The Base child theme is considered the most professional method for customizations and here are a few reasons why:

* Supports custom CSS via the `style.css` file.
* Supports hooks via the `functions.php` file.
* Supports LESS with the creation of a `style.less` file.
* Supports the creation of a `language` folder for translations.
* Supports a custom `rtl.css` file, for customizing the default rtl styling.
* Supports custom/child sections.

For more information we recommend reading the following Wordpress codex articles [child themes](http://codex.wordpress.org/Child_Themes) and [theme development](http://codex.wordpress.org/Theme_Development).

## Structure ##

The PageLines Base child theme folder when in [installed](/configure/installing-store-products), can be located here **wp-content &rarr; themes &rarr; pagelines-template-theme**, containing following folder and files.

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

By default, the PageLines Base child theme is called Base Theme and all the themes files and folders are stored in **pagelines-template-theme** folder. However, you may need to change the Base themes name to something different such as your clients brand name. To do this, simply follow the instructions below.

Before you do anything, make sure that the Base child theme is not the active theme. Once you have double checked this, open your favourite FTP client and connect to your server and navigate to the following directory **wp-content &rarr; themes &rarr; pagelines-template-theme**.

In your favourite code editor, open the **style.css** file and you will see the following information.

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
Theme Name: YOUR_NEW_THEME_HERE
Theme URL: YOUR_WEBSITE_URL
Description: DESCRIPTION_OF_YOUR_THEME
Version: 1.0.
Author: YOUR_NAME
Author URI: YOUR_WEBSITE_URL
Tags: developer

Template: pagelines

*/
~~~





