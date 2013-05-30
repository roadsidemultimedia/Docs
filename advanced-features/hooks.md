# Hooks #

Hooks in PageLines DMS essentially allow you to manipulate or insert code without editing core files. There are two types of hook, these are actions and filters.

**Action Hooks**

Action Hooks allow you to insert additional code and, there by, customise the code to do additional functions at designated points in PageLines Framework.

**Filter Hooks**

Filter Hooks are used to manipulate code output and return a variable. An example of this would be to add a text, a link or even an image to the end of the content on your blog posts or pages.

To put it more elegantly, you can change things that are hard-coded with filters, and you can add things using actions.

For more information on what hook actions and filters are, see WordPress documentation [Plugin API](http://codex.wordpress.org/Plugin_API). There is also an excellent article by WP Candy on hooks [here](http://wpcandy.com/teaches/how-to-use-wordpress-hooks/).

## Using Hooks ##

In order to use a hook to add or manipulate code, you need add it to the functions.php file.
This can be found in either the base child theme folder or the customize plugin, depending on the Customization Method of your choice.

| Customization Method                  | Hook Support                          |
|:--------------------------------------|:--------------------------------------|
|	DMS Standalone						|<i class="icon-remove text-error"></i>	|
|	Child theme 						|<i class="icon-ok text-success"></i>	|
|	Customize Plugin 					|<i class="icon-ok text-success"></i>	|

### Using Hooks ###

The below code is a starting point for your hook.

~~~ .php
add_action('action_name', 'your_function_name');
	function your_function_name() {
	// Add your code here...
}
~~~

### Using filter hooks ###

The below code is a starting point for your filter.

~~~ .php
add_filter('filter_name', 'your_function_name');
	function your_function_name( $variable ) {
	// Add your code here...
	return $variable;
}
~~~