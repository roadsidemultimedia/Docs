# Responsive Grid #

PageLines DMS encompasses a completely responsive grid system based on [Bootstrap](http://twitter.github.io/bootstrap/) that contains 12 columns, or "spans". The grid can be used virtually anywhere. Mark it up in a post, in a page, or wherever you need structured, responsive content.

The responsive grid system uses percents instead of pixels for column widths, ensuring proper proportions for key screen resolutions and devices.

<div class="docs-grid">
    <div class="row-fluid show-grid">
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
    </div>
    <div class="row-fluid show-grid">
		<div class="span2">2</div>
		<div class="span2">2</div>
		<div class="span2">2</div>
		<div class="span2">2</div>
		<div class="span2">2</div>
		<div class="span2">2</div>
	</div>
	<div class="row-fluid show-grid">
		<div class="span3">3</div>
		<div class="span3">3</div>
		<div class="span3">3</div>
		<div class="span3">3</div>
	</div>
    <div class="row-fluid show-grid">
        <div class="span4">4</div>
        <div class="span4">4</div>
        <div class="span4">4</div>
    </div>
    <div class="row-fluid show-grid">
		<div class="span5">5</div>
		<div class="span2">2</div>
		<div class="span5">5</div>
	</div>
	<div class="row-fluid show-grid">
		<div class="span6">6</div>
		<div class="span6">6</div>
	</div>
	<div class="row-fluid show-grid">
		<div class="span7">7</div>
		<div class="span5">5</div>
	</div>
    <div class="row-fluid show-grid">
    	<div class="span8">8</div>
    	<div class="span4">4</div>
    </div>
    <div class="row-fluid show-grid">
		<div class="span9">9</div>
		<div class="span3">3</div>
	</div>
	<div class="row-fluid show-grid">
		<div class="span10">10</div>
		<div class="span2">2</div>
	</div>
    <div class="row-fluid show-grid">
        <div class="span11">11</div>
        <div class="span1">1</div>
    </div>
    <div class="row-fluid show-grid">
        <div class="span12">12</div>
    </div>
</div>

## How to use ##

### Basic ###

~~~ .html
<div class="row">
	<div class="span4">4</div>
	<div class="span8">8</div>
</div>
~~~

<div class="row-fluid show-grid">
	<div class="span4">4</div>
	<div class="span8">8</div>
</div>

### Offset ###

~~~ .html
<div class="row-fluid show-grid">
	<div class="span6">6</div>
	<div class="span6 offset6">6 Offset 6</div>
</div>
~~~

<div class="row-fluid show-grid">
	<div class="span6">6</div>
	<div class="span6 offset6">6 Offset 6</div>
</div>

### Nested ###

~~~ .html
<div class="row-fluid">
	<div class="span4">4</div>
	<div class="span8">8
		<div class="row-fluid">
			<div class="span6 zmb" style="background: #CCC">6</div>
			<div class="span6 zmb" style="background: #CCC">6</div>
		</div>
	</div>
</div>
~~~

<div class="row-fluid show-grid">
	<div class="span4">4</div>
	<div class="span8">8
		<div class="row-fluid">
			<div class="span6 zmb">6</div>
			<div class="span6 zmb">6</div>
		</div>
	</div>
</div>

<p class="zmt zmb"><small><span class="label label-info" style="margin-right: 5px;">Note:</span> <code>.zmb</code> is a special PageLines utility class that you can use to specify a zero margin on top<code>.zmt</code> , or on bottom <code>.zmb</code> of any element giving you full control. Read more about these utility classes below.</small></p>

## Layout Examples ##

### Newspaper Columns ###

<div class="row-fluid">
	<div class="span4">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet aliquam lectus. Nulla sagittis sed dolor ut ultrices. Nunc quam mauris, consequat at mauris cursus, hendrerit laoreet turpis. Phasellus a mauris euismod, aliquet sem sit amet, facilisis orci. Sed a augue rhoncus, elementum orci sed, laoreet elit. Vivamus venenatis sem eget risus consectetur lobortis consectetur et odio. Integer quis tincidunt enim. Duis ut erat nec mauris rhoncus tincidunt sed nec arcu. Sed malesuada ante eget lacus sollicitudin, quis tempus nisi feugiat. Mauris at felis nunc. Sed sit amet lorem eu elit gravida tempus.</p>
	</div>
	<div class="span4">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet aliquam lectus. Nulla sagittis sed dolor ut ultrices. Nunc quam mauris, consequat at mauris cursus, hendrerit laoreet turpis. Phasellus a mauris euismod, aliquet sem sit amet, facilisis orci. Sed a augue rhoncus, elementum orci sed, laoreet elit. Vivamus venenatis sem eget risus consectetur lobortis consectetur et odio. Integer quis tincidunt enim. Duis ut erat nec mauris rhoncus tincidunt sed nec arcu. Sed malesuada ante eget lacus sollicitudin, quis tempus nisi feugiat. Mauris at felis nunc. Sed sit amet lorem eu elit gravida tempus.</p>
	</div>
	<div class="span4">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet aliquam lectus. Nulla sagittis sed dolor ut ultrices. Nunc quam mauris, consequat at mauris cursus, hendrerit laoreet turpis. Phasellus a mauris euismod, aliquet sem sit amet, facilisis orci. Sed a augue rhoncus, elementum orci sed, laoreet elit. Vivamus venenatis sem eget risus consectetur lobortis consectetur et odio. Integer quis tincidunt enim. Duis ut erat nec mauris rhoncus tincidunt sed nec arcu. Sed malesuada ante eget lacus sollicitudin, quis tempus nisi feugiat. Mauris at felis nunc. Sed sit amet lorem eu elit gravida tempus.</p>
	</div>
</div>

~~~ .html
<div class="row-fluid">
	<div class="span4">...</div>
	<div class="span4">...</div>
	<div class="span4">...</div>
</div>
~~~

