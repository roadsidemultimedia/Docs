# Typography #

PageLines DMS typography is based on the powerful Bootstrap providing styling for tables, forms, buttons, and other standard interface elements.

## Headings ##

All HTML headings, `<h1>` through `<h6>` are available.

# h1. PageLines Framework #

## h2. PageLines Framework ##

### h3. PageLines Framework ###

#### h4. PageLines Framework ####

##### h5. PageLines Framework #####

###### H6. PAGELINES FRAMEWORK ######

## Body ##

PageLines Framework’s global default `font-size` is 14px, with a `line-height` of 1.55em. This is applied to the <body> and all paragraphs. In addition, `<p>` (paragraphs) receive a top/bottom margin of 1.55em.

<div class="docs-example">
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies dolor nec ante scelerisque consequat. Ut aliquet semper ipsum, a vehicula leo varius facilisis. Praesent lobortis consectetur venenatis.</p>
	<p></p>
	<p>Nullam pretium faucibus dui vel venenatis. Cras dapibus, dolor in suscipit lobortis, sapien eros tristique erat, ac eleifend augue quam posuere mauris. Donec dignissim diam eget tortor blandit ullamcorper. Maecenas sodales ornare nisi, in malesuada elit interdum eget.
	</p>
</div>
~~~ .html
<p>...</p>
~~~

## Lead body ##

Make a paragraph stand out by adding `.lead`.

<div class="docs-example">
	<p class="zmt lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices viverra vehicula. Etiam commodo metus in ipsum ultricies in sodales.</p>
</div>
~~~ .html
<p class="lead">...</p>
~~~

## Emphasis ##

Make use of HTML’s default emphasis tags to make your text standout.

Bold

For emphasizing a snippet of text with important

<div class="docs-example">
<p>
The following snippet of text is <strong>rendered as bold text</strong>.</p>
</div>
~~~ .html
<strong>rendered as bold text</strong>
~~~

## Italic ##

For emphasizing a snippet of text with stress

<div class="docs-example">
<p>
The following snippet of text is <em>rendered as italicized text.</em>
</p></div>
~~~ .html
<em>rendered as italicized text</em>
~~~

## Emphasis classes ##

Display meaning through color with a handful of emphasis utility classes.

<div class="docs-example">
<p class="muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
<p class="text-info">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.</p>
<p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
</div>
~~~ .html
<p class="muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-error">Donec ullamcorper nulla non metus auctor fringilla.</p>
<p class="text-info">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.</p>
<p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
~~~

## Lists ##

### Unordered ###

A list of items in which the order does not explicitly matter.

<div class="docs-example">
<ul>
<li>Nulla volutpat aliquam velit
<ul>
<li>Phasellus iaculis neque</li>
<li>Purus sodales ultricies</li>
<li>Vestibulum laoreet porttitor sem</li>
<li>Ac tristique libero volutpat at</li>
</ul>
</li>
<li>Faucibus porta lacus fringilla vel</li>
</ul>
</div>
~~~ .html
<ul>
  <li>...</li>
</ul>
~~~

### Ordered ###

A list of items in which the order does explicitly matter.

<div class="docs-example">
<ol>
<li>Lorem ipsum dolor sit amet</li>
<li>Consectetur adipiscing elit</li>
<li>Integer molestie lorem at massa</li>
<li>Facilisis in pretium nisl aliquet</li>
<li>Nulla volutpat aliquam velit</li>
<li>Faucibus porta lacus fringilla vel</li>
<li>Aenean sit amet erat nunc</li>
<li>Eget porttitor lorem</li>
</ol>
</div>
~~~ .html
<ol>
  <li>...</li>
</ol>
~~~

### Unstyled

A list of items with no `list-style` or additional left padding.

<div class="docs-example">
<ul class="unstyled">
<li>Nulla volutpat aliquam velit
<ul>
<li>Phasellus iaculis neque</li>
<li>Purus sodales ultricies</li>
<li>Vestibulum laoreet porttitor sem</li>
<li>Ac tristique libero volutpat at</li>
</ul>
</li>
<li>Faucibus porta lacus fringilla vel</li>
</ul>
</div>
~~~ .html
<ul class="unstyled">
  <li>...</li>
</ul>
~~~

## More Example ##

For more information and examples on typography, head over to [Bootstrap’s typography](http://twitter.github.io/bootstrap/base-css.html#typography) page.

