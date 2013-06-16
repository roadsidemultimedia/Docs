# Using the Base Child theme #

The PageLines Base theme, is a free child theme available from the PageLines Store which will never receive an update, as its been designed as a base for you to create your very own child themes, as well customizing PageLines DMS.

A child theme is a theme that inherits the functionality of another theme, called the parent theme, and allows you to modify, or add to, the functionality of that parent theme, without the need to modify core files. Because of this, the Base child theme is considered the most professional method for customizations and here are a few reasons why:

* Supports custom CSS via the `style.css` file
* Supports hooks via the `functions.php` file
* Supports LESS with the creation of a `style.less` file (see Creating a style.less file below)
* Supports the creation of a `language` folder for translations.
* Supports a custom `rtl.css` file.
* Supports custom/child sections

## Structure ##

The PageLines Base child theme folder when in [installed](/configure/installing-store-products), can be located in the following directory **wp-content &rarr; themes** and is called `pagelines-template-theme`, containing the following folder and files.

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

As you may have noticed in the above table, there isn't any `style.less` file. In order to use custom LESS in your child theme, you will first need to create a `style.less` file.

## Creating a style.less file ##

You can create the `style.less` file using your favourite text editor (we recommend [Sublime Text 2](http://www.sublimetext.com/2)). The file can remain blank for the time being, all that is required is that the file is named **style.less**. Once created you're free to start adding your custom CSS/LESS.

We have provided an example `style.less` file, all you need to do is download using the link below, extract the file and upload using your favourite FTP client, to your base child theme folder **wp-content &rarr; themes &rarr; child theme folder** (by default is named **pagelines-template-theme** ).

<div class="center">
  <a href="https://dl.dropbox.com/s/zlu6s081lljcrr7/style.less.zip?dl=1" class="btn btn-large btn-primary"><i class="icon-download-alt"></i> Sample style.less</a>
</div>





