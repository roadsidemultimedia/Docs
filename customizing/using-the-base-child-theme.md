# Using the Base Child theme #

The PageLines Base theme, is a free child theme available from the PageLines Store which will never receive an update, as its been designed as a base for you to create your very own child themes, as well customizing PageLines DMS.

A child theme is a theme that inherits the functionality of another theme, called the parent theme, and allows you to modify, or add to, the functionality of that parent theme, without the need to modify core files. Because of this, the Base child theme is considered the most professional method for customizing, as it supports custom CSS/LESS, scripts, hooks, translations and custom/child sections.

## Structure ##

A typical PageLines child theme will have the following structure.

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
      <td>Bundle sections with your theme in this folder, each section in a seperate folder.</td>
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
      <td>Loads the parent theme. Don't tamper with this.</td>
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


