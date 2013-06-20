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

### CSS ###

There are two principal methods for adding custom CSS to the Base Theme, these are: the **style.css** file and the **style.less** file.  Each method applies to individual levels of skill -- based on your comfort level and proficiency, which we'll go through below.

#### style.css ####

To add your custom CSS to the style.css file, we recommend not using the WordPress Editor when adding/editing your code but instead, use your FTP client which should be configured to work with your text editor.

When you open the style.css file, you see the following:

~~~ .css
/*
Theme Name: Base Theme
Theme URI: http://www.pagelines.com/
Description: A starter child theme for PageLines.  Use this as a reference for building your own child themes for PageLines Store.
Version: 1.0.2
Author: PageLines
Author URI: http://www.pagelines.com
Tags: developer

Template: pagelines

*/

/*
Themes follow the basic WordPress themes header scheme with the following additions:

  Template: pagelines
  Tells wordpress this is a childtheme and where the parent files are stored.

  Demo: http://a.link.com
  Use this to point to a demo for this product.

  External: http://a.link.com
  Use this to point to an external site, authors home page for example.
*/

/*
 * File Naming Conventions
 * -------------------------------------
 *  style.css                     - Main theme style file.
 *  thumb.png                 - Thumbnail image used in the store and on pagelines.com for your product.
 *  screenshot.png          - Primary screenshot, logo or graphic for your extension item (300px by 225px).
 *  screenshot-1.png      - Additional screenshots -1 -2 -3 etc (optional).
 *  page.example.php      - Custom page template, check the file for syntax. This is autoloaded.
 *  sections/                   - Bundle sections with your theme in this folder, each section in a seperate folder.
 */
 ~~~

The first thing we will do is remove all the information that is not required and then add some custom CSS, see our example below:

~~~ .css
/*
Theme Name: Base Theme
Theme URI: http://www.pagelines.com/
Description: A starter child theme for PageLines.  Use this as a reference for building your own child themes for PageLines Store.
Version: 1.0.2
Author: PageLines
Author URI: http://www.pagelines.com
Tags: developer

Template: pagelines

*/

body {
  background-color:#0088DD;
  color: #555;
  font-size: 22px;
}

.example {
  color: #FFFFFF;
  font-size: 16px;
  padding: 40px;
}
 ~~~

Once you have added your custom CSS, save the file and if your FTP client is configured correctly, it should upload the file, replacing the old style.css. Refresh your website and the changes should have taken effect.




## Renaming the Base child theme ##

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


