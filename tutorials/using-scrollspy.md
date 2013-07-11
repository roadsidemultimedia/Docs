## Using Scroll Spy ##

The Scroll Spy section adds an additional navigation bar that automatically updates nav targets based on scroll position. It also allows you to jump from one section of your page to another instantly.

The Scroll Spy section can not be configured using settings or options, as it has none. Instead the section is configured using HTML markup, which is added to the page by the user.

Scroll Spy utilises one class `.scroll-header` and one attribute `title=""`.

The `.scroll-header` class triggers the scrolling, the class can be added to any element, and is not restricted to headings. The attribute `title=""` is used as the actual label that sits inside the menu.

~~~ .html
<h4 class="scroll-header" title="Setup"></h4>
    <p>Your content here</p>
<h4 class="scroll-header" title="Usage"></h4>
    <p>Your content here</p>
~~~

You can also use the `.page-header` class that makes the heading and subheading look great.

~~~ .html
<div class="scroll-header page-header" title="Setup">
<h4>Scroll Spy Setup <small>add some magical unicorn classes and watch for spies</small></h4>
</div>
<p>Your content here</p>
<div class="page-header">
<h4>Advanced Usage </h4>
</div>
<p>Your content here</p>
~~~

## Example ##

Lets imagine you have created a page, which has different areas such as welcome message, company information, blog and contact details. Using Scroll Spy, you can allow your visitors to navigate to these different areas on your page.

Add the code on the right to your page and it will add navigation links called Welcome Message, Company Information, Blog and Contact Details.

~~~ .html
<h4 class="scroll-header" title="Welcome Message">Welcome Message</h4>
 <p>Your Homepage content here</p>
<h4 class="scroll-header" title="Company Information">Company Information</h4>
 <p>Your Blog Posts here</p>
<h4 class="scroll-header" title="Blog">Blog</h4>
 <p>About information here</p>
<h4 class="scroll-header" title="Contact Details">Contact Details</h4>
 <p>Contact form and information here</p>
~~~

As you can see from the code, the `title=""` attribute is used for the nav label.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/scrollspy.jpg)

So what we have done so far, is added the Scroll Spy section to our template, created a new page with this template assigned and added the example code above to our page. This has populated the Scroll Spy section with navigation links called Welcome Message, Company Information, Blog and Contact Details.

Once you have completed the above, your Page should now look similar to the example below.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/scrollspy-example.jpg)

All we need to do is add some content to each of these areas. In the example code above, you will notice that there is this `<p>Your page content here</p>`. This is the where you add your content, this could be text, images or both. You can also add Shortcodes or even use the PageLines Grid with text, images and shortcodes. 

This is where your creative side comes into play!
