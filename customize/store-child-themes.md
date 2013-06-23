<div class="row-fluid">
  <div class="span12">
    <ul class="pager">
      <li class="pull-left"><a href="http://docs.pagelines.com/customize/base-child-theme"><i class="icon-arrow-left"></i> The Base Child Theme</a></li>
        <li class="pull-right"><a href="http://docs.pagelines.com/customize/overriding-default-css">Overriding Default CSS <i class="icon-arrow-right"></i></a></li>
    </ul>
  </div>
</div>

# Store Child theme #

Store Child themes are child themes designed by third-party developers which may be subject to updates by their developers, placing customizations within the theme files are at risk of being overwritten.

Therefore, when customizing a child theme purchased from the [PageLines Store](/getting-started/pagelines-store), such as iBlogPro5 or any third-party theme, it is best to use the PageLines Customize plugin (free in the Store) for any CSS/LESS changes, or additional hooks you may wish to add.

Using the Customize plugin eliminates any risk of loss due to updates.

## Structure ##

Although Store child themes contain all files and folders included in the Base Theme. They may contain additional files and folders which provide features or functionality specific to that theme.

Like the Base Theme, all store child themes when [installed](/configure/installing-store-products), can be located in the following directory **wp-content &rarr; themes** .

## Adding Customization ##

### CSS ###

There are two principal methods for adding custom CSS to the PageLines Customize Plugin, these are: the `style.css` file and the `style.less` file. Each method applies to individual levels of skill -- based on your comfort level and proficiency, which we'll go through below.

<table class="table table-striped table-bordered">
  <thead>
    <tr>
      <th>Stylesheet</th>
      <th>Supports CSS</th>
      <th>Supports LESS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>style.css</strong></td>
      <td><i class="icon-ok text-success"></i></td>
      <td><i class="icon-remove text-error"></i></td>
    </tr>
    <tr>
      <td><strong>style.less</strong></td>
      <td><i class="icon-ok text-success"></i></td>
      <td><i class="icon-ok text-success"></i></td>
    </tr>
  </tbody>
</table>

As you can see from the table above, the `style.css` file only supports standard CSS and not Less. However, the `style.less` file supports both, if you do plan to utilize LESS into your design, we recommend consolidating all your CSS into the `style.less` file, for easier management of your code.

#### style.css ####

To add custom CSS to the style.css file, we recommend **not** using the WordPress Editor, but instead use your FTP client which should be configured to work with your code editor when opening `.css`, `.html`, .`php` files.

When you open the style.css file in your code editor, you see the following:

~~~ .css
/* ============================== */
/* = HOW TO CUSTOMIZE PAGELINES = */
/* ============================== */

/*

Rules placed in this stylesheet will override the default styles of the Base Platform theme and will not be changed or over written when you update the 
Platform framework. Additionally, since this stylesheet is purely for editing purposes you can easily undo or erase some of the CSS to return your site back to the look and feel of the Base theme.

In the Base theme the footer is black and the CSS looks like this:

  #footer {
    clear:both;
    font-size:1em;
    overflow:hidden;
    text-align: left;
    background: #000;
    color: #999;
    position: relative;
  }

To change the background color to white, all you have to do is declare a new rule for the color like so:

    #footer { background: #FFF; }

A great tool for modifying themes and inspecting CSS elements is the FireBug extension for FireFox. You can also use the developer tools provided by Chrome (right-click and "inspect element") or Internet Explorer if you're feeling dangerous.

LEARN CSS - We recommend using Lynda.com video tutorials to learn using CSS.
      Also, for a comprehensive list of CSS rules and usage try consulting W3 schools @ http://www.w3schools.com/css/default.asp
*/
/* ============================== */
/* = Start Your Custom CSS Here = */
/* ============================== */
~~~

The information you see above isn't required and can be removed if you like. Once your custom CSS has been added, save the file and if your FTP client is configured correctly, it should upload the file to your server, replacing the older style.css. Refresh your website and your changes should have taken effect.

#### style.less ####

In order to use the style.less method, you will first need to create a **style.less** file, see our [Adding LESS Support](/customize/adding-less-css-support)  page on how to do this. Once the `style.less` file has been created you're now able to add both CSS and LESS CSS to the Base Theme.

For more information about LESS CSS , see our [LESS CSS](/advanced/less-css) documentation which also includes some examples.

### PHP ###

#### functions.php ####

The functions.php file allows you to add/manipulate functionality to PageLines DMS. You can use it to call functions and to define your own customized actions. The code is only executed when the PageLines Customized Plugin is activated, if the plugin is deactivated, the functionality will not carry over. The `functions.php` file supports numerous blocks of code to be used for many different purposes.

For more information about hooks, see our [Hooks](/advanced/hooks) documentation which also includes some examples.
