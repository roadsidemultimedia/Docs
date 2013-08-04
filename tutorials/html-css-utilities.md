<div class="row-fluid">
      <div class="span12">
            <ul class="breadcrumb">
                  <li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
                  <li><a href="http://docs.pagelines.com/tutorials">Tutorials</a> <span class="divider">/</span></li>
                  <li class="active">HTML/CSS Utilities</li>
            </ul>
      </div>
</div>

# HTML/CSS Utilities #

The purpose of this tutorial is to show you cool HTML and CSS snippets built into PageLines DMS, which will enhance and extend your creations.

## HTML ##

With minimal markup you can instantly have a styled page heading you’ll be so proud of, you just might invite her to meet your parents.

~~~ .html
<div class="page-header">
      <h1>Utilities <small>CSS classes and HTML snips to enhance and extend your creations</small></h1>
</div>
~~~

<div class="docs-example">
	<div class="page-header">
		<h1>Utilities <small>CSS classes and HTML snips to enhance and extend your creations</small></h1>
	</div>
</div>

You can also specify a class of `.page-header-minor`, which will return a page heading with a reduced `margin-top`.

## CSS ##

These pre-designed special CSS classes can be added to nearly any element to help aid in customizing.

### Remove border ####

Adding this unique class `zb` to your element will specify a zero border, `zb` is an acronym of zero border.

<table class="table mid table-bordered table-striped">
      <tbody>
            <tr>
                  <td class="span2 center"><code>.zb</code></td>
                  <td>Specifies zero margin on top of any element</td>
            </tr>
      </tbody>
</table>

~~~ .html
<h1 class="zb">This is a h1 Header, without a border, if it had one!</h1>
<h2 class="zb">This is a h2 Header, without a border, if it had one!</h1>
~~~

### Removing top and bottom margins ###

Adding these unique classes `.zmt` and `.zmb` to your elements will specify a zero margin, `.zmt` and `zmb` are acronyms of zero margin top and zero margin bottom.

<table class="table mid table-bordered table-striped">
      <thead>
            <tr>
                  <td class="span2 center"><code>.zmt</code></td>
                  <td>Specifies zero margin on top of any element</td>
            </tr>
      </thead>
      <tbody>
            <tr>
                  <td class="center"><code>.zmb</code></td>
                  <td>Specifies zero margin on bottom of any element</td>
            </tr>
      </tbody>
</table>

~~~ .html
<h1 class="zmt zmb">This is a h1 Header, without top & bottom margin!</h1>
<h2 class="zmt zmb">This is a h2 Header, without top & bottom margin!</h1>
~~~

<div class="docs-example">
      <h1 class="zmt zmb zb">This is a h1 Header, without top & bottom margin!</h1>
      <h2 class="zmt zmb zb">This is a h2 Header, without top & bottom margin!</h1>
</div>

As you can see in the example above, applying the `zmt` & `zmb` to both headers, has resulted with them both having zero applied to `margin-top` and `margin-bottom`.

### Centering Elements ###

Adding these unique classes `.center` and `.tac` to your elements will align to the center.

<table class="table mid table-bordered table-striped">
      <thead>
            <tr>
                  <td class="center"><code>.center</code></td>
                  <td>Aligns elements to center</td>
            </tr>
      </thead>
      <tbody>
            <tr>
                  <td class="center"><code>.tac</code></td>
                  <td>Aligns elements to center and uses <code>!important</code> declaration</td>
            </tr>
      </tbody>
</table>

~~~ .html
<h1 class="center zmt zmb">This h1, is is aligned to the center</h1>
<h2 class="tac zmt zmb">This h2, is is aligned to the center</h1>
~~~

<div class="docs-example center">
      <h1 class="center zmt zmb">This h1, is aligned to the center</h1>
      <h2 class="tac zmt zmb">This h2, is is aligned to the center</h2>
</div>

As you can see in the example above, applying the `.center` and `.tac` to the headers, aligns them centrally. The headers are also using the `zmt` & `zmb` to demonstrate that you can mix and match the CSS utilities in your code.

### Cool Image classes ###

Adding these unique classes `.pl-imageframe`, `.img-rounded`, `.img-circle` and `.img-polaroid` to your image(s) will produce some cool effects.

~~~ .html
<img class="pl-imageframe" src="">
~~~

The example code above, is using the `.pl-imageframe` class, simply replace `class="pl-imageframe"` with any of the classes to get your desired effect.

<table class="table mid table-bordered table-striped">
      <thead>
            <tr>
                  <td class="center"><code>.pl-imageframe</code></td>
                  <td>Add to img element, produces pretty frame</td>
            </tr>
      </thead>
      <tbody>
            <tr>
                  <td class="center"><code>.img-rounded</code></td>
                  <td>Add to img element, produces curved corners</td>
            </tr>
            <tr>
                  <td class="center"><code>.img-circle</code></td>
                  <td>Add to img element, produces circle image</td>
            </tr>
            <tr>
                  <td class="center"><code>.img-polaroid</code></td>
                  <td>Add to img element, produces framed image</td>
            </tr>
      </tbody>
</table>

<div class="row-fluid">
      <div class="span3">
            <h5>PL Image Frame</h5>
            <div class="docs-example">
                  <img class="pl-imageframe colorbox-1845" src="http://netdna.pagelines.me/wp-content/blogs.dir/686/files/2012/10/pagelines.jpg?v=1371676907">
            </div>
      </div>
      <div class="span3">
            <h5>Image Rounded</h5>
            <div class="docs-example">
            <img class="img-rounded colorbox-1845" src="http://netdna.pagelines.me/wp-content/blogs.dir/686/files/2012/10/pagelines.jpg?v=1371676907">
            </div>
      </div>
      <div class="span3">
            <h5>Image Circle</h5>
            <div class="docs-example">
            <img class="img-circle colorbox-1845" src="http://netdna.pagelines.me/wp-content/blogs.dir/686/files/2012/10/pagelines.jpg?v=1371676907">
            </div>
      </div>
      <div class="span3">
            <h5>Image Polaroid</h5>
            <div class="docs-example">
            <img class="img-polaroid colorbox-1845" src="http://netdna.pagelines.me/wp-content/blogs.dir/686/files/2012/10/pagelines.jpg?v=1371676907">
            </div>
      </div>
</div>

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/tutorials/typography">&larr; Typography</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/tutorials/adding-custom-menus">Adding Custom Menus &rarr;</a></li>
		</ul>
	</div>
</div>





