<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/advanced/hooks">&larr; Hooks</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/advanced/override-sections">Override Sections &rarr;</i></a></li>
		</ul>
	</div>
</div>

# LESS #

LESS is a dynamic stylesheet language that extends CSS with dynamic behavior such as variables, mixins, operations and functions. LESS reduces the overall time to create and maintain your code base, while also keeping your code clean and optimized.

## Variables ##

Variables allow you to specify widely used values in a single place, and then re-use them throughout the style sheet, making global changes as easy as changing one line of code. An example is shown below:

~~~ .css
//LESS
@myBlue:              #08D;

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
    	p { font-size: 12px;
		a { text-decoration: none;
			&:hover { border-width: 1px }
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

## Functions & Operations

Functions & Operations provides the ability to use mathematical operations in your CSS values,  as well as manipulate values through functions.

~~~ .css
// LESS
@the-border: 		1px;
@base-color: 		#111;
@red:				#842210;

#header {
	color: (@base-color * 3);
	border-left: @the-border;
	border-right: (@the-border * 2);
}
#footer {
	color: (@base-color + #003300);
	border-color: desaturate(@red, 10%);
}
~~~

~~~ .css
/* Compiled CSS */

#header {
	color: #333;
	border-left: 1px;
	border-right: 2px;
}
#footer {
	color: #114411;
	border-color: #7d2717;
}
~~~

The above examples introduce you to the basics of LESS. For a more detailed overview, please visit the [http://lesscss.org/](http://lesscss.org/)

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/advanced/hooks">&larr; Hooks</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/advanced/overriding-sections">Overriding Sections &rarr;</i></a></li>
		</ul>
	</div>
</div>