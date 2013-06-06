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

<div class="row-fluid">
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
[pl_buttondropdown size="large" type="info" label="button"]
<ul>
  <li><a href="#">This</a></li>
  <li><a href="#">This</a></li>
  <li><a href="#">This</a></li>
</ul>
[/pl_buttondropdown]
~~~

### Split Button Dropdown ###

<div class="row-fluid">
	<div class="span3">
		<div class="btn-group"><a class="btn btn-large btn-important">button</a><a class="btn btn-large btn-important dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
			<ul class="dropdown-menu">
				<li><a href="#">This</a></li>
				<li><a href="#">This</a></li>
				<li><a href="#">This</a></li>
			</ul>
		</div>
	</div>
	<div class="span3">
		<div class="btn-group"><a class="btn btn-large btn-primary">button</a><a class="btn btn-large btn-primary dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
			<ul class="dropdown-menu">
  				<li><a href="#">This</a></li>
  				<li><a href="#">This</a></li>
  				<li><a href="#">This</a></li>
			</ul>
		</div>
	</div>
	<div class="span3">
		<div class="btn-group"><a class="btn btn-large btn-success">button</a><a class="btn btn-large btn-success dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
			<ul class="dropdown-menu">
				<li><a href="#">This</a></li>
				<li><a href="#">This</a></li>
				<li><a href="#">This</a></li>
			</ul>
		</div>
	</div>
	<div class="span3">
		<div class="btn-group"><a class="btn btn-large btn-warning">button</a><a class="btn btn-large btn-warning dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
			<ul class="dropdown-menu">
				<li><a href="#">This</a></li>
				<li><a href="#">This</a></li>
  				<li><a href="#">This</a></li>
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
[pl_splitbuttondropdown size="large" type="success" label="button"]
<ul>
	<li><a href="#">This</a></li>
	<li><a href="#">This</a></li>
	<li><a href="#">This</a></li>
</ul>
[/pl_splitbuttondropdown]
~~~

### Button Groups ###

<div class="row-fluid">
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

**Note:** You can specify the same attrbutes as the buttons above, but placed into the markup instead of the shortcode.

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
			<td>`[pl_label type="default"]Default[/pl_label]`</td>
			<td class="span3">Available attributes include default, success, warning, important, info, and inverse</td>
		</tr>
		<tr>
			<td class="center"><span class="label label-success">Success</span></td>
			<td>`[pl_label type="success"]Success[/pl_label]`</td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="label label-warning">Warning</span></td>
			<td>`[pl_label type="warning"]Warning[/pl_label]`</td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="label label-important">Important</span></td>
			<td>`[pl_label type="important"]Important[/pl_label]`</td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="label label-info">Info</span></td>
			<td>`[pl_label type="info"]Info[/pl_label]`</td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="label label-inverse">Inverse</span></td>
			<td>`[pl_label type="inverse"]Inverse[/pl_label]`</td>
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
			<td>`[pl_badge type="default"]Default[/pl_badge]`</td>
			<td class="span3">Available attributes include default, success, warning, important, info, and inverse</td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-success">Success</span></td>
			<td>`[pl_badge type="success"]Success[/pl_badge]`</td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-warning">Warning</span></td>
			<td>`[pl_badge type="warning"]Warning[/pl_badge]`</td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-important">Important</span></td>
			<td>`[pl_badge type="important"]Important[/pl_badge]`</td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-info">Info</span></td>
			<td>`[pl_badge type="info"]Info[/pl_badge]`</td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-inverse">Inverse</span></td>
			<td>`[pl_badge type="inverse"]Inverse[/pl_badge]`</td>
			<td></td>
		</tr>
	</tbody>
</table>

## Modals ##

Modals are great for situations where it’s important that the background context be maintained.
The Modal contains a title, content, along with a set of actions in the footer and can be used with Buttons, Labels and Badges.

<!-- Button to trigger modal -->
<a href="#myModal" role="button" class="btn" data-toggle="modal">Launch demo modal</a>
 
<!-- Modal -->
<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
    <h3 id="myModalLabel">Modal header</h3>
  </div>
  <div class="modal-body">
    <p>One fine body…</p>
  </div>
  <div class="modal-footer">
    <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
    <button class="btn btn-primary">Save changes</button>
  </div>
</div>

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="span3 center"><code>title=""</code></td>
			<td>Serves as the title of the modal window</td>
		</tr>
		<tr>
			<td class="center"><code>type=""</code></td>
			<td>The type of element that triggers the modal. Available types include: btn, label, badge.</td>
		</tr>
		<tr>
			<td class="center"><code>colortype=""</code></td>
			<td>Available color types include: info, success, warning, important, and inverse.</td>
		</tr>
		<tr>
			<td class="center"><code>label=""</code></td>
			<td>Serves as the label for the element that opens the modal popup</td>
		</tr>
	</tbody>
</table>

~~~ .html
[pl_modal title="Title" type="btn" colortype="info" label="Click Me!"]
Some content here for the cool modal pop up. Labels, badges, and buttons can open them!
[/pl_modal]
~~~

