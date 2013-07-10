# Shortcodes #

## Buttons ##

There are 7 different color schemes to choose from, as well 3 sizes; mini, default and large.

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
			<th>Button</th>
			<th>Description</th>
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
	<div class="span12">
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
	</div>
</div>

~~~ .html
[pl_buttondropdown size="large" type="info" label="button"]
	<ul>
  		<li><a href="#">This</a></li>
  		<li><a href="#">This</a></li>
  		<li><a href="#">This</a></li>
	</ul>
[/pl_buttondropdown]
~~~

<div class="row-fluid">
	<div class="span3">
		<div class="btn-group"><button class="btn btn-large btn-important dropdown-toggle" data-toggle="dropdown" href="#">button <span class="caret"></span></button>
			<ul class="dropdown-menu">
				<li><a href="#">This</a></li>
				<li><a href="#">This</a></li>
				<li><a href="#">This</a></li>
			</ul>
		</div>
	</div>
	<div class="span3">
		<div class="btn-group"><button class="btn btn-large btn-primary dropdown-toggle" data-toggle="dropdown" href	="#">button <span class="caret"></span></button>
				<ul class="dropdown-menu">
					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
				</ul>
			</div>
		</div>
		<div class="span3">
			<div class="btn-group"><button class="btn btn-large btn-success dropdown-toggle" data-toggle="dropdown" href="#">button <span class="caret"></span></button>
				<ul class="dropdown-menu">
					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
				</ul>
			</div>
		</div>
		<div class="span3">
			<div class="btn-group"><button class="btn btn-large btn-warning dropdown-toggle" data-toggle="dropdown" href="#">button <span class="caret"></span></button>
				<ul class="dropdown-menu">
					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
				</ul>
			</div>
		</div>
</div>

### Split Button Dropdown ###

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

### Button Groups ###

You can specify the same attrbutes as the buttons above, but placed into the markup instead of the shortcode.

~~~ .html
[pl_buttongroup]
	<a class="btn btn-important" href="#">Link</a>
	<a class="btn btn-important" href="#">Link</a>
	<a class="btn btn-important" href="#">Link</a>
[/pl_buttongroup]
~~~

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
			<td><code>[pl_label type="default"]Default[/pl_label]</code></td>
			<td class="span3">Available attributes include default, success, warning, important, info, and inverse</td>
		</tr>
		<tr>
			<td class="center"><span class="label label-success">Success</span></td>
			<td><code>[pl_label type="success"]Success[/pl_label]</code></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="label label-warning">Warning</span></td>
			<td><code>[pl_label type="warning"]Warning[/pl_label]</code></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="label label-important">Important</span></td>
			<td><code>[pl_label type="important"]Important[/pl_label]</code></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="label label-info">Info</span></td>
			<td><code>[pl_label type="info"]Info[/pl_label]</code></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="label label-inverse">Inverse</span></td>
			<td><code>[pl_label type="inverse"]Inverse[/pl_label]</code></td>
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
			<td><code>[pl_badge type="default"]Default[/pl_badge]</code></td>
			<td class="span3">Available attributes include default, success, warning, important, info, and inverse</td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-success">Success</span></td>
			<td><code>[pl_badge type="success"]Success[/pl_badge]</code></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-warning">Warning</span></td>
			<td><code>[pl_badge type="warning"]Warning[/pl_badge]</code></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-important">Important</span></td>
			<td><code>[pl_badge type="important"]Important[/pl_badge]</code></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-info">Info</span></td>
			<td><code>[pl_badge type="info"]Info[/pl_badge]</code></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-inverse">Inverse</span></td>
			<td><code>[pl_badge type="inverse"]Inverse[/pl_badge]</code></td>
			<td></td>
		</tr>
	</tbody>
</table>

## Modals ##

Modals are great for situations where it’s important that the background context be maintained.
The Modal contains a title, content, along with a set of actions in the footer and can be used with Buttons, Labels and Badges.

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

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/modal-example.jpg)

~~~ .html
[pl_modal title="Title" type="btn" colortype="info" label="Click Me!"]
Some content here for the cool modal pop up. Labels, badges, and buttons can open them!
[/pl_modal]
~~~

## Tooltips & Popovers ##

### Tooltips ###

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="span2 center"><code>tip=""</code></td>
			<td>This is what's displayed inside the tip.</td>
		</tr>
		<tr>
			<td class="span2 center"><code>position=""</code></td>
			<td>Specifies the location of the tooltip. top,left,bottom,and right</td>
		</tr>
	</tbody>
</table>

~~~ .html
This is a [pl_tooltip tip="Cool" position="right"]tooltip [/pl_tooltip] example.
~~~

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/tooltip-example.jpg)

### Popovers ###

Use Popover to provide subtextual information to a page without affecting layout.

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="span2 center"><code>position=""</code></td>
			<td>Specifies the location of the popover top, left, bottom and right</td>
		</tr>
		<tr>
			<td class="span2 center"><code>title=""</code></td>
			<td>Specifies the title of the popover.</td>
		</tr>
		<tr>
			<td class="center"><code>content=""</code></td>
			<td>Specifies the content inside of the popover.</td>
		</tr>
	</tbody>
</table>

~~~ .html
This is a [pl_popover title="Title" content="..." position="right"]popover[/pl_popover] example.
~~~

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/popover-example.jpg)

## Alerts ##

Wrap any text and an optional dismiss button for a basic alert message, which supports multiple color schemes.

<div class="row-fluid">
	<div class="span6">
		<div class="alert alert-warning alert-block">This is a Warning.</div>
	</div>
	<div class="span6">
		<div class="alert alert-success"><a class="close" data-dismiss="alert" href="#">×</a>This is a Success, using the <code>.closable="yes"</code> attribute.</div>
	</div>
</div>
<div class="row-fluid">
	<div class="span6 zmb">
		<div class="alert alert-info alert-block">This is useful Info.</div>
	</div>
	<div class="span6 zmb">
		<div class="alert alert-important"><a class="close" data-dismiss="alert" href="#">×</a>This is Important using the <code>.closable="yes"</code> attribute.</div>
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
			<td class="span2"><code>type=""</code></td>
			<td>Specifies the color. Available types include: info,</td>
		</tr>
		<tr>
			<td><code>closable="yes"</code></td>
			<td>Displays an "X" which makes alert disappear when clicked.</td>
		</tr>
	</tbody>
</table>

~~~ .html
[pl_alertbox type="info"]
This is an error.
[/pl_alertbox]
~~~

### Alert Headings ###

<div class="alert alert-important alert-block">
		<h2 class="alert-heading zmt zb">Alert Heading</h2>
		<p>This is Important.</p>
</div>

~~~ .html
[pl_alertbox type="info"]
	<h2 class="alert-heading">Alert Heading</h2>
	This is an error.
[/pl_alertbox]
~~~

## Quotes ##

<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>

~~~ .html
[pl_blockquote cite="Someone Famous"]
	This is a quote with a source
[/pl_blockquote]
~~~

### Pull Right ###

~~~ .html
[pl_blockquote pull="right" cite="Someone Famous"]
	This is a quote with a source
[/pl_blockquote]
~~~

<blockquote class="pull-right">
	<p>This is a quote. Below is the source if all goes well
		<small>Someone Famous</small>
	</p>
</blockquote>

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="span3 center"><code>pull=""</code></td>
			<td>Specifies blockquote position. Default is left, and the only other available attribute includes: right</td>
		</tr>
		<tr>
			<td class="center"><code>cite=""</code></td>
			<td>Serves as the source of the quote</td>
		</tr>
	</tbody>
</table>

## Tabs ##

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="span3 center"><code>type=""</code></td>
			<td>Specifies...</td>
		</tr>
		<tr>
			<td class="center"><code>pl_tabtitle active=""</code></td>
			<td>Specifies the active title tab</td>
		</tr>
		<tr>
			<td class="center"><code>pl_tabtitle number=""</code></td>
			<td>Specifies the position of the title tab</td>
		</tr>
		<tr>
			<td class="center"><code>pl_tabcontent active=""</code></td>
			<td>Specifies the active content tab</td>
		</tr>
		<tr>
			<td class="center"><code>pl_tabcontent number=""</code></td>
			<td>Specifies the position of the content tab</td>
		</tr>
	</tbody>
</table>

<div class="docs-example zmt">
<div class="tabs">		    		<script>
			    		jQuery(function(){
							 jQuery('a[data-toggle="tab"]').on('shown', function (e) {
							  e.target // activated tab
							  e.relatedTarget // previous tab
							})
						});
		    		</script><ul class="nav nav-tabs">
<li class="active"><a href="#1" data-toggle="tab">Title 1</a></li>
<li class=""><a href="#2" data-toggle="tab">Title 2</a></li>
</ul>

<div class="tab-content">
<div class="tab-pane active" id="1"><p></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
<p></p></div>
<div class="tab-pane" id="2"><p></p><p><img class="pl-imageframe tac colorbox-1607" alt="" src="http://netdna.pagelines.me/wp-content/themes/pagelines/sections/features/images/feature3.jpg" data-lazy-loaded="true" style="display: inline;"></p>
<p></p></div>
</div>
</div>
</div>

## Accordion ##

<div class="accordion" id="accordion2">
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
        Collapsible Group Item #1
      </a>
    </div>
    <div id="collapseOne" class="accordion-body collapse in">
      <div class="accordion-inner">
        Anim pariatur cliche...
      </div>
    </div>
  </div>
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
        Collapsible Group Item #2
      </a>
    </div>
    <div id="collapseTwo" class="accordion-body collapse">
      <div class="accordion-inner">
        Anim pariatur cliche...
      </div>
    </div>
  </div>
</div>