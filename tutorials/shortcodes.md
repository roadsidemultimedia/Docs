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
			<td><button type="button" class="btn btn-important">Important</button></td>
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