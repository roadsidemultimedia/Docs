<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/customize/base-child-theme">&larr; The Base Child Theme</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/customize/adding-less-css-support">Adding LESS CSS Support &rarr;</i></a></li>
		</ul>
	</div>
</div>

# Override Default CSS #

When adding custom CSS to your website, depending on your customization method your custom CSS/LESS may require using an ID to preface your rules. There are two main ID’s that you can use to guarantee your custom rules will work correctly, these overrides are `#site` & `#page`.

The reason that you’re required to do this, is because of the way heirarchy works in CSS and especially in LESS. We are using a new convention, specifically that inside the core and extensions we do not use ID based selectors… e.g. `#page`

These are reserved for **"user"** customizations, because a single ID in a CSS selector can over power a long chain of class based selectors.

**ID**
~~~ .css
#page .section {
	background-color: #FFF;
}
~~~

**Class(es)**
~~~ .css
.selector .another-selector .section {
	background-color: #FFF;
}
~~~

## Example ##

In the example below, we will override the default font size and color for the Masthead section header and tagline text.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/override-default-masthead.jpg)

Using Google Chrome's web dev tools to inspect the Masthead section, we can indentify the correct class(es), needed to override the sections default CSS.

~~~ .css
/* Masthead Title */
.masthead .masthead-title {
	margin-bottom: 9px;
	font-size: 81px;
	letter-spacing: -1px;
	line-height: 1;
	margin-bottom: 18px;
}

/* Masthead tagline */
.masthead .masthead-tag {
	margin: 0;
	margin-bottom: 18px;
	margin-left: 5%;
	margin-right: 5%;
	font-size: 25px;
	line-height: 1.3em;
	opacity: .7;
	font-weight: 300;
}
~~~

Using the `#page` override ID, we can easily change the font size and color for both the header and tagline. 

~~~ .css
/* Masthead Title */
#page .masthead .masthead-title {
	font-size: 62px;
	color: #08D;
}

/* Masthead tagline */
#page .masthead .masthead-tag {
	font-size: 18px;
	color: #08D;
}
~~~

We can now add these changes to your preferred customization method, the style changes can be seen below.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/override-custom-masthead.jpg)

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/customize/base-child-theme">&larr; The Base Child Theme</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/customize/adding-less-css-support">Adding LESS CSS Support &rarr;</i></a></li>
		</ul>
	</div>
</div>

