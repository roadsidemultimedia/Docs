# Overriding Default CSS #

When adding custom CSS to your website, depending on your customization method your custom CSS/LESS may require using an ID to preface your rules.

There are two main ID’s that you can use to guarantee your custom rules will work correctly. These overrides are `#site` & `#page`

The reason that you’re required to do this, is because of the way heirarchy works in CSS and especially in LESS. We are using a new convention, specifically that inside the core and extensions we do not use ID based selectors… e.g. `#page`

These are reserved for **user** customizations, because a single ID in a CSS selector can over power a long chain of class based selectors.

## Examples ##

The examples below demonstrate that the code which is using the ID #page, has higher precedence than the code which is using a chain of classes:

** ID **
~~~ .css
#page .postpins {
	background-color: #FFF;
}
~~~

~~~ .css
.selector .another-selector .postpins {
	background-color: #FFF;
}
~~~




