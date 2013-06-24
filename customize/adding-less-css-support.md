<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/customize/override-default-css">&larr; Override Default CSS</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/customize/adding-custom-rtl-support">Adding Custom RTL Support &rarr;</i></a></li>
		</ul>
	</div>
</div>

# Adding LESS Support #

In order to take advantage of LESS CSS in the Base Theme or PageLines Customize Plugin, a `style.less` file is required. By default, neither the Base Theme or PageLines Customize Plugin, includes the `style.less` file, we prefer to have users create the file, as not all PageLines users will wish to use LESS CSS in their designs.

## Creating  style.less ##

Open your code editor (we recommend [Sublime Text 2](http://www.sublimetext.com/2)), and create a new file. For the time being leave the file blank, and click save, naming the file **style.less**.

Now open your FTP client and upload the file to the following directory:

### Using the PageLines Customize Plugin:

**wp-content &rarr; plugins &rarr; pagelines-customize**.

Once uploaded, your file structure for the PageLines Customize Plugin will look like this:

<pre>
<i class="icon-folder-open"></i> pagelines-customize/
	<i class="icon-file"></i> functions.php
	<i class="icon-file"></i> pagelines-customize.php
	<i class="icon-file"></i> style.css
	<i class="icon-file"></i> <strong>style.less</strong>
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
	<i class="icon-file"></i> screenshot.png
	<i class="icon-file"></i> setup.php
	<i class="icon-file"></i> style.css
	<i class="icon-file"></i> <strong>style.less</strong>
	<i class="icon-file"></i> thumb.png
</pre>

Once the upload, has been completed, you will have successfully created the **style.less** file and are ready to start adding your custom LESS CSS .

For a basic introduction to LESS, see our [LESS CSS](http://docs.pagelines.com/advanced/less-css) tutorial, for full documentation visit the [LESS CSS](http://lesscss.org/) homepage.

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/customize/override-default-css">&larr; Override Default CSS</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/customize/adding-custom-rtl-support">Adding Custom RTL Support &rarr;</i></a></li>
		</ul>
	</div>
</div>