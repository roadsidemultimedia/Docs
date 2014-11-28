# DMS Option Engine #

## About the Option Engine ##

DMS offers a very straight forward way to create options for extensions, the option engine. 

The option engine consists of a php array format that the system uses to parse and handle the options in a variety of ways. This allows us to abstract the complexities of option handling and give you a simple consistent code interface for adding your options. 

## Adding Options To Sections ##

Adding options to sections is as simple as returning the option array from the 'section_opts()' method/function of the section class. 

An example of that is as follows: 
```php

// Standard Section Class Definition
class SomeSection extends PageLinesSection {

	// Section Options Method
	function section_opts(){
		$opts = array(
			array(
				'type' 			=> 'select',
				'title' 		=> 'Select Format',
				'key'			=> 'icallout_format',
				'label' 		=> 'Callout Format',
				'place'                 => 'placeholder text in field',
				'help'                  => 'Text that displays below the field',
				'opts'=> array(
					'top'			=> array( 'name' => 'Text on top of button' ),
					'inline'	 	=> array( 'name' => 'Text/Button Inline' )
				),
			)
		); 
		
		return $opts;
	}

}
```

More info on this can be found in documentation on creating sections.

## Adding Options To Themes ##
There are several ways to add options to themes. First themes rely on 'child section' and in these sections you'll have options. For 

## Basic Option Attributes ##

The basic option format for simple option types like text fields is as follows. Different option types will have additional parameters you can set depending on your preference.

```php
$opts = array(); 

// Select Type Option Format
$opts[] = array(
			'key'			=> 'option_key', // (used to get the value of the option (e.g. $this->opt('some_key')))
			'type' 			=> 'text', // Option Type 
			'title' 		=> __('Super Cool Option', 'pagelines'), 	// (localized, & same as 'label' if omitted)
			'label' 		=> __('Select Cool Option', 'pagelines'), // (localized)
			'help' 			=> __('Help text goes here. How nice of you!', 'pagelines'), // (localized)
			'place' 			=> __('Placeholder text', 'pagelines'), // (localized)
			'ref'			=> __( 'This creates a help field with a toggle.', 'pagelines' )
		);
	
```

## Getting and Using Option Values ##

Getting and using option values in your sections and themes is EASY! Just use the following functions.. 

```php

// INSIDE SECTIONS
// Getting option values inside of sections
$value = $this->opt('option_key'); 

// note: the opt method keeps track of section ID and page scope

// For GLOBAL SETTINGS (Sitewide)
// For getting option values in the global settings
$value = pl_setting('option_key'); 

// note: This option only works with settings in the global scope.
	
```

# Option Types #


## NOTE: ##
For all option types below, basic option attributes are supported but not shown.

## "Multi" Option Type  ##

Its common and possible to want to nest a bunch of different options together. To do that, simply use the 'multi' option type.
```php
$opts[] = array(
			'key'			=> 'some_key',
			'type' 			=> 'multi', 
			
			'opts'=> array(
				array(
					//...option 1 attributes
				), 
				array(
					//...option 2 attributes
				)
			),
		);
	
```


## Basic Select Option Format ##

Selection option types have to create an array of options for users. 
Therefore, they make use of an 'opts' array with an index for each individual option.

```php
$opts[] = array(
			'key'			=> 'some_key',
			'type' 			=> 'select', 
			
			'opts'=> array(
				'val1'			=> array( 'name' => 'Select Option Name' ),
				'val2'	 		=> array( 'name' => 'Select Option Name' )
			),
		);
	
```

### Count Select Option Format ###
This option type can be used to create an iterated number of options. This makes it so you dont have to enter these numbers manually. 
```php
$opts[] = array(
			'key'			=> 'some_key',
			'type' 			=> 'count_select', 
			'count_start'	=> 1,				// Starting Count Number
			'count_number'	=> 100,				// Ending Count Number
			'suffix'		=> '%'			// Added to the end of the value
		);
	
```

### Image Upload Options ###
Image upload options are easy! Just use the following attributes... 
```php
$opts[] = array(
			'key'			=> 'some_key',
			'type' 			=> 'image_upload',
			'imgsize' 		=> '16',		// The image preview 'max' size
			'sizelimit'		=> '512000'		// Image upload max size default 512kb
		);
	
```

### Color Picker Options ###
Color pickers are super simple. Just use the 'color' type... 
```php
$opts[] = array(
			'key'			=> 'some_key',
			'type' 			=> 'color', 
		);
	
```

### Text, Textareas and Checkboxes Options ###
For text, checkboxes, and textarea options just use the 'text', 'check' or 'textarea' type respectively
```php
$opts[] = array(
			'key'			=> 'some_key',
			'type' 			=> 'text',  // or "textarea" or "check"
		);
	
```

### Select Menu Option ###
To create an option that allows users to select a WordPress menu, use the 'select_menu' option. 
This will return the ID of the selected menu as the value.
```php
$opts[] = array(
			'key'			=> 'some_key',
			'type' 			=> 'select_menu', 
		);
	
```

### Select Taxonomy ###
To create an option that allows users to select a taxonomy (i.e. category) for a specific post type, just use these attributes:
```php
$opts[] = array(
			'key'			=> 'some_key',
			'type' 			=> 'select_taxonomy',
			'post_type' 	=> 'post' // the post type to grab taxonomies from
		);
	
```

### Type/Font Selector ###
The 'type' option type will create a font selector for you.
```php
$opts[] = array(
			'key'			=> 'some_key',
			'type' 			=> 'type',
		);
	
```


### Icon Select ###
Since PageLines comes with a robust icon font, we've created a canned icon selector option type for you: "select_icon".
```php
$opts[] = array(
			'key'			=> 'some_key',
			'type' 			=> 'select_icon',
		);
	
```

### Link Button ###
If you want to just create a simple button with a link use the 'link' option type.
```php
$opts[] = array(
			'key'			=> 'some_key',
			'type' 			=> 'link',
			'url'			=> 'http://www.pagelines.com',
			'classes'		=> 'button classes'
		);
	
```

### Multiple Select Option ###
If you want an option that allows users to select multiple values, this is the one you want. The type is 'select_multi' and it returns an *array* of the values that the user has chosen. Handy!
```php
$opts[] = array(
			'key'			=> 'some_key',
			'type' 			=> 'select_multi', 
			'opts'=> array(
				'val1'			=> array( 'name' => 'Select Option Name' ),
				'val2'	 		=> array( 'name' => 'Select Option Name' )
			),
		);
	
// this will return an array of values	

```

### Button Color Select Option ###
The easiest way to give users button color options is to use the 'select_button' option. This returns the bootstrap class for the various button colors.
```php
$opts[] = array(
			'key'			=> 'some_key',
			'type' 			=> 'select_button', 
		);
	
// to use in html
$class = $this->opt('some_key');
// <a class="btn <?php echo $class;?>">Button Text</a>
```


### Use a Custom Option Template ###
It's possible to have an option that is simply a template you've created in your extension. To do that simply set the 'template' option type and the 'template' option attribute. 
```php

$my_template = "<div>some HTML</div>";

$opts[] = array(
			'key'			=> 'some_key',
			'type' 			=> 'template',
			'template'		=> $my_template
		);
	
```

#### Adding custom inputs ####

To add a custom option input to your template option, you simply have to set your input up with certain attributes. 

To create an input that saves on blur/change add the 'lstn' class. The name must be 'settings[whatever]' and the value must be the pl_setting with the key. See below.

```php
<input type="text" class="lstn" name="settings[my_option_key]" value="<?php echo pl_setting('my_option_key');?>"/> 	
```

This could then be accessible sitewide with 
```php
$my_option = pl_setting('my_option_key');
```

For selects and checkboxes, you'll need to check the value then set the 'selected' or 'checked' attributes accordingly.




