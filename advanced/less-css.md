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

## DMS Variables ##

These are the variables which are part of PageLines DMS core.

### Responsive ###

<div class="row-fluid zmb">
	<div class="span12 zmb">
		<table class="table mid table-bordered table-striped table-condensed">
			<tbody>
				<tr>
					<td><code>@resLargeDesktop</code></td>
					<td>1200px</td>
				</tr>
				<tr>
					<td><code>@resDesktop</code></td>
					<td>979px</td>
				</tr>
				<tr>
					<td><code>@resPortraitTablet</code></td>
					<td>767px</td>
				</tr>
				<tr>
					<td><code>@resPhoneLandscape</code></td>
					<td>480px</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

### Color Variables ###

<div class="row-fluid zmb">
	<div class="span12 zmb">
		<table class="table mid table-bordered table-striped table-condensed">
			<thead>
				<tr>
					<th>Greys</th>
					<th>Color</th>
					<th>Swatch</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="span4"><code>@black</code></td>
					<td>#000</td>
					<td class="swatch-col"><span class="swatch" style="background-color: #000"></span></td>
				</tr>
				<tr>
					<td><code>@grayDarker</code></td>
					<td>#222</td>
					<td><span class="swatch" style="background-color: #222"></span></td>
				</tr>
				<tr>
					<td><code>@grayDark</code></td>
					<td>#333</td>
					<td><span class="swatch" style="background-color: #333"></span></td>
				</tr>
				<tr>
					<td><code>@gray</code></td>
					<td>#555</td>
					<td><span class="swatch" style="background-color: #555"></span></td>
				</tr>
				<tr>
					<td><code>@grayLight</code></td>
					<td>#999</td>
					<td><span class="swatch" style="background-color: #999"></span></td>
				</tr>
				<tr>
					<td><code>@grayLighter</code></td>
					<td>#eee</td>
					<td><span class="swatch" style="background-color: #eee"></span></td>
				</tr>
				<tr style="height:30px">
					<td>Accent</td>
					<td>Color</td>
					<td>Preview</td>
				</tr>
				<tr>
					<td><code>@white</code></td>
					<td>#fff</td>
					<td><span class="swatch swatch-bordered" style="background-color: #fff"></span></td>
				</tr>
				<tr>
					<td class="span4"><code>@blue</code></td>
					<td>#049cdb</td>
					<td class="swatch-col"><span class="swatch" style="background-color: #049cdb"></span></td>
				</tr>
				<tr>
					<td><code>@green</code></td>
					<td>#46a546</td>
					<td><span class="swatch" style="background-color: #46a546"></span></td>
				</tr>
				<tr>
					<td><code>@red</code></td>
					<td>#9d261d</td>
					<td><span class="swatch" style="background-color: #9d261d"></span></td>
				</tr>
				<tr>
					<td><code>@yellow</code></td>
					<td>#ffc40d</td>
					<td><span class="swatch" style="background-color: #ffc40d"></span></td>
				</tr>
				<tr>
					<td><code>@orange</code></td>
					<td>#f89406</td>
					<td><span class="swatch" style="background-color: #f89406"></span></td>
				</tr>
				<tr>
					<td><code>@pink</code></td>
					<td>#c3325f</td>
					<td><span class="swatch" style="background-color: #c3325f"></span></td>
				</tr>
				<tr>
					<td><code>@purple</code></td>
					<td>#7a43b6</td>
					<td><span class="swatch" style="background-color: #7a43b6"></span></td>
				</tr>
				<tr style="height:30px">
					<td>Buttons</td>
					<td>Color</td>
					<td>Preview</td>
				</tr>
				<tr>
					<td class="span4"><code>@btnBackground</code></td>
					<td><code>@white</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #fff"></span></td>
				</tr>
				<tr>
					<td><code>@btnBackgroundHighlight</code></td>
					<td><code>darken(@white, 10%)</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #e6e6e6"></span></td>
				</tr>
				<tr>
					<td><code>@btnBorder</code></td>
					<td><code>darken(@white, 20%)</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #ccc"></span></td>
				</tr>
				<tr>
					<td><code>@btnPrimaryBackground</code></td>
					<td><code>@linkColor</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #08c"></span></td>
				</tr>
				<tr>
					<td><code>@btnPrimaryBackgroundHighlight</code></td>
					<td><code>spin(@btnPrimaryBackground, 15%)</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #05c"></span></td>
				</tr>
				<tr>
					<td><code>@btnInfoBackground</code></td>
					<td><code>#5bc0de</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #5bc0de"></span></td>
				</tr>
				<tr>
					<td><code>@btnInfoBackgroundHighlight</code></td>
					<td><code>#2f96b4</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #2f96b4"></span></td>
				</tr>
				<tr>
					<td><code>@btnSuccessBackground</code></td>
					<td><code>#62c462</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #62c462"></span></td>
				</tr>
				<tr>
					<td><code>@btnSuccessBackgroundHighlight</code></td>
					<td><code>#51a351</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #51a351"></span></td>
				</tr>
				<tr>
					<td><code>@btnWarningBackground</code></td>
					<td><code>lighten(@orange, 15%)</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #fbb450"></span></td>
				</tr>
				<tr>
					<td><code>@btnWarningBackgroundHighlight</code></td>
					<td><code>@orange</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #f89406"></span></td>
				</tr>
				<tr>
					<td><code>@btnImportantBackground</code></td>
					<td><code>#ee5f5b</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #ee5f5b"></span></td>
				</tr>
				<tr>
					<td><code>@btnImportantBackgroundHighlight</code></td>
					<td><code>#bd362f</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #bd362f"></span></td>
				</tr>
				<tr>
					<td><code>@btnInverseBackground</code></td>
					<td><code>@gray</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #555"></span></td>
				</tr>
				<tr>
					<td><code>@btnInverseBackgroundHighlight</code></td>
					<td><code>@grayDarker</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #222"></span></td>
				</tr>
				<tr style="height:30px">
					<td>Form States/Alerts</td>
					<td>Color</td>
					<td>Preview</td>
				</tr>
				<tr>
					<td class="span4"><code>@warningText</code></td>
					<td><code>#c09853</code></td>
					<td><span class="swatch" style="background-color: #c09853"></span></td>
				</tr>
				<tr>
					<td><code>@warningBackground</code></td>
					<td><code>#f3edd2</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #f3edd2"></span></td>
				</tr>
				<tr>
					<td><code>@errorText</code></td>
					<td><code>#b94a48</code></td>
					<td><span class="swatch" style="background-color: #b94a48"></span></td>
				</tr>
				<tr>
					<td><code>@errorBackground</code></td>
					<td><code>#f2dede</code></td>
					<td><span class="swatch" style="background-color: #f2dede"></span></td>
				</tr>
				<tr>
					<td><code>@successText</code></td>
					<td><code>#468847</code></td>
					<td><span class="swatch" style="background-color: #468847"></span></td>
				</tr>
				<tr>
					<td><code>@successBackground</code></td>
					<td><code>#dff0d8</code></td>
					<td><span class="swatch" style="background-color: #dff0d8"></span></td>
				</tr>
				<tr>
					<td><code>@infoText</code></td>
					<td><code>#3a87ad</code></td>
					<td><span class="swatch" style="background-color: #3a87ad"></span></td>
				</tr>
				<tr>
					<td><code>@infoBackground</code></td>
					<td><code>#d9edf7</code></td>
					<td><span class="swatch" style="background-color: #d9edf7"></span></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/advanced/hooks">&larr; Hooks</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/advanced/override-sections">Override Sections &rarr;</i></a></li>
		</ul>
	</div>
</div>