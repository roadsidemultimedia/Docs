<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/support-troubleshooting">Support & Troubleshooting</a> <span class="divider">/</span></li>
  			<li class="active">Parse Error</li>
		</ul>
	</div>
</div>

# Parse Error #

The reason why this error shows up is because you have one or more errors in your custom CSS/LESS CSS.

The error will look similar to this:

<pre>
"PageLines Custom LESS/CSS error.
parse error: failed at `padding: 10px ` line: X"
</pre>

To resolve this error, you're going to need to review your custom CSS, LESS CSS for any errors such as a missing `{ `, `}`, `;` or even spelling mistakes in your CSS properties.

We have provided a basic example below, this minor error can trigger a Parse Error.

~~~ .css
.example {
	font-size: 14px
	padding: 20px 0;
	margin: 15px 0;
}
~~~

As you can see above, the `font-size: 14px` has no semi-colon `;` that is required to separate each decalaration. To resolve this example issue, simply locate the CSS in your custom code and add the semi-colon, save the changes and refresh, the parse error should now be resolved.

You can check to see if your code is valid by using the following [tool](http://jigsaw.w3.org/css-validator/#validate_by_input). Please be aware, this validator is for CSS and is not compatible with LESS CSS.

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/support-troubleshooting/white-screen-of-death">&larr; White Screen of Death</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/support-troubleshooting/internal-server-error">Internal Server Error &rarr;</a></li>
		</ul>
	</div>
</div>