# Using the Base Child theme #

The PageLines Base Theme, is a un-styled child theme available free from the [PageLines Store](/getting-started/pagelines-store) which will never receive an update or add any styling of its own, designed as a platform for you to create your own child themes, as well customizing PageLines DMS.

For more information regarding child themes, we recommend reading the following Wordpress codex articles [child themes](http://codex.wordpress.org/Child_Themes) and [theme development](http://codex.wordpress.org/Theme_Development).

## Structure ##

The PageLines Base Theme (child) folder when [installed](/configure/installing-store-products), will be located here **wp-content → themes → pagelines-template-theme**, containing the subfolder and files found in the table below.

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

## Adding Customization ##

The Base Theme is considered the most professional and advanced method for customizations and here are a few reasons why:

* Supports custom CSS via the `style.css` file.
* Supports hooks via the `functions.php` file.
* Supports LESS with the creation of a `style.less` file.
* Supports the creation of a `language` folder for translations.
* Supports a custom `rtl.css` file, for customizing the default rtl styling.
* Supports custom/child sections.

The Base Theme doesn't include a **language folder** or **rtl.css** (for right-to-left languages), **style.less** files. Not all users will need or use them, we believe this will prevent confusion. For the users who do require the language folder , rtl.css and style.less, follow the instructions below.

### Adding LESS support ###

Base theme already provides LESS CSS support via the **DMS Toolbar &rarr; Customize &rarr; LESS/CSS Editor**. However, if you prefer to add your custom LESS CSS to a stylesheet, you will need to create a **style.less** file.

Open your code editor (we recommend [Sublime Text 2](http://www.sublimetext.com/2)), and create a new file. For the time being leave the file blank, and click save, naming the file **style.less**. Now open your FTP client and upload the file to the following directory **wp-content &rarr; themes &rarr; pagelines-template-theme**.

You have successfully created the **style.less** file and are ready to start adding your custom LESS CSS .

### Adding custom RTL (right-to-left) support ###



### Adding the language folder ###



### Renaming the Base child theme ###

By default, the PageLines Base theme is named Base Theme with all the files stored in the **pagelines-template-theme** directory. However, at some point you may wish to change the name of the Base child theme.

Before proceeding with the following instructions, make sure the Base Theme is not the currently active theme (it can cause errors) by going to **Wordpress Admin Dashboard → Appearance → Themes** and clicking the **Activate** link for PageLines DMS.  Once the Base Theme has been deactived, open your FTP client, connect to your server and navigate to the following directory **wp-content &rarr; themes &rarr; pagelines-template-theme**.

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

Once you have replaced the default information with your own, save the style.css file. You have now successfully changed the name of Base Theme and made it into your own child theme!

You may also want to want to rename the **pagelines-template-theme** folder to match your child theme name. To do this, simply rename the folder inside your FTP client's Rename utility.


### FIle structure after changes ###

If you have followed the instructions above correctly, your base theme folder should now have a similar structure to this:

`
pagelines-template-theme/    
|____language/    
|____sections/    
|____functions.php    
|____info.txt    
|____page.example.php    
|____rtl.css    
|____screenshot.png    
|____setup.php    
|____style.css    
|____style.less    
|____thumb.png    
`