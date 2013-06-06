# Shortcodes #

## Buttons ##

<div class="row-fluid">
	<div class="span3">
		<a href="#fakelink" class="btn btn-large btn-default">Defalt Button</a>
	</div>
	<div class="span3">
		<a href="#fakelink" class="btn btn-large btn-primary">Primary Button</a>
	</div>
	<div class="span3">
		<a href="#fakelink" class="btn btn-large btn-success">Success Button</a>
	</div>
	<div class="span3">
		<a href="#fakelink" class="btn btn-large btn-danger">Important Button</a>
	</div>
</div>
<p></p>
<div class="row-fluid">
	<div class="span4">
		<a href="#fakelink" class="btn btn-large btn-info">Info Button</a>
	</div>
	<div class="span4">
		<a href="#fakelink" class="btn btn-large btn-warning">Warning Button</a>
	</div>
	<div class="span4">
		<a href="#fakelink" class="btn btn-large btn-inverse">Inverse Button</a>
	</div>
</div>
<p></p>
There are 7 different color schemes to choose from, as well 3 sizes; mini, default and large.
<p></p>
<div class="row-fluid">
	<div class="span12">
		<table class="table mid table-bordered table-striped table-condensed">
			<tbody>
				<tr>
					<th>Attribute</th>
					<th>Description</th>
				</tr>
				<tr>
					<td><code>type=""</code></td>
					<td>Controls color</td>
				</tr>
				<tr>
					<td><code>size=""</code></td>
					<td>Determines size. Includes mini, and large</td>
				</tr>
				<tr>
					<td class="span2"><code>link=""</code></td>
					<td>Button link</td>
				</tr>
				<tr>
					<td><code>target="blank"</code></td>
					<td>Opens link in new window</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

### Standard Buttons ###

<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th>Button</th><th>Description</th>
			<th>Shortcode</th>
		</tr>
    </thead>
	<tbody>
		<tr>
			<td><button type="button" class="btn">Default</button></td>
			<td>Standard gray button with gradient</td>
			<td><code>[pl_button type="btn" link="" target="blank"]Default[/pl_button]</code></td>
		</tr>
		<tr>
			<td><button type="button" class="btn btn-primary">Primary</button></td>
			<td>Provides extra visual weight and identifies the primary action in a set of buttons</td>
			<td><code>[pl_button type="primary" link="" target="blank"]Primary[/pl_button]</code></td>
		</tr>
		<tr>
			<td><button type="button" class="btn btn-info">Info</button></td>
			<td>Used as an alternative to the default styles</td>
			<td><code>[pl_button type="info" link="" target="blank"]Info[/pl_button]</code></td>
		</tr>
		<tr>
			<td><button type="button" class="btn btn-success">Success</button></td>
			<td>Indicates a successful or positive action</td>
			<td><code>[pl_button type="success" link="" target="blank"]Success[/pl_button]</code></td>
		</tr>
		<tr>
			<td><button type="button" class="btn btn-warning">Warning</button></td>
			<td>Indicates caution should be taken with this action</td>
			<td><code>[pl_button type="warning" link="" target="blank"]Warning[/pl_button]</code></td>
		</tr>
		<tr>
			<td><button type="button" class="btn btn-danger">Important</button></td>
			<td>Indicates a dangerous or potentially negative action</td>
			<td><code>[pl_button type="important" link="" target="blank"]Important[/pl_button]</code></td>
		</tr>
		<tr>
			<td><button type="button" class="btn btn-inverse">Inverse</button></td>
			<td>Alternate dark gray button, not tied to a semantic action or use</td>
			<td><code>[pl_button type="inverse" link="" target="blank"]Inverse[/pl_button]</code></td>
		</tr>
	</tbody>
</table>

### Dropdown Buttons ###

The Dropdown button shortcode supports both `size=""` for button size and `type=""` for color control like the Standard Button shortcode.

<div class="row">
	<div class="span3">
		<div class="btn-group"><button class="btn btn-large btn-important dropdown-toggle" data-toggle="dropdown" href="#">button <span class="caret"></span></button>
			<ul class="dropdown-menu">
				<ul>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
				</ul>
			</ul>
		</div>
	</div>
	<div class="span3">
		<div class="btn-group"><button class="btn btn-large btn-primary dropdown-toggle" data-toggle="dropdown" href="#">button <span class="caret"></span></button>
			<ul class="dropdown-menu">
				<ul>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
				</ul>
			</ul>
		</div>
	</div>
	<div class="span3">
		<div class="btn-group"><button class="btn btn-large btn-success dropdown-toggle" data-toggle="dropdown" href="#">button <span class="caret"></span></button>
			<ul class="dropdown-menu">
				<ul>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
				</ul>
			</ul>
		</div>
	</div>
	<div class="span3">
		<div class="btn-group"><button class="btn btn-large btn-warning dropdown-toggle" data-toggle="dropdown" href="#">button <span class="caret"></span></button>
			<ul class="dropdown-menu">
				<ul>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
				</ul>
			</ul>
		</div>
	</div>
</div>

<table class="table mid table-bordered table-striped table-condensed">
	<tbody>
		<tr>
			<td class="span2 center"><code>size=""</code></td>
			<td>Determines size. Includes mini, and large</td>
		</tr>
		<tr>
			<td class="center"><code>type=""</code></td>
			<td>Controls color</td>
		</tr>
		<tr>
			<td class="center"><code>label=""</code></td>
			<td>Button label</td>
		</tr>
	</tbody>
</table>

~~~ .html
[pl_buttondropdown size="large"
type="info" label="button"]
<ul>
  <li><a href="#">This</a></li>
  <li><a href="#">This</a></li>
  <li><a href="#">This</a></li>
</ul>
[/pl_buttondropdown]
~~~

### Split Button Dropdown ###

<div class="row">
	<div class="span3">
		<div class="btn-group"><a class="btn btn-large btn-important">button</a><a class="btn btn-large btn-important dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
			<ul class="dropdown-menu">
				<ul>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
				</ul>
			</ul>
		</div>
	</div>
	<div class="span3">
		<div class="btn-group"><a class="btn btn-large btn-primary">button</a><a class="btn btn-large btn-primary dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
			<ul class="dropdown-menu">
				<ul>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
				</ul>
			</ul>
		</div>
	</div>
	<div class="span3">
		<div class="btn-group"><a class="btn btn-large btn-success">button</a><a class="btn btn-large btn-success dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
			<ul class="dropdown-menu">
				<ul>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
				</ul>
			</ul>
		</div>
	</div>
	<div class="span3">
		<div class="btn-group"><a class="btn btn-large btn-warning">button</a><a class="btn btn-large btn-warning dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
			<ul class="dropdown-menu">
				<ul>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
				</ul>
			</ul>
		</div>
	</div>
</div>

<table class="table mid table-bordered table-striped table-condensed">
	<tbody>
		<tr>
			<td class="span2 center"><code>size=""</code></td>
			<td>Determines size. Includes mini, and large</td>
		</tr>
		<tr>
			<td class="center"><code>type=""</code></td>
			<td>Controls color</td>
		</tr>
		<tr>
			<td class="center"><code>label=""</code></td>
			<td>Button label</td>
		</tr>
	</tbody>
</table>

~~~ .html
[pl_splitbuttondropdown size="large"
type="success" label="button"]
<ul>
	<li><a href="#">This</a></li>
	<li><a href="#">This</a></li>
	<li><a href="#">This</a></li>
</ul>
[/pl_splitbuttondropdown]
~~~

### Button Groups ###

<div class="row">
	<div class="span3">
		<div class="btn-group">
			<a class="btn btn-important" href="#">Link</a>
			<a class="btn btn-important" href="#">Link</a>
			<a class="btn btn-important" href="#">Link</a>
		</div>
	</div>
	<div class="span3">
		<div class="btn-group">
			<a class="btn btn-primary" href="#">Link</a>
			<a class="btn btn-primary" href="#">Link</a>
			<a class="btn btn-primary" href="#">Link</a>
		</div>
	</div>
<div class="span3">
<div class="btn-group">
			<a class="btn btn-success" href="#">Link</a>
			<a class="btn btn-success" href="#">Link</a>
			<a class="btn btn-success" href="#">Link</a>
		</div>
	</div>
<div class="span3">
<div class="btn-group">
			<a class="btn btn-warning" href="#">Link</a>
			<a class="btn btn-warning" href="#">Link</a>
			<a class="btn btn-warning" href="#">Link</a>
		</div>
	</div>
</div>

~~~ .html
[pl_buttongroup]
	<a class="btn btn-important" href="#">Link</a>
	<a class="btn btn-important" href="#">Link</a>
	<a class="btn btn-important" href="#">Link</a>
[/pl_buttongroup]
~~~

**Note:** You can specify the same attrbutes as the button above, but placed into the markup instead of the shortcode.

## Labels & Badges ##

### Labels ###

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Label</th>
			<th>Usage</th>
			<th>Notes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="center span3"><span class="label label-default">Default</span></td>
			<td><pre class=" prettyprint lang-html linenums"><ol class="linenums"><li class="L0"><ol class="linenums"><li class="L0"><span class="sc_code"><span class="pln"><span class="pln">[pl_label type="default"]</span></span></span><span class="pln"><span class="pln">Default</span></span><span class="sc_code"><span class="pln"><span class="pln">[/pl_label]</span></span></span></li></ol></li></ol></pre></td>
			<td class="span3">Available attributes include default, success, warning, important, info, and inverse</td>
		</tr>
		<tr>
			<td class="center"><span class="label label-success">Success</span></td>
			<td><pre class=" prettyprint lang-html linenums"><ol class="linenums"><li class="L0"><ol class="linenums"><li class="L0"><span class="sc_code"><span class="pln"><span class="pln">[pl_label type="success"]</span></span></span><span class="pln"><span class="pln">Success</span></span><span class="sc_code"><span class="pln"><span class="pln">[/pl_label]</span></span></span></li></ol></li></ol></pre></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="label label-warning">Warning</span></td>
			<td><pre class=" prettyprint lang-html linenums"><ol class="linenums"><li class="L0"><ol class="linenums"><li class="L0"><span class="sc_code"><span class="pln"><span class="pln">[pl_label type="warning"]</span></span></span><span class="pln"><span class="pln">Warning</span></span><span class="sc_code"><span class="pln"><span class="pln">[/pl_label]</span></span></span></li></ol></li></ol></pre></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="label label-important">Important</span></td>
			<td><pre class=" prettyprint lang-html linenums"><ol class="linenums"><li class="L0"><ol class="linenums"><li class="L0"><span class="sc_code"><span class="pln"><span class="pln">[pl_label type="important"]</span></span></span><span class="pln"><span class="pln">Important</span></span><span class="sc_code"><span class="pln"><span class="pln">[/pl_label]</span></span></span></li></ol></li></ol></pre></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="label label-info">Info</span></td>
			<td><pre class=" prettyprint lang-html linenums"><ol class="linenums"><li class="L0"><ol class="linenums"><li class="L0"><span class="sc_code"><span class="pln"><span class="pln">[pl_label type="info"]</span></span></span><span class="pln"><span class="pln">Info</span></span><span class="sc_code"><span class="pln"><span class="pln">[/pl_label]</span></span></span></li></ol></li></ol></pre></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="label label-inverse">Inverse</span></td>
			<td><pre class=" prettyprint lang-html linenums"><ol class="linenums"><li class="L0"><ol class="linenums"><li class="L0"><span class="sc_code"><span class="pln"><span class="pln">[pl_label type="inverse"]</span></span></span><span class="pln"><span class="pln">Inverse</span></span><span class="sc_code"><span class="pln"><span class="pln">[/pl_label]</span></span></span></li></ol></li></ol></pre></td>
			<td></td>
		</tr>
	</tbody>
</table>

### Badges ###

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Badge</th>
			<th>Usage</th>
			<th>Notes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="center span3"><span class="badge badge-default">Default</span></td>
			<td><pre class=" prettyprint lang-html linenums"><ol class="linenums"><li class="L0"><ol class="linenums"><li class="L0"><span class="sc_code"><span class="pln"><span class="pln">[pl_badge type="default"]</span></span></span><span class="pln"><span class="pln">Default</span></span><span class="sc_code"><span class="pln"><span class="pln">[/pl_badge]</span></span></span></li></ol></li></ol></pre></td>
			<td class="span3">Available attributes include default, success, warning, important, info, and inverse</td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-success">Success</span></td>
			<td><pre class=" prettyprint lang-html linenums"><ol class="linenums"><li class="L0"><ol class="linenums"><li class="L0"><span class="sc_code"><span class="pln"><span class="pln">[pl_badge type="success"]</span></span></span><span class="pln"><span class="pln">Success</span></span><span class="sc_code"><span class="pln"><span class="pln">[/pl_badge]</span></span></span></li></ol></li></ol></pre></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-warning">Warning</span></td>
			<td><pre class=" prettyprint lang-html linenums"><ol class="linenums"><li class="L0"><ol class="linenums"><li class="L0"><span class="sc_code"><span class="pln"><span class="pln">[pl_badge type="warning"]</span></span></span><span class="pln"><span class="pln">Warning</span></span><span class="sc_code"><span class="pln"><span class="pln">[/pl_badge]</span></span></span></li></ol></li></ol></pre></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-important">Important</span></td>
			<td><pre class=" prettyprint lang-html linenums"><ol class="linenums"><li class="L0"><ol class="linenums"><li class="L0"><span class="sc_code"><span class="pln"><span class="pln">[pl_badge type="important"]</span></span></span><span class="pln"><span class="pln">Important</span></span><span class="sc_code"><span class="pln"><span class="pln">[/pl_badge]</span></span></span></li></ol></li></ol></pre></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-info">Info</span></td>
			<td><pre class=" prettyprint lang-html linenums"><ol class="linenums"><li class="L0"><ol class="linenums"><li class="L0"><span class="sc_code"><span class="pln"><span class="pln">[pl_badge type="info"]</span></span></span><span class="pln"><span class="pln">Info</span></span><span class="sc_code"><span class="pln"><span class="pln">[/pl_badge]</span></span></span></li></ol></li></ol></pre></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-inverse">Inverse</span></td>
			<td><pre class=" prettyprint lang-html linenums"><ol class="linenums"><li class="L0"><ol class="linenums"><li class="L0"><span class="sc_code"><span class="pln"><span class="pln">[pl_badge type="inverse"]</span></span></span><span class="pln"><span class="pln">Inverse</span></span><span class="sc_code"><span class="pln"><span class="pln">[/pl_badge]</span></span></span></li></ol></li></ol></pre></td>
			<td></td>
		</tr>
	</tbody>
</table>