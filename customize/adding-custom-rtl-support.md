# Adding Custom RTL Support #

PageLines is built to recognize RTL and changes the styles accordingly. However, there may come a time where you wish to customize PageLines RTL styling, this can be achieved by using either the **Base Theme** or **PageLines Customize Plugin** and creating a `rtl.css` file.

By default, neither the Base Theme or PageLines Customize Plugin, includes the `rtl.css` file, we prefer to have users create the file, as not all PageLines users will wish to use custom RTL in their designs.

## Creating  rtl.css ##

Open your code editor (we recommend [Sublime Text 2](http://www.sublimetext.com/2)), and create a new file. For the time being leave the file blank, and click save, naming the file **rtl.css**.

Now open your FTP client and upload the file to the following directory:

### Using the PageLines Customize Plugin:

**wp-content &rarr; plugins &rarr; pagelines-customize**.

Once uploaded, your file structure for the PageLines Customize Plugin will look like this:

<pre>
<i class="icon-folder-open"></i> pagelines-customize/
	<i class="icon-file"></i> functions.php
	<i class="icon-file"></i> pagelines-customize.php
	<i class="icon-file"></i> <strong>rtl.css</strong>
	<i class="icon-file"></i> style.css
	<i class="icon-file"></i> thumb.png
</pre>

### Using the Base Theme:

**wp-content &rarr; themes &rarr; pagelines-template-theme**.

Once uploaded, your file structure for the Base Theme will look like this:

<pre>
<i class="icon-folder-open"></i> pagelines-template-theme/
	<i class="icon-folder-open"></i> sections/
	<i class="icon-file"></i> functions.php
	<i class="icon-file"></i> info.txt
	<i class="icon-file"></i> page.example.php
	<i class="icon-file"></i> <strong>rtl.css</strong>
	<i class="icon-file"></i> screenshot.png
	<i class="icon-file"></i> setup.php
	<i class="icon-file"></i> style.css
	<i class="icon-file"></i> thumb.png
</pre>

Once uploaded, you will have successfully created the custom **rtl.css** file and ready to start customizing your RTL style.

