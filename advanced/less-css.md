<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/advanced/hooks">&larr; Hooks</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/advanced/overriding-sections">Overriding Sections &rarr;</i></a></li>
		</ul>
	</div>
</div>

# LESS #

LESS is a dynamic stylesheet language that extends CSS with dynamic behavior such as variables, mixins, operations and functions. LESS reduces the overall time to create and maintain your code base, while also keeping your code clean and optimized.

For more information, pleae visit the [http://lesscss.org/](http://lesscss.org/)

## Variables ##

Variables allow you to specify widely used values in a single place, and then re-use them throughout the style sheet, making global changes as easy as changing one line of code. An example is shown below:

~~~ .css
//LESS
@myBlue:              #08D;
...
h1, h2, h3, h4, h5, h6 {
	color: @myBlue;
}
a:hover {
	color: @myBlue;
}
~~~

~~~ .css
/* Compiled CSS */
h1, h2, h3, h4, h5, h6 {
	color: #08D;
}
a:hover {
	color: #08D;
}
~~~

## Mixins ##

Mixins allow you to embed all the properties of a class into another class by simply including the class name as one of its properties. It’s just like variables, but for whole classes. Mixins can also behave like functions, and take arguments, as seen in the example below.

~~~ .css
// LESS
.rounded-corners (@radius: 5px) {
	-webkit-border-radius: @radius;
	-moz-border-radius: @radius;
	-ms-border-radius: @radius;
	-o-border-radius: @radius;
	border-radius: @radius;
}

#header {
	.rounded-corners;
}
#footer {
	.rounded-corners(10px);
}
~~~

~~~ .css
/* Compiled CSS */
#header {
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	-ms-border-radius: 5px;
	-o-border-radius: 5px;
	border-radius: 5px;
}
#footer {
	-webkit-border-radius: 10px;
	-moz-border-radius: 10px;
	-ms-border-radius: 10px;
	-o-border-radius: 10px;
	border-radius: 10px;
}
~~~

## Nested Rules

Rather than constructing long selector names to specify inheritance, in Less you can simply nest selectors inside other selectors. This makes inheritance clear and style sheets shorter.

~~~ .css
// LESS
#header {
	h1 {
		font-size: 26px;
		font-weight: bold;
    	}
    	p {
		font-size: 12px;
    	a {
    		text-decoration: none;
      &:hover {
      	border-width: 1px
      }
    }
  }
}
~~~

~~~ .css
/* Compiled CSS */
#header h1 {
	font-size: 26px;
	font-weight: bold;
}
#header p {
	font-size: 12px;
}
#header p a {
	text-decoration: none;
}
#header p a:hover {
	border-width: 1px;
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