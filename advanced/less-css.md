<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/advanced/hooks">&larr; Hooks</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/advanced/overriding-sections">Overriding Sections &rarr;</i></a></li>
		</ul>
	</div>
</div>

# LESS #

LESS is a dynamic stylesheet language that extends CSS with dynamic behavior such as variables, mixins, operations and functions. LESS reduces the overtime to create and maintain your code base, while also keeping your code clean and optimized.

## Variables ##

Variables allow you to specify widely used values in a single place, and then re-use them throughout the style sheet, making global changes as easy as changing one line of code. An example from PageLines DMS is below:

~~~ .less
//LESS
@grayDark:              #333;
...
h1, h2, h3, h4, h5, h6 {
	color: @grayDark;
}
a:hover {
	color: @grayDark;
}
~~~

~~~ .less
/* Compiled CSS */

h1, h2, h3, h4, h5, h6 {
	color: #333;
}
a:hover {
	color: #333;
}
~~~



<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/advanced/hooks">&larr; Hooks</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/advanced/overriding-sections">Overriding Sections &rarr;</i></a></li>
		</ul>
	</div>
</div>